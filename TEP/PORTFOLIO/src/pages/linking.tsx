import Link from "next/link";       

export default function Home () {
return(
<div>

<Link className="ml-2 mr-5 hover:text-red-900" href={"http://localhost:3000/"}>Home Page</Link>
<Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/aboutus"}>About Us</Link>
<Link className="mr-5 hover:text-green-900" href={"http://localhost:3000/contactus"}>Contact Us</Link>
<Link className="mr-5 hover:text-pink-900" href={"http://localhost:3000/privacypolicy"}>Privacy Policy</Link>


</div>
)}