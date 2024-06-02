# 24001160-snyrgy7-wahyupambudi-bcr-ch6
Challenge Chapter 6 - REST API Binar Car Rental with Express Js, Typescript, Postgres, JWT, Documentation API

## Install App
1. Clone project into your local `git clone https://github.com/wahyupambudi/24001160-snyrgy7-wahyupambudi-bcr-ch6.git`
2. Change directory to this project folder `cd 24001160-snyrgy7-wahyupambudi-bcr-ch6`
3. Use command `npm install` to install all packages
4. Copy `.env.example` file to `.env` and fill up the correct value of your PostgreSQL connection and cloudinary secret key!
5. Create Database for Project example : `bcr_ch6`
6. Run command `npm run migration:latest` to create table via migration
7. Run command `npx knex seed:run --specific=users.ts` to insert users to table users
8. Run command `npx knex seed:run --specific=cars.ts` to insert cars to table cars
9. Run command `npm run dev`

# Account User
### SuperAdmin
- email: `superadmin@mail.com`
- password: `superadmin`
- access : `CRUD Users`, `CRUD Cars`, `Get All Logs`

### Admin
- email: `admin@mail.com`
- password: `admin`
- access : `CRUD Cars`, `Get All Logs`

### Member
- email: `member@mail.com`
- password: `member`
- access : `Check Current User`


# REST API
The REST API for Binar Car Rental
- Authentication With Registration, Login and Current User
- CRUD Users
- CRUD Cars
- Get Log Activity on url `http://localhost:3000/api-docs/`

# Authentication
## Register
### Request
`POST /api/v1/auth/register`

    curl -X 'POST' \
        'http://localhost:3000/api/v1/auth/register' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -d '{
        "name": "newuser",
        "email": "newuser@mail.com",
        "password": "newsecurepassword"
    }'

### Response
    {
        "message": "Success",
        "user": {
            "name": "newuser",
            "email": "newuser@mail.com",
            "password": "$2b$10$/2unzxMAHWioSBs.5WLJFeHDcSpQDpaAFctN3JPr/lFAVL7Z5UfNW",
            "created_At": "2024-06-02T12:51:10.717Z",
            "updated_At": "2024-06-02T12:51:10.717Z",
            "id": 4
        }
    }

## Login
### Request
`POST /api/v1/auth/login`

    curl -X 'POST' \
        'http://localhost:3000/api/v1/auth/login' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -d '{
        "email": "newuser@mail.com",
        "password": "newsecurepassword"
    }'
### Response
    {
        "id": 4,
        "email": "newuser@mail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6Im5ld3VzZXIiLCJlbWFpbCI6Im5ld3VzZXJAbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiY3JlYXRlZF9BdCI6IjIwMjQtMDYtMDJUMTI6NTE6MTAuNzE3WiIsInVwZGF0ZWRfQXQiOiIyMDI0LTA2LTAyVDEyOjUxOjEwLjcxN1oiLCJpYXQiOjE3MTczMzI3NzZ9.K84xTdD8FWAAIQPxGK5e42WyqUkZigo-giB2cI6CLc4",
        "created_At": "2024-06-02T12:51:10.717Z",
        "updated_At": "2024-06-02T12:51:10.717Z"
    }

## Whoami / Current User
### Request
`POST /api/v1/auth/whoami`

    curl -X 'GET' \
    'http://localhost:3000/api/v1/auth/whoami' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6Im5ld3VzZXIiLCJlbWFpbCI6Im5ld3VzZXJAbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiY3JlYXRlZF9BdCI6IjIwMjQtMDYtMDJUMTI6NTE6MTAuNzE3WiIsInVwZGF0ZWRfQXQiOiIyMDI0LTA2LTAyVDEyOjUxOjEwLjcxN1oiLCJpYXQiOjE3MTczMzI3NzZ9.K84xTdD8FWAAIQPxGK5e42WyqUkZigo-giB2cI6CLc4'

### Response
    {
        "id": 4,
        "name": "newuser",
        "email": "newuser@mail.com",
        "role": "member",
        "created_At": "2024-06-02T12:51:10.717Z",
        "updated_At": "2024-06-02T12:51:10.717Z",
        "iat": 1717332776
    }

# CRUD User (superadmin / admin)
## Get User
### Request
`GET /api/v1/users`

    curl -X 'GET' \
    'http://localhost:3000/api/v1/users' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN1cGVyYWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImNyZWF0ZWRfQXQiOiIyMDI0LTA2LTAyVDEwOjMxOjI5Ljc3OFoiLCJ1cGRhdGVkX0F0IjoiMjAyNC0wNi0wMlQxMDozMToyOS43NzhaIiwiaWF0IjoxNzE3MzMzMTQ1fQ._CGuM196PLMQbmdoxf5kd9lRYQ7m-z8DVfUPmUe9390'

