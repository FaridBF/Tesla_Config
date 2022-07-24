import { useState } from 'react';

function App() {
  const cars = [
    { name: 'Grande autonomie', price: 90700 },
    { name: 'Performance', price: 106700 }
  ];
  const colors = [
    { name: 'Blanc nacré Multicouches', price: 0 },
    { name: 'Noir uni ', price: 1000 }
  ];

  const [valueCar, setValueCar] = useState(cars[0].price);
  const [valueColor, setValueColor] = useState(colors[0].price);

  return (
    <>
      <div className='App'>
        <h1>Tesla Config</h1>
        <h2>Sélectionnez votre véhicule</h2>
        {cars.map((car, index) => {
          return (
            <button
              key={index}
              className='button'
              onClick={() => {
                setValueCar(car.price);
              }}
            >
              {car.name} - {car.price} €
            </button>
          );
        })}
        <h2>Sélectionnez la couleur</h2>
        {colors.map((color, index) => {
          return (
            <button
              key={index}
              className='button'
              onClick={() => {
                setValueColor(color.price);
              }}
            >
              {color.name} - {color.price}
            </button>
          );
        })}
        <div className='buy'>
          <p>{valueColor + valueCar}</p>
          <button>Buy</button>
        </div>
      </div>
    </>
  );
}

export default App;
