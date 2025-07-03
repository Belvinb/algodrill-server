# AlgoDrill
## 📝 Table of Contents
[About](#ℹ️-about)

[Features](#✨-features)

[Technologies](#🛠️-technologies)

[Getting Started](#🚀-getting-started)

[Prerequisites](#prerequisites)

[Installation](#installation)

[Environment Variables](#environment-variables)

[Running the Application](#running-the-application)

<!-- [Running Tests](#running-tests) -->

[API Endpoints](#🔗-api-endpoints)

[Database Schema](#🗄️-database-schema)

[Project Structure](#📂-project-structure)

 # ℹ️ About
This personal project was build to make dsa revision easier.algodrill will act as a platform where you can store dsa related questions in a single place and strategically use it for revision.

# ✨ Features

## Current Features
- User Auth
- CI/CD pipeline
- Swagger documentation

## Upcoming Features

- Add/Edit dsa questions
- View questions
- Daily,weekly and monthly challenges
- Random dsa challenges
- Notification services
- LLM integration for answer validation
- Server side answer validation using docker containers

# 🛠️ Technologies

- Language: Typescript, Node.js

- Framework: NestJs

- Database: MongoDB

- ORM/ODM: Mongoose

- Authentication: JWT

- Testing: Jest

- Deployment: Docker, AWS ECR, ECS, Fargate, Github Actions

- Other Libraries: Swagger, class-validator, class-transformer

# 🚀 Getting Started
Instructions on how to set up and run the application locally for development.

## Prerequisites


- Node.js (v20 or higher)

- npm

- Docker (Optional, if using Docker for local setup)

- MongoDB 

## Installation
### Clone the repository:

```bash

git clone https://github.com/Belvinb/algodrill-server.git

cd algodrill-server

#switch to main branch
git checkout main

#Install dependencies:
npm install

```

## Environment Variables
Create a .env file in the root directory and add the following 
### environment variables

```bash

JWT_SECRET= #secret
PORT = #port
DB_URL = #mongoDB url

Use .env.example as a template
```
## Running the Application

```bash
# Start the development server:
npm run start

#watch mode
npm run start:dev

The API should now be running at http://localhost:5000 

```
<!-- ## Running Tests
To run the automated tests:

For Node.js/Jest:

Bash

npm test
For Python/Pytest:

Bash

pytest
For other languages, adapt accordingly. -->

# 🔗 API Endpoints

#### Detailed API documentation can be found at : 
http://localhost:5000/api

#### Alternatively, list key endpoints here:

POST /auth/login - User Login

POST /auth/register - User Register

GET /auth/me - Get current user details


GET /revision/levels - Get revision levels

GET  /revision/difficulties - Get revision difficulty levels

GET /revision/types - Get revision types

POST /revision/question - Add a new question

# 🗄️ Database Schema

The database schema includes the following main collections:

User: id username email password

Question: id, question, userId, revisionLevel, nextRevisionDate, difficulty, type, notes

Answer: id, answer, questionId, language

<!-- An ER diagram is available here. -->

# 📂 Project Structure
algodrill-server/
```bash
├── .github/  
│   └── workflows/             # GitHub Actions workflows
├── src/                       # Source code
|   ├── auth/                  # Authentication logic
│   ├── common/                # Common utility functions
│   ├── revision/              # Revision logic
│   ├── user/                  # User Logic
│   └── main.ts                # Main application file 
├── test/                      # Unit and integration tests
├── .env.example               # Example environment variables
├── .gitignore                 # Files/directories to ignore in Git
├── package.json              
├── README.md                  # This README file
└── Dockerfile                 # Docker build instructions 
└── docker-compose.yml         # Docker Compose configuration 
```