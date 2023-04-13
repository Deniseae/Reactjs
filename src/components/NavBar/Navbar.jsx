import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imgLogo from"../../assets/images/jade sin fondo letras blancas.png"
export const Navbar = () => {
    return(
        <div className={styles.containerNavbar}>
        <img 
        src={imgLogo} 
        alt="Este es el logo de la página" />
        <ul style={{display: "flex", gap: "30px"}}>
        <li>Serum</li>
        <li>Hidratacion</li>
        <li>Antiage</li>
        <li>Limpieza</li>
        <li>Tonicos</li>
        </ul>
        <CartWidget/>

        </div>
    );
}