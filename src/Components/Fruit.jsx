export default function Fruit({ fruitInfo, onClick }) {
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete;
  
    return (
      <div>
        <li>
          {fruitInfo.nom}
          <button onClick={onClick}>x</button>
        </li>
      </div>
    );
  }
  