import React from "react";

const WhatsAppContact: React.FC = () => {
  const phoneNumber = "2347050539977"; 
  const prefilledMessage =
    "Hello! I would like to inquire about your services."; 


  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      prefilledMessage
    )}`;
    window.open(whatsappUrl, "_blank"); 
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <p
        onClick={handleWhatsAppRedirect}
        className="text-blue-600 cursor-pointer underline hover:text-blue-800"
      >
        Click here to message us on WhatsApp
      </p>
    </div>
  );
};

export default WhatsAppContact;
