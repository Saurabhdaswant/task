import Chart from "./Chart";

const MainChildOne = () => {
  return (
    <div className="main-child-one">
      <div className="main__child-one__header">
        <div className="input">
          <input type="text" />
          <div className="searchsvg">
            <img src="img/search.svg" alt="" />
          </div>
        </div>
        <div className="main__child-one__header-status">
          <p className="active">processing</p>
          <p>completed</p>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default MainChildOne;
