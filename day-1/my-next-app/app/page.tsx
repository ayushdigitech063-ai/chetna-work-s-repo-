export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ================= NAVBAR ================= */}
      <header className="w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-xl font-bold text-white">
              N
            </div>

            <span className="text-xl font-bold text-slate-800">
              NextGen
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            <a
              href="#home"
              className="relative font-medium text-indigo-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-indigo-600"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium text-slate-500 transition hover:text-indigo-600"
            >
              About
            </a>

            <a
              href="#services"
              className="font-medium text-slate-500 transition hover:text-indigo-600"
            >
              Services
            </a>

            <a
              href="#contact"
              className="font-medium text-slate-500 transition hover:text-indigo-600"
            >
              Contact
            </a>
          </nav>

          {/* Button */}
          <button className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl">
            Get Started
          </button>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/50 to-blue-50"
      >

        {/* Background shapes */}
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute left-1/3 top-40 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
              ✦ Build Your Future
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              Modern Solutions
              <br />
              for a Better{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              We help businesses and individuals create digital
              experiences that are fast, secure, and built for growth.
              Let&apos;s turn your ideas into reality.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <button className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-1">
                Get Started →
              </button>

              <button className="rounded-full border-2 border-indigo-200 bg-white px-7 py-4 font-semibold text-indigo-600 transition hover:border-indigo-500 hover:bg-indigo-50">
                Learn More
              </button>

            </div>

            {/* Trust */}
            <div className="mt-10 flex items-center gap-4">

              <div className="flex -space-x-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-orange-300">
                  👨🏻
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-pink-300">
                  👩🏻
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-blue-300">
                  👨🏽
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-green-300">
                  👩🏽
                </div>
              </div>

              <div>
                <p className="font-semibold text-slate-700">
                  Trusted by 1,000+ happy clients
                </p>

                <div className="mt-1 text-sm tracking-widest text-yellow-400">
                  ★ ★ ★ ★ ★
                </div>
              </div>

            </div>
          </div>


          {/* ================= HERO VISUAL ================= */}
          <div className="relative flex min-h-[430px] items-center justify-center">

            {/* Large blue circle */}
            <div className="absolute right-0 top-5 h-[390px] w-[390px] rounded-full bg-blue-200/60 blur-[1px]" />

            {/* Green circle */}
            <div className="absolute right-16 top-20 h-[270px] w-[270px] rounded-full bg-cyan-200/50" />

            {/* Plant */}
            <div className="absolute bottom-14 left-4 z-20 hidden sm:block">

              <div className="relative text-7xl">
                🌿
              </div>

              <div className="mx-auto h-16 w-20 rounded-b-2xl rounded-t-lg bg-gradient-to-b from-slate-100 to-slate-300 shadow-lg" />

            </div>


            {/* LAPTOP */}
            <div className="relative z-10 w-full max-w-[550px]">

              {/* Laptop screen */}
              <div className="rounded-t-2xl border-8 border-slate-800 bg-slate-800 p-2 shadow-2xl">

                <div className="overflow-hidden rounded-lg bg-white">

                  {/* Dashboard header */}
                  <div className="flex h-14 items-center justify-between border-b px-5">

                    <div className="font-bold text-slate-800">
                      Dashboard
                    </div>

                    <div className="h-7 w-7 rounded-full bg-indigo-100" />

                  </div>

                  <div className="flex min-h-[245px]">

                    {/* Sidebar */}
                    <aside className="w-24 bg-slate-900 p-3 sm:w-32">

                      <div className="mb-5 text-center text-xs font-bold text-white">
                        NextGen
                      </div>

                      <div className="space-y-3 text-xs text-slate-400">
                        <div className="rounded-md bg-indigo-600 p-2 text-white">
                          Overview
                        </div>
                        <div className="p-2">Analytics</div>
                        <div className="p-2">Projects</div>
                        <div className="p-2">Settings</div>
                      </div>

                    </aside>


                    {/* Dashboard content */}
                    <div className="flex-1 bg-slate-50 p-5">

                      <p className="text-xs text-slate-400">
                        Total Revenue
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-slate-800">
                        $24,780
                      </h3>

                      <div className="mt-6 flex h-28 items-end gap-2">

                        <div className="h-[35%] flex-1 rounded-t bg-indigo-100" />
                        <div className="h-[50%] flex-1 rounded-t bg-indigo-200" />
                        <div className="h-[42%] flex-1 rounded-t bg-indigo-300" />
                        <div className="h-[65%] flex-1 rounded-t bg-indigo-400" />
                        <div className="h-[55%] flex-1 rounded-t bg-indigo-500" />
                        <div className="h-[75%] flex-1 rounded-t bg-indigo-500" />
                        <div className="h-[90%] flex-1 rounded-t bg-purple-500" />

                      </div>

                    </div>

                  </div>
                </div>
              </div>


              {/* Laptop base */}
              <div className="mx-auto h-4 w-[95%] rounded-b-xl bg-slate-500 shadow-xl" />

              <div className="mx-auto h-3 w-[40%] rounded-b-xl bg-slate-300" />

            </div>


            {/* Revenue floating card */}
            <div className="absolute right-0 top-16 z-30 rounded-xl bg-white p-5 shadow-2xl sm:right-[-20px]">

              <p className="text-xs font-medium text-slate-400">
                Total Revenue
              </p>

              <p className="mt-1 text-xl font-bold text-slate-800">
                $24,780
              </p>

              <p className="mt-1 text-xs font-semibold text-green-500">
                ↗ +12.5%
              </p>

            </div>


            {/* Growth floating card */}
            <div className="absolute bottom-10 right-0 z-30 flex items-center gap-3 rounded-xl bg-white p-4 shadow-2xl sm:right-[-10px]">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                🚀
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Growth
                </p>

                <p className="text-sm font-bold text-slate-700">
                  Fast + Secure Results
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


            {/* =========================================================
          ABOUT US SECTION
      ========================================================= */}
     {/* =========================================================
    ABOUT US SECTION
========================================================= */}
<section
  id="about"
  className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:py-32"
>
  {/* Decorative background */}
  <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">

    {/* ================= HEADING ================= */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-indigo-600">
        About Us
      </span>

      <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
        Turning Ideas Into
        <br />
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Digital Experiences
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-500">
        We are a team of designers, developers and creative thinkers
        who believe that great technology should make life simpler,
        businesses stronger and ideas more impactful.
      </p>

    </div>


    {/* ================= STATS ================= */}
    <div className="mt-16 grid gap-6 sm:grid-cols-3">

      {/* Stat 1 */}
      <div
        className="rounded-3xl bg-white p-8 text-center shadow-sm
        ring-1 ring-slate-100 transition duration-300
        hover:-translate-y-2 hover:shadow-xl"
      >

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
          🚀
        </div>

        <h3 className="mt-5 text-4xl font-extrabold text-indigo-600">
          100+
        </h3>

        <p className="mt-2 font-medium text-slate-600">
          Projects Completed
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Delivering digital solutions for businesses of all sizes.
        </p>

      </div>


      {/* Stat 2 */}
      <div
        className="rounded-3xl bg-white p-8 text-center shadow-sm
        ring-1 ring-slate-100 transition duration-300
        hover:-translate-y-2 hover:shadow-xl"
      >

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
          🤝
        </div>

        <h3 className="mt-5 text-4xl font-extrabold text-purple-600">
          50+
        </h3>

        <p className="mt-2 font-medium text-slate-600">
          Happy Clients
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Building long-term relationships through quality work.
        </p>

      </div>


      {/* Stat 3 */}
      <div
        className="rounded-3xl bg-white p-8 text-center shadow-sm
        ring-1 ring-slate-100 transition duration-300
        hover:-translate-y-2 hover:shadow-xl"
      >

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
          💡
        </div>

        <h3 className="mt-5 text-4xl font-extrabold text-blue-600">
          10+
        </h3>

        <p className="mt-2 font-medium text-slate-600">
          Years of Experience
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Combining experience with modern technology.
        </p>

      </div>

    </div>


    {/* =====================================================
        MISSION / VISION / VALUES
    ===================================================== */}
    <div className="mt-20 overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">

      <div className="grid md:grid-cols-3">

        {/* Mission */}
        <div className="p-8 sm:p-10">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-xl">
            🎯
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            Our Mission
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            To create technology that solves real problems and
            helps people and businesses move forward.
          </p>

        </div>


        {/* Vision */}
        <div className="border-y border-slate-700 p-8 sm:p-10 md:border-x md:border-y-0">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 text-xl">
            🔭
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            Our Vision
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            To become a trusted technology partner for businesses
            looking to build a better digital future.
          </p>

        </div>


        {/* Values */}
        <div className="p-8 sm:p-10">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-xl">
            ❤️
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            Our Values
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            Creativity, transparency, quality and collaboration
            guide everything we build.
          </p>

        </div>

      </div>

    </div>


    {/* ================= BOTTOM STATEMENT ================= */}
    <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-8 text-center text-white md:flex-row md:text-left">

      <div>
        <p className="text-2xl font-bold">
          Have an idea? Let&apos;s make it happen.
        </p>

        <p className="mt-2 text-indigo-100">
          We turn ambitious ideas into meaningful digital products.
        </p>
      </div>

      <a
        href="#contact"
        className="whitespace-nowrap rounded-full bg-white px-7 py-3.5 font-bold text-indigo-600 shadow-lg transition hover:-translate-y-1"
      >
        Work With Us →
      </a>

    </div>

  </div>
</section>


      {/* =========================================================
          OUR SERVICES SECTION
      ========================================================= */}
      <section
        id="services"
        className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:py-32"
      >

        {/* Background decoration */}
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Solutions Designed for
              <br />
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Your Success
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              From websites to complete digital experiences, we
              create modern solutions that help businesses move
              forward.
            </p>

          </div>


          {/* SERVICE CARDS */}
          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div
              className="group rounded-3xl border border-slate-100 bg-white p-8
              shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl
                bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl text-white
                shadow-lg shadow-indigo-200"
              >
                💻
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                Web Development
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                We build fast, responsive and modern websites
                that work beautifully across all devices.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex font-semibold text-indigo-600 transition group-hover:gap-2"
              >
                Learn More →
              </a>

            </div>


            {/* Card 2 */}
            <div
              className="group rounded-3xl border border-slate-100 bg-white p-8
              shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl
                bg-gradient-to-br from-purple-500 to-pink-500 text-3xl text-white
                shadow-lg shadow-purple-200"
              >
                🎨
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                UI / UX Design
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                Beautiful and intuitive interfaces designed to
                give your users a smooth digital experience.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex font-semibold text-indigo-600"
              >
                Learn More →
              </a>

            </div>


            {/* Card 3 */}
            <div
              className="group rounded-3xl border border-slate-100 bg-white p-8
              shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl
                bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl text-white
                shadow-lg shadow-blue-200"
              >
                🚀
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                Digital Solutions
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                Scalable digital solutions that help your business
                become faster, smarter and more successful.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex font-semibold text-indigo-600"
              >
                Learn More →
              </a>

            </div>

          </div>


          {/* Bottom feature strip */}
          <div
            className="mt-12 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600
            p-8 text-white shadow-xl"
          >

            <div className="grid gap-8 md:grid-cols-3">

              <div className="flex items-center gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="font-bold">Fast & Reliable</h4>
                  <p className="text-sm text-indigo-100">
                    Built for performance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">🔒</div>
                <div>
                  <h4 className="font-bold">Secure Solutions</h4>
                  <p className="text-sm text-indigo-100">
                    Your data stays protected
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h4 className="font-bold">Creative Ideas</h4>
                  <p className="text-sm text-indigo-100">
                    Designed around your goals
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CONTACT US SECTION
      ========================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-white px-6 py-24 lg:py-32"
      >

        {/* Background circles */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Let&apos;s Build Something
              <br />
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Have an idea, project or business goal?
              Tell us about it and let&apos;s turn your vision
              into reality.
            </p>

          </div>


          {/* CONTACT AREA */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2">

            {/* LEFT INFO */}
            <div
              className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700
              p-8 text-white shadow-2xl sm:p-10"
            >

              <h3 className="text-3xl font-bold">
                Get in Touch
              </h3>

              <p className="mt-5 max-w-md leading-7 text-indigo-100">
                We&apos;d love to hear about your project and
                discuss how we can help you achieve your goals.
              </p>


              <div className="mt-10 space-y-7">

                <div className="flex items-center gap-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl">
                    ✉️
                  </div>

                  <div>
                    <p className="text-sm text-indigo-200">
                      Email
                    </p>

                    <p className="font-semibold">
                      hello@nextgen.com
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl">
                    📞
                  </div>

                  <div>
                    <p className="text-sm text-indigo-200">
                      Phone
                    </p>

                    <p className="font-semibold">
                      +91 98765 43210
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl">
                    📍
                  </div>

                  <div>
                    <p className="text-sm text-indigo-200">
                      Location
                    </p>

                    <p className="font-semibold">
                      India
                    </p>
                  </div>

                </div>

              </div>


              {/* Decorative */}
              <div className="mt-12 flex gap-3">
                <div className="h-2 w-16 rounded-full bg-white/70" />
                <div className="h-2 w-8 rounded-full bg-white/30" />
                <div className="h-2 w-3 rounded-full bg-white/20" />
              </div>

            </div>


            {/* RIGHT FORM */}
            <div
              className="rounded-3xl border border-slate-100 bg-white p-8
              shadow-xl sm:p-10"
            >

              <form className="space-y-6">

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50
                      px-4 py-3.5 outline-none transition
                      placeholder:text-slate-400
                      focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50
                      px-4 py-3.5 outline-none transition
                      placeholder:text-slate-400
                      focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50
                    px-4 py-3.5 outline-none transition
                    placeholder:text-slate-400
                    focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-slate-200
                    bg-slate-50 px-4 py-3.5 outline-none transition
                    placeholder:text-slate-400
                    focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>


                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-500
                  to-purple-600 px-6 py-4 font-bold text-white
                  shadow-lg shadow-indigo-200 transition duration-300
                  hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
<footer className="bg-slate-950 px-6 py-12 text-white">

  <div className="mx-auto flex max-w-7xl flex-col items-start">

    {/* Logo */}
    <div className="flex items-center gap-3">

      <div
        className="flex h-10 w-10 items-center justify-center
        rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600
        font-bold"
      >
        N
      </div>

      <span className="text-lg font-bold">
        NextGen
      </span>

    </div>


    {/* Description */}
    <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
      We create modern digital solutions that help businesses
      grow, innovate and build a better tomorrow.
    </p>


    {/* Navigation - Vertical */}
    <div className="mt-7 flex flex-col items-start gap-4">

      <a
        href="#home"
        className="text-sm text-slate-400 transition hover:text-white"
      >
        Home
      </a>

      <a
        href="#about"
        className="text-sm text-slate-400 transition hover:text-white"
      >
        About Us
      </a>

      <a
        href="#services"
        className="text-sm text-slate-400 transition hover:text-white"
      >
        Our Services
      </a>

      <a
        href="#contact"
        className="text-sm text-slate-400 transition hover:text-white"
      >
        Contact Us
      </a>

    </div>


    {/* Social Icons */}
    <div className="mt-7 flex gap-3">

      <a
        href="#"
        className="flex h-10 w-10 items-center justify-center rounded-full
        bg-slate-800 text-sm transition hover:bg-indigo-600"
      >
        f
      </a>

      <a
        href="#"
        className="flex h-10 w-10 items-center justify-center rounded-full
        bg-slate-800 text-sm transition hover:bg-indigo-600"
      >
        X
      </a>

      <a
        href="#"
        className="flex h-10 w-10 items-center justify-center rounded-full
        bg-slate-800 text-sm transition hover:bg-indigo-600"
      >
        in
      </a>

    </div>


    {/* Copyright */}
    <div className="mt-8 border-t border-slate-800 pt-6 w-full">

      <p className="text-sm text-slate-500">
        © 2026 NextGen. All rights reserved.
      </p>

    </div>

  </div>

</footer>
    </main>
  );
}