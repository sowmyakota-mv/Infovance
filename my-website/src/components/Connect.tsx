import React, { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import emailjs from "emailjs-com"; // ✅ Added import

const Connect: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    // phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(false);
            setTimeout(() => setAnimate(true), 50);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // ✅ Validation
  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // ✅ Handle Form Submit with EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_brmtotn", // 🔹 Replace with your EmailJS service ID
          "template_1psyg2i", // 🔹 Replace with your EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            location: formData.location,
            phone: formData.phone,
            message: formData.message,
          },
          "xgIkpdkmS-jkAg6nD" // 🔹 Replace with your EmailJS public key
        )
        .then(
          () => {
            setIsSubmitted(true);
            setFormData({
              name: "",
              email: "",
              location: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            console.error("EmailJS Error:", error);
            alert("Something went wrong. Please try again later.");
          }
        );
    }
  };

  return (
    <section
      id="/connect"
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 overflow-hidden"
    >
      {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden mt-16"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/connect-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 z-[2]"></div>

        <div className="relative z-[3] px-6">
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-wide flex flex-wrap justify-center"
            style={{ fontFamily: "'PT Serif', serif" }}
          >
            {"Contact Us".split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block opacity-0"
                style={{
                  animation: animate ? `letterEnter 0.6s forwards` : "none",
                  animationDelay: animate ? `${i * 0.08}s` : "0s",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* 💠 3-COLUMN INFO SECTION */}
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 mt-16 md:mt-16">
        {/* Location */}
        <a
          href="https://www.google.com/maps/place/Regus+-+Milton+Keynes+Atterbury+Lakes/@52.0517324,-0.7205236,15z/data=!3m2!4b1!5s0x4877ab2654cb230d:0x4cb88f3ef62e2e15!4m6!3m5!1s0x4877ab0d8503ba1f:0x3f0954f8ee335f91!8m2!3d52.0517206!4d-0.7020697!16s%2Fg%2F1tfjkn0q?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 w-[80%] ml-10 md:w-full md:ml-0 md:h-[80%] flex flex-col justify-center items-center text-center p-8 md:rounded-l-3xl shadow-md rounded-t-3xl md:rounded-r-none"
        >
          <MapPin className="w-10 h-10 text-teal-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
          <p className="text-gray-700 max-w-xs">
            Regus, Milton Keynes, Atterbury Lakes, London, UK
          </p>
        </a>

        {/* Center teal box */}
        <div className="bg-teal-600 text-white flex flex-col justify-center items-center p-10 md:h-[100%] relative md:-top-4 shadow-lg z-10 rounded-3xl md:rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">Let’s Connect</h3>
          <p className="text-lg max-w-md text-center leading-relaxed">
            Whether you’re exploring collaboration, partnership, or career
            opportunities - we’re just one message away.
          </p>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-100 w-[80%] ml-10 md:w-full md:ml-0 md:h-[80%] flex flex-col justify-center items-center text-center p-8 md:rounded-r-3xl shadow-md rounded-b-3xl md:rounded-b-none">
          <Phone className="w-10 h-10 text-teal-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Contact Details
          </h3>
          <p className="text-gray-700">
            <strong>Email: </strong>
            <a
              href="mailto:info@infovance.com"
              className="text-teal-600 hover:underline"
            >
              info@infovancesolutions.com
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Phone: </strong>
            <a
              href="tel:+919876543210"
              className="text-teal-600 hover:underline"
            >
              +44  75 444 76666
            </a>
          </p>
        </div>
      </div>

      {/* 💬 CONTACT FORM SECTION */}
      <div className="bg-white py-16 px-8 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Send Us a Message
          </h2>

          {isSubmitted ? (
            <div className="bg-teal-50 border border-teal-200 rounded-3xl shadow-md p-12 text-center">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">
                Thank You!
              </h3>
              <p className="text-lg text-gray-700">
                Your message has been sent successfully. We’ll get back to you
                soon.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name & Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 text-left">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 text-left">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Location & Phone */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="Enter your location"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none transition-all"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                    Contact Number
                  </label>
                  <PhoneInput
                    country={"gb"}
                    value={formData.phone}
                    onChange={(phone) =>
                      setFormData((prev) => ({ ...prev, phone }))
                    }
                    inputClass="!w-full !border !border-gray-300 !rounded-lg !p-3 !pl-14 !focus:ring-2 !focus:ring-[#0FB9B1] !focus:outline-none"
                    buttonClass="!bg-white !border-gray-300 !mr-2"
                    dropdownClass="!text-gray-800"
                    containerClass="w-full"
                    placeholder="Enter your phone number"
                    enableSearch={true}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none transition-all resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Connect;
