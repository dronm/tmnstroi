-- Function: rg_orders_set_custom_period(timestamp without time zone)

-- DROP FUNCTION rg_orders_set_custom_period(timestamp without time zone);

CREATE OR REPLACE FUNCTION rg_orders_set_custom_period(in_new_period timestamp without time zone)
  RETURNS void AS
$BODY$
DECLARE
	NEW_PERIOD timestamp without time zone;
	v_prev_current_period timestamp without time zone;
	v_current_period timestamp without time zone;
	CURRENT_PERIOD timestamp without time zone;
	TA_PERIOD timestamp without time zone;
	REG_INTERVAL interval;
BEGIN
	NEW_PERIOD = rg_calc_period_start('order'::reg_types, in_new_period);
	CURRENT_PERIOD = rg_calc_period('order'::reg_types);
	
	TA_PERIOD = rg_current_balance_time();
	
	--iterate through all periods between CURRENT_PERIOD and NEW_PERIOD
	REG_INTERVAL = rg_calc_interval('order'::reg_types);
	v_prev_current_period = CURRENT_PERIOD;		
	LOOP
		v_current_period = v_prev_current_period + REG_INTERVAL;
		IF v_current_period > NEW_PERIOD THEN
			EXIT;  -- exit loop
		END IF;
		--clear period
		DELETE FROM rg_orders
		WHERE date_time = v_current_period;
		--new data
		INSERT INTO rg_orders
		(date_time
		,material_id
		,quant
		)
		(SELECT
				v_current_period
				,rg.material_id
				,rg.quant
			FROM rg_orders As rg
			WHERE (
			rg.quant<>0
			)
			AND (rg.date_time=v_prev_current_period)
		);
		v_prev_current_period = v_current_period;
	END LOOP;
	--new TA data
	DELETE FROM rg_orders
	WHERE date_time=TA_PERIOD;
	INSERT INTO rg_orders
	(date_time
	,material_id
	,quant
	)
	(SELECT
		TA_PERIOD
		,rg.material_id
		,rg.quant
		FROM rg_orders AS rg
		WHERE (
		rg.quant<>0
		)
		AND (rg.date_time=NEW_PERIOD-REG_INTERVAL)
	);
	DELETE FROM rg_orders WHERE (date_time>NEW_PERIOD)
	AND (date_time<>TA_PERIOD);
	--set new period
	UPDATE rg_calc_periods SET date_time = NEW_PERIOD
	WHERE reg_type='order'::reg_types;		
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION rg_orders_set_custom_period(timestamp without time zone)
  OWNER TO ;

