import { Timer, Rocket, ArrowRight } from 'lucide-react';
import './HomePage.css';


export function Categories() {
    return (
        <section className="categories">
            <div className="category-card category-card--light">
                <Timer size={48} strokeWidth={1.5} />
                <h3 className="category-card__title">Kurslar</h3>
                <p className="category-card__desc">
                    Davomiyligi qisqa va sohaning ma'lum qismini qamrab olgan
                    kurslar.
                </p>
                <button className="category-card__btn">
                    12 ta kurs <ArrowRight size={18} />
                </button>
            </div>

            <div className="category-card category-card--dark">
                <Rocket size={48} strokeWidth={1.5} />
                <h3 className="category-card__title">Kasblar</h3>
                <p className="category-card__desc">
                    Kasbga yo'naltirilgan praktikum kurslari. 0 dan boshlab ishga
                    tayyor bo'lib chiqing.
                </p>
                <button className="category-card__btn">
                    10 ta kasb <ArrowRight size={18} />
                </button>
            </div>
        </section>
    );
}