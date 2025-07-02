"use client";
import {
  Twitter,
  Linkedin,
  Mail,
  Send,
  MessageCircleMore,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="px-6 py-12 mt-12 bg-black dark:bg-white text-white dark:text-black">
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <img className="w-24" src="/logo.png" alt="" />
            <div>Nebula.</div>
          </h2>
          <p className="text-[#d6d6d6] dark:text-black max-w-md">
            Your personal finance companion. Track your expenses, manage your
            budget, and gain insights into your spending habits with ease.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Reach out to me</h3>
          <div className="flex gap-4 text-white dark:text-black">
            <a
              href="https://x.com/Viraj__Pawar"
              target="_blank"
              className="hover:text-[#e0d6cf] dark:hover:text-[#604c3f]"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/viraj-ap/"
              target="_blank"
              className="hover:text-[#e0d6cf] dark:hover:text-[#604c3f]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:viraj25092004@gmail.com"
              className="hover:text-[#e0d6cf] dark:hover:text-[#604c3f]"
              aria-label="Email"
              target="_blank"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.github.com/viraj-ap"
              className="hover:text-[#e0d6cf] dark:hover:text-[#604c3f]"
              aria-label="Email"
              target="_blank"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white dark:border-black pt-6 text-sm text-[#d6d6d6] dark:text-black text-center font-semibold text-md">
        <p>&copy; {new Date().getFullYear()} Viraj. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="#"
            className="hover:text-[#e0d6cf] dark:hover:text-[#604c3f]"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-[#e0d6cf] dark:hover:text-[#604c3f]"
          >
            Terms of Service
          </a>
        </div>
        <div>
          Made with ❤️ by{" "}
          <span className="text-cyan-400">
            {" "}
            <a href="https://www.github.com/viraj-ap" target="_blank">
              Viraj :)
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
