import { useState } from "react";

import axios from "axios";

const API_BASE_URL = "http://localhost:5001";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        username,
        email,
        password,
        role,
      });
      setMessage(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div
      className="bg-custom-login p-4"
      style={{
        minHeight: "100vh",
        
      }}
    >
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl ">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Register
          </h1>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="relative w-full lg:max-w-sm">
              <label
                htmlFor="select"
                className="block text-sm font-semibold text-gray-800"
              >
                Select
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 mb-4"
              >
                <option value="employee">Employee</option>
                <option value="candidate">Candidate</option>
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor="Name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Register
              </button>
            </div>
          </form>
          {message && <p className="text-green-500">{message}</p>}
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already registered?{" "}
            <a
              href="/Signin"
              className="font-medium text-purple-600 hover:underline"
            >
              Signin
            </a>
          </p>
        </div>
      </div>
    </div>

    // <form
    //   onSubmit={handleSubmit}
    //   className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
    // >
    //   <input
    //     type="text"
    //     placeholder="Username"
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button type="submit">Register</button>
    // </form>
  );
}

export default Register;
