import Input from "./Input";
import ProcessChart from "./ProcessChart";

const MainChildOne = () => {
  return (
    <div className="main-child-one">
      <div className="main__child-one__header">
        <Input />
        <div className="main__child-one__header-status">
          <p className="active">processing</p>
          <p>completed</p>
        </div>
      </div>
      <ProcessChart />
    </div>
  );
};

export default MainChildOne;
