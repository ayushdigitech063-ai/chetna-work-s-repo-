import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <Link href="/" className="footer-logo">
            <span className="footer-logo-icon">S</span>
            <span>ShopEase</span>
          </Link>

          <p>
            Quality products. Simple shopping.
            Everything you need in one place.
          </p>

        </div>


        {/* Company */}
        <div className="footer-column">

          <h3>COMPANY</h3>

          <Link href="/">
            Home
          </Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/login">
            Login
          </Link>

          <Link href="/signup">
            Sign Up
          </Link>

        </div>


        {/* Customer */}
        <div className="footer-column">

          <h3>CUSTOMER</h3>

          <Link href="/products">
            Shop
          </Link>

          <Link href="/products/all">
            All Products
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <Link href="/help">
            Help Center
          </Link>

        </div>


        {/* Social */}
        <div className="footer-column">

          <h3>FOLLOW US</h3>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            Facebook
          </a>

          <a href="#">
            Twitter
          </a>

          <a href="#">
            LinkedIn
          </a>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 ShopEase. All rights reserved.
        </p>

        <div className="footer-bottom-links">

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms
          </a>

          <a href="#">
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
}