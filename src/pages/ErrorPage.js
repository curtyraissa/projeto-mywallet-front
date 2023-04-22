import styled from "styled-components";

export default function ErrorPage() { 
  return (
    <ErrorContainer>
      <MensagemContainer>
        Rota inexistente!
      </MensagemContainer>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
`;
const MensagemContainer = styled.header`
  display: flex;
  font-size: 32px;
  color: #fff;
`;