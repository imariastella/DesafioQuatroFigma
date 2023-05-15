import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { AddTaskForm } from "../../../components/AddTaskForm";
import { styled } from "styled-components";
const AddTask = (handleAddTask) => {
  AddTask.propTypes = {
    handleAddTask: PropTypes.func,
  };
  const navigate = useNavigate();
  function handleClick() {
    navigate("/todotask");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(e.target.newTask.value);
  };
  return (
    <>
      <Text>Welcome Onboard!</Text>
      <TextNormal>Add What your want to do later on...</TextNormal>
      <form onSubmit={handleSubmit}>
        <AddTaskForm
          name="newTask"
          placeholder="Digite a nova tarefa"
        ></AddTaskForm>
      </form>

      <button type="submit" onClick={handleClick}>
        Add Task
      </button>
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
`;
const TextNormal = styled.p`
  color: #176456;
  font-weight: 500;
  font-size: 20px;
`;
