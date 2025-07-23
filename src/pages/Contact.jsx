import React from "react";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/director-photography-camera-his-hands-600nw-2322694091.jpg')",
      }}
    >
      <div className="w-full max-w-7xl bg-white/30 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 lg:mt-30 md:mt-30 mt-35">
        {/* Left - Contact Form */}
        <form className="md:w-1/2 w-full space-y-4">
          <h2 className="text-xl font-bold text-gray-300">Contact Us</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            placeholder="Description"
            className="w-full border rounded px-4 py-2 h-24"
          ></textarea>
          <button
            type="submit"
            className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800"
          >
            Submit
          </button>
        </form>

        {/* Right - Info + Map stacked vertically */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-900">
            <h2 className="text-xl font-bold">Get in Touch</h2>
            <div className="flex items-start gap-2">
              <MdCall className="text-xl mt-1" />
              <span>022-49241676 / 022-40158930</span>
            </div>
            <div className="flex items-start gap-2">
              <MdEmail className="text-xl mt-1" />
              <span>info@cintaa.net</span>
            </div>
            <div className="flex items-start gap-2">
              <MdLocationOn className="text-xl mt-1" />
              <span>
                CINTAA Tower, 5th floor, Next to Kokilaben Dhirubhai Ambani
                Hospital, Gate No - 4, Four Bunglow, Andheri West, Mumbai - 400
                053
              </span>
            </div>
          </div>

          {/* Map only on right-bottom */}
          <div className="w-full h-64">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120660.24177292914!2d72.71993916191446!3d19.082688049079364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e4796e2e9%3A0xdeaebac0201892f!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625561466807!5m2!1sen!2sin"
              className="w-full h-full rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
