# User Todo Task List
A user todo task list - using backend api services in nodejs and mongodb database. For documentation and instructions check out below.

# installing
Install NodeJS and NPM from  https://nodejs.org/en/download/.

Download the App - Postman from https://www.getpostman.com/apps.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine.

Download or clone the project source code from https://github.com/saranshj98/todolist_user_login_nodejs.
Install all required npm packages by running npm install from the command line in the project root folder.

Start the api by running npm run start from the command line in the project root folder, you should see the message Server listening on port 3000.

You can test the api directly using Postman.

# API EndPoints
Signup API  -
Post localhost:3000/api/user/create
(   request - username, email and password 
    response - user document with token     )


login API   -
Post localhost:3000/api/user/create
(   request - email and password, token in headers with x-access-token as key
    response - user document    
)


Add new user todo - 
Post localhost:3000/api/todotask/userTodo
( 
    request - name, comments, due_date, priority(Number), token
    response - todo task document
)


Update a user todo - 
Post localhost:3000/api/todotask/userTodo
(
    request - name, complete, priority, todo_id, todoAction, token
    response - todo updated document
)


Remove / Delete a user todo - 
Post localhost:3000/api/todotask/userTodo
(
    request - todo_id, todoAction, token
    response - message
)


Get all user todo task list - 
Get localhost:3000/api/todotask/allUserTodo
(
    request - token
    response - list of todo task
)

Get single todo task - 
Get localhost:3000/api/todotask/:todo_id
(
    request - token and todo_id
    response - single task
)

# Libraries
Express, Mongoose, Nodemon, npm