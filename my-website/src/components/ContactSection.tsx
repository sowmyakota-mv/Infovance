import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ScrollAnimation from "../animation/ScrollAnimation";

const ContactSection: React.FC = () => {
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
      phone: "",
      message: "",
    });
  
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const companyPhoneCode=+44
    const companyPhoneNumber=1234567890
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
 
   const validateForm = () => {
     const newErrors = {
       name: "",
       email: "",
       phone: "",
       message: "",
     };
     let isValid = true;
 
     // Name validation
     if (!formData.name.trim()) {
       newErrors.name = "Full Name is required";
       isValid = false;
     }
 
     // Email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!formData.email.trim()) {
       newErrors.email = "Email Address is required";
       isValid = false;
     } else if (!emailRegex.test(formData.email)) {
       newErrors.email = "Please enter a valid email address";
       isValid = false;
     }
 
     // Phone validation
     if (!formData.phone.trim()) {
       newErrors.phone = "Contact Number is required";
       isValid = false;
     } else if (formData.phone.length < 8) {
       newErrors.phone = "Please enter a valid phone number";
       isValid = false;
     }
 
     // Message validation
     if (!formData.message.trim()) {
       newErrors.message = "Message cannot be empty";
       isValid = false;
     }
 
     setErrors(newErrors);
     return isValid;
   };
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if (validateForm()) {
       setIsSubmitted(true);
     }
   };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 relative">
      {/* ✅ CSS FIX for phone dropdown */}
      <style>{`
        .react-tel-input {
          position: relative !important;
          z-index: 50 !important;
        }
        .react-tel-input .country-list {
          z-index: 99999 !important;
          position: absolute !important;
          background-color: white !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>

      <div className="grid md:grid-cols-5 gap-10 items-stretch max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <div className="md:col-span-3 flex flex-col justify-between">
          <div>
            <ScrollAnimation delay={100}>
              <h4 className="font-semibold uppercase tracking-wide" style={{ color: "#112F55" }}>
                Connect With Us
              </h4>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: "#112F55" }}>
                Let’s Build Something Extraordinary Together
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={500}>
              <p className="mt-3 mb-8 max-w-2xl text-lg" style={{ color: "#112F55" }}>
                We’re here to turn your digital vision into a powerful reality. Share your goals with us  
                our team will help craft solutions that inspire innovation, growth, and long-term success.
              </p>
            </ScrollAnimation>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-400 rounded-xl p-8 text-center shadow-md transition-all">
                <h3 className="text-2xl font-semibold text-green-700 mb-3">🎉 Thank You!</h3>
                <p className="text-gray-700">
                  We’ve received your message. Our team will reach out to you shortly!
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-left text-sm font-semibold text-gray-800 mb-2">
                    Full Name <span className="text-red-500">*</span>
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

              {/* Location + Phone */}
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
                    Contact Number <span className="text-red-500">*</span>
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
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 text-left">
                      {errors.phone}
                    </p>
                  )}
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

        {/* RIGHT SIDE - Contact Info */}
        <div
          className="md:col-span-2 rounded-3xl shadow-lg flex flex-col justify-center p-10"
          style={{ backgroundColor: "#112F55" }}
        >
          <ScrollAnimation delay={300}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#E8F1FF" }}>
              Contact Information
            </h3>
          </ScrollAnimation>
          <ScrollAnimation delay={500}>
            <p className="mb-6 text-base" style={{ color: "#C8D6EE" }}>
              Whether you’re ready to start your next big project or just want to say hello,
              we’d love to hear from you.
            </p>
          </ScrollAnimation>

          <div className="space-y-6">
            {/* Email */}
            <ScrollAnimation delay={700}>
              <div className="bg-[#0E2746] rounded-2xl shadow p-5 flex items-center gap-4 hover:shadow-md transition">
                <Mail className="w-6 h-6" style={{ color: "#E8F1FF" }} />
                <div>
                  <p className="font-semibold text-left" style={{ color: "#E8F1FF" }}>
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
              </div>
            </ScrollAnimation>

            {/* Phone */}
            <ScrollAnimation delay={900}>
              <div className="bg-[#0E2746] rounded-2xl shadow p-5 flex items-center gap-4 hover:shadow-md transition">
                <Phone className="w-6 h-6" style={{ color: "#E8F1FF" }} />
                <div>
                  <p className="font-semibold text-left" style={{ color: "#E8F1FF" }}>
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
              </div>
            </ScrollAnimation>

            {/* Location */}
            <ScrollAnimation delay={1100}>
              <div className="bg-[#0E2746] rounded-2xl shadow p-5 flex items-center gap-4 hover:shadow-md transition">
                <MapPin className="w-6 h-6" style={{ color: "#E8F1FF" }} />
                <div>
                  <p className="font-semibold text-left" style={{ color: "#E8F1FF" }}>
                    Location
                  </p>
                  <p className="text-sm" style={{ color: "#C8D6EE" }}>
                    123 Innovation Street, London, UK
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
