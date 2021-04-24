## Description

This project setup a basic server using Graphql. This template include:
- Queries to database (MongoDB)
- Authentication and authorization using JWT and Graphql context
- Basic CRUD

## Structure

| Folder        | Description |
| ------------- | ------------- |
| auth          | This folder contains context logic and encrypt utilities  |
| models        | This folder contains database model    |
| repositories  | This folder contains database queries  |
| resolvers     | This folder contains logics to mutation and queries for Graphql |
| schemas  | This folder contains Graphql schemas |

## Running locally
** First fill out the env variables and rename folder to .env**
```
  npm install
  npm start
```
## Running the tests
```
npm test
```