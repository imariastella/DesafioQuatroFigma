import { useNavigate } from "react-router-dom";
import { InputCheckbox } from "../../../components/InputCheckbox";
import { useState } from "react";
import { AddTaskForm } from "../../../components/AddTaskForm";
import { styled } from "styled-components";

const TodoTask = () => {
  const [tarefas, setTarefas] = useState([
    { nome: "Ir ao mercado", concluida: false },
    { nome: "Arrumar o quarto", concluida: false },
    { nome: "Lavar o carro", concluida: false },
    { nome: "Comprar ração dos gatos", concluida: false },
    { nome: "Pagar as contas", concluida: false },
  ]);
  const navigate = useNavigate();
  function handlePush() {
    navigate("/addtask");
  }

  const handleChangeTask = (nome) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.nome === nome
          ? {
              ...tarefa,
              concluida: !tarefa.concluida,
            }
          : tarefa
      )
    );
  };
  const handleAddTask = (nome) => {
    setTarefas([...tarefas, { nome: nome, concluida: false }]);
  };
  return (
    <>
      <Text>Welcome email do usuário</Text>
      <TextNormal>Todo Task</TextNormal>
      <Button onClick={handlePush} type="submit">
        +
      </Button>
      <TextNormall>Dairy Tasks.</TextNormall>
      {tarefas.map((tarefa, index) => (
        <InputCheckbox
          key={index}
          nome={tarefa.nome}
          concluida={tarefa.concluida}
          onChange={handleChangeTask}
        />
      ))}
      <AddTaskForm handleAddTask={handleAddTask} />
    </>
  );
};

export { TodoTask };

const Text = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  position: center;
  width: 157px;
  height: 90px;
  left: 116px;
  font-size: 40px;
  line-height: 40px;
`;
const TextNormal = styled.h2`
  color: #000000;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 10px;
`;
const TextNormall = styled.h3`
  color: #3d7f85;
  font-weight: 500;
`;

const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 100px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #000000f7;
  cursor: pointer;
  margin-top: 20px;
  transition: border-color 0.25s;
  width: 30px;
  height: 34px;
  left: 298px;
  top: 545px;
  color: #ffffff;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
