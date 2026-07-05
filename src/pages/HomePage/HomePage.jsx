import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function HomePage() {
    return (
        <>
            <div className="page-wrapper">
                <title>Home Page</title>
                <Header />
                <main className="page-content"></main>
                <Footer />
            </div>
        </>
    );
}
