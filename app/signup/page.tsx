"use client";
import { signup } from "@/lib/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";
export interface UserSignUpDetails {
  name: string;
  email: string;
  role: string;
  password: string;
}

const Signup: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<UserSignUpDetails>({
    name: "",
    email: "",
    role: "admin",
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
    const res = await signup(formData);
    console.log(res);
    if (res.success === true) {
      router.push("/order");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Signup</Title>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* <Input
          type="tel"
          name="phone"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        /> */}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
        <div>
          <p>
            Already have an account? <Link href={"/login"}>Login</Link>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;

// Styled components
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

export const Form = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 24px;
  text-align: center;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;
