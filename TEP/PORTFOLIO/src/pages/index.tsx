"use client"
import Link from "next/link";   
import Typewriter from 'typewriter-effect';

export default function Home () {
  return (  
    <div>
      <title>MUHAMMAD PORTFOLIO WEBSITE</title>

      <header className="text-grey-600 body-font">
        {/* Removed background image and its related classes */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          <a className="flex title-font font-medium items-center text-grey-900 mb-4 md:mb-0 ">
            <div className="flex space-x-4">
              <div className="avatar relative">
                <img
                  src="./images/Mine.jpg"
                  alt="mz logo"
                  className="w-10 h-10 rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-white">
                </span>
              </div>
            </div>
            <span className="ml-3 text-xl">MUHAMMAD BIN ZAHEER</span>
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex flex-wrap items-center text-base justify-center">
            <Link className="ml-2 mr-5 hover:text-red-900" href={"/"}>Home Page</Link>
            <Link className="mr-5 hover:text-blue-900" href={"/aboutus"}>About Us</Link>
            <Link className="mr-5 hover:text-green-900" href={"/contactus"}>Contact Us</Link>
            <Link className="mr-5 hover:text-pink-900" href={"/privacypolicy"}>Privacy Policy</Link>
          </nav>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="inline-flex text-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
              PORTFOLIO WEBSITE
            </button>

     
          </div>
        </div>
      </header>

      {/* Typewriter effect example */}
      <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-red-900">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Master NextJs with Muhammad Bin Zaheer!')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </h1>

      <div className="flex"> 
        <img className="w-30 h-20 rounded-full relative" src="https://media.istockphoto.com/id/1124838925/vector/programming-code-application-window.jpg?s=612x612&w=0&k=20&c=2J2JZP7cQltD03QkOMl6JYfzcmD-GN7bjrWVuieD7Jc=" alt="code image" />
        <img className="w-20 h-20 rounded-full relative" src="images/codeman.jpg" alt="codeman" />
      </div>

      {/* Image card */}
      <div className="bg-white shadow-[0_4px_25px_ -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4 mb-5">
        <div className="min-h-[245px]"> 
        <img src="/images/mine2.png" alt="myimg" className="w-full rounded-lg" />


        </div>

        <div className="p-b text-center">
          <h3 className="text-xl font-black">Muhammad Bin Zaheer</h3>
          <p className="mt-3 text-sm text-grey-500 leading-relaxed">I am a 22 Year Old Tech Guy with strong passion towards IT Industry
            Currently Studying In ICMA Pakistan and My goals is to implent every good knowlege i get to know in giaic in  real business world or corporate industry
          </p>

          <button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-blue-600 hover:bg-indigo-900">
            
          </button>
        </div>
      </div>  
    </div>
  );
}
