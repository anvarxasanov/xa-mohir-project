import { professions } from "../../data/my-professions";

export function ProfileProfessions() {
    return (
        <>
            <div className="profs-grid">
                {professions.map((prof) => (
                    <div key={prof.id} className="prof-card">
                        <div className="prof-card__image">
                            <img src={prof.image} alt={prof.name} />
                        </div>
                        <div className="prof-card__body">
                            <h3 className="prof-card__title">{prof.name}</h3>
                            <div className="prof-card__progress-wrap">
                                <div className="prof-card__progress-bar">
                                    <div
                                        className="prof-card__progress-fill"
                                        style={{ width: `${prof.progress}%` }}
                                    />
                                </div>
                                <span className="prof-card__percent">
                                    {prof.progress}%
                                </span>
                            </div>
                            <button className="prof-card__btn">
                                Darsni davom ettirish
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
