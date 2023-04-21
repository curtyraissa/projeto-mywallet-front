import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MyWalletLogo from "../components/MyWalletLogo";
import styled from "styled-components";

export default function SignUpPage() {
  const navigate = { useNavigate };
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function submitForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSingUp(e) {
    e.preventDefault();
    //verifica as senhas
    if (form.password !== form.confirmPassword) {
      alert("Infelizmente suas senhas estao diferentes!");
    }
    axios
      .post(`${process.env.BASE_URL}/sign-up`, form)
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message);
      });
  }

  return (
    <SingUpContainer>
      <form>
        <MyWalletLogo />
        <input
          placeholder="Nome"
          type="text"
          value={form.name}
          onChange={handleSingUp}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={handleSingUp}
        />
        <input
          placeholder="Senha"
          type="password"
          autocomplete="new-password"
          value={form.password}
          onChange={handleSingUp}
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          autocomplete="new-password"
          value={form.confirmPassword}
          onChange={handleSingUp}
        />
        <button type={submitForm}>Cadastrar</button>
      </form>

      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </SingUpContainer>
  );
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
