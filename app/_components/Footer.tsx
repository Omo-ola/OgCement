import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            ducimus voluptatibus neque illo id repellat quisquam? Autem expedita
            earum quae laborum ipsum ad.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">PRIVACY & TOS</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Advertiser Agreement
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Acceptable Use Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Technology Privacy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Developer Agreement
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">NAVIGATE</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Advertisers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Developers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Resources
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Company
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Connect
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <p>Mailing Address: 00 E. Union Ave Suite 1100, Denver, CO 80237</p>
          <p>+999 90932 627</p>
          <p>support@yourdomain.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
