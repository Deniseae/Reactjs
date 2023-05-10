import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import {Outlet, Link} from "react-router-dom"
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";

export const Navbar = () => {
    return(
        <div>
            <div className={styles.containerNavbar}>
            
                <Link to="/">
                <h1>Jade</h1>
                </Link>
           
                <ul style={{display: "flex", gap: "30px"}}>
                    <li>Serum</li>
                    <li>Hidratacion</li>
                    <li>Antiage</li>
                    <li>Limpieza</li>
                    <li>Tonicos</li>
                </ul>
                <CartWidget/>
            </div>

           <Outlet />

        </div>

    );
}