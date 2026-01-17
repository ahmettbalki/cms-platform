import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/auth/register", {
      email,
      password,
    });

    alert("Kayıt başarılı");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Kayıt Ol</h2>

      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Kayıt</button>
    </form>
  );
}
