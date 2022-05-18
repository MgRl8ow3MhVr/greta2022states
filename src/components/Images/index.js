import "./index.css";

const Images = () => {
  const url1 =
    "https://www.cherifaistesvalises.com/wp-content/uploads/2022/02/shutterstock_1662677074.jpg";
  const url2 =
    "https://media-cdn.tripadvisor.com/media/photo-s/1c/39/e1/25/aerial.jpg";

  return (
    <div className="imgContainer">
      <div className="oneItem">
        <img src={url1} />
        <div>zanzibar1</div>
      </div>
      <div className="oneItem">
        <img src={url2} />
        <div>zanzibar1</div>
      </div>
    </div>
  );
};

export default Images;
