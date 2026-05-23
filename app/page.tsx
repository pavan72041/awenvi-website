"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  Menu,
  X,
  Moon,
  Sun,
  Phone,
  Mail,
  MapPin,
  ImageIcon,
  ShieldCheck,
} from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { label: "Projects Delivered", value: 150 },
  { label: "Happy Clients", value: 120 },
  { label: "Hours Saved", value: 9800 },
  { label: "Certifications", value: 35 },
];

const galleryItems = [
  {
    title: "Wastewater Treatment",
    src: "/gallery/wastewater.jpg",
  },
  {
    title: "Rainwater Harvesting",
    src: "/gallery/rainwater.jpg",
  },
  {
    title: "Industrial Treatment",
    src: "/gallery/industrial.jpg",
  },
  {
    title: "Recycling Plant",
    src: "/gallery/recycling.jpg",
  },
  {
    title: "Solar Pumps",
    src: "/gallery/solar.jpg",
  },
  {
    title: "Compliance Audit",
    src: "/gallery/audit.jpg",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("site-theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("site-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-surface text-foreground transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="bg-gradient-to-r from-cyan-900 to-green-600 text-white py-3 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex flex-wrap gap-8 items-center">
            <span className="inline-flex items-center gap-2">
              <Mail size={14} />
              <a
                href="mailto:awenvisolutions@gmail.com?subject=Website%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20connect%20about%20..."
                className="ml-2 underline"
              >
                awenvisolutions@gmail.com
              </a>
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={14} /> +91 99455 20399
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin size={14} /> Bangalore, Karnataka, India
          </div>
        </div>
      </div>

      <nav className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50 dark:bg-slate-950 dark:border-b dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="AWEnvi Logo" className="h-16 w-auto sm:h-20" />
            <div className="hidden md:flex items-center gap-10 font-semibold text-slate-700 dark:text-slate-200">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-green-600 transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-green-600 hover:text-green-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="https://wa.me/919686343594"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
            >
              WhatsApp
            </a>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-green-600 hover:text-green-600 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-40 transform bg-slate-950/90 p-6 text-white transition duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xl font-bold">
              <ImageIcon size={24} /> AWEnvi Menu
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-slate-100"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-12 space-y-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-2xl border border-slate-700 bg-slate-900/75 px-5 py-4 transition hover:border-green-500 hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),_transparent_30%)] py-24">
        <div className="max-w-7xl mx-auto grid gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 dark:bg-green-950/70 dark:text-green-300">
              <ShieldCheck size={18} /> Trusted environmental consultancy since 2023
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-green-600">Save the Environment</p>
              <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white md:text-6xl">
                Innovative Environmental Solutions for a Sustainable Future
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                AWEnvi Solutions delivers STP, ETP, EPR registration, waste management, fire safety and compliance services with modern engineering and real-world impact.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700">
                Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:border-green-600 hover:text-green-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
                Request a Quote
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white px-6 py-7 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-3xl font-bold text-cyan-900 dark:text-cyan-300">
                    <CountUp end={stat.value} duration={2} separator="," />+
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -right-8 top-10 h-72 w-72 rounded-full bg-cyan-200/70 blur-3xl dark:bg-cyan-500/20"></div>
            <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-green-200/70 blur-3xl dark:bg-green-500/20"></div>
            <img
              src="/home.png"
              alt="Environmental illustration"
              className="relative z-10 h-[520px] w-full max-w-xl rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div className="rounded-[2rem] bg-slate-100 p-8 shadow-xl dark:bg-slate-900 dark:ring-1 dark:ring-slate-800">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
              alt="About AWEnvi"
              className="h-full w-full rounded-[1.75rem] object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-green-600">About Company</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">Trusted Environmental Experts</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                AWEnvi Solutions is an experienced environmental consultancy focused on Pollution Control Plants, Residential & Industrial Effluent Treatment Plants, Water Recycle Systems, EPR registration, fire safety and waste management.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <p className="text-4xl font-bold text-green-600">100+</p>
                <p className="mt-3 text-slate-600 dark:text-slate-400">Projects Completed</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <p className="text-4xl font-bold text-green-600">24/7</p>
                <p className="mt-3 text-slate-600 dark:text-slate-400">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-green-600 uppercase tracking-[0.32em] font-bold">Our Services</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">Complete Environmental Solutions</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              We support commercial and industrial clients with STP, ETP, EPR registration, waste management, fire safety systems, and PCB approvals.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                emoji: "♻️",
                title: "Sewage Treatment Plant",
                items: ["Activated Sludge Process", "MBBR Technology", "Sequential Batch Reactor", "Membrane Bio Reactor", "Compact STP Systems"],
              },
              {
                emoji: "💧",
                title: "Effluent Treatment Plant",
                items: ["Biological Treatment", "Physio Chemical Treatment", "PCB Norm Compliance", "Water Recycle Systems", "Industrial ETP Plants"],
              },
              {
                emoji: "🌱",
                title: "EPR Registration",
                items: ["Plastic Waste Management", "Tyre Waste Management", "CPCB Registration", "Recycler Documentation", "Producer Compliance"],
              },
            ].map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950">
                <div className="text-5xl">{service.emoji}</div>
                <h3 className="mt-6 text-2xl font-bold text-slate-950 dark:text-white">{service.title}</h3>
                <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-400">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                emoji: "🔥",
                title: "Fire Safety Systems",
                items: ["Fire Detection", "Alarm Systems", "Suppression", "CCTV Surveillance", "Building Management"],
              },
              {
                emoji: "🏭",
                title: "Pollution Control Board",
                items: ["CFE (NOC)", "CFO Approvals", "Hazardous Waste", "Bio Medical Waste", "Compliance Reports"],
              },
              {
                emoji: "🌧️",
                title: "Waste Management",
                items: ["Rain Harvesting", "E-Manifest", "E-Waste", "Solid Waste", "AMC Maintenance"],
              },
            ].map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950">
                <div className="text-5xl">{service.emoji}</div>
                <h3 className="mt-6 text-2xl font-bold text-slate-950 dark:text-white">{service.title}</h3>
                <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-400">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-green-600 uppercase tracking-[0.32em] font-bold">Real Image Gallery</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">Featured Projects & Installations</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Browse real environmental industry imagery from wastewater, solar, recycling, and compliance projects.
            </p>
          </div>

          {/*
            Place image files inside the public/gallery folder.
            Recommended image size: 1200x800 or 1600x1067 for best quality.
            Example folder structure:
            public/gallery/wastewater.jpg
            public/gallery/rainwater.jpg
            public/gallery/industrial.jpg
            public/gallery/recycling.jpg
            public/gallery/solar.jpg
            public/gallery/audit.jpg
          */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-5 py-4">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-green-600 uppercase tracking-[0.32em] font-bold">Our Projects</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">Recent Environmental Projects</h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden rounded-[2rem] bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-950 dark:border dark:border-slate-800">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="Project photo" className="h-72 w-full object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Environmental Project</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">
                    Sustainable engineering and pollution control systems for modern industrial and residential installations.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-green-600 uppercase tracking-[0.32em] font-bold">Contact Us</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">Let’s Save The World Together</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Reach out for STP, ETP, EPR registration, fire safety systems, PCB approvals, waste management, and environmental consultancy.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <Phone className="h-7 w-7 text-green-600" />
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">Phone</p>
                  <p className="text-slate-600 dark:text-slate-400">+91 99455 20399</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <div className="flex items-center gap-4">
                  <Mail className="h-7 w-7 text-green-600" />
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">awenvisolutions@gmail.com</p>
                  </div>
                </div>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=awenvisolutions@gmail.com&su=${encodeURIComponent(
                    "Environmental Consultation"
                  )}&body=${encodeURIComponent(
                    "Hello AWEnvi Solutions, I want to know more about your services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compose email in Gmail"
                  className="inline-flex w-full sm:w-auto items-center gap-3 justify-center rounded-full bg-gradient-to-r from-green-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:from-green-500 hover:to-cyan-400 transform transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
                >
                  <Mail className="h-5 w-5 text-white" />
                  <span>Open Gmail</span>
                </a>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%23106+Vidya+Serenity+4th+Main+Road+Vijaya+Bank+Layout+Bangalore+560076"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-green-600/10 text-green-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-950 dark:text-white">Office Address</p>
                    <address className="mt-3 not-italic text-slate-600 dark:text-slate-400 leading-7">
                      #106, Vidya Serenity, 4th Main Road,<br />
                      Vijaya Bank Layout,<br />
                      Bangalore - 560076
                    </address>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600/10 px-4 py-2 text-sm font-semibold text-green-700 transition group-hover:bg-green-600 group-hover:text-white dark:bg-slate-900 dark:text-green-300 dark:group-hover:text-white">
                  <MapPin className="h-4 w-4" />
                  View on Google Maps
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-cyan-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          <div>
            <img src="/logo.png" alt="AWEnvi Logo" className="w-48 md:w-56" />
            <p className="mt-6 max-w-sm text-slate-300 leading-8">
              Innovative Environmental Solutions for a sustainable future with expert STP, ETP and waste management services.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Services</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>STP Solutions</li>
              <li>ETP Plants</li>
              <li>EPR Registration</li>
              <li>Fire Safety Systems</li>
              <li>Waste Management</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Contact</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>📞 +91 99455 20399</p>
              <p>
                📧
                <a href="mailto:awenvisolutions@gmail.com?subject=Website%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20connect%20about%20..." className="ml-2 underline">
                  awenvisolutions@gmail.com
                </a>
              </p>
              <p>📍 Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          © 2026 AWEnvi Solutions. All Rights Reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/919686343594"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:bg-green-600"
      >
        💬
      </a>
    </main>
  );
}
