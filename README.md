# Device Management System

## Installation Steps
[x] Find **dms.sql** file inside **schema_dumps** folder.
[x] Import dms.sql file in db
[x] Install Npm packages using `npm install` command.
[x] Run Application via `node app.js` command


## Working Cases
[x] User Login 
[x] User Registration
[x] User Revoke (Logout)

## API's Routes

### Auth Routes (Working)
* POST /api/auth/signin
**Test Payload**: (PostMan Url: http://localhost:3000/api/auth/signin ) 
```
{
	"username": "johndoe",
	"password": "Password@12356"
}
```

* POST /api/auth/register
**Test Payload**: (PostMan Url: http://localhost:3000/api/user/devices/1 ) 
```
{
	"username": "johndoe",
	"password": "Password@12356"
}
```

* POST /api/auth/revoke
**Test Payload**: (PostMan Url: http://localhost:3000/api/auth/revoke ) 

### User Routes
* GET /api/user/devices/:userId
**Test Payload**: (PostMan Url: http://localhost:3000/api/user/devices/1 ) 

* GET /api/user/release/:userId
* GET /api/user/reserve/:userId

### Admin Routes
* GET /api/admin/device (return devices list)
* GET /api/admin/device/:deviceId
* POST /api/admin/device/:deviceId
* PUT /api/admin/device/:deviceId 
* DELETE /api/admin/device/:deviceId
