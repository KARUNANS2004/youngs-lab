import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const url = "https://youngs-lab.onrender.com";

  const fetchGreeting = async () => {
    if (!name) {
      setMessage("Name is required.");
      return;
    }
    try {
      const response = await axios.get(`${url}/api/greeting?name=${name}`);
      setMessage(response.data.message || response.data.error);
    } catch (error) {
      setMessage("Error fetching greeting.");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center justify-center  text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Greeting App</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 text-black rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchGreeting}
        >
          Get Greeting
        </button>
        {message && (
          <p className="mt-4 text-2xl font-serif font-semibold absolute top-10 left-0 w-full flex items-center justify-center">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
