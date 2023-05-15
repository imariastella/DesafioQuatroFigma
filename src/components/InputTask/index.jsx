import { styled } from "styled-components";

const InputTask = () => {
  return (
    <StyleForm>
      <StyleInputTask type="text"  />
      <StyleInputTask type="text"  />
    </StyleForm>
  );
};
export { InputTask };

const StyleForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const StyleInputTask = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
