import './HomePage.css';

export function Hero() {
    return (
        <>
            <section className="hero">
                <p className="hero__label">ONLAYN TA'LIM PLATFORMA</p>
                <h1 className="hero__title">
                    Dasturlashga oid<br />kasblarni o'rgatamiz
                </h1>
                <button className="hero__btn">O'qishni boshlash</button>
            </section>

            <section className="stats">
                <div className="stats__intro">
                    <p>Istalgan joyda, o'zingizga qulay vaqtda o'qish imkoniyati</p>
                </div>

                <div className="stats__item">
                    <span className="stats__number">5 000+</span>
                    <p>Jami tahsil olayotgan o'quvchilarimiz</p>
                </div>

                <div className="stats__item">
                    <span className="stats__number">20+</span>
                    <p>Platformamizda mavjud kurslar soni</p>
                </div>

                <div className="stats__item">
                    <span className="stats__number">10+</span>
                    <p>Uzoq yillik tajribaga ega ustozlarimiz</p>
                </div>
            </section>
        </>
    );
}