import { PropTypes } from "prop-types";

const InputCheckbox = (props) => {
  InputCheckbox.propTypes = {
    nome: PropTypes.string,
    concluida: PropTypes.bollean,
    onChange: PropTypes.func,
  };
  return (
    <input
      type="checkbox"
      value={nome}
      id={nome}
      defaultChecked={concluida}
      onChange={(e) => onChange(e.target.value)}
    >
      {nome}
    </input>
  );
};
export { InputCheckbox };
