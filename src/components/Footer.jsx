import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Toolorium</h3>
          <p>Your one-stop shop for all the tools you need.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-yellow-300 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-yellow-300 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-yellow-300 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2025 Toolorium. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
