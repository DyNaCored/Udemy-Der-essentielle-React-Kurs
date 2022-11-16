export default function Counter({ count, id, handleCounterChange }) {
  //const [counter, setCounter] = useState(count);
  // useEffect with Timer
  /* useEffect(() => {
      const interval = setInterval(() => {
        buttonUpClickHandler();
      }, 1000);
      return () => {
        clearInterval(interval); // after return comes the cleanUp part of useEffects,
        // ohne diesen Teil würde der Counter weiter laufen obwohl wir ihn gar nicht mehr sehen bzw gar nicht mehr auf der Seite sind
        // Kurz: Wenn React die Komponente unmounted, dann wird der Code zwischen den Zeilen 13 und 17 ausgeführt
      };
    }, []); */

  const buttonUpClickHandler = () => {
    handleCounterChange({ count: (count += 1), id: id });
  };

  // alternative to code above
  /* const incrementCounter = () => {
      setCounter((prevCounter) => (prevCounter += 1));
    }; */

  const buttonDownClickHandler = () => {
    handleCounterChange({ count: (count -= 1), id });
  };

  /* const Greet = ({ name }) => {
      return (
        <div>
          <h1>{"Hello " + name}</h1>
        </div>
      );
    }; */

  // alternative to Konditionelles Rendern von Elementen
  // Code below is same as Lines 61-63
  /* const hideButtonIfCounterIsZero = () => {
      if (counter >= 1){
        return (
          <button onClick={buttonDownClickHandler}>-</button>
        )
      }else{
        retrun null;
      }
    }; */
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "20vw",
        display: "table",
        margin: "auto",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      {count <= 9 ? (
        <button
          className="hover"
          onClick={buttonUpClickHandler}
          style={{
            width: "5vw",
            height: "5vh",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#76b5c5",
          }}
        >
          +
        </button>
      ) : null}
      <h1>{count}</h1>
      {/* {hideButtonIfCounterIsZero()} */}
      {count >= 1 ? (
        <button
          className="hover"
          onClick={buttonDownClickHandler}
          style={{
            width: "5vw",
            height: "5vh",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#76b5c5",
          }}
        >
          -
        </button>
      ) : null}
    </div>
  );
}
