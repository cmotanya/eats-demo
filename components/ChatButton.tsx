"use client";

import { Button } from "./Button";
import Image from "next/image";

const ChatButton = () => {
  const message = `Hello 👋 I’d like to place an order.`;

  const handleWhatsApp = () => {
    if (typeof window === "undefined") return;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "254712909475";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <>
      <Button
        onClick={handleWhatsApp}
        className="bg-whatsapp fixed right-3 bottom-7 z-99999 flex size-16 items-center justify-center rounded-full p-0 shadow-lg transition-all duration-100 hover:scale-95 hover:brightness-90 active:scale-105 md:size-20"
      >
        <Image src="/chat/chat.svg" width={40} height={40} alt="chat button" />
      </Button>
    </>
  );
};
export default ChatButton;
