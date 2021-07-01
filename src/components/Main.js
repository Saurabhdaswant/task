import MainChildOne from "./Main-child-one";
import MainChildTwo from "./Sidebar";
const Main = () => {
  return (
    <div className="main">
      <MainChildOne />
      <MainChildTwo />
    </div>
  );
};

export default Main;
