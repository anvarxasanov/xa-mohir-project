import "./Header.css";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";

export function Header() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated ? (
                <header className="navbar navbar-dark">
                    <Link className="navbar__logo" to="/profile">
                        <img src="images/logo.webp" alt="" />
                        <span className="text-light">
                            Mohir.
                            <span className="navbar__logo-accent">mini</span>
                        </span>
                    </Link>

                    <nav className="navbar__links">
                        <a className="text-light" href="/profile">
                            Home
                        </a>
                        <a className="text-light" href="#kasblar">
                            Kasblar
                        </a>
                        <a className="text-light" href="#kurslar">
                            Kurslar
                        </a>
                    </nav>
                    <Link to="/profile/info" className="btn">
                        Profile
                    </Link>
                </header>

            ) : (
                
                <header className="navbar">
                    <Link className="navbar__logo" to="/">
                        <img src="images/logo.webp" alt="" />
                        <span className="text-light">
                            Mohir.
                            <span className="navbar__logo-accent">mini</span>
                        </span>
                    </Link>

                    <nav className="navbar__links">
                        <a className="text-light" href="/">
                            Home
                        </a>
                        <a className="text-light" href="#kasblar">
                            Kasblar
                        </a>
                        <a className="text-light" href="#kurslar">
                            Kurslar
                        </a>
                    </nav>

                    <Link to="/login" className="btn">
                            Kirish
                    </Link>
                </header>
            )}
        </>
    );
}
