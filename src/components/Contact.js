import { useState, useRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'


export default function Contact() {
  const form = useRef()
  const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm('service_gn7k99b', 'template_hdwewth', form.current, {
      publicKey: 'MYppj_tfb2RRMXBBf',
    })
    .then(
      () => {
        console.log('SUCCESS!')
        setMessage("Message sent successfully!") // Set success message
        form.current.reset() // Clear the form
      },
      (error) => {
        console.log('FAILED...', error.text)
        setMessage("Failed to send message. Please try again.") // Set error message
      }
    )
}

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              <span>shehansanjula321@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              <span>+94 (70) 4196-549</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              <span>Colombo, SriLanka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}