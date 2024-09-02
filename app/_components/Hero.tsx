"use client";
import Image from "next/image";
import Link from "next/link";
import { HeroButton, HeroContent, HeroSection } from "./Styled";

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Your Trusted Cement Supplier</h1>
        <p>
          Get the best cement brands at unbeatable prices. Delivered straight to
          your site.
        </p>
        <HeroButton>Order Now</HeroButton>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
