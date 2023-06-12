import { styled } from "styled-components";
import { useUserStore } from "../../stores/user";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const { updateUser } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    updateUser(data);

    navigate("/addtask");
  };

  return (
    <StyleForm onSubmit={handleSubmit}>
      <StyleInput
        name="email"
        type="text"
        placeholder="Enter your Email address"
      />
      <StyleInput
        name="password"
        type="password"
        placeholder="Confirm Password"
      />
      <button type="submit">Sing in</button>
    </StyleForm>
  );
};
export { InputForm };

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

const StyleForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;
`;
