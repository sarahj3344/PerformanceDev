function ListGroup() {
  const items = ["Apple", "Orange", "Banana", "Peach", "Carrot"];

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>Hello World</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
