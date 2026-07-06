import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../HomePage/Hero";

export function HomePage() {
    return (
        <>
            <div className="page-wrapper">
                <title>Home Page</title>
                <Header />
                <main className="page-content">
                    <Hero />
                </main>
                <Footer />
            </div>
        </>
    );
}
