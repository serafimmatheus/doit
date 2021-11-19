import { Main, DivForm, DivHomeCadastro } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Buttons } from "../../Components/Buttons";
import { Link, Redirect, useHistory } from "react-router-dom";
import cadastroLoginImg from "../../assets/sapiens1.svg";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { useState } from "react/cjs/react.development";

export const Cadastro = ({ authenticated }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório.")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
        "E-mail inválido"
      ),
    password: yup
      .string()
      .min(8, "Minimo 8 caracter")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "Senha deve conter numeros, letras, uma letra MAIÚSCOLA e um caracter especial (!@#$%&*)."
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compatível.")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = ({ name, email, password }) => {
    const users = { name, email, password };
    api
      .post("/user/register", users)
      .then((response) => {
        history.push("/login");
        toast.success("Usuário cadastrado");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Falha no cadastro");
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <DivHomeCadastro>
        <Link className="home" to="/">
          Home
        </Link>
      </DivHomeCadastro>
      <Main>
        <figure>
          <img src={`${cadastroLoginImg}`} alt="asdasdasd" />
        </figure>

        <DivForm>
          <form onSubmit={handleSubmit(handleForm)}>
            <h2>Cadastro</h2>

            <label htmlFor="name">Nome</label>
            <input
              placeholder="Seu nome completo"
              type="text"
              {...register("name")}
            />
            {<span>{errors.name?.message}</span>}
            <label htmlFor="email">E-mail</label>
            <input
              placeholder="Seu melhor email"
              type="text"
              {...register("email")}
            />
            {<span>{errors.email?.message}</span>}
            <label htmlFor="password">Senha</label>
            <input
              placeholder="Uma senha bem segura"
              type="password"
              {...register("password")}
            />
            {<span>{errors.password?.message}</span>}
            <label htmlFor="confirm_password">Confirmação de senha</label>
            <input
              placeholder="Confirme sua senha"
              type="password"
              {...register("confirm_password")}
            />
            {<span>{errors.confirm_password?.message}</span>}
            <Buttons bgcolor="bgcolor" type="submit">
              Cadastrar
            </Buttons>
            <span className="conta">
              Já possui uma conta? Faça{" "}
              <Link className="link" to="/login">
                Login
              </Link>
            </span>
          </form>
        </DivForm>
      </Main>
    </>
  );
};
