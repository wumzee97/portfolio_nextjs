"use client";

import { useState } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import linkedinImg from "../assets/images/linkedin.svg";
import githubImg from "../assets/images/github.svg";
import twitterImg from "../assets/images/x.svg";
import instagramImg from "../assets/images/instagram.svg";

const LetsConnectSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting traditionally
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        "service_h5bnmkn", // Replace with your EmailJS service ID
        "template_0o58jlo", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "x8BRN7l0mENgd7Cn3" // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:grid grid-cols-12 gap-5 px-4 lg:px-40 pb-14" id="contact">
      <div className="col-span-6 flex flex-col justify-between">
        <div>
          <p className="font-bebas text-[43px] lg:text-[76px] leading-[100%] text-white">
            Let's connect
          </p>
          <p className="text-neutral-offwhite leading-[150%] mt-4">
            Say hello at &nbsp;
            <a
              href="mailto:hello@adewumialabi.com"
              className="text-white border-b border-primary"
            >
              hello@adewumialabi.com
            </a>
          </p>
          <p className="text-neutral-offwhite leading-[150%] mt-2">
            For more info, here's my{" "}
            <a href="" className="text-white border-b border-primary">
              resume
            </a>
          </p>
          <div className="flex mt-10">
            <button>
              <Image src={linkedinImg} height={32} width={32} alt="LinkedIn" />
            </button>
            <button className="ml-4">
              <Image src={githubImg} height={32} width={32} alt="GitHub" />
            </button>
            <button className="ml-4">
              <Image src={twitterImg} height={32} width={32} alt="Twitter" />
            </button>
            <button className="ml-4">
              <Image src={instagramImg} height={32} width={32} alt="Instagram" />
            </button>
          </div>
        </div>

        <p className="font-manrope text-neutral-offwhite leading-[160%] hidden lg:inline">
          © {new Date().getFullYear()} Adewumi Alabi
        </p>
      </div>
      <div className="col-span-6 mt-10 lg:mt-0">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <p className="font-manrope font-medium text-neutral-offwhite leading-[160%] mb-2">
                Name
              </p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded bg-[#1a1a1a] w-full h-[46px] lg:h-[51px] text-white px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <p className="font-manrope font-medium text-neutral-offwhite leading-[160%] mb-2">
                Email
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded bg-[#1a1a1a] w-full h-[46px] lg:h-[51px] text-white px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <p className="font-manrope font-medium text-neutral-offwhite leading-[160%] mb-2">
                Subject
              </p>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="rounded bg-[#1a1a1a] w-full h-[46px] lg:h-[51px] text-white px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <p className="font-manrope font-medium text-neutral-offwhite leading-[160%] mb-2">
                Message
              </p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                className="rounded bg-[#1a1a1a] w-full text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-[140px] h-[54px] rounded-full bg-primary mt-6 font-manrope font-bold uppercase transition-all
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 mt-4">Failed to send message. Please try again.</p>
            )}
          </div>
        </form>

        <p className="font-manrope text-neutral-offwhite leading-[160%] lg:hidden mt-24">
          © {new Date().getFullYear()} Adewumi Alabi
        </p>
      </div>
    </div>
  );
};

export default LetsConnectSection;
