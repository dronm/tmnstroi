-- SUPERUSER CODE
CREATE USER tmnstroi WITH PASSWORD '159753';
CREATE DATABASE tmnstroi OWNER tmnstroi;
GRANT ALL PRIVILEGES ON DATABASE tmnstroi TO tmnstroi;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO tmnstroi;
