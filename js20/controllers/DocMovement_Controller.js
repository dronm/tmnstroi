/**
 * @author Andrey Mikhalevich <katrenplus@mail.ru>, 2017
 
 * THIS FILE IS GENERATED FROM TEMPLATE build/templates/controllers/Controller_js20.xsl
 * ALL DIRECT MODIFICATIONS WILL BE LOST WITH THE NEXT BUILD PROCESS!!!
 
 * @class
 * @classdesc controller
 
 * @extends ControllerObjServer
  
 * @requires core/extend.js
 * @requires core/ControllerObjServer.js
  
 * @param {Object} options
 * @param {Model} options.listModelClass
 * @param {Model} options.objModelClass
 */ 

function DocMovement_Controller(options){
	options = options || {};
	options.listModelClass = DocMovementList_Model;
	options.objModelClass = DocMovementDialog_Model;
	DocMovement_Controller.superclass.constructor.call(this,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(DocMovement_Controller,ControllerObjServer);

			DocMovement_Controller.prototype.addInsert = function(){
	DocMovement_Controller.superclass.addInsert.call(this);
	
	var pm = this.getInsert();
	
	var options = {};
	options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldDateTimeTZ("date_time",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldInt("user_id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldInt("oktmo_id",options);
	
	pm.addField(field);
	
	var options = {};
	options.required = true;
	var field = new FieldInt("oktmo_contract_id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldInt("to_oktmo_id",options);
	
	pm.addField(field);
	
	var options = {};
	options.required = true;
	var field = new FieldInt("to_oktmo_contract_id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldBool("closed",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldJSONB("closed_inf",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldJSONB("materials",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldText("materials_search",options);
	
	pm.addField(field);
	
	pm.addField(new FieldInt("ret_id",{}));
	
	
}

			DocMovement_Controller.prototype.addUpdate = function(){
	DocMovement_Controller.superclass.addUpdate.call(this);
	var pm = this.getUpdate();
	
	var options = {};
	options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	field = new FieldInt("old_id",{});
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldDateTimeTZ("date_time",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldInt("user_id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldInt("oktmo_id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldInt("oktmo_contract_id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldInt("to_oktmo_id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldInt("to_oktmo_contract_id",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldBool("closed",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldJSONB("closed_inf",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldJSONB("materials",options);
	
	pm.addField(field);
	
	var options = {};
	
	var field = new FieldText("materials_search",options);
	
	pm.addField(field);
	
	
}

			DocMovement_Controller.prototype.addDelete = function(){
	DocMovement_Controller.superclass.addDelete.call(this);
	var pm = this.getDelete();
	var options = {"required":true};
		
	pm.addField(new FieldInt("id",options));
}

			DocMovement_Controller.prototype.addGetList = function(){
	DocMovement_Controller.superclass.addGetList.call(this);
	
	
	
	var pm = this.getGetList();
	
	pm.addField(new FieldInt(this.PARAM_COUNT));
	pm.addField(new FieldInt(this.PARAM_FROM));
	pm.addField(new FieldString(this.PARAM_COND_FIELDS));
	pm.addField(new FieldString(this.PARAM_COND_SGNS));
	pm.addField(new FieldString(this.PARAM_COND_VALS));
	pm.addField(new FieldString(this.PARAM_COND_ICASE));
	pm.addField(new FieldString(this.PARAM_ORD_FIELDS));
	pm.addField(new FieldString(this.PARAM_ORD_DIRECTS));
	pm.addField(new FieldString(this.PARAM_FIELD_SEP));

	var f_opts = {};
	
	pm.addField(new FieldInt("id",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldDateTimeTZ("date_time",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldInt("user_id",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldJSON("users_ref",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldInt("oktmo_id",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldJSON("oktmo_ref",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldInt("to_oktmo_id",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldJSON("to_oktmo_ref",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldJSON("oktmo_contracts_ref",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldInt("oktmo_contract_id",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldJSON("to_oktmo_contracts_ref",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldInt("to_oktmo_contract_id",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldBool("closed",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldJSONB("closed_inf",f_opts));
	var f_opts = {};
	
	pm.addField(new FieldText("materials_search",f_opts));
	pm.getField(this.PARAM_ORD_FIELDS).setValue("date_time");
	
}

			DocMovement_Controller.prototype.addGetObject = function(){
	DocMovement_Controller.superclass.addGetObject.call(this);
	
	var pm = this.getGetObject();
	var f_opts = {};
		
	pm.addField(new FieldInt("id",f_opts));
	
	pm.addField(new FieldString("mode"));
}

		