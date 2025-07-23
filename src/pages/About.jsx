import React, { useState } from "react";
import {
  MdLocalHospital,
  MdGavel,
  MdCardMembership,
  MdAttachMoney,
  MdEventAvailable,
  MdSecurity,
} from "react-icons/md";

const infoCards = [
  {
    title: "Our History",
    description:
      "Founded in the early 1960s, the association has served as a vital platform for cine and TV art professionals, safeguarding their creative and financial rights.",
  },
  {
    title: "Mission & Vision",
    description:
      "Our mission is to protect and empower art directors and costume designers. We envision a community built on creativity, dignity, and fairness.",
  },
  {
    title: "Benefits of Membership",
    description:
      "Access to welfare schemes, medical support, pension, dispute resolution, legal help, and invitations to community events.",
  },
  {
    title: "Goal & Objectives",
    description:
      "Ensure artistic recognition, fair remuneration, post-retirement security, and foster professional unity and excellence.",
  },
];

const departments = [
  {
    name: "Medical",
    icon: <MdLocalHospital className="text-red-500 text-2xl" />,
    description:
      "Healthcare support, emergencies, and medical assistance programs.",
  },
  {
    name: "Dispute Resolution",
    icon: <MdGavel className="text-yellow-500 text-2xl" />,
    description:
      "Settles internal conflicts and ensures fair and legal dispute handling.",
  },
  {
    name: "Retirement / Pension",
    icon: <MdSecurity className="text-green-600 text-2xl" />,
    description:
      "Manages post-retirement welfare and pension planning for members.",
  },
  {
    name: "Membership",
    icon: <MdCardMembership className="text-purple-500 text-2xl" />,
    description:
      "Handles member records, ID generation, and onboarding processes.",
  },
  {
    name: "Finance",
    icon: <MdAttachMoney className="text-blue-600 text-2xl" />,
    description:
      "Budgeting, fund allocation, audits, and transparent financial tracking.",
  },
  {
    name: "Welfare & Events",
    icon: <MdEventAvailable className="text-pink-500 text-2xl" />,
    description:
      "Organizes welfare drives, celebrations, and professional networking events.",
  },
];

const AboutSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (title) => {
    setOpenCard(openCard === title ? null : title);
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center relative py-16 px-4 md:px-16"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/director-photography-camera-his-hands-600nw-2322694091.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-white text-center lg:mt-15 md:mt-20 mt-10">
        <h2 className="text-4xl font-bold mb-10">About</h2>

        <div className="space-y-6 text-left">
          {infoCards.map((card, index) => (
            <div
              key={index}
              onClick={() => toggleCard(card.title)}
              className="cursor-pointer bg-white/90 text-gray-800 rounded-lg shadow-md p-6 backdrop-blur-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-700">
                {card.title}
              </h3>
              {openCard === card.title && (
                <p className="mt-2 text-sm text-gray-700">{card.description}</p>
              )}
            </div>
          ))}

          {/* Committee Members Card */}
          <div
            onClick={() => toggleCard("Committee Members")}
            className="cursor-pointer bg-white/90 text-gray-800 rounded-lg shadow-md p-6 backdrop-blur-sm hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-indigo-700">
              Committee Members → Department Allocation
            </h3>
            {openCard === "Committee Members" && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-white transition"
                  >
                    <div>{dept.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold">{dept.name}</h4>
                      <p className="text-sm text-gray-700">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
