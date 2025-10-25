import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700  mt-20">
      {/* CTA Section */}
      <div style={{background: 'radial-gradient(circle at center, #81c784, #66bb6a, #4caf50, #43a047, #388e3c)'}}  className=" mx-auto py-16 text-center rounded-2xl text-white">
        <h2 className="text-3xl font-semibold mb-3">
          Looking for a smarter way to manage tickets?
        </h2>
        <p className="text-blue-100 mb-6">
          TicketFlow lets you stay on top of every request, from start to finish.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
          Get Started →
        </button>
      </div>

      {/* Footer Links */}
      <div className="mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Social */}
        <div>
          <h3 className="text-xl font-bold  mb-2">TICKET<span className="text-green-400">FLOW</span></h3>
          <p className="text-sm text-gray-500 mb-4">
            Connecting people who help each other, no matter the distance.
          </p>
          <div className="flex gap-4 text-gray-600">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-400">Blog</a></li>
            <li><a href="#" className="hover:text-green-400">Help Center</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Blog Posts</a></li>
            <li><a href="#" className="hover:text-green-400">FAQs</a></li>
            <li><a href="#" className="hover:text-green-400">User Guides</a></li>
            <li><a href="#" className="hover:text-green-400">Community Forum</a></li>
            <li><a href="#" className="hover:text-green-400">Feedback</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Join our newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">
            Be the first to know when new features, stories, and updates drop.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-black bg-green-100  rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-sm text-gray-500 py-4 px-6 flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        <p>© 2025 TicketFlow. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-green-400">Privacy Policy</a>
          <a href="#" className="hover:text-green-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

  
