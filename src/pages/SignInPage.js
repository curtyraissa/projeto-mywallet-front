import styled from "styled-components";
import MyWalletLogo from "../components/MyWalletLogo";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import apiAuth from "../services/apiAuth";
import { UserContext } from "../contexts/UserContext";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSingIn(e) {
    e.preventDefault();

    apiAuth
      .signIn(form)
      .then((res) => {
        const { id, name, token } = res.data;
        setUser({ id, name, token });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data.message);
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