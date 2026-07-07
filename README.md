# ConnectSphere

A full-stack real-time video calling application built with React, Node.js, Socket.io, and WebRTC. Users can register, log in, start or join meetings using a shareable meeting code, chat during calls, and view their past meeting history.

## Features

-  **User Authentication** — Secure registration and login with bcrypt password hashing
-  **Real-Time Video Calls** — Peer-to-peer video/audio powered by WebRTC signaling over Socket.io
-  **In-Call Chat** — Send and receive messages during an active meeting
   **Instant Meetings** — Create or join a meeting with any shareable meeting code, no scheduling required
-  **Meeting History** — Logged-in users can view a history of meetings they've joined
-  **Guest Access** — Join a call without registering an account

## Tech Stack

**Frontend**
- React 18
- React Router
- Material UI (MUI)
- Socket.io Client
- Axios

**Backend**
- Node.js + Express
- Socket.io (WebRTC signaling server)
- MongoDB with Mongoose
- bcrypt (password hashing)

## Project Structure

```
Videocall/
├── frontend/          # React client
│   └── src/
│       ├── pages/         # Landing, Auth, Home, VideoMeet, History
│       ├── contexts/      # Auth context/provider
│       └── utils/         # Route protection (withAuth)
└── backend/           # Express + Socket.io server
    └── src/
        ├── controllers/   # User auth logic, socket signaling
        ├── models/        # User & Meeting schemas
        └── routes/        # API routes
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB database (local or MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/Ananya12345678987/videocall.git
cd videocall
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:
```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

Run the backend:
```bash
npm run dev
```

### 3. Frontend setup
```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:3000`.

> **Note:** Check `frontend/src/environment.js` to make sure the backend URL matches your setup (local vs deployed).

## How It Works

1. Register or log in (or join as a guest)
2. Enter any meeting code and click **Join** — this creates the room if it doesn't exist yet
3. Share the same meeting code with another person so they can join the same call
4. Socket.io handles WebRTC signaling to establish a direct peer-to-peer video connection between participants

## License

This project is open source and available under the MIT License.
