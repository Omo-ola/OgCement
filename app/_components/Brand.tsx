"use client";
import Image from "next/image";

import Dang from "@/public/screen_light_1.png";
import Lafarge from "@/public/screen_light_2.png";
import Chem from "@/public/screen_light_3.png";
import { BrandCard, BrandGrid, BrandsSection } from "./Styled";

function Brand() {
  return (
    <BrandsSection id="brands">
      <h2>Our Cement Brands</h2>
      <BrandGrid>
        <BrandCard>
          <Image src={Dang} alt="Dangote Cement" />
          <h3>Dangote Cement</h3>
        </BrandCard>
        <BrandCard>
          <Image src={Lafarge} alt="Lafarge Cement" />
          <h3>Lafarge Cement</h3>
        </BrandCard>
        <BrandCard>
          <Image src={Chem} alt="Other Brand" />
          <h3>Other Cement</h3>
        </BrandCard>
      </BrandGrid>
    </BrandsSection>
  );
}

export default Brand;
