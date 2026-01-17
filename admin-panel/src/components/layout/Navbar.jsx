export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="font-semibold text-gray-700">
        Yönetim Paneli
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          admin@cms.com
        </span>

        <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
          Çıkış
        </button>
      </div>
    </header>
  );
}
