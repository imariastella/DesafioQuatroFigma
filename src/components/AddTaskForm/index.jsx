import { PropTypes } from "prop-types";
import { styled } from "styled-components";

const AddTaskForm = ({ handleAddTask }) => {
  AddTaskForm.propTypes = {
    handleAddTask: PropTypes.func,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(e.target.newTask.value);
  };
  return (
    <div>
      <StyleForm onSubmit={handleSubmit}>
        <StyleInput name="newTask"></StyleInput>
        <StyleInput name="newTask"></StyleInput>
        <StyleInput name="newTask"></StyleInput>
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
