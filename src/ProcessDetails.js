import tshirt from "./img/tshirt.png";

const ProcessDetails = () => {
  return (
    <div className="tableRow">
      <div className="tableData Product">
        <img src={tshirt} alt="" />
        <div className="tableData">
          <p>orginal fav</p>
          <p className="light">Dark blue</p>
        </div>
      </div>

      <div className="tableData light">#6553218</div>
      <div className="tableData light">premimum</div>
      <div className="tableData light"></div>
      <div className="tableData light"></div>
      <div className="tableData light">20-5-2020</div>
      <div className="tableData light">$25.00</div>
    </div>
  );
};

export default ProcessDetails;
