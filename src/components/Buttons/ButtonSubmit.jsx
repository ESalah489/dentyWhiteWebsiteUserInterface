import "../../Pages/Auth/Shared.css";

const ButtonSubmit = ({ name, onClick }) => {
  return (
    <input type="submit" value={name} className="_btn" onClick={onClick} />
  );
};

export default ButtonSubmit;
