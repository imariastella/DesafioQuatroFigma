import { PropTypes } from "prop-types";
import { styled } from "styled-components";
import { useTasksStore } from "../../stores/task";
import { useNavigate } from "react-router-dom";

const AddTaskForm = () => {
  AddTaskForm.propTypes = {
    handleAddTask: PropTypes.func,
  };
  const navigate = useNavigate();
  const { addTasks } = useTasksStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const task1 = {
      name: e.target.task1.value,
      completed: false,
    };

    const task2 = {
      name: e.target.task2.value,
      completed: false,
    };

    const task3 = {
      name: e.target.task3.value,
      completed: false,
    };

    addTasks([task1, task2, task3]);
    navigate("/todotask");
  };

  return (
    <div>
      <StyleForm onSubmit={handleSubmit}>
        <StyleInput name="task1"></StyleInput>
        <StyleInput name="task2"></StyleInput>
        <StyleInput name="task3"></StyleInput>
        <button type="submit">Add Task</button>
      </StyleForm>
    </div>
  );
};
export { AddTaskForm };

const StyleForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 10px;
`;

const StyleInput = styled.input`
  height: 20px;
  width: 242px;
  left: 74px;
  height: 43px;
  width: 300px;
  border: 1px solid transparent;
  border-radius: 11px;
  color: #000000;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;

  ::placeholder {
    color: #000000;
  }
  box-sizing: border-box;
  padding-left: 2rem;
  margin-top: 10px;
  font-weight: 550;
`;
