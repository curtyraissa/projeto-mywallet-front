import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function TransactionsPage() {
  const navigate = useNavigate()
  const tipo = "entrada"

  function handleHome(e){
    e.preventDefault();
    navigate("/home")
  }

  return (
    <TransactionsContainer>
      <h1>Nova TRANSAÇÃO</h1>
      <form onSubmit={handleHome}>
        <input placeholder="Valor" type="text"/>
        <input placeholder="Descrição" type="text" />
        <button>Salvar {tipo}</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
