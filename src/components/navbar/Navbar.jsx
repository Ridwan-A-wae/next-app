"use client";

import links from "@/lib/links";
import styles from "./navbar.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const session = true;
  const isAdmin = true;

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>Logo</Link>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {isAdmin ? (
          <div>
            <NavLink item={{ title: "Admin", path: "/admin" }} />
            <button className={styles.logout}> Logout </button>
          </div>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <div className={styles.mobileLinks}>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
        {open && links.map((link) => <NavLink key={link.title} item={link} />)}
      </div>
    </div>
  );
}
