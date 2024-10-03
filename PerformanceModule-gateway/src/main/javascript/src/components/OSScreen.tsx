function OSScreen() {
  const getInitialState = () => {
    fetch("/data/babyshark/state", {
      method: "GET",
    })
      .then((data: any) => console.log(data))
      .catch((error: any) => console.error(error));
  };

  getInitialState();

  return <h1>hello</h1>;
}

export default OSScreen;
