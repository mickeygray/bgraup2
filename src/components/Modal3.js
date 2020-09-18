import React, { useState, useEffect } from "react";

const Modal3 = (props) => {
  useEffect(() => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      problem: "",
    });
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    problem: "",
  });

  const onChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const { fullName, email, phone, problem } = form;

  return (
    <div>
      <form
        name='form'
        method='post'
        action='/thanks/'
        data-netlify='true'
        data-netlify-honeypot='bot-field'>
        <span style={{ float: "right" }}>
          <button onClick={props.toggleModal3}> X</button>
        </span>
        <input type='hidden' name='form-name' value='form' />
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          onChange={onChange}
          value={fullName}
        />
        <input
          type='text'
          name='email'
          placeholder='e-mail'
          onChange={onChange}
          value={email}
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone Number'
          onChange={onChange}
          value={phone}
        />
        <label htmlFor='years'>What information do you have?</label>
        <textarea
          type='text'
          name='problem'
          onChange={onChange}
          value={problem}
        />
        <button type='submit'>Leave Us A Message</button>
      </form>
    </div>
  );
};

export default Modal3;
