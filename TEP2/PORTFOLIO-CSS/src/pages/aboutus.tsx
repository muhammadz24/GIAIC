import Head from "next/head";


export default function About() {  
    return (
      <>
        <Head>
          <title>ABOUT US</title>
        </Head>

        <div className="about-container">
          <div className="about-content">
            
            {/* Skills Section */}
            <div className="skills-container">
              <h2 className="skills-title">Skills</h2>

              {/* TypeScript */}
              <div className="skill">
                <div className="skill-name">TypeScript</div>
                <div className="skill-bar">
                  <div className="skill-progress ts"></div>
                </div>
              </div>

              {/* HTML / CSS */}
              <div className="skill">
                <div className="skill-name">HTML / CSS</div>
                <div className="skill-bar">
                  <div className="skill-progress html-css"></div>
                </div>
              </div>

              {/* Next.js */}
              <div className="skill">
                <div className="skill-name">Next.js</div>
                <div className="skill-bar">
                  <div className="skill-progress nextjs"></div>
                </div>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="vertical-line"></div>

            {/* Profile Image */}
            <img 
              src="/images/Mine.jpg"  
              alt="My profile" 
              className="profile-img"
            />

            {/* About Me Text */}
            <div className="about-text">
              <h1 className="about-title">About Me</h1>
              <p className="about-description">
                I am a dedicated student at the Government of Sindh IT Initiative (Certified in Applied Generative AI) and the Saylani Mass IT Training Course (Modern Web App Development), with a growing passion for technology.
                I’ve developed skills in TypeScript, HTML, and CSS as a front-end developer, and I’m currently expanding my expertise in Next.js to build intuitive, user-friendly applications. I am particularly enthusiastic about the intersection of healthcare and technology, and I aim to leverage my skills in innovative ways to make a positive impact.
              </p>
            </div>

            {/* Bubbles Animation */}
            <div className="bubbles-container">
              <div className="bubble bubble-1"></div>
              <div className="bubble bubble-2"></div>
              <div className="bubble bubble-3"></div>
              <div className="bubble bubble-4"></div>
              <div className="bubble bubble-5"></div>
              <div className="bubble bubble-6"></div>
            </div>
          </div>
        </div>
      </>
    );
}
