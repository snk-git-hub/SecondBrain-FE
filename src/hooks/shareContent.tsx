import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function shareContent() {
  const [sharelink, setsharelink] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchlink = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");

        const response = await axios.post(
          `${BACKEND_URL}/api/v1/brain/share`,
          { share: true }, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setsharelink(`${BACKEND_URL}/api/v1/brain/get/${response.data.hash}`);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchlink();
  }, []);

  return { sharelink, loading, error };
}
