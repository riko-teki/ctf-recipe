import classes from "./header.module.css";

export default function Header() {
  return (
    <div className={classes.container}>
      <a className={classes.title} href="/">
        <h1>
          <span className="nes-text is-primary">C</span>
          <span className={classes.hidden}>apture</span>
          <span className="nes-text is-primary">T</span>
          <span className={classes.hidden}>he</span>
          <span className="nes-text is-primary">F</span>
          <span className={classes.hidden}>lag</span>
          <span> Recipe</span>
        </h1>
      </a>
      <p>fool's CTF Recipe</p>
    </div>
  );
}
