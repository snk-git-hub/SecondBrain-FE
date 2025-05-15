import React, { useRef } from "react"; 
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const UsernameRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate(); 

  async function signup() {
    const username = UsernameRef.current?.value;
    const password = PasswordRef.current?.value;

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });
      
      console.log(response.data); 
      alert("Signed up successfully!");
      navigate("/signin"); 
    } catch (error: any) {
      const errorMessage = error.response?.data || "Signup failed. Please try again.";
      console.error("Error response:", errorMessage);
      alert(errorMessage);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        
        <Input reference={UsernameRef} placeholder="Username" />
        <Input reference={PasswordRef} placeholder="Password" />
        
        <div className="pt-2">
          <Button onClick={signup} variant="primary" text="Sign up" loading={false} />
        </div>
      </div>
    </div>
  );
}
