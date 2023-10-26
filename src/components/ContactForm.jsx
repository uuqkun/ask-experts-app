import { HeaderSection, Button } from "./components";
import { companyProfile } from "../constants/contact/contact";
import { NavLink } from "react-router-dom";
const ContactForm = () => {
  return (
    <section className="flex justify-center mb-10 relative pt-20">
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

          <ul>
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
        <form>
          <fieldset>
            <div>
              <div>
                <label for="fullname">
                  Fullname <span aria-label="required">*</span>
                </label>
                <input id="fullname" type="text" name="fullname" required />
              </div>
              <div>
                <label for="email">
                  Email <span aria-label="required">*</span>
                </label>
                <input id="email" type="text" name="email" required />
              </div>
              <div>
                <label for="phone">
                  Phone <span aria-label="required">*</span>
                </label>
                <input id="phone" type="text" name="phone" required />
              </div>
            </div>
            {/* textarea */}
            <div>
              <label for="company">Company</label>
              <input id="company" type="text" name="company" />
            </div>
          </fieldset>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </section>
  );
};

export default ContactForm;
