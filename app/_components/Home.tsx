"use client";
import { AboutSection, Footer, FooterText, PricingSection } from "./Styled";
import Hero from "./Hero";
import Brand from "./Brand";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [cement, setCement] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      "https://cement-api.onrender.com/api/cements"
    );
    console.log(response.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <AboutSection id="about">
        <h2>About Us</h2>
        <p>
          At OgCement, we are dedicated to providing high-quality cement for
          construction projects of all sizes. With over 10 years of experience
          in the industry, we have built a strong reputation for reliability,
          trust, and customer satisfaction. Our goal is to ensure that you have
          access to the best materials for building strong and durable
          structures.
        </p>
        <p>
          Our team of experts works tirelessly to source the finest cement
          brands, including Dangote Cement, Lafarge Cement, and other reputable
          brands. We offer competitive pricing, timely delivery, and a
          commitment to excellence that sets us apart from the competition.
          Whether you&apos;re working on a small residential project or a
          large-scale commercial development, OgCement is your trusted partner
          for all your cement needs.
        </p>
        <p>
          We believe in building not just structures but relationships with our
          customers. We are here to support you every step of the way, ensuring
          that your construction projects are completed with the highest
          standards of quality and efficiency.
        </p>
      </AboutSection>
      <Brand />
      <PricingSection id="pricing">
        <h2>Pricing & Discounts</h2>
        <p>
          We offer competitive pricing based on the number of bags you order for
          our premium cement brands. Check out the pricing and discounts below.
        </p>

        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Price Per Bag</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {/* Dangote Cement */}
            <tr>
              <td rowSpan={3}>Dangote Cement</td>
              <td>1-49 Bags</td>
              <td>$50</td>
              <td>No Discount</td>
            </tr>
            <tr>
              <td className="highlight">50-99 Bags</td>
              <td>$48</td>
              <td>5% Discount</td>
            </tr>
            <tr>
              <td className="highlight">100+ Bags</td>
              <td>$45</td>
              <td>10% Discount</td>
            </tr>

            {/* Lafarge Cement */}
            <tr>
              <td rowSpan={3}>Lafarge Cement</td>
              <td>1-49 Bags</td>
              <td>$52</td>
              <td>No Discount</td>
            </tr>
            <tr>
              <td className="highlight">50-99 Bags</td>
              <td>$50</td>
              <td>4% Discount</td>
            </tr>
            <tr>
              <td className="highlight">100+ Bags</td>
              <td>$47</td>
              <td>8% Discount</td>
            </tr>

            {/* Other Cement Brand */}
            <tr>
              <td rowSpan={3}>Other Cement Brand</td>
              <td>1-49 Bags</td>
              <td>$49</td>
              <td>No Discount</td>
            </tr>
            <tr>
              <td className="highlight">50-99 Bags</td>
              <td>$46</td>
              <td>6% Discount</td>
            </tr>
            <tr>
              <td className="highlight">100+ Bags</td>
              <td>$44</td>
              <td>12% Discount</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "40px" }}>
          Place your order today and get the best deals on premium cement
          brands. Contact us for any inquiries or custom pricing for larger
          projects.
        </p>
      </PricingSection>
      <Footer>
        <FooterText>&copy; 2024 OgCement. All rights reserved.</FooterText>
      </Footer>
    </>
  );
}
