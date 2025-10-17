# CRUD Clinic Project

A web-based CRUD (Create, Read, Update, Delete) application for managing clinic data. This project allows clinic staff to efficiently manage patients, appointments, and related information using a MongoDB database and Express.js server.

---

## Features

## Features

- **Patient Management**: Add, view, update, and delete patient information.  
- **Appointment Management**: Schedule and track clinic appointments.  
- **Doctor Management**: Add, view, update, and delete doctor information.  
- **Database Integration**: Connected to MongoDB Atlas for cloud data storage.  
- **RESTful API**: Provides endpoints for all CRUD operations.

---

## Installation

npm install

git clone https://github.com/eulayvetteb/crud-clinic.git
cd crud-clinic





















| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| POST   | /patients     | Create a new patient        |
| GET    | /patients     | Retrieve all patients       |
| GET    | /patients/:id | Retrieve a specific patient |
| PUT    | /patients/:id | Update a patient            |
| DELETE | /patients/:id | Delete a patient            |



| Method | URL                | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/api/doctors`     | Get all doctors    |
| GET    | `/api/doctors/:id` | Get a doctor by ID |
| POST   | `/api/doctors`     | Add a new doctor   |
| PUT    | `/api/doctors/:id` | Update a doctor    |
| DELETE | `/api/doctors/:id` | Delete a doctor    |




| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| POST   | /appointments     | Schedule a new appointment |
| GET    | /appointments     | Get all appointments       |
| GET    | /appointments/:id | Get appointment by ID      |
| PUT    | /appointments/:id | Update appointment details |
| DELETE | /appointments/:id | Cancel/delete appointment  |

