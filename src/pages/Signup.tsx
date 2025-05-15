import React, { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const UsernameRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function signup() {
    const username = UsernameRef.current?.value;
    const password = PasswordRef.current?.value;

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });

      alert("Signed up successfully!");
      navigate("/signin");
    } catch (error: any) {
      const errorMessage = error.response?.data || "Signup failed. Please try again.";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-6 transition-all">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Create Your Account</h2>

        <div className="space-y-4">
          <Input reference={UsernameRef} placeholder="Username" />
          <Input reference={PasswordRef} placeholder="Password" type="password" />
        </div>

        <div className="pt-2">
          <Button onClick={signup} variant="primary" text="Sign up" loading={loading} />
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
