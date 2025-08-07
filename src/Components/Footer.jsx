import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import icons
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-orange-100 py-10 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Ostad Branding Section */}
        <div>
          <img src={logo} alt="Ostad Logo" />
          <p className="text-sm text-gray-600 mb-4">কুমিল্লা শহরের শিক্ষার্থীদের রসায়ন ভীতি দূরীকরণের ক্ষুদ্র প্রচেষ্টা।</p>
          <div className="mt-6">
            <p className="font-semibold">কমিউনিটি - এর সাথে কানেক্ট থাকুন</p>
            <div className="flex space-x-3 mt-2">
              {/* Social Media Icons */}
              <a href="https://www.facebook.com/share/1FxX3aoBZ7/?mibextid=wwXIfr" aria-label="Facebook">
                <FaFacebookF className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors duration-200" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 text-gray-600 hover:text-pink-600 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">কুইক লিংক</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600">অ্যাকারিং লাইভ ব্যাচ</a></li>
            <li><a href="#" className="text-gray-600">ফ্রি কোর্সসমূহ</a></li>
            <li><a href="#" className="text-gray-600">লাইভ ওয়ার্কশপ</a></li>
            <li><a href="#" className="text-gray-600">ব্লগ</a></li>
          </ul>
        </div> */}

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
          <ul className="space-y-2">
            <li>Mobile : <a href="#" className="text-gray-600">01648160153</a></li>
            <li>Address 1 HSC: রাণীরদিঘীরপাড়, মহিলা কলেজ রোড, কুমিল্লা। </li>
            <li>Address 2 SSC: তালপুকুরপাড় মডার্ণ স্কুল রোড, কুমিল্লা। </li>
          </ul>
        </div>

        {/* Company Policies Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">কোম্পানি</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600">আমাদের সম্পর্কে</a></li>
            <li><a href="#" className="text-gray-600">রিফান্ড পলিসি</a></li>
            <li><a href="#" className="text-gray-600">প্রাইভেসি পলিসি</a></li>
            <li><a href="#" className="text-gray-600">টার্মস এবং শর্তাবলী</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
