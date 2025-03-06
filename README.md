Full Stack Developer Screening Task

Overview

This is a simple full-stack application with a Node.js (Express) backend and a React (Vite + Tailwind CSS) frontend. The application allows users to enter their name and receive a personalized greeting from the backend.

Features

✅ Backend: Express.js API that returns a greeting message.
✅ Frontend: React app with an input field and a button to fetch the greeting.
✅ Axios Integration: API requests handled via Axios.
✅ Tailwind CSS: Styled using Tailwind for modern UI.
✅ CORS Enabled: Allows frontend-backend communication.

Installation & Setup

1. Clone the Repository

git clone <repository-url>
cd <repository-folder>

2. Backend Setup

Navigate to the backend folder and install dependencies:

cd backend
npm install express cors

Run the Express server:

node app.js

3. Frontend Setup

Navigate to the frontend folder and install dependencies:

cd frontend
npm create vite@latest
npm install axios 
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

Run the React app:

npm run dev

The frontend will be available at http://localhost:5173 (default Vite port).
