# 💬 Real-Time Chat Application

A high-performance, full-stack chat application built with the **MERN** stack. This project demonstrates real-time bidirectional communication, secure authentication, and a fully containerized deployment workflow.



## 🚀 Key Features

* **Real-time Messaging:** Powered by **Socket.io** for sub-100ms latency.
* **Persistent Storage:** Conversation history and user profiles managed via **MongoDB**.
* **Authentication:** Secure user sessions using **JWT** (JSON Web Tokens) and HTTP-only cookies.
* **Containerization:** Environment parity using **Docker** and **Docker Compose**.
* **State Management:** Lightweight and reactive UI state handling (Zustand/Context API).
* **Modern Styling:** Responsive, dark-mode ready interface built with **Tailwind CSS**.

## 🏗 System Architecture

The application is architected as a set of micro-services managed by Docker:

1.  **Frontend (React):** A SPA that handles the UI and WebSocket client.
2.  **Backend (Node/Express):** The REST API and Socket.io server.
3.  **Database (MongoDB):** NoSQL storage for users and messages.



## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js, Socket.io |
| **Database** | MongoDB, Mongoose |
| **DevOps** | Docker, Docker Compose |

## 📦 Getting Started

### Prerequisites
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.

### Quick Start (Docker)
The easiest way to run the project is using Docker Compose, which handles the network bridging between the frontend and backend automatically.

```bash
 1. Clone the repo
git clone [https://github.com/mayu-z/chat-app.git](https://github.com/mayu-z/chat-app.git)
cd chat-app

 2. Start the services
docker-compose up --build

The application will be available at:

Frontend: http://localhost:3000

Backend API: http://localhost:5000

📂 Project Structure

.
├── backend/           # Express server & Socket logic
│   ├── controllers/   # Request handlers
│   ├── models/        # Mongoose schemas
│   └── socket/        # Socket.io event configurations
├── frontend/          # React + Vite / CRA
│   ├── src/components # Reusable UI units
│   └── src/store      # State management
└── docker-compose.yml # Container orchestration

👤 Author
Mayuresh Singh

Portfolio: mayuu.me

GitHub: @mayu-z

LinkedIn: mayu-esh
