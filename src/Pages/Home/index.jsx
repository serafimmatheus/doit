import { Header } from "./style";
import { Buttons } from "../../Components/Buttons/index";
import { useHistory, Redirect } from "react-router-dom";

export const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Header>
      <h2>
        do<span>.</span>it
      </h2>
      <p>Organize-se de forma fácil e efetiva</p>

      <div>
        <Buttons onClick={() => handleNavigation("/cadastro")}>
          Cadastre-se
        </Buttons>
        <Buttons onClick={() => handleNavigation("/login")} bgcolor="bgcolor">
          Login
        </Buttons>
      </div>
    </Header>
  );
};
