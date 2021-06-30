import ProcessDetails from "./ProcessDetails";
import ProcessStep from "./ProcessStep";
import ProductDetails from "./ProductDetail";

const ProgressContainer = () => {
  return (
    <div className="progreesContainer">
      <ProductDetails />
      <ProcessDetails />
      <ProcessStep />
      <ProcessDetails />
      <ProcessStep />
    </div>
  );
};

export default ProgressContainer;
