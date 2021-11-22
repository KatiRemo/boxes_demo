const changeNameHandler = () => {
  console.log("WOW from box");
};

const Box = ({name, title, age}) => {
  return (
    <div className="box">
      <div>
        <h2>{name}</h2>
        <p>Title: {title}</p>
        <p>Age: {age}</p>
        <button onClick={changeNameHandler}>Click me</button>
      </div>
    </div>
  );
};

export default Box;
