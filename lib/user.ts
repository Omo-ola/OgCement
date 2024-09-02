import { UserSignUpDetails } from "@/app/signup/page";
import axios from "axios";

export async function signup(data: UserSignUpDetails) {
  try {
    const res = axios.post(
      "https://cement-api.onrender.com/api/auth/register",
      data,
      {
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header
        },
      }
    );
    console.log(res);

    return (await res).data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(data: { email: string; password: string }) {
  try {
    const res = axios.post(
      "https://cement-api.onrender.com/api/auth/login",
      data,
      {
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header
        },
      }
    );
    return (await res).data;
  } catch (error) {
    console.log(error);
  }
}
