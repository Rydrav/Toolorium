import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Toolorium
        </Link>
        <div className="space-x-4">
          <Link href="/login" className="hover:text-yellow-300 transition-colors">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
