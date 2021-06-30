import cart from "./img/cart.png";
import shirt from "./img/shirt.png";

const Icons = () => {
  return (
    <div className="icons">
      <div className="icon cart">
        <img src={cart} alt="" />
      </div>
      <div className="icon">
        <img src={shirt} alt="" />
      </div>
    </div>
  );
};

export default Icons;
