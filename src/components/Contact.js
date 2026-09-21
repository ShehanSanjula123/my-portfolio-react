// import { useState, useRef } from 'react'
// import { Mail, Phone, MapPin } from 'lucide-react'
// import emailjs from '@emailjs/browser'


// export default function Contact() {
//   const form = useRef()
//   const [message, setMessage] = useState("")

//   const sendEmail = (e) => {
//     e.preventDefault()

//     emailjs
//     .sendForm('service_gn7k99b', 'template_hdwewth', form.current, {
//       publicKey: 'MYppj_tfb2RRMXBBf',
//     })
//     .then(
//       () => {
//         console.log('SUCCESS!')
//         setMessage("Message sent successfully!") // Set success message
//         form.current.reset() // Clear the form
//       },
//       (error) => {
//         console.log('FAILED...', error.text)
//         setMessage("Failed to send message. Please try again.") // Set error message
//       }
//     )
// }

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
//         <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
//           <div className="md:w-1/2">
//             <form ref={form} onSubmit={sendEmail} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-2 font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="from_name"
//                   required
//                   className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="from_email"
//                   required
//                   className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2 font-medium">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={4}
//                   className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="md:w-1/2 space-y-4">
//             <div className="flex items-center">
//               <Mail className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
//               <span>shehansanjula321@gmail.com</span>
//             </div>
//             <div className="flex items-center">
//               <Phone className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
//               <span>+94 (70) 4196-549</span>
//             </div>
//             <div className="flex items-center">
//               <MapPin className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
//               <span>Colombo, SriLanka</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_gn7k99b",
        "template_hdwewth",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "MYppj_tfb2RRMXBBf"
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-24 dark:bg-slate-950 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Get In Touch
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Let's work together.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600 dark:text-slate-400">
              I'm currently open to Associate and Junior Software Engineer
              opportunities. If you have an opportunity, project, or simply
              want to connect, feel free to reach out.
            </p>

            <div className="mt-10 space-y-4">

              <a
                href="mailto:shehansanjula321@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-slate-900"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">Email</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400">
                    shehansanjula321@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">Location</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              <a
                href="https://github.com/ShehanSanjula123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <Github size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/shehan-sanjula-29396b2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                  <CheckCircle2 size={17} />
                  Message sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                  <AlertCircle size={17} />
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}