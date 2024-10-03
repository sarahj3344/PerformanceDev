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
      </div>
    </>
  );
};

export default Alert;
