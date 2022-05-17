import "./index.css";

const Modale = () => {
  return (
    <>
      <div className="modaleContainer">
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          Ouvrir Modale
        </button>
      </div>
      <div
        className="myModal"
        onClick={() => {
          console.log("close ME");
        }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/220px-Red_Panda_%2824986761703%29.jpg" />
      </div>
    </>
  );
};

export default Modale;
