import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      {}
      <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-gray-700">
        CMS Admin
      </div>

      {}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/admin"
          className="block px-3 py-2 rounded hover:bg-gray-800 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/sites"
          className="block px-3 py-2 rounded hover:bg-gray-800 transition"
        >
          Siteler
        </Link>

        <Link
          to="/admin/pages"
          className="block px-3 py-2 rounded hover:bg-gray-800 transition"
        >
          Sayfalar
        </Link>

        <Link
          to="/admin/sections"
          className="block px-3 py-2 rounded hover:bg-gray-800 transition"
        >
          Sectionlar
        </Link>
      </nav>

      {}
      <div className="p-4 text-sm text-gray-400 border-t border-gray-700">
        © CMS Platform
      </div>
    </aside>
  );
}
