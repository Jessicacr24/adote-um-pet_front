import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SignUp() {
    const navigate = useNavigate();

    useEffect(() => {
      localStorage.removeItem("savedAnimals");
    }, []);

    return (
      <SignUpWrapper>
        <h2><strong>Cadastre-se no AMIGO PET</strong></h2>
        <form>
          <Input placeholder="Nome"/>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button onClick={() => navigate("/")}>Cadastrar</Button>
        </form>
      </SignUpWrapper>
    );
}

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: fit-content;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #ffcc00;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #e6b800;
  }

  &:active {
    background-color: #cc9a00;
  }
`;

export default SignUp;