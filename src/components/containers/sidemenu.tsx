import { Link } from "react-router-dom";
import classes from "./sidemenu.module.css";

export default function SideMenu() {
  return (
    <div className={classes.container}>
      <div className="container nes-container with-title is-rounded">
        <p className="title">menu</p>
        <details>
          <summary>BASE</summary>
          <ul className="nes-list is-disc">
            {MENU_ITEMS.map((v) => {
              if (v.isAvailable) {
                return (
                  <li>
                    <Link to={v.address}>{v.label}</Link>
                  </li>
                );
              } else {
                return <li style={{ color: "gray" }}>{v.label}</li>;
              }
            })}
          </ul>
        </details>
      </div>
    </div>
  );
}

const MENU_ITEMS = [
  {
    label: "BASE64",
    address: "base64",
    isAvailable: true,
    childlen: null,
  },
  {
    label: "BASE32",
    address: "base32",
    isAvailable: false,
    childlen: null,
  },
  {
    label: "BASE16",
    address: "base16",
    isAvailable: false,
    childlen: null,
  },
];
