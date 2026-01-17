import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
  const { logout, user } = useAuth();

  return (
    <div>
      <header style={{ padding: 20, background: "#111", color: "#fff" }}>
        <span>Admin Panel</span>
        <button onClick={logout} style={{ float: "right" }}>
          Çıkış
        </button>
      </header>

      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
