import { Header } from "./style";
import { Buttons } from "../../Components/Buttons/index";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <Header>
      <h2>
        do<span>.</span>it
      </h2>
      <p>Organize-se de forma fácil e efetiva</p>

      <div>
        <Buttons onClick={() => history.push("/cadastro")}>Cadastre-se</Buttons>
        <Buttons onClick={() => history.push("/login")} bgcolor="bgcolor">
          Login
        </Buttons>
      </div>
    </Header>
  );
};
