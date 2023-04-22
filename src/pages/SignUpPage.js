import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
import MyWalletLogo from "../components/MyWalletLogo";
import styled from "styled-components";

export default function SignUpPage() {
  const navigate = useNavigate();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // function submitForm(e) {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // }

  function handleSingUp(e) {
    e.preventDefault(); //nao atualizar a página
    navigate("/");
    //   //verifica as senhas
    //   if (form.password !== form.confirmPassword) {
    //     alert("Infelizmente suas senhas estao diferentes!");
    //   }
    //   axios
    //     .post(`${process.env.BASE_URL}/sign-up`, form)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err.response.data);
    //       alert(err.response.data.message);
    //     });
  }

  return (
    <SingUpContainer>
      <form onSubmit={handleSingUp}>
        <MyWalletLogo />
        <input
          placeholder="Nome"
          type="text"
          disabled={false}
          required
          // value={form.name}
          // onChange={handleSingUp}
        />
        <input
          placeholder="E-mail"
          type="email"
          disabled={false}
          required
          // value={form.email}
          // onChange={handleSingUp}
        />
        <input
          placeholder="Senha"
          type="password"
          disabled={false}
          required
          // autocomplete="new-password"
          // value={form.password}
          // onChange={handleSingUp}
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          disabled={false}
          required
          // autocomplete="new-password"
          // value={form.confirmPassword}
          // onChange={handleSingUp}
        />
        <button disabled={false} type="submit">
          Cadastrar
        </button>
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