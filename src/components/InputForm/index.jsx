import { styled } from "styled-components";

const InputForm = () => {
  return (
    <StyleForm>
      <StyleInput type="text" placeholder="Enter your Email address" />
      <StyleInput type="password" placeholder="Confirm Password" />
    </StyleForm>
  );
};
export { InputForm };

const StyleForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;
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
