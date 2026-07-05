import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import "./Footer.css";

export function Footer() {
    const { isAuthenticated } = useAuth();

    return (
        <footer className={isAuthenticated ? "footer" : "footer-light"}>
            <div className="footer-top">
                <div>
                    <Link className="navbar__logo" to="/">
                        <img src="images/logo.webp" alt="" />
                        <span className="text-light">
                            Mohir.
                            <span className="navbar__logo-accent">mini</span>
                        </span>
                    </Link>
                    <div className="footer-address">
                        Mirobod tumani, Chimkent ko'chasi, 8-uy
                    </div>
                </div>

                <a href="tel:+998555000507" className="footer-phone text-light">+998 (55) 000 00 00</a>
            </div>

            <div className="footer-bottom">
                <div className="footer-copy">
                    © Mohirdev 2026. Barcha huquqlar himoyalangan.
                </div>
            </div>
        </footer>
    );
}
