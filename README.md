https://crud-clinic.onrender.com/


https://clini-system.netlify.app/








System Overview

The Clinic Management System is a web-based CRUD application that allows management of Patients, Doctors, and Appointments.
The frontend is built using HTML, CSS, and Vanilla JavaScript, while the backend is developed using Node.js, Express, and MongoDB (Mongoose).
The frontend communicates with the backend using the Fetch API and consumes the deployed REST API hosted on Render.

API Endpoints Used
Patients

GET /api/patients – Retrieve all patients

POST /api/patients – Create a new patient

DELETE /api/patients/:id – Delete a patient

Doctors

GET /api/doctors – Retrieve all doctors

POST /api/doctors – Create a new doctor

DELETE /api/doctors/:id – Delete a doctor

Appointments

GET /api/appointments – Retrieve all appointments

POST /api/appointments – Create a new appointment

DELETE /api/appointments/:id – Delete an appointment

Frontend–Backend Integration

The frontend uses fetch() to send HTTP requests (GET, POST, DELETE) to the deployed backend API.
Data entered in the frontend forms (Patients, Doctors, Appointments) is saved directly to the MongoDB database via the backend.
The system dynamically updates tables after every CRUD operation without page reload.
CORS is configured on the backend to allow secure cross-origin access from the Netlify frontend.

Technologies Used

Frontend: HTML, CSS, JavaScript (Vanilla JS)
Backend: Node.js, Express.js
Database: MongoDB Atlas
Deployment:
Frontend: Netlify
Backend: Render

Screenshots 

Frontend UI showing Patients, Doctors, and Appointments tabs
Console/network showing successful API requests to the deployed backend
Code screenshots of app.js demonstrating Fetch API calls to /api/* endpoints

<img width="1352" height="624" alt="Screenshot 2025-12-18 005307" src="https://github.com/user-attachments/assets/4b4de0d2-abac-4104-b8ec-ae98844867a2" />
<img width="1348" height="645" alt="Screenshot 2025-12-18 005321" src="https://github.com/user-attachments/assets/8180dd3a-de7d-4352-ab1b-d1b5f9610439" />
<img width="1353" height="653" alt="Screenshot 2025-12-18 005336" src="https://github.com/user-attachments/assets/a04774f1-0854-4b67-9b64-03403e59280c" />
<img width="1333" height="646" alt="Screenshot 2025-12-18 005349" src="https://github.com/user-attachments/assets/f9b55b78-9548-4078-9e34-007509477367" />




