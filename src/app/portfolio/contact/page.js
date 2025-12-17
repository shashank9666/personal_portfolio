"use client";

import React, { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "shettyshashank2002@gmail.com",
      link: "mailto:shettyshashank2002@gmail.com",
      description: "Direct message for collaborations",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9666368880",
      link: "tel:+919666368880",
      description: "Available for urgent discussions",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Hyderabad, India",
      link: "#",
      description: "Open to remote opportunities",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect Professionally",
      link: "https://linkedin.com/in/your-profile",
      description: "Let's grow our network",
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "💻", url: "https://github.com/your-profile" },
    { name: "LinkedIn", icon: "🔗", url: "https://linkedin.com/in/your-profile" },
    { name: "Portfolio", icon: "🌐", url: "https://your-portfolio.com" },
    { name: "Resume", icon: "📄", url: "/Shashank_Shetty_Resume.pdf" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const gridPatternStyle = {
    backgroundImage: `linear-gradient(var(--text-color) 1px, transparent 1px),
                     linear-gradient(90deg, var(--text-color) 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-[rgb(var(--bg-color-rgb))] relative overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="floating-bg-1 absolute top-1/4 left-1/6 w-72 h-72 bg-(--text-color) rounded-full blur-xl"
          aria-hidden="true"
        />
        <div
          className="floating-bg-2 absolute bottom-1/3 right-1/6 w-64 h-64 bg-(--text-color) rounded-full blur-xl"
          aria-hidden="true"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={gridPatternStyle}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10 pb-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-(--text-color) mb-4 md:mb-6 tracking-tight">
            CONTACT
          </h1>
          <div className="w-24 md:w-32 h-1 bg-(--text-color) mx-auto rounded-full opacity-80" />
          <p className="text-lg md:text-xl lg:text-2xl text-(--text-color) opacity-80 mt-6 md:mt-8 max-w-2xl mx-auto font-light px-4">
            Let&apos;s discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-(--text-color) mb-6 md:mb-8 opacity-90">
              Get In Touch
            </h2>

            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="contact-card group block relative bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm md:backdrop-blur-md border border-(--text-color) border-opacity-15 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-opacity-30 transition-all duration-300 hover:scale-[1.01] hover:shadow-sm md:hover:scale-[1.02] md:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--text-color) focus:ring-opacity-30"
                aria-label={`Contact via ${method.title}: ${method.value}`}
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="text-2xl md:text-3xl group-hover:scale-105 transition-transform duration-300 opacity-80 shrink-0">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-(--text-color) mb-1 md:mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300 truncate">
                      {method.title}
                    </h3>
                    <p className="text-base md:text-lg text-(--text-color) opacity-80 mb-1 group-hover:opacity-90 transition-opacity duration-300 wrap-break-word">
                      {method.value}
                    </p>
                    <p className="text-xs md:text-sm text-(--text-color) opacity-60 line-clamp-2">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="social-section mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-(--text-color) mb-4 md:mb-6 opacity-90">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link group relative bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm border border-(--text-color) border-opacity-15 rounded-lg md:rounded-xl p-3 md:p-4 hover:border-opacity-30 transition-all duration-300 hover:scale-[1.03] md:hover:scale-110 hover:shadow-sm md:hover:shadow-md text-center focus:outline-none focus:ring-2 focus:ring-(--text-color) focus:ring-opacity-30"
                    aria-label={`Visit ${social.name}`}
                    target={social.url.startsWith("http") ? "_blank" : "_self"}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="text-xl md:text-2xl mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300 opacity-80">
                      {social.icon}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-(--text-color) opacity-80 group-hover:opacity-100 transition-opacity duration-300 truncate">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-[rgba(var(--bg-color-rgb),0.8)] backdrop-blur-sm md:backdrop-blur-md border border-(--text-color) border-opacity-15 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-opacity-25 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-(--text-color) mb-4 md:mb-6 opacity-90">
                Send Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4 opacity-80" aria-hidden="true">
                    ✅
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-(--text-color) mb-2 opacity-90">
                    Message Sent!
                  </h4>
                  <p className="text-(--text-color) opacity-80 text-sm md:text-base">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="form-element">
                      <label
                        htmlFor="name"
                        className="block text-(--text-color) opacity-80 mb-1 md:mb-2 font-medium text-sm md:text-base"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-[rgba(var(--bg-color-rgb),0.6)] backdrop-blur-sm border border-(--text-color) border-opacity-20 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-(--text-color) placeholder-(--text-color) placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-(--text-color) focus:ring-opacity-30 transition-all duration-300 text-sm md:text-base"
                        placeholder="Your Name"
                        aria-label="Your Name"
                      />
                    </div>
                    <div className="form-element">
                      <label
                        htmlFor="email"
                        className="block text-(--text-color) opacity-80 mb-1 md:mb-2 font-medium text-sm md:text-base"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-[rgba(var(--bg-color-rgb),0.6)] backdrop-blur-sm border border-(--text-color) border-opacity-20 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-(--text-color) placeholder-(--text-color) placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-(--text-color) focus:ring-opacity-30 transition-all duration-300 text-sm md:text-base"
                        placeholder="your.email@example.com"
                        aria-label="Your Email"
                      />
                    </div>
                  </div>

                  <div className="form-element">
                    <label
                      htmlFor="subject"
                      className="block text-(--text-color) opacity-80 mb-1 md:mb-2 font-medium text-sm md:text-base"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      className="w-full bg-[rgba(var(--bg-color-rgb),0.6)] backdrop-blur-sm border border-(--text-color) border-opacity-20 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-(--text-color) placeholder-(--text-color) placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-(--text-color) focus:ring-opacity-30 transition-all duration-300 text-sm md:text-base"
                      placeholder="Project Discussion"
                      aria-label="Email Subject"
                    />
                  </div>

                  <div className="form-element">
                    <label
                      htmlFor="message"
                      className="block text-(--text-color) opacity-80 mb-1 md:mb-2 font-medium text-sm md:text-base"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full bg-[rgba(var(--bg-color-rgb),0.6)] backdrop-blur-sm border border-(--text-color) border-opacity-20 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-(--text-color) placeholder-(--text-color) placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-(--text-color) focus:ring-opacity-30 transition-all duration-300 resize-none text-sm md:text-base"
                      placeholder="Tell me about your project..."
                      aria-label="Your Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-btn w-full bg-(--text-color) text-[rgb(var(--bg-color-rgb))] py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:opacity-90 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-(--text-color) focus:ring-opacity-50"
                    aria-label="Send Message"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 md:mt-20 pt-6 md:pt-8 border-t border-(--text-color) border-opacity-20">
          <p className="text-(--text-color) opacity-70 text-base md:text-lg">
            Open to <span className="font-semibold opacity-90">Full-Stack Development</span> opportunities &{" "}
            <span className="font-semibold opacity-90">3D Web Projects</span>
          </p>
          <p className="text-(--text-color) opacity-60 text-xs md:text-sm mt-1 md:mt-2">
            Available for remote positions worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
