import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="contact">
      <footer
        className="backdrop-blur-md border-t mt-16"
        style={{ background: "var(--nav-bg)", borderColor: "var(--border-color)", color: "var(--nav-text)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          {/* Contact Section */}
          <div className="space-y-3 flex flex-col items-center">
            <h2 className="text-lg font-semibold">Contact Info</h2>
            <p className="flex items-center justify-center text-sm opacity-80 space-x-2">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:shettyshashank2002@email.com" className="hover:text-blue-600 transition">shettyshashank2002@email.com</a>
            </p>
            <p className="flex items-center justify-center text-sm opacity-80 space-x-2">
              <FaPhone className="text-green-500" />
              <a href="tel:+919666368880" className="hover:text-green-600 transition">+91 9666368880</a>
            </p>
            <div className="flex justify-center space-x-4 text-2xl mt-2">
              <a href="https://github.com/shashank9666" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-blue-600 transition" aria-label="GitHub"><FaGithub /></a>
              <a href="https://instagram.com/shashank_0931" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-pink-500 transition" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com/in/shashank-shetty-58961a244" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-blue-700 transition" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-3 flex flex-col items-center">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-1 text-sm opacity-80">
              <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center py-4 text-xs opacity-60">&copy; {new Date().getFullYear()} Shashank Shetty. All rights reserved.</div>
      </footer>
    </section>
  );
};

export default Footer;