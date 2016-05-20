DROP TABLE IF EXISTS directorycomment;
DROP TABLE IF EXISTS threadcomment;
DROP TABLE IF EXISTS categoryhasthread;
DROP TABLE IF EXISTS category CASCADE;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS thread;
DROP TABLE IF EXISTS friends;
DROP TABLE IF EXISTS UserPermitsFile;
DROP TABLE IF EXISTS UserPermitsDirectory;
DROP TABLE IF EXISTS UserPermissionsOnFile;
DROP TABLE IF EXISTS directory;
DROP TABLE IF EXISTS file CASCADE;
DROP TABLE IF EXISTS User_account CASCADE;
DROP TABLE IF EXISTS UserAccount CASCADE;
DROP TABLE IF EXISTS FileComment;
DROP TABLE IF EXISTS UserSessions;
DROP DOMAIN IF EXISTS username CASCADE;
DROP DOMAIN IF EXISTS title CASCADE;
DROP DOMAIN IF EXISTS fullpath CASCADE;
DROP TYPE IF EXISTS permissionlevel CASCADE;
DROP TYPE IF EXISTS userlevel CASCADE;
