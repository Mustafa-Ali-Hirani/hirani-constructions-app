import React from 'react';
import { ArrowRight } from 'lucide-react';

// STEP 1: Import the logo directly from the components folder.
// This creates a variable `hiraniLogo` that holds the correct path.
import hiraniLogo from './hirani.png';

// Data for the menu links.
const menuLinks = [
    { href: '#', text: 'HOME', isActive: true },
    { href: '#', text: 'SERVICES', isActive: false },
    { href: '#', 'text': 'PROJECTS', isActive: false },
    { href: '#', text: 'ABOUT US', isActive: false },
];

// Data for social media links.
const socialLinks = [
    { href: '#', text: 'Facebook' },
    { href: '#', text: 'Instagram' },
    { href: '#', text: 'LinkedIn' },
];

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo, Certifications, and Quote Button */}
          <div className="space-y-6">
            
            {/* STEP 2: Use the imported variable in the `src` attribute. */}
            <img src={hiraniLogo} alt="Hirani Constructions Logo" className="h-12 w-auto" />
            
            <p className="text-sm text-gray-500 leading-relaxed">
              HUBZONE/UDBE/MBE/WBE/SBE
              <br />
              Certified
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 bg-[#283061] text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-lg text-sm"
            >
              REQUEST A QUOTE
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Column 2: Office and Contact Info */}
          <div className="space-y-6 text-sm">
            <h3 className="font-bold tracking-wider text-gray-500 uppercase">OUR OFFICES</h3>
            <p className="text-gray-600">M-F 9 am - 5 pm</p>
            <div>
              <h3 className="font-bold tracking-wider text-gray-500 uppercase mt-4">CONTACT US</h3>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>(323) 295-5484</p>
                <p>(323) 295-1199 FAX</p>
                <a href="mailto:scoleman@colemancon.com" className="hover:underline break-all">scoleman@colemancon.com</a>
              </div>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-6 text-sm">
            <h3 className="font-bold tracking-wider text-gray-500 uppercase">FOLLOW US</h3>
            <ul className="space-y-4">
              {socialLinks.map(link => (
                <li key={link.text}>
                  <a href={link.href} className="text-gray-600 hover:text-black hover:underline underline-offset-4">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Menu */}
          <div className="space-y-6 text-sm">
            <h3 className="font-bold tracking-wider text-gray-500 uppercase">MENU</h3>
            <ul className="space-y-4">
              {menuLinks.map(link => (
                <li key={link.text}>
                  <a 
                    href={link.href} 
                    className={`hover:text-black hover:underline underline-offset-4 ${link.isActive ? 'text-indigo-600 font-bold' : 'text-gray-600'}`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;