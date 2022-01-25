# API Spec
## Running the API
To run the the API in a local development environment, go into the directory, create a .env file with the fields JWT_SECRET and MONGODB_URL set to valid values, and do `npm i` and run `npm start` and the API URL will be logged to the console. Also, the API log will be printed to the console.
## Public Routes
### Login User
- `POST /api/user/login`
Returns a login token if the `username` and `password` fields are valid.
Use the following JSON object request format for the request body.
```json
{
  "username": "john@doe.com",
  "password": "password"	
}
```
 Returns with code 200 and a JSON object with the following format if successful.
```json
{
    "token": "........"
}
```

### Sign up User
- `POST /api/user`
Creates a new account and returns a login token if the `username` and `password` fields are valid.
Use the following JSON object request format for the request body.
```json
{
  "username": "john@doe.com",
  "password": "password"	
}
```
Returns with code 201 and a JSON object with the following format if successful.
```json
{
    "token": "........"
}
```
Returns with code 409 and an error message if a user with the specified username already exists.

## Authorization 
To authenticate a request for a private route, provide a valid login token in the `Authorization` header with the following format
```
Authorization: Bearer .........
```
Don't forget to include the space!

## Private Routes
### Get application
 - `GET /api/application`
Returns the application JSON object for the authorized user and creates an empty application if there is not currently any application for that user.
Responds with code 200 and a JSON object with the following format if successful.
```json
{
    "application": {
        "_id": "...",
        "username": "johndoe@example.com",
        ... 
    }
}
```
Note that the format of the application JSON object is up to the API consumer, except for the `username` field, which is auto filled.

### Save application
 - `POST /api/application`
Saves the request specified application JSON object.
Use the following JSON object request format for the request body.
```json
{
	"application": {}
}
```
Returns with code 201 and a JSON object with the following format if successful.
```json
{
    "application": {
        "_id": "...",
        "username": "johndoe@example.com",
        ... 
    }
}
```
Note that the format of the application JSON object is up to the API consumer, except for the `username` field, which is auto filled and therefore not needed to be specified in the request body.