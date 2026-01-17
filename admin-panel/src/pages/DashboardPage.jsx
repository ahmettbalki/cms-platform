import AdminLayout from "../layouts/AdminLayout";

export default function DashboardPage() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Toplam Site</h3>
          <p className="text-2xl font-bold">3</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Toplam Sayfa</h3>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Section</h3>
          <p className="text-2xl font-bold">48</p>
        </div>
      </div>
    </AdminLayout>
  );
}