### Response
    {
    "message": "Success",
    "users": [
        {
        "id": 1,
        "name": "superadmin",
        "email": "superadmin@mail.com",
        "password": "$2b$10$vUWC7DFGND7mVbEbw29fouw1tgGW0yqueYB1YAn7l2Dk2Uql1uHm.",
        "role": "superadmin",
        "created_At": "2024-06-02T10:31:29.778Z",
        "updated_At": "2024-06-02T10:31:29.778Z",
        "deleted_At": null
        },
        {
        "id": 2,
        "name": "admin",
        "email": "admin@mail.com",
        "password": "$2b$10$f0gsbDjU5WUog3iS5A2bkuW4ATF8h1VRHgwvg6ypXIjqDY/LlH7CO",
        "role": "admin",
        "created_At": "2024-06-02T10:31:29.778Z",
        "updated_At": "2024-06-02T10:31:29.778Z",
        "deleted_At": null
        }
    ]
    }

## Get User By Email
### Request
`PUT /api/v1/users/email?email=superadmin@mail.com`

    curl -X 'GET' \
    'http://localhost:3000/api/v1/users/email?email=superadmin%40mail.com' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN1cGVyYWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImNyZWF0ZWRfQXQiOiIyMDI0LTA2LTAyVDEwOjMxOjI5Ljc3OFoiLCJ1cGRhdGVkX0F0IjoiMjAyNC0wNi0wMlQxMDozMToyOS43NzhaIiwiaWF0IjoxNzE3MzMzMTQ1fQ._CGuM196PLMQbmdoxf5kd9lRYQ7m-z8DVfUPmUe9390'

### Response
    {
    "message": "Success",
    "users": {
        "id": 1,
        "name": "superadmin",
        "email": "superadmin@mail.com",
        "password": "$2b$10$vUWC7DFGND7mVbEbw29fouw1tgGW0yqueYB1YAn7l2Dk2Uql1uHm.",
        "role": "superadmin",
        "created_At": "2024-06-02T10:31:29.778Z",
        "updated_At": "2024-06-02T10:31:29.778Z",
        "deleted_At": null
    }
    }

## Create User
### Request
`POST /api/v1/users/create`

    curl -X 'POST' \
    'http://localhost:3000/api/v1/users/create' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN1cGVyYWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImNyZWF0ZWRfQXQiOiIyMDI0LTA2LTAyVDEwOjMxOjI5Ljc3OFoiLCJ1cGRhdGVkX0F0IjoiMjAyNC0wNi0wMlQxMDozMToyOS43NzhaIiwiaWF0IjoxNzE3MzMzMTQ1fQ._CGuM196PLMQbmdoxf5kd9lRYQ7m-z8DVfUPmUe9390' \
    -H 'Content-Type: application/json' \
    -d '{
    "name": "wahyu",
    "email": "wahyu@mail.com",
    "password": "123123123",
    "role": "admin"
    }'

### Response
    {
    "message": "Success",
    "users": {
        "name": "wahyu",
        "email": "wahyu@mail.com",
        "password": "$2b$10$mDLykBf9w2Bot1ppK8g4G.u2C1azkFUeDqQ8qPmiKYbEqqmemnITS",
        "role": "admin",
        "created_At": "2024-06-02T13:03:43.182Z",
        "updated_At": "2024-06-02T13:03:43.182Z",
        "id": 5
    }
    }
## Update User
### Request
`PUT /api/v1/users/update/:id`

    curl -X 'PUT' \
    'http://localhost:3000/api/v1/users/update/4' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN1cGVyYWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImNyZWF0ZWRfQXQiOiIyMDI0LTA2LTAyVDEwOjMxOjI5Ljc3OFoiLCJ1cGRhdGVkX0F0IjoiMjAyNC0wNi0wMlQxMDozMToyOS43NzhaIiwiaWF0IjoxNzE3MzMzMTQ1fQ._CGuM196PLMQbmdoxf5kd9lRYQ7m-z8DVfUPmUe9390' \
    -H 'Content-Type: application/json' \
    -d '{
    "name": "updateduser",
    "email": "updateduser@mail.com",
    "password": "newsecurepassword",
    "role": "member"
    }'

### Response
    {
    "message": "Success",
    "users": {
        "id": 4,
        "name": "updateduser",
        "email": "updateduser@mail.com",
        "password": "newsecurepassword",
        "role": "member",
        "created_At": "2024-06-02T12:51:10.717Z",
        "updated_At": "2024-06-02T13:04:45.510Z",
        "deleted_At": null
    }
    }

## Delete User
### Request
`DELETE /api/v1/users/delete/:id`

    curl -X 'DELETE' \
    'http://localhost:3000/api/v1/users/delete/4' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN1cGVyYWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImNyZWF0ZWRfQXQiOiIyMDI0LTA2LTAyVDEwOjMxOjI5Ljc3OFoiLCJ1cGRhdGVkX0F0IjoiMjAyNC0wNi0wMlQxMDozMToyOS43NzhaIiwiaWF0IjoxNzE3MzMzMTQ1fQ._CGuM196PLMQbmdoxf5kd9lRYQ7m-z8DVfUPmUe9390' 

### Response
    {
        "message": "Success"
    }
