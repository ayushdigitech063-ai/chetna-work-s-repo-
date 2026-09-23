import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-icon">S</span>
          <span className="logo-text">ShopEase</span>
        </Link>

        {/* Navigation */}
        <nav className="navigation">

          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link
            href="/products"
            className="nav-link"
          >
            Products
          </Link>

          <Link
            href="/login"
            className="nav-link"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="signup-button"
          >
            Sign Up
          </Link>

        </nav>

      </div>
    </header>
  );
}