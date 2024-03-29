import React, { useState } from "react";
import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(signUp({ username: username }));
      navigate("/profile")
    }
  }

  return (
    <main>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button type="submit" className="primary">
              Sign Up
            </button>
          </div>
        </label>
      </form>
    </main>
  );
}
