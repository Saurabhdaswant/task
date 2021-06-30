import search from "./img/search.svg";

const Input = () => {
  return (
    <div className="input">
      <input type="text" />
      <div className="searchsvg">
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default Input;
