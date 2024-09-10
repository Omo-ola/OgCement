import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

export const Logo = styled.h1`
  font-size: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OrderButton = styled.li`
  padding: 10px 20px;
  background-color: #f7b500;
  color: black;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  display: inline;

  &:hover {
    background-color: #f39c00;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background: url("/Cements.webp") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

  /* Dark Overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  h1 {
    font-size: 48px;
  }

  p {
    font-size: 24px;
    margin: 20px 0;
  }
`;

export const HeroButton = styled(OrderButton)`
  font-size: 20px;
  padding: 15px 30px;
`;

export const AboutSection = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f8f8f8;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const BrandsSection = styled.section`
  padding: 80px 20px;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const BrandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;

export const BrandCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
  }
`;

export const PricingSection = styled.section`
  padding: 80px 20px;
  background-color: #f8f8f8;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
    margin-bottom: 40px;
  }

  table {
    margin: 0 auto;
    border-collapse: collapse;
    font-size: 20px;
    width: 100%;
    max-width: 1200px;
  }

  th,
  td {
    padding: 15px 20px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #333;
    color: white;
  }

  td {
    background-color: #fff;
  }

  .highlight {
    background-color: #f7b500;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    table {
      font-size: 16px;
    }
  }
`;

export const Footer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 18px;
`;

export const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #f4f4f4;
  border-radius: 10px;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;

    label {
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #ddd;
      border-radius: 8px;
    }
  }

  .brand-selector,
  .quantity-control {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .brand-selector select {
    padding: 15px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 8px;
    width: 100%;
  }

  .quantity-control {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    button {
      font-size: 18px;
      padding: 10px 20px;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    input {
      width: 120px;
      padding: 10px;
      font-size: 16px;
      text-align: center;
      border: 2px solid #ddd;
      border-radius: 8px;
    }
  }

  .order-button {
    align-self: center;
    padding: 15px 40px;
    background-color: #f7b500;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const DeliveryAddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  textarea {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 8px;
    resize: none;
    min-height: 120px;
    font-family: inherit;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #f7b500;
      outline: none;
    }

    &::placeholder {
      color: #aaa;
      font-size: 14px;
    }
  }
`;


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
  /* max-width: 400px; */
  width: 100%;
  background: var(--bg-grey);
  position: relative;
  height: 100vh;
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