import { Container, ButtonContainer, Register } from "./style";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import { password, profile } from "../../../utils/icons";

const Login = (props) => {
  const history = useHistory();
  const {
    register,
    unregister,
    setValue,
    setError,
    handleSubmit,
    errors,
  } = useForm();

  return (
    <Container>
      <form onSubmit={handleSubmit()}>
        <div>
          <TextField
            placeholderText="Usuário"
            icon={profile}
            onChange={(e) => setValue("user")}
          />
        </div>
        <div>
          <TextField
            placeholderText="Senha"
            type="password"
            icon={password}
            onChange={(e) => setValue("password")}
          />
        </div>
        <Register onClick={() => history.push('/register')}>Cadastrar</Register>
        <ButtonContainer>
          <Button type="submit" round={12}>
            Entrar
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default Login;
