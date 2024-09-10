"use client";
import { signup } from "@/lib/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";
import { Container, Form, Title, Input, Button } from "../_components/Styled";

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
    if (res.success === true) {
      router.push("/order");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="one">
        <article className="text-center text-3xl">
          <Title>Sign Up</Title>
        </article>
        <div className="com">
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <Button type="submit">Sign Up</Button>
        <div>
          <p>
            Already have an account? <Link href={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </Form>
  );
};

export default Signup;
