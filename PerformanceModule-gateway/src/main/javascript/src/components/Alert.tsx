interface Props {
  children: string;
  color?: "success" | "danger";
}

const Alert = ({ children, color = "danger" }: Props) => {
  return (
    <>
      <div className={"alert alert-" + color} role="alert">
        {children}{" "}
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <br></br>
      </div>
      <div>
        <img
          src="https://media4.giphy.com/media/5GuExKmluBdrrtAFwk/giphy.gif?cid=6c09b9520tlpio8v26hrws5shr0zbap1g56okehnz8j6wpoy&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Samezu Shark"
        ></img>
      </div>
    </>
  );
};

// https://media1.giphy.com/media/HF4HYBRaZsOcPEFEgB/giphy.gif?cid=6c09b9528118f164qeusgv9c23ekq3h9dl4akdb6i9p7jllz&ep=v1_gifs_search&rid=giphy.gif&ct=g

export default Alert;
