import { AddTaskForm } from "../../components/AddTaskForm";
import { styled } from "styled-components";

const AddTask = () => {
  return (
    <>
      <Text>Welcome Onboard!</Text>
      <img></img>
      <TextNormal>Add What your want to do later on...</TextNormal>
      <AddTaskForm
        name="newTask"
        placeholder="Digite a nova tarefa"
      ></AddTaskForm>
    </>
  );
};

export { AddTask };

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
  font-family: "Poppins";
`;
const TextNormal = styled.p`
  color: #176456;
  font-weight: 500;
  font-size: 20px;
`;
