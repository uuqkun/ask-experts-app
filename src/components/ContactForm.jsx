import { NavLink } from "react-router-dom";
import { useState } from "react";

import { HeaderSection, Button } from "./components";
import { companyProfile } from "../constants/contact/contact";

const ContactForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const msgSentModal = document.querySelector("#message-sent");

    msgSentModal.showModal();
    setTimeout(() => {
      msgSentModal.close();
    }, 2500);
  };

  return (
    <section className="flex justify-center mb-40 relative pt-20">
      <main className="lg:w-[1210px] w-[85%] flex lg:flex-row flex-col justify-between">
        {/* Text */}
        <div className="lg:w-[420px] w-full">
          <HeaderSection
            {...{
              alignContent: "left",
              tagText: "Contact",
              tagVariant: "yellow2",
              content: "Contact Us. It’s Easy.",
            }}
          />
          <p className="mt-4 mb-14">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative.
          </p>

          <ul className="lg:mb-0 mb-20">
            {companyProfile.map((cp) => (
              <NavLink
                key={cp.title}
                to={cp.link}
                target="_blank"
                className="flex gap-3 items-center even:my-14"
              >
                <img src={cp.icon} alt={cp.title} />
                <span>
                  <p>{cp.title}</p>
                  <h6>{cp.detail}</h6>
                </span>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleFormSubmit}>
          <fieldset>
            {/* input fields */}
            <div className="flex flex-wrap lg:w-[688px] gap-7 mb-7">
              <div className="field-container">
                <label htmlFor="fullname">
                  Fullname <span aria-label="required">*</span>
                </label>
                <input
                  id="fullname"
                  type="text"
                  name="fullname"
                  required
                  value={inputs.fullname || ""}
                  placeholder="Achmad Furqon"
                  onChange={handleChange}
                />
              </div>
              <div className="field-container">
                <label htmlFor="email">
                  Email <span aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={inputs.email || ""}
                  placeholder="personalEmail@gmail.com"
                  onChange={handleChange}
                />
              </div>
              <div className="field-container">
                <label htmlFor="phone">
                  Phone <span aria-label="required">*</span>
                </label>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  required
                  value={inputs.phone || ""}
                  placeholder="+62 822 922 939"
                  onChange={handleChange}
                />
              </div>
              <div className="field-container">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={inputs.company || ""}
                  placeholder="Tell your message..."
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* textarea */}
            <div className="field-container w-full">
              <label htmlFor="message">Message</label>
              <textarea
                draggable="false"
                id="message"
                type="text"
                name="message"
                value={inputs.message || ""}
                placeholder="Tell your message..."
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn-base btn-base-pad btn-dark mt-10"
            onClick={handleFormSubmit}
          >
            Send Message
          </button>
        </form>

        <dialog
          id="message-sent"
          className="px-10 py-4 bg-pri-green rounded-xl fixed bottom-0 right-0"
        >
          <p className="text-white">Message Sent</p>
        </dialog>
      </main>
    </section>
  );
};

export default ContactForm;
