import Link from "next/link";

import s from "./NavBar.module.css";
export const NavBar = () => {
  return (
    <div className={s.links}>
      <Link href={"/"}>Main</Link>
      <Link href={"/characters  "}>Characters</Link>
    </div>
  );
};
