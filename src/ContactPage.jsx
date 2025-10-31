import React from "react";
import { Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-[70vh] bg-white flex items-center justify-center mt-10  p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* HEADER */}
        <header className="px-8 py-6 bg-linear-to-r  bg-black text-white text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-sm opacity-90 mt-1">
            We're here to help you — especially our valued pensioners and
            members.
          </p>
        </header>

        {/* CONTACT INFO SECTION */}
        <main className="px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50">
          {/* LEFT SIDE INFO */}
          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-3">
              Everfirst Cubao Branch
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>2nd Floor, Ever Gotesco Mall, Cubao, Quezon City</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span>Open Monday–Friday, 8:00 AM – 5:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" />
                <span>0919 082 2595</span>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-5 h-5 text-blue-600" />
                <a
                  href="https://www.facebook.com/EverfirstCubao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Everfirst Cubao (Facebook)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-600" />
                <span>efcubao2022@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE MESSAGE / IMAGE REPLACEMENT */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              “Your trusted partner in every loan need”
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We value our senior clients — your comfort and satisfaction come
              first. Visit us anytime for assistance, or call our friendly staff
              for help.
              <br />
              <br />
              <span className="font-semibold text-gray-700">
                We’re happy to serve you — just like family.
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactPage;
