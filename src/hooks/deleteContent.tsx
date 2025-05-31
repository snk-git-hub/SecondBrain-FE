import axios from "axios"
import { BACKEND_URL } from "../config"
export async function Deletecontent(title: string, userId: string) {
    
    const token = localStorage.getItem("token");
    if (!token) throw new Error("token not found")
    await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        headers: {
            Authorization: `Bearer ${token}`,
          },
        data: {
            title,
            userId
        }
    })
}