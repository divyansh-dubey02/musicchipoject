"use client"
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
 <div className="max-w-6xl mx-auto grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 sm:text-left">
  <div className="hover:text-white transition-colors duration-300">
    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
    <p className="pb-4 text-sm font-medium">
Our Story <br />
Mission & Vision <br />
Faculty <br />
Careers <br />
Testimonials <br />
</p>
  </div>
  <div className="hover:text-white transition-colors duration-300">    <h2 className="text-white text-lg font-semibold mb-4">Programs</h2>
    <p className="pb-4 text-sm font-medium">
Instrumental Lessons <br />
Vocal Coaching   <br />
Online Classes <br />
Summer Camps <br />
Workshops & Masterclasses <br />
</p></div>
  <div className="hover:text-white transition-colors duration-300">    <h2 className="text-white text-lg font-semibold mb-4">Resources</h2>
    <p className="pb-4 text-sm font-medium">
Blog <br />
Tutorials <br />
Student Portal <br />
Sheet Music Library <br />
FAQs</p></div>
  <div className="hover:text-white transition-colors duration-300">    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
    <p className="pb-4 text-sm font-medium">

Address: 123 Melody Lane, Suite 456, Music City, CA 12345 <br />
Email: contact@harmonymusicacademy.com <br />
Phone: (123) 456-7890   <br />
Social Media:  <br />
Facebook <br />
Instagram  <br />
Newsletter Sign-Up  <br />
</p></div>
 </div>
 <p className="text-md text-center pt-8"> © 2024 Harmony Music Academy. All Rights Reserved</p>
    </footer>
  )
}

export default Footer;