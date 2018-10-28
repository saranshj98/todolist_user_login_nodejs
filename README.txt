# User Signup/Login Registeration Module
A user sign/login module - using backend api services in nodejs and mongodb database. For documentation and instructions check out below.

# installing
Install NodeJS and NPM from  https://nodejs.org/en/download/.
Download the App - Postman from https://www.getpostman.com/apps.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine.

Download or clone the project source code from https://github.com/saranshj98/User_auth_login_signup.git.
Install all required npm packages by running npm install from the command line in the project root folder.

Start the api by running npm run start from the command line in the project root folder, you should see the message Server listening on port 3000.
You can test the api directly using Postman.

# API EndPoints
Signup API  -
Post localhost:3000/api/user/create on local machine
Post https://still-cove-74270.herokuapp.com/api/user/create
 
(required fields - username, email and password in request json body)


login API   -
Post localhost:3000/api/user/create on local machine
Post https://still-cove-74270.herokuapp.com/user/create

(required fields - email and password in request json body)

# Libraries
Express, Mongoose, Nodemon, npm


# Flow Of FrontEnd App
1. hosting url - https://clootuserauth.firebaseapp.com
2. User will be directed to home page.
3. Home -> Register
4. Enter all the information. If all the details are valid user will be directed to login page (Sign up --> login)
5. if fields are missing error will be displayed.
6. On login screen - user will enter the login credentials and a small message will be displayed.
7. After login, click on logout to go back to home page.
