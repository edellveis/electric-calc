import { useEffect, useState } from "react";
import style from "./Result.module.css";

export default function Result({ Data }) {
  const [result, setResult] = useState({
    totalkw: null,
    totalprice: null,
  });

  useEffect(() => {
    const totalkw = Data.kW * Data.hours;
    const totalprice = totalkw * Data.price;

    setResult({
      totalkw,
      totalprice,
    });
  }, [Data]);

  return (
    <div className={style.box}>
      <h1>Result</h1>
      Name: {Data.devace} <br />
      Total kw: {result.totalkw} <br />
      Total price: {result.totalprice} <br />
    </div>
  );
}
