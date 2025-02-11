"use client";
import Link from "next/link";
import Head from "next/head";
import Typewriter from "typewriter-effect";


export default function Home() {
  return (
    <>
      <Head>
        <title>MUHAMMAD PORTFOLIO WEBSITE</title>
      </Head>

      <header className="header">
        <div className="container">
          <Link className="logo" href="/">
            <div className="avatar">
              <img src="/images/Mine.jpg" alt="mz logo" className="avatar-img" />
              <span className="status-indicator"></span>
            </div>
            <span className="logo-text">MUHAMMAD BIN ZAHEER</span>
          </Link>

          <nav className="nav-links">
            <Link className="nav-item" href="/">Home Page</Link>
            <Link className="nav-item" href="/aboutus">About Us</Link>
            <Link className="nav-item" href="/contactus">Contact Us</Link>
            <Link className="nav-item" href="/privacypolicy">Privacy Policy</Link>
          </nav>

          <a
            className="portfolio-button"
            href="https://github.com/muhammadz24"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My Github
          </a>
        </div>
      </header>

      <h1 className="typewriter">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Master NextJs with Muhammad Bin Zaheer!")
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      </h1>

      <div className="images-container">
        <img
          className="image"
          src="https://media.istockphoto.com/id/1124838925/vector/programming-code-application-window.jpg?s=612x612&w=0&k=20&c=2J2JZP7cQltD03QkOMl6JYfzcmD-GN7bjrWVuieD7Jc="
          alt="code image"
        />
        <img className="image" src="/images/codeman.jpg" alt="codeman" />
      </div>

      <div className="card">
        <div className="card-image">
          <img src="/images/mine2.png" alt="myimg" className="card-img" />
        </div>
        <div className="card-content">
          <h3 className="card-title">Muhammad Bin Zaheer</h3>
          <p className="card-text">
            I am a 22 Year Old Tech Guy with strong passion towards IT Industry.
            Currently Studying In ICMA Pakistan and my goal is to implement
            every good knowledge I gain in real business or corporate industry.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </>
  );
}
