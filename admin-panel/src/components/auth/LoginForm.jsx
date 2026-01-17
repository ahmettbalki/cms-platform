import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      login(res.data.user, res.data.token);
      navigate("/admin");
    } catch {
      setError("Email veya şifre hatalı");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Giriş Yap</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Giriş</button>
    </form>
  );
}
