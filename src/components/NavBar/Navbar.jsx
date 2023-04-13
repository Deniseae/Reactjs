import styles from "./Navbar.module.css";

export const Navbar = () => {
    return(
        <div className={styles.containerNavbar}>
        <ul>
        <li>Home</li>
        <li>Hidratacion</li>
        <li>Antiage</li>
        <li>Limpieza</li>
        <li>Todas</li>
        </ul>
        </div>
    );
}