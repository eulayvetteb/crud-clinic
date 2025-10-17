# CRUD Clinic Project

A web-based CRUD (Create, Read, Update, Delete) application for managing clinic data. This project allows clinic staff to efficiently manage patients, appointments, and related information using a MongoDB database and Express.js server.

---

## Features

- **Patient Management**: Add, view, update, and delete patient information.
- **Appointment Management**: Schedule and track clinic appointments.
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
