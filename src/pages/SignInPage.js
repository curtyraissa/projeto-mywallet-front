import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MyWalletLogo from "../components/MyWalletLogo";
import apiAuth from "../services/apiAuth";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function SignInPage() {
  const navigate = { useNavigate };
  const [form, setForm] = useState({ email: "", senha: "" });
  const { user, setUser } = useContext(UserContext);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSingIn(e) {
    e.preventDefault();
    apiAuth
      .login(form)
      .then((res) => {
        console.log(res.data);
        const { id, nome, token } = res.data;
        setUser({ id, nome, token });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message);
      });
  }

  return (
    <SingInContainer>
      <form onSubmit={handleSingIn}>
        <MyWalletLogo />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          required
          value={form.email}
          onChange={handleForm}
        />
        <input
          name="senha"
          placeholder="Senha"
          type="password"
          required
          autocomplete="new-password"
          value={form.senha}
          onChange={handleForm}
        />
        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
    </SingInContainer>
  );
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
