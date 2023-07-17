export enum ProjectError {
	MISSED_BODY = 'Missed body',
	MISSED_QUERY = 'Missed query',
	WRONG_INPUT_DATA = 'Wrong input data. Please check documentation about needed params or body',
	NO_FILE_UPLOADED = 'There is no file in the request, please check documentation adbout how to add file to request',
	WRONG_PASSWORD = 'Wrong password',
	USER_IS_NOT_EXISTS = 'User is not exists',
	USER_EXISTS = 'User exists',
	USER_IS_NOT_SAVED = 'User is not saved',
	USER_IS_NOT_AUTHENTICATED = 'User is not authenticated, please provide token or review it again. Check the documentation for understanding how to get and use your token',
}
