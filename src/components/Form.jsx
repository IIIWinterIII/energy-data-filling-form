import "./Form.scss";
// import energyDrinks from "../energyDrinks.js";
import { useEffect, useState } from "react";

function Form() {
  const [dataInForm, setDataInForm] = useState([]);

  const [inputData, setInputData] = useState({
    id: 0,
    name: "",
    brand: "",
    flavor: "",
    volume: "450",
    caffeine: "",
    sugar: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const dataInStorage = localStorage.getItem("energyDrinks");

    console.log("Loaded data:", dataInStorage);

    if (dataInStorage) {
      setDataInForm(JSON.parse(dataInStorage));
    }

    console.log(dataInStorage);
  }, []);

  useEffect(() => {
    if (dataInForm.length > 0) {
      localStorage.setItem("energyDrinks", JSON.stringify(dataInForm));
    }

    console.log(dataInForm);
  }, [dataInForm]);

  const saveData = (e) => {
    e.preventDefault();

    const newId =
      dataInForm.length > 0 ? dataInForm[dataInForm.length - 1].id + 1 : 1;

    const newData = { ...inputData, id: newId };

    setDataInForm((prevData) => [...prevData, newData]);

    setInputData({
      id: 0,
      name: "",
      brand: "",
      flavor: "",
      volume: "450",
      caffeine: "",
      sugar: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="container-form">
      <h1>Добавление данных</h1>

      <form>
        {/* Name */}
        <section>Название</section>
        {/* <p>Сохранено: {dataInForm.map((item) => item.name).join(", ")}</p> */}
        <p>Ввод: {inputData.name}</p>
        <input
          type="text"
          value={inputData.name}
          onChange={(e) =>
            setInputData((prevData) => ({
              ...prevData,
              name: e.target.value,
            }))
          }
        />

        {/* Brand */}
        <section>Бренд</section>
        {/* <p>Сохранено: {dataInForm.map((item) => item.brand.length > 0 ? item.brand : "").join(", ")}</p> */}
        <p>Ввод: {inputData.brand}</p>
        <input
          type="text"
          value={inputData.brand}
          onChange={(e) =>
            setInputData((prevData) => ({
              ...prevData,
              brand: e.target.value,
            }))
          }
        />

        {/* Flavor */}
        <section>Вкус</section>
        {/* <p>Сохранено: {dataInForm.map((item) => item.brand.length > 0 ? item.brand : "").join(", ")}</p> */}
        <p>Ввод: {inputData.flavor}</p>
        <input
          type="text"
          value={inputData.flavor}
          onChange={(e) =>
            setInputData((prevData) => ({
              ...prevData,
              flavor: e.target.value,
            }))
          }
        />

        {/* Volume */}
        <section>Объём</section>
        {/* <p>Сохранено:{dataInForm.map((item) => item.volume).join(", ")}</p> */}
        <p>Ввод: {inputData.volume}</p>
        <select
          name="select"
          onChange={(e) =>
            setInputData((prevData) => ({
              ...prevData,
              volume: e.target.value,
            }))
          }
        >
          <option value="200">200мл</option>
          <option value="450" selected>
            450мл
          </option>
          <option value="1000">1000мл</option>
        </select>

        {/* Caffeine */}
        <section>Кофеин</section>
        <p>Ввод: {inputData.caffeine}</p>
        <input
          type="text"
          value={inputData.caffeine}
          onChange={(e) =>
            setInputData((prevData) => ({
              ...prevData,
              caffeine: e.target.value,
            }))
          }
        />

        {/* Sugar */}
        <section>Сахар</section>
        <p>Ввод: {inputData.sugar}</p>
        <input
          type="text"
          value={inputData.sugar}
          onChange={(e) =>
            setInputData((prevData) => ({
              ...prevData,
              sugar: e.target.value,
            }))
          }
        />

        {/* Description */}
        <section>Описание</section>
        <p>Ввод: {inputData.description}</p>
        <input
          type="text"
          value={inputData.description}
          onChange={(e) =>
            setInputData((prevData) => ({
              ...prevData,
              description: e.target.value,
            }))
          }
        />

        <button type="button" onClick={saveData}>
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default Form;
