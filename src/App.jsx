import { useState } from "react";
import InputDivace from "./inputdivace/InputDevace.jsx";
import Result from "./result/Result.jsx";

function App() {
  const [formData, setFormData] = useState({
    devace: null,
    kW: null,
    hours: null,
    days: null,
    price: null,
  });

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <h1>electric Calc!</h1>
      <InputDivace onchange={onchange} handleSubmit={handleSubmit} />
      {formData.devace ? <Result Data={formData} /> : null}
    </div>
  );
}

export default App;
