/* eslint-disable react/prop-types */

const Jhevbutton = ({ label, onClick }) => {
  const buttonStyle = {
    cursor: "pointer",
    fontWeight: 700,
    fontFamily: "Helvetica, sans-serif",
    transition: "all 0.2s",
    padding: "6px 16px",
    borderRadius: "10px",
    background:
      "linear-gradient( 95.69deg, #ac0000 0, #f00 26.35%, #ff3b3b 50.83%, #f00 72.71%, #f00 100% )",
    color: "#fff",
    border: "1px solid transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
  };

  return (
    <button style={buttonStyle} onClick={onClick} className="btn-bg">
      {label}
    </button>
  );
};

export default Jhevbutton;
