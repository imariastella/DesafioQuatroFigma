import { useNavigate } from "react-router-dom";
import { InputForm } from "../../components/InputForm";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/addtask");
  }
  return (
    <>
      <Text>Welcome Back!</Text>
      <img></img>
      <InputForm />
      <Link>Forgot Password ?</Link>
      <button onClick={handleClick}>Sing in</button>
      <TextNormal>Dont have an acconunt ? </TextNormal>
      <a>Sing Up</a>
    </>
  );
};

export { Login };

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
`;
