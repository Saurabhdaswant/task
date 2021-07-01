const ProcessStep = () => {
  return (
    <div>
      <div className="line">
        <div className="circle circlelactive"></div>
        <div className="circle circlelactive"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div className="tableRow">
        <div className="tableData">
          <p>placed</p>
          <p className="light">fri, 28th may</p>
        </div>
        <div className="tableData">
          <p>printed</p>
          <p className="light">fri, 28th may</p>
        </div>
        <div className="tableData">
          <p>dispatched</p>
          <p className="light">fri, 28th may</p>
        </div>
        <div className="tableData">
          <p>outForDelivery</p>
          <p className="light">fri, 28th may</p>
        </div>
        <div className="tableData">
          <p>delivered</p>
          <p className="light">fri, 28th may</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
