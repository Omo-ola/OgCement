"use client";
import { login } from "@/lib/user";
import { useState } from "react";
import { Button, Form, Input, Title, Container } from "../_components/Styled";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserLogin {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      console.log(res);
      if (res.success === true) {
        localStorage.setItem("token", res.token);
        router.push("/order");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="one">
        <article className="text-center text-3xl">
          <Title>Login</Title>
        </article>
        <div className="com">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="com">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Login</Button>
        <div>
          <p>
            Dont have an account yet? <Link href={"/signup"}>Register</Link>
          </p>
        </div>
      </div>
    </Form>
  );
};

export default Login;
