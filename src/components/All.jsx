import { useEffect, useState } from "react";

import "./All.scss";

import noEnergetic from "../assets/image/no-energetic.png"


import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function All() {
  const [dataInForm, setDataInForm] = useState([]);

  useEffect(() => {
    const dataInStorage = localStorage.getItem("energyDrinks");

    if (dataInStorage) {
      setDataInForm(JSON.parse(dataInStorage));
    }
  }, []);

//   console.log(dataInForm);

  const deletePosition = (id) => {
    const filterArr = dataInForm.filter((item) => item.id !== id);

    setDataInForm(filterArr);
    localStorage.setItem("energyDrinks", JSON.stringify(filterArr));
  };

  return (
    <div className="container">
      <h1>Все данные</h1>
      <div className="box-with-card">
        {dataInForm.length > 0 ? (
          dataInForm.map(
            (
              {
                id,
                name,
                brand,
                flavor,
                volume,
                caffeine,
                sugar,
                description,
              },
              index
            ) => (
              <div key={index} className="card">
                <img src={noEnergetic} alt={name} />
                <h2>{name}</h2>

                <div>
                  <p>Название: </p>
                  <h3>{brand}</h3>
                </div>

                <div>
                  <p>Вкус: </p>
                  <h3>{flavor}</h3>
                </div>

                <div>
                  <p>Объём: </p>
                  <h3>{volume}</h3>
                </div>

                <div>
                  <p>Кофеин: </p>
                  <h3>{caffeine}</h3>
                </div>

                <div>
                  <p>Сахар: </p>
                  <h3>{sugar}</h3>
                </div>

                <div>
                  <p>Описание: </p>
                  <h3>{description}</h3>
                </div>

                <button onClick={() => deletePosition(id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            )
          )
        ) : (
          <p>Нет данных...</p>
        )}
      </div>
    </div>
  );
}

export default All;
