Chat App (MERN + Docker)
A real-time, full-stack chat application built to demonstrate seamless communication, modern UI/UX, and containerized deployment. This project leverages the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for instantaneous messaging.

🚀 Features
Real-time Messaging: Instant message delivery and receipt using WebSockets.

User Authentication: Secure login and signup with JWT (JSON Web Tokens).

Online Status: Real-time tracking of online/offline users.

Responsive Design: Optimized for both desktop and mobile views using Tailwind CSS.

Containerized: Fully Dockerized for "one-command" setup and consistent environments.

Modern UI: Clean, minimalist interface with a focus on user experience.

🛠 Tech Stack
Frontend: React.js, Tailwind CSS, DaisyUI

Backend: Node.js, Express.js

Database: MongoDB

Real-time Engine: Socket.io

Containerization: Docker, Docker Compose

State Management: Zustand (or your preferred library)

📦 Getting Started
Prerequisites
Docker

Docker Compose

Installation & Setup
Clone the repository:

Bash

git clone https://github.com/mayu-z/chat-app.git
cd chat-app
Environment Variables:
Create a .env file in the backend directory (and frontend if required) based on the provided logic:

Code snippet

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NODE_ENV=development
Run with Docker Compose:
This will build the images and start the frontend, backend, and database containers automatically.

Bash

docker-compose up --build
Access the App:

Frontend: http://localhost:3000

Backend API: http://localhost:5000

🐳 Docker Architecture
The project is split into three main services defined in docker-compose.yml:

Client: The React frontend.

Server: The Express/Node.js API.

Database: MongoDB instance (if not using Atlas).

📂 Project Structure
Plaintext

chat-app/
├── backend/           # Node.js & Express server, Socket.io logic
├── frontend/          # React application, Tailwind styles
├── docker-compose.yml # Orchestration for containers
└── project.md         # Detailed technical notes
🛡 License
This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
Mayuresh Singh

GitHub: @mayu-z

Portfolio: mayuu.me

LinkedIn: mayu-esh
