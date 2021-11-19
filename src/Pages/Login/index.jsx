import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Buttons } from "../../Components/Buttons";
import { Link, Redirect } from "react-router-dom";
import { MainLogin, DivHomeLogin } from "./style";
import { useHistory } from "react-router-dom";
import loginImg from "../../assets/login.svg";
import { api } from "../../Services";
import toast from "react-hot-toast";

export const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/user/login", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@Doit:token", JSON.stringify(token));

        setAuthenticated(true);
        toast.success("Login com sucesso");
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Login/Senha incorreto");
      });
  };

  const history = useHistory();

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <DivHomeLogin>
        <Link className="home" to="/">
          Home
        </Link>
      </DivHomeLogin>
      <MainLogin>
        <figure>
          <img src={`${loginImg}`} alt="asdasdasd" />
        </figure>

        <div>
          <form onSubmit={handleSubmit(handleForm)}>
            <h2>Login</h2>

            <label htmlFor="email">E-mail</label>
            <input placeholder="Seu email" type="text" {...register("email")} />
            {<span>{errors.email?.message}</span>}

            <label htmlFor="password">Senha</label>
            <input
              placeholder="Sua senha ultra secreta"
              type="password"
              {...register("password")}
            />
            {<span>{errors.password?.message}</span>}

            <Buttons bgcolor="bgcolor" type="submit">
              Login
            </Buttons>
            <span className="login">
              Não tem uma conta?{" "}
              <Link className="link" to="/cadastro">
                Faça seu cadastro
              </Link>
            </span>
          </form>
        </div>
      </MainLogin>
    </>
  );
};
