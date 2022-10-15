import "./Card.css";

const Card = ({ children, className, id }) => {
  const classes = `card ${className}`;

  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
};

export default Card;
