import Head from "next/head";
 

export default function Contact() {
  return (
    <>
      <Head>
        <title>CONTACT US</title>
      </Head>
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>

        {/* Contact Form */}
        <form
          action={`mailto:muhammadz24@gmail.com`}
          method="post"
          encType="text/plain"
          className="contact-form"
        >
          <label className="form-label">Your Email:</label>
          <input type="email" name="email" placeholder="Enter your email" className="form-input" required />

          <label className="form-label">Message:</label>
          <textarea name="message" placeholder="Enter your message" className="form-textarea" required />

          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>

        {/* Floating Bubbles */}
        <div className="bubble-container">
          <div className="bubble bubble-white"></div>
          <div className="bubble bubble-blue"></div>
          <div className="bubble bubble-purple"></div>
          <div className="bubble bubble-pink"></div>
          <div className="bubble bubble-green"></div>
          <div className="bubble bubble-yellow"></div>
        </div>
      </div>
    </>
  );
}
