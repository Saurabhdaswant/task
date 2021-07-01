const MainChildTwo = () => {
  return (
    <div className="main-child-two">
      <div className="head">
        <button className="btn">close X</button>
        <h3>information</h3>
      </div>

      {/* product info card   */}
      <div className="information">
        <div className="productImg">
          <img src="img/tshirt.png" alt="" />
        </div>
        <div className="info-product">
          <ul>
            <li>T-shirt</li>
            <li>
              <span>orange</span>
            </li>
            <li>Catagory</li>
            <li>
              <span>Elite</span>
            </li>
            <li>Size</li>
            <li>
              <span>4 size</span>
            </li>
            <li>Quantity</li>
            <li>
              <span>9</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainChildTwo;
