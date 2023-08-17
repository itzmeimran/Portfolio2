import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contactme.css";
import { BsSend } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

function ContactMe() {
  const { heading, body, border,background } = useSelector((state) => state.colors);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fzn3tgm",
        "template_qvm3iqs",
        form.current,
        "hYlw_fRwjlKKi4pwo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast("Message sent Successfully !!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="form" style={{ textAlign: "center" }}>
      <ToastContainer />
      <Typography variant="h4" fontWeight="bold" style={{ color: heading }}>
        Contact Me
      </Typography>
      <form id="form" ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          placeholder="Full-Name"
          required
          style={{ color: body, border: "1px solid", borderColor: border}}
        ></input>
        <input
          name="email"
          type="email"
          placeholder="Email ID"
          required
          style={{ color: body, border: "1px solid", borderColor: border }}
        ></input>
        <textarea
          name="message"
          rows="6"
          cols="50"
          placeholder="Type Your Message Here"
          required
          style={{ color: body, border: "1px solid", borderColor: border }}
        />
        <button
          type="submit"
          value="Send"
          style={{
            border: "2px solid",
            color: heading,
            "&:hover": { background: body },background:background,
          }}
        >
          Submit <BsSend style={{ color: heading }} />
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
