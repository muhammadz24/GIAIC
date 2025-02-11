import Link from "next/link";


export default function Home() {
  return (
    <div className="nav-links">
      <Link className="link" href="http://localhost:3000/">Home Page</Link>
      <Link className="link" href="http://localhost:3000/aboutus">About Us</Link>
      <Link className="link" href="http://localhost:3000/contactus">Contact Us</Link>
      <Link className="link" href="http://localhost:3000/privacypolicy">Privacy Policy</Link>
    </div>
  );
}
