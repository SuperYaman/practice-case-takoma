import { PenOff, Facebook, Instagram, Brush } from "lucide-react";

export default function Footer() {
  const links = [
    "For Designers",
    "Hire Talent",
    "Inspiration",
    "Advertising",
    "Blog",
    "About",
    "Careers",
    "Support",
  ];

  return (
    <footer className="text-neutral-800 py-6 mt-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <div className="text-2xl font-bold tracking-widest uppercase">
          Dribble
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link, idx) => (
            <button
              key={idx}
              className="text-neutral-700 hover:text-neutral-900 transition"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <PenOff className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
          <Facebook className="w-5 h-5 hover:text-blue-700 cursor-pointer" />
          <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
          <Brush className="w-5 h-5 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between max-w-7xl mx-auto mt-25">
        <div className="flex text-neutral-400 gap-3 font-light text-sm">
            <p>© 2026 Dribble</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
        </div>
        <div className="flex text-neutral-400 gap-3 font-light text-sm">
            <p>Jobs</p>
            <p>Designers</p>
            <p>Freelancers</p>
            <p>Tags</p>
            <p>Places</p>
            <p>Resources</p>
        </div>
      </div>
    </footer>
  );
}