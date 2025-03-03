
User-Astrologer Assignment System

Assignment Problem Statement

The objective of this project is to develop a User-Astrologer Assignment System where users can register and get dynamically assigned to astrologers. The system ensures:

Balanced workload distribution among astrologers.

User registration and authentication (Login not working properly).

CRUD operations for users and astrologers.

Flow tracking and assignment management.

Scalability and future enhancements.

🔍 Key Features Implemented

✅ User Management – Register, Update, Delete Users (Login issue pending).
✅ Astrologer Management – Add, Update, Delete, and Fetch astrologers.
✅ Assignment Algorithm – Users assigned based on least assigned astrologer (Load Balancing).
✅ MongoDB (Mongoose) – Stores Users, Astrologers, and Assignments.
✅ Backend API (Express.js) – RESTful API endpoints for operations.
✅ Security – JWT-based authentication.

🛠 Tech Stack

Backend

Node.js & Express.js – API Development

MongoDB & Mongoose – Database

JWT & Bcrypt.js – Security

Other Dependencies

dotenv – Environment variable management

📌 Setup Instructions

Prerequisites

Ensure you have installed:

Node.js

MongoDB (Locally or via cloud like MongoDB Atlas)

Installation Steps

1️⃣ Clone the Repository

 git clone <repository-url>
 cd <project-folder>

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

4️⃣ Run the Server

npx nodemon server.js  # If nodemon is installed
node server.js         # Use this if nodemon is not installed

5. API Documentation
User Routes (/api/users)
/signup(POST)	Register a new user
/login(POST)	Authenticate user (Not working properly)
/api/users/(Get) Get all users
/api/users/:id(GET)	Get user by ID
/api/users/:id (PUT) Update user details
/api/users/:id	Delete user

Astrologer Routes (/api/astrologers)
/api/astrologer(GET)    Fetch all astrologers
/api/astrologer/:id(GET)	Fetch astrologer by ID
/api/astrologer(POST)	Create a new astrologer
/api/astrologer/:id(PUT)	Update astrologer details
/api/astrologer/:id(DELETE)	Delete an astrologer

User-Astrologer Assignment (/api/distribution)
/api/distribution/assign (POST) Assign a user to an astrologer dynamically 
Flow Routes (/api/flows)      (not working properly, facing errors)

🔄 Flow & Distribution Algorithm

Algorithm Type: Load-Balanced Assignment (Flow-Distribution Algorithm)

Users are dynamically assigned to astrologers based on who has the least number of users, ensuring equal distribution.

Algorithm Steps:

1️⃣ Fetch all astrologers sorted by assigned user count.
2️⃣ Pick the astrologer with the lowest assigned users.
3️⃣ Assign the user to that astrologer.
4️⃣ Update the totalAssignedUsers count.
5️⃣ Track the assignment in the Flow model.
6️⃣ Maintain records in the Distribution model.

Example Code:

const assignUserToAstrologer = async () => {
   const astrologers = await Astrologer.find().sort({ totalAssignedUsers: 1 });
   const assignedAstrologer = astrologers[0]; // Pick the one with the least users
   return assignedAstrologer;
};

🚀 Features & Future Improvements

✅ Features Implemented

✔ User authentication with JWT
✔ Dynamic assignment of users to astrologers
✔ CRUD operations for users and astrologers
✔ MongoDB integration with Mongoose
✔ API routes for easy interaction

📊 Project Completion Status

✅ Backend – Login issue needs fixing, Flow feature not working properly



Thank You