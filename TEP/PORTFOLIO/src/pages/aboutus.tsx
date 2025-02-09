import Head from "next/head";

export default function About() {  
    return (
      <>
        <Head>
          <title>ABOUT US</title>
        </Head>
{/* 

   
        <div>
          <h1 className="text-red-500">This is an about us page</h1>
          <p>In this page, we will tell you about myself and my skils</p>
        </div> */}
        

        <div className="bg-gray-800 flex items-center justify-center min-h-screen p-6 relative">
          <div className="flex items-center gap-8 max-w-3xl">
            {/* Skills Section */}
            <div className="flex flex-col items-start space-y-6 absolute left-[150px] border-2 p-10">
              <h2 className="text-white text-xl font-semibold">Skills</h2>

              {/* TypeScript */}
              <div className="w-32">
                <div className="text-white">TypeScript</div>
                <div className="w-full h-2 bg-gray-600 mt-2">
                  <div className="h-2 bg-blue-500" style={{ width: '80%' }}></div>
                </div>
              </div>
              

              {/* HTML / CSS */}
              <div className="w-32">
                <div className="text-white">HTML / CSS</div>
                <div className="w-full h-2 bg-gray-600 mt-2">
                  <div className="h-2 bg-yellow-500" style={{ width: '90%' }}></div>
                </div>
              </div>

              {/* Next.js */}
              <div className="w-32">
                <div className="text-white">Next.js</div>
                <div className="w-full h-2 bg-gray-600 mt-2">
                  <div className="h-2 bg-green-500" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="h-32 w-[2px] bg-white animate-grow-y"></div>

            {/* Profile Image */}
            <img 
              src="/images/Mine.jpg"  
              alt="My profile" 
              className="w-60 h-[70px] rounded object-cover animate-slide-in" 
            />

            {/* About Me Text */}
            <div>
              <h1 className="text-white text-3xl font-bold tracking-wide animate-fade-in mb-4 font-sans">
                About Me
              </h1>
              <p className="text-white text-base leading-relaxed font-sans">
                I am a dedicated student at the Government of Sindh IT Initiative (Certified in Applied Generative AI) and the Saylani Mass IT Training Course (Modern Web App Development), with a growing passion for technology.
                I’ve developed skills in TypeScript, HTML, and CSS as a front-end developer, and I’m currently expanding my expertise in Next.js to build intuitive, user-friendly applications. I am particularly enthusiastic about the intersection of healthcare and technology, and I aim to leverage my skills in innovative ways to make a positive impact.
              </p>
            </div>

            {/* Bubbles Animation */}
            <div className="absolute ml-[900px] mt-[100px]">
              <div className="bg-white h-[100px] w-[100px] rounded-full absolute animate-pop"></div>
              <div className="bg-blue-400 h-[30px] w-[30px] rounded-full absolute top-[-50px] left-[-40px] animate-bubble-small"></div>
              <div className="bg-purple-400 h-[50px] w-[50px] rounded-full absolute top-[-70px] right-[-50px] animate-bubble-medium"></div>
              <div className="bg-pink-400 h-[40px] w-[40px] rounded-full absolute bottom-[-60px] left-[-60px] animate-bubble-small"></div>
              <div className="bg-green-400 h-[20px] w-[20px] rounded-full absolute bottom-[-80px] right-[-70px] animate-bubble-small"></div>
              <div className="bg-yellow-300 h-[60px] w-[60px] rounded-full absolute top-[-90px] left-[20px] animate-bubble-large"></div>
            </div>
          </div>
        </div>
      </>
    );
}
