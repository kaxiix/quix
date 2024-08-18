"use client";
import { HeroHighlight } from "../../components/ui/footer";
import Image from "next/image";

const Footer = () => {
  return (
    <HeroHighlight className="py-10">
      <div className="text-center text-white">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/logo1.png" // Replace with your logo path
            alt="Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        {/* Email Info */}
        <div className="mb-6">
          <p className="text-lg">Email: contact@quixstudio.com</p>
        </div>

        {/* Locations and Phone Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">United Arab Emirates</h3>
            <p className="text-sm">Dubai</p>
            <p className="text-sm mt-2">Phone: +971524657509</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">United Arab Emirates</h3>
            <p className="text-sm">Abu Dhabi</p>
            <p className="text-sm mt-2">Phone: +971524657509</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Kingdom of Saudi Arabia</h3>
            <p className="text-sm">Jeddah</p>
            <p className="text-sm mt-2">Phone: +966538784237</p>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Footer;
