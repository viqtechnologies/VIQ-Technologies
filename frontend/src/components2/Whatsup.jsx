import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // or any icon lib you use

const WhatsAppButton = () => {
  const phone = "+917986067505"; // country code + number, no +, no spaces
  const message = encodeURIComponent(
    "Hello, I would like to know more about your services."
  );
  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 md:w-16 md:h-16 transition-transform hover:scale-110 float-bounce"
    >
      <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 " />
    </a>
  );
};

export default WhatsAppButton;
