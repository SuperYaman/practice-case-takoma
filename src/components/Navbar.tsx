import { useState } from "react";
import {
  NotepadText,
  ChevronDown,
  Search,
  Users,
  Tag,
  Briefcase,
  FilePlusCorner,
  BadgeQuestionMark,
  PanelsTopLeft,
  Trophy,
  type LucideIcon
} from "lucide-react";

type DropdownItem =
  | string
  | {
      title: string;
      subtitle: string;
      icon: LucideIcon;
    };

export default function Navbar() {
  const [showShotsMenu, setShowShotsMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white px-6 py-4">
      {" "}
      <div className="flex items-center gap-6">
        <a className="text-xl font-pacifico text-neutral inline-block transform rotate-355">
          Dribbble
        </a>
        <div className="flex w-200 items-center gap-2 bg-gray-100 p-2 rounded-full max-w-lg border border-transparent hover:bg-white hover:border-pink-200 transition">
          {" "}
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent border-none outline-none px-3 py-2 rounded-lg text-neutral-950"
          />
          <div className="flex relative">
            <button
              className="inline-flex items-center gap-1 text-neutral-950 hover:text-neutral-700 transition-colors"
              onClick={() => setShowShotsMenu(!showShotsMenu)}
            >
              <span>Shots</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showShotsMenu ? "rotate-180" : ""}`}
              />
            </button>

            {showShotsMenu && (
              <ul className="list-none absolute left-0 mt-8 w-32 bg-white border rounded shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-neutral">
                  Shots
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-neutral">
                  Designers
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-neutral">
                  Services
                </li>
              </ul>
            )}
          </div>
          <button className="p-2 bg-pink-400 hover:bg-pink-300 btn-sm rounded-full">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6">
        <NavDropdown
          label="Explore"
          items={[
            "Popular",
            "New and Noteworthy",
            "Product Design",
            "Web Design",
            "Animation",
            "Branding",
            "Illustration",
            "Mobile",
            "Typography",
            "Print",
          ]}
        />
        <NavDropdown
          label="Hire Talent"
          items={[
            {
              title: "Start Project Brief",
              subtitle: "Get recommandations and proposals",
              icon: NotepadText,
            },
            {
              title: "Browse Profiles",
              subtitle: "Find and message talent directly",
              icon: Users,
            },
            {
              title: "Explore Services",
              subtitle: "Hire quickly with pre-packaged services",
              icon: Tag,
            },
          ]}
        />
        <NavDropdown
          label="Get Hired"
          items={[{
              title: "Browse Project Briefs",
              subtitle: "Send proposals to clients",
              icon: NotepadText,
            },
            {
              title: "Add a service",
              subtitle: "Let clients purchase your services",
              icon: FilePlusCorner,
            },
            {
              title: "Apply to Full-Time Jobs",
              subtitle: "View open design roles",
              icon: Briefcase,
            },]}
        />
        <NavDropdown label="Community" items={[{
              title: "Blog",
              subtitle: "Design inspiration, stories and tips",
              icon: PanelsTopLeft,
            },
            {
              title: "Playoffs",
              subtitle: "Join creative challenges",
              icon: Trophy,
            },
            {
              title: "Help Center",
              subtitle: "Get quick answers",
              icon: BadgeQuestionMark,
            }]} />
      </div>
      <div className="flex items-center gap-3">
        <button className="text-neutral-950 hover:text-neutral-700 transition-colors">
          Sign up
        </button>
        <button className="btn btn-neutral rounded-full">Log in</button>
      </div>
    </nav>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: DropdownItem[];
}) {
  return (
    <div className="relative group inline-block">
      <button className="flex items-center gap-1 text-neutral-950 hover:text-neutral-700 transition-colors whitespace-nowrap">
        <span>{label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      <div
        className="absolute left-1 -translate-x-1 mt-3 w-72 bg-white border rounded-xl shadow-lg p-2 z-10
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-200 ease-in-out"
      >
        {items.map((item, index) => {
          if (typeof item === "string") {
            return (
              <li
                key={index}
                className="list-none px-4 py-2 hover:text-gray-400 cursor-pointer text-black rounded"
              >
                {item}
              </li>
            );
          }

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
            >
              <div className="p-2 bg-gray-100 rounded-lg">
                <Icon className="w-5 h-5 text-neutral-800" />
              </div>

              <div>
                <p className="text-black font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
