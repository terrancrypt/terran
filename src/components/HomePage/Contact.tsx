"use client";

import { mainFont } from "@/app/fonts";
import containerConfig from "@/theme/containerClassConfig";
import { message } from "antd";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      if (
        form.current &&
        process.env.EMAILJS_SERVICE_ID &&
        process.env.EMAILJS_TEMPLATE_ID &&
        process.env.EMAILJS_PUBLIC_KEY
      ) {
        emailjs.sendForm(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.EMAILJS_PUBLIC_KEY
        );
        message.success("Email sent successfully!");
      }
    } catch (error) {
      message.error("Email sending failed!");
    }
  };

  return (
    <section className="py-40 bg-[#141414] dark:bg-[#1c1c1c]" id="contact">
      <div className={`${containerConfig} `}>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          <div className="flex-1">
            <h2 className="font-medium text-2xl md:text-3xl lg:text-[56px] mb-10 text-white">
              Get into contact with me
            </h2>
            <div className="text-white space-y-6 text-base">
              <p>
                Greetings, and thank you for choosing to get in touch with me!
                I&apos;m looking forward to hearing from you and assisting you
                with any projects related to Web3 or Blockchain technology.
              </p>

              <p>
                Please fill out the contact form below to share your information
                and the purpose of your inquiry. I will strive to respond to you
                as soon as possible so we can begin discussing how I can help
                you achieve your goals.
              </p>
              <p>
                Thank you for reaching out, and we&apos;ll be in touch soon!
              </p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form onSubmit={sendEmail} ref={form}>
              <textarea
                className={`w-full p-0 bg-transparent border-none h-48 block text-white ${mainFont.className}`}
                placeholder="your message"
                name="message"
                required
              />

              <input
                type="text"
                placeholder="your email address"
                className={`contact-input w-full bg-transparent border-none block text-lg text-white ${mainFont.className}`}
                name="email"
                required
              />

              <button
                className={`text-white ${mainFont.className} text-lg font-medium py-2 px-4 border-2 rounded-3xl mt-8 hover:scale-90 transition-all`}
                type="submit"
              >
                Contact me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
