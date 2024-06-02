# 24001160-snyrgy7-wahyupambudi-bcr-ch6
Challenge Chapter 6 - REST API Binar Car Rental with Express Js, Typescript, Postgres, JWT, Documentation API

## Install App
1. Clone project into your local `git clone https://github.com/wahyupambudi/24001160-snyrgy7-wahyupambudi-bcr-ch6.git`
2. Change directory to this project folder `cd 24001160-snyrgy7-wahyupambudi-bcr-ch6`
3. Use command `npm install` to install all packages
4. Copy `.env.example` file to `.env` and fill up the correct value of your PostgreSQL connection and cloudinary secret key!
5. Create Database for Project example : `bcr_ch6`
6. Run command `npm run migration:latest` to create table via migration
7. Run command `npx knex seed:run --specific=users.ts` to seeders users
8. Run command `npx knex seed:run --specific=cars.ts` to seeders cars
9. Run command `npm run dev`

# Account User
### SuperAdmin
- email: `superadmin@mail.com`
- password: `superadmin`

### admin
- email: `admin@mail.com`
- password: `admin`

### member
- email: `member@mail.com`
- password: `member`

# REST API
The REST API for Binar Car Rental
- Authentication With Registration, Login and Current User
- CRUD Users
- CRUD Cars
- Get Log Activity

