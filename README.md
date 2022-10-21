# Challange-6-HENDRI-FSW1-KM3
Restfull API with Authorization

```
Name : Hendri Permana Putra
class : FSW1
```


### HOW TO WORKS :
##### 1. create database cars_auth in mysql, configure in file Config\config.json and Database.js, require same with your database before
##### 2. type instruction in package.json
```
1. npm run model-users --> create users models
2. npm run model-cars --> create cars models
3. npm run migrate --> migrate table in models, or CREATED TABLE on Database
4. npm run seed --> to insert all seed in folder seeders
```

### API USING SWAGGER 3.0
```
####API FOR LOAD SWAGGER
localhost:8000/v1/api/api-docs


####API FOR CRUD USERS
GET localhost:8000/v1/api/users --> GET All USERS
GET localhost:8000/v1/api/users/:id --> GET USERS BY ID
POST localhost:8000/v1/api/register --> REGISTER USERS MEMBER
POST localhost:8000/v1/api/member/login --> LOGIN FOR MEMBER
POST localhost:8000/v1/api/admin/login --> LOGIN FOR ADMIN
POST localhost:8000/v1/api/superadmin/login --> LOGIN FOR SUPERADMIN
DELETE localhost:8000/v1/api/logout --> LOGOUT
PUT localhost:8000/v1/api/users/:id --> EDIT USERS DATA
DELETE localhost:8000/v1/api/users/delete/:id --> DELETE USERS DATA
GET localhost:8000/v1/api/whoami --> VERIFY WHAT ACCOUNT USING
POST localhost:8000/v1/api/registrasi-admin --> REGISTER "ADMIN" ##ONLY SUPERADMIN


####API FOR CRUD CARS "ONLY ADMIN & SUPER ADMIN"
GET localhost:8000/v1/api/cars --> GET ALL CARS "MEMBER CAN ACCESS"
PUT localhost:8000/v1/api/cars/:id --> GET CARS BY ID
POST localhost:8000/v1/api/create/cars --> CREATE CARS
PUT localhost:8000/v1/api/cars/edit/:id --> EDIT CARS
PUT localhost:8000/v1/api/cars/delete/:id --> SOFT DELETE (Change Available == true to false)
DELETE localhost:8000/v1/api/cars/list-delete/:id DELETE CARS ONLY (avalaible == false)
```


HAVE A NICE ONE DAY, THANKS FOR ATTENTION
