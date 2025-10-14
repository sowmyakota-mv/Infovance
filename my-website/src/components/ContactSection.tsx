import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ScrollAnimation from "../animation/ScrollAnimation";

const ContactSection: React.FC = () => {
  const [phone, setPhone] = useState("");

  // ✅ Keep company phone info constant
  const companyPhoneCode = "+91";
  const companyPhoneNumber = "1234567890";

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-5 gap-10 items-stretch max-w-7xl mx-auto">
        {/* LEFT SIDE - Contact Form (60%) */}
        <div className="md:col-span-3 flex flex-col justify-between">
          <div>
            <ScrollAnimation delay={100}>
            <h4
              className="font-semibold uppercase tracking-wide"
              style={{ color: "#112F55" }}
            >
              Connect With Us
            </h4></ScrollAnimation>
            <ScrollAnimation delay={300}>
            <h2
              className="text-3xl md:text-4xl font-bold mt-2"
              style={{ color: "#112F55" }}
            >
              Let’s Build Something Extraordinary Together
            </h2></ScrollAnimation>
            <ScrollAnimation delay={500}>
            <p
              className="mt-3 mb-8 max-w-2xl text-lg"
              style={{ color: "#112F55" }}
            >
              We’re here to turn your digital vision into a powerful reality.
              Share your goals with us — our team will help craft solutions that
              inspire innovation, growth, and long-term success.
            </p></ScrollAnimation>

            {/* Contact Form */}
            <form className="space-y-5">
                <ScrollAnimation delay={700}>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#112F55]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#112F55]"
                />
              </div></ScrollAnimation>
              <ScrollAnimation delay={900}>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* ✅ Phone Input with Flag + Country Code */}
                <div className="w-full">
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={setPhone}
                    placeholder="Enter your phone number"
                    inputStyle={{
                      width: "100%",
                      borderRadius: "0.75rem",
                      border: "1px solid #D1D5DB",
                      paddingLeft: "58px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      fontSize: "1rem",
                    }}
                    buttonStyle={{
                      borderRadius: "0.75rem 0 0 0.75rem",
                      border: "1px solid #D1D5DB",
                      backgroundColor: "#fff",
                    }}
                    dropdownStyle={{
                      borderRadius: "0.75rem",
                    }}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Which service are you looking for?"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#112F55]"
                />
              </div></ScrollAnimation>
              <ScrollAnimation delay={1100}>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#112F55]"
              ></textarea></ScrollAnimation>
            </form>
          </div>

          {/* Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-[#112F55] hover:bg-[#0d2546] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Info (40%) */}
        <div
          className="md:col-span-2 rounded-3xl shadow-lg flex flex-col justify-center p-10"
          style={{ backgroundColor: "#112F55" }}
        ><ScrollAnimation delay={300}>
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#E8F1FF" }}>
            Contact Information
          </h3></ScrollAnimation>
          <ScrollAnimation delay={500}>
          <p className="mb-6 text-base" style={{ color: "#C8D6EE" }}>
            Whether you’re ready to start your next big project or just want to
            say hello, we’d love to hear from you.
          </p></ScrollAnimation>
          
          <div className="space-y-6">
            {/* Email */}<ScrollAnimation delay={700}>
            <div className="bg-[#0E2746] rounded-2xl shadow p-5 flex items-center gap-4 hover:shadow-md transition">
              <Mail className="w-6 h-6" style={{ color: "#E8F1FF" }} />
              <div>
                <p className="font-semibold" style={{ color: "#E8F1FF" }}>
                  Email
                </p>
                <a
                  href="mailto:info@infovance.com"
                  className="hover:underline text-sm"
                  style={{ color: "#C8D6EE" }}
                >
                  info@infovance.com
                </a>
              </div>
            </div></ScrollAnimation>

            {/* ✅ Company Phone (Fixed, not linked to user input) */}
            <ScrollAnimation delay={900}>
            <div className="bg-[#0E2746] rounded-2xl shadow p-5 flex items-center gap-4 hover:shadow-md transition">
              <Phone className="w-6 h-6" style={{ color: "#E8F1FF" }} />
              <div>
                <p className="font-semibold" style={{ color: "#E8F1FF" }}>
                  Phone
                </p>
                <a
                  href={`tel:${companyPhoneCode}${companyPhoneNumber}`}
                  className="hover:underline text-sm"
                  style={{ color: "#C8D6EE" }}
                >
                  ({companyPhoneCode} {companyPhoneNumber})
                </a>
              </div>
            </div></ScrollAnimation>

            {/* Location */}
            <ScrollAnimation delay={1100}>
            <div className="bg-[#0E2746] rounded-2xl shadow p-5 flex items-center gap-4 hover:shadow-md transition">
              <MapPin className="w-6 h-6" style={{ color: "#E8F1FF" }} />
              <div>
                <p className="font-semibold" style={{ color: "#E8F1FF" }}>
                  Location
                </p>
                <p className="text-sm" style={{ color: "#C8D6EE" }}>
                  123 Innovation Street, London, UK
                </p>
              </div>
            </div></ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
