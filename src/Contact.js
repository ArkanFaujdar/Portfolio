import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pt352ch",
        "template_bnh4d85",
        form.current,
        "DWdKJ3P1xEdVirdBv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Thanks for reaching out to me. We'll get back to you shortly.");
    setEmail("");
    setMessage("");
    setName("");
  };
  return (
    <div className="w-full bg-black pt-9 h-[88vh] justify-center max-w-[900px] mx-auto items-center px-5">
      <div className="mb-8">
        <p className="text-3xl font-bold inline border-b-4 border-green-300 text-gray-300">
          Contact
        </p>
      </div>
      <form
        id="form"
        className="flex flex-col mx-auto"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="bg-gray-200 p-3 rounded"
          type="text"
          placeholder="Name"
          name="user_name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-4 p-3 bg-gray-200 rounded"
          type="email"
          placeholder="Email"
          name="name_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-gray-200 p-3 rounded"
          name="message"
          rows="10"
          required
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="text-white border-2 hover:border-green-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
