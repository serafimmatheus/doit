import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../Services";
import { Buttons } from "../../Components/Buttons";
import { toast } from "react-hot-toast";
import { SectionDash, FormTarefas, MainDash } from "./style";

export const Dashboard = ({ authenticated }) => {
  const [ListaTarefas, setListaTarefas] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Doit:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const loadCards = (data) => {
    console.log(data);
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => {
        const apiTasks = response.data.data.map((elem) => ({
          ...elem,
          updatedAt: new Date(elem.updatedAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setListaTarefas(apiTasks);
      });
  };

  useEffect(() => {
    loadCards();
  }, []);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const onSubmitTasks = ({ task }) => {
    if (!task) {
      return toast.error("Verifique o compo de entrada da tarefa");
    }

    api
      .post(
        "/task",
        {
          description: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        loadCards();
        toast.success("Tarefa adicionada");
      });
  };

  const removeTask = (id) => {
    const newTasks = ListaTarefas.filter((elem) => elem._id !== id);
    api
      .put(
        `/task/${id}`,
        {
          completed: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setListaTarefas(newTasks);
        toast.success("Tarefa concluida");
      });
  };

  const deslogar = () => {
    localStorage.clear();
    toast.success("Deslogado");
    document.location.reload(true);
  };

  return (
    <SectionDash>
      <Buttons onClick={deslogar}>Sair</Buttons>
      <FormTarefas onSubmit={handleSubmit(onSubmitTasks)}>
        <input type="text" placeholder="Nova tarefa" {...register("task")} />
        <Buttons type="submit" bgcolor="bgcolor">
          Adicionar
        </Buttons>
      </FormTarefas>

      <MainDash>
        <ul>
          {ListaTarefas.map((elem) => (
            <li key={elem._id}>
              <h4>
                <i class="fas fa-tasks"></i>
                {elem.description}
              </h4>
              <p>{elem.updatedAt}</p>
              <Buttons onClick={() => removeTask(elem._id)} bgcolor="bgcolor">
                Concluir
              </Buttons>
            </li>
          ))}
        </ul>
      </MainDash>
    </SectionDash>
  );
};

/*

const concluirTarefa = (evt) => {
  const clickBtn = evt.target.id;
  setListaTarefas(ListaTarefas.filter((elem) => elem.id != clickBtn));
  toast("Parabens, tarefa concluida!", {
    icon: "👏",
  });
};

const addList = () => {
  if (nameTarefa) {
    let cont = Math.floor(Math.random() * (100 - 1));
    setListaTarefas([
      ...ListaTarefas,
      { id: cont, name: nameTarefa, date: fullData },
    ]);
    setNameTarefa("");
    toast.success("Tarefa adicionada");
  } else {
    toast.error("Preencher com um nome valido");
  }
};

*/
