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
    console.log(formData);
    const res = await login(formData);
    console.log(res);
    if (res.success === true) {
      localStorage.setItem("token", res.token);
      router.push("/order");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Login</Button>
        <div>
          <p>
            Dont have an account yet? <Link href={"/signup"}>Register</Link>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
