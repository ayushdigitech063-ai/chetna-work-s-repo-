export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">

        <p className="text-sm text-gray-400">
          © 2026 ShopEase. All rights reserved.
        </p>

        <div className="mt-3 flex justify-center gap-6 text-sm">
          <a
            href="#"
            className="text-gray-400 transition hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-gray-400 transition hover:text-white"
          >
            Terms
          </a>

          <a
            href="#"
            className="text-gray-400 transition hover:text-white"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}