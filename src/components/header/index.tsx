import Link from "next/link";
import styles from "@/components/header/header.module.css";

export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <h1>Meu site</h1>
        <div className={styles.nav}>
          <Link href={"/"}>Home</Link>
          <Link href={"/contatos"}>Contatos</Link>
          <Link href={"/repositorios"}>Repositórios</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
        </div>
      </div>
      <hr />
    </header>
  );
}
