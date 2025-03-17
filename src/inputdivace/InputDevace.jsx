import style from "./InputDevace.module.css";

export default function InputDevace({ onchange, handleSubmit }) {
  return (
    <div className={style.box}>
      <label htmlFor="devace">Enter Divace</label>
      <input
        name="devace"
        type="text"
        placeholder="Device"
        onChange={onchange}
      />
      <label htmlFor="kW">kw</label>
      <input name="kW" type="number" placeholder="kW" onChange={onchange} />
      <label htmlFor="hours">hours</label>
      <input
        name="hours"
        type="number"
        placeholder="hours"
        onChange={onchange}
      />
      <label htmlFor="days">days</label>
      <input name="days" type="number" placeholder="days" onChange={onchange} />
      <label htmlFor="price">price</label>
      <input
        name="price"
        type="number"
        placeholder="price"
        onChange={onchange}
      />
      <button onClick={handleSubmit} type="button">
        Calc
      </button>
    </div>
  );
}
