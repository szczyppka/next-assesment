import styles from "./Card.module.scss";
const Card = ({ children, ...rest }) => {
  return (
    <div className={`${styles.card} ${rest.error && styles.err}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
