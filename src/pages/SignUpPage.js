import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyWalletLogo from "../components/MyWalletLogo";
import styled from "styled-components";
import apiAuth from "../services/apiAuth";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [verificarSenha, setVerificarSenha] = useState("");

  function handleForm({name, value, confirmarSenha}) {
    setForm({ ...form, [name]: value });
    setVerificarSenha(confirmarSenha)
  } 

  function handleSingUp(e) {
    e.preventDefault();

    if(form.senha !== verificarSenha){
      alert("Senhas diferentes!")
    }
    apiAuth
      .signUp(form)
      .then((res) => {
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message);
        const {status} = err.response

        if(status === 422){
          return (alert("Senha minima 3 caracteres"))
        }
        if(status === 409){
          return (alert("E-mail já cadastrado"))
        }
      });
  }

  return (
    <SingUpContainer>
      <form onSubmit={handleSingUp}>
        <MyWalletLogo />
        <input
          placeholder="Nome"
          type="text"
          required
          value={form.nome}
          onChange={handleForm}
        />
        <input
          placeholder="E-mail"
          type="email"
          required
          value={form.email}
          onChange={handleForm}
        />
        <input
          placeholder="Senha"
          type="password"
          required
          value={form.senha}
          onChange={handleForm}
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          required
          value={form.verificarSenha}
          onChange={handleForm}
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
