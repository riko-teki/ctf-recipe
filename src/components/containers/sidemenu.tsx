import classes from "./sidemenu.module.css";

export default function SideMenu() {
  return (
    <div className={classes.container}>
      <div className="container nes-container with-title is-rounded">
        <p className="title">menu</p>
        <ul className="nes-list is-disc">
          {MENU_ITEMS.map((v) => (
            <li>
              <a href={v}>{v}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const MENU_ITEMS = ["BASE64", "BASE32"];
