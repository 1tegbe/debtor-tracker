'use client';
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center gap-5 bg-white/90 p-4 shadow-md">
      <Link href="/" className="font-bold text-xl p-2"><GoHome/></Link>
      <Link href="/Add" className="font-bold text-xl rounded-full bg-green-500 p-2 text-white "><IoMdAdd/></Link>
      <Link href="/Message">Message</Link>
    <Link href="/Setting">Setting</Link>
    </nav>
  );
}
