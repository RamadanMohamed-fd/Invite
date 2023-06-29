import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FiUser } from "react-icons/fi";
import { BsTelephoneForward, BsSend } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";

const Form = (props) => {
  const [formInfo, setFormInfo] = useState("");
  const form = useRef();
  const formData = (e) => {
    e.preventDefault();
    const name = form.current.name.value;
    const email = form.current.email.value;
    const number = form.current.phone.value;
    setFormInfo({ name, email, number });
    props.show();
  };

  return ReactDOM.createPortal(
    <div className=" flex  justify-center items-center fixed bg-black opacity-90  text-white  top-0 left-0 w-full h-[100vh] z-[1000]">
      <form
        data-aos="fade-down"
        action=""
        ref={form}
        onSubmit={formData}
        className="w-[90%] max-w-[600px] "
      >
        <div className=" mb-10 relative">
          <input
            type="text"
            required
            name="name"
            id="name"
            placeholder=" "
            className="w-full p-3 outline-none border-2 border-white bg-transparent text-sm"
          />
          <label
            htmlFor="name"
            className=" h-full flex items-center  absolute left-0 top-0 p-3 text-white cursor-text"
          >
            <FiUser className="m-2 text-lg" />
            Your Name
          </label>
        </div>
        <div className=" mb-10 relative">
          <input
            type="number"
            name="number"
            required
            id="phone"
            placeholder=" "
            className="w-full p-3 outline-none border-2 border-white bg-transparent text-sm"
          />
          <label
            htmlFor="phone"
            className=" h-full absolute flex items-center  left-0 top-0 p-3 text-white cursor-text"
          >
            <BsTelephoneForward className="m-2 text-lg" />
            Your Phone Number
          </label>
        </div>

        <div className=" mb-10 relative">
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder=" "
            className="w-full p-3 outline-none border-2 border-white bg-transparent text-sm"
          />
          <label
            htmlFor="email"
            className=" h-full absolute flex items-center  left-0 top-0 p-3 text-white cursor-text"
          >
            <AiOutlineMail className="m-2 text-lg" />
            Your Email
          </label>
        </div>

        {/* <div className=" relative  flex justify-center items-center w-full bg-transparent cursor-pointer p-2 outline-none border-2 border-white"> */}
        <input
          type="submit"
          value="Send"
          className="w-full bg-transparent cursor-pointer p-2 outline-none border-2 border-white"
        />
        {/* <BsSend className="mx-2 text-xl " /> */}
        {/* </div> */}
      </form>
      <div
        className=" absolute text-2xl  top-20 right-24 cursor-pointer hover:text-red-300 duration-300"
        onClick={() => props.show()}
      >
        <MdCancelPresentation />
      </div>
    </div>,
    document.getElementById("form")
  );
};

export default Form;
