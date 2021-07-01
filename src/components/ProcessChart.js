import ProcessDetails from "./ProcessDetails";
import ProcessStep from "./ProcessStep";
import ProductDetails from "./ProductDetail";

const ProcessChart = () => {
  return (
    <div className="main__child-one__progressChart">
      <div className="progreesContainer">
        <ProductDetails />
        <ProcessDetails />
        <ProcessStep />
        <ProcessDetails />
        <ProcessStep />
      </div>
    </div>
  );
};

export default ProcessChart;
