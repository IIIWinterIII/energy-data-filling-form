import "./Form.scss";
import energyDrinks from "../energyDrinks.js";
import { useState } from "react";

function Form() {
  const [dataInForm, setDataInForm] = useState({
    id: 0,
    name: "",
    brand: "",
    flavor: "",
    volume: 0,
    caffeine: 0,
    sugar: 0,
    description: "",
    image: "",
  });

  const [inputData, setInputData] = useState({
    id: 0,
    name: "",
    brand: "",
    flavor: "",
    volume: 0,
    caffeine: 0,
    sugar: 0,
    description: "",
    image: "",
  })
  
  const saveData = (e) => {
    e.preventDefault();
    setDataInForm(inputData)
    console.log(dataInForm);
    energyDrinks.push(dataInForm)
    console.log(energyDrinks);
  }

  return (
    <div className="container-form">
      <h1>Добавление данных</h1>
      <p>Сохранено: {dataInForm.name}</p>
      <p>Ввод: {inputData.name}</p>
      <form>
        <section>Название</section>
        <input
          type="text"
          value={inputData.name}
          onChange={(e) => setInputData((prevData) => ({
            ...prevData,
            "name": e.target.value
          }))}
        />
        <button type="button" onClick={saveData}>Сохранить</button>
      </form>
    </div>
  );
}

export default Form;
