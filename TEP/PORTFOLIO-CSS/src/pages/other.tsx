 import Link from 'next/link';
 

  export default function Home() {
    return (
      <div>
        <h1 className="text-center mb-5">NextJs With Muhammad</h1>
        <Link className="mr-5 hover:text-red-900" href={"http://localhost:3000/"}>Home Page</Link>
        <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/aboutus"}>About Us</Link>
        <Link className="mr-5 hover:text-green-900" href={"http://localhost:3000/contactus"}>Contact Us</Link>
        <Link className="mr-5 hover:text-pink-900" href={"http://localhost:3000/privacypolicy"}>Privacy Policy</Link>
        {/* <Comments /> */}
  <br />
  <br />
        <p style={{ color: "blue", fontSize: "18px", height: "30px",backgroundColor:"yellow" }}
        >lets create a amazing website</p>

  {/* YT Video Button */}
  <a href='https://www.youtube.com/@muhammadzaheer0024/videos' target='_blank' rel='noopener noreferrer'>
    <button className='flex mx-auto mt-16 text-white bg-red-500 border-1 py-2 px-8 focus:outline-none rounded text-lg'>
      VISIT YOUTUBE CHANNEL
    </button>
  </a>

  {/* WEBSITE*/}
<a href='https://articlebase.pk/'>
  <button className="flex mx-auto mt-16  text-white bg-blue-500 border-3 py-2 px-8 focus:outline-square text-large"> Visit My Website </button>
  </a>
      </div>



    )
}