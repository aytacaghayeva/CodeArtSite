import "./Home.css";
import Interior from "./interior-design-image.svg";
import Graphic from "./grapich-design-image.svg";
import Backend from "./back-end-iamge.svg";
import UX from "./ui-ux-design-image.svg";
import FrontEnd from "./front-end-image.svg";
import Exterior from "./exterior-design-image.svg";
import Arrow from "./arrow-right.svg";
import Group from "./Group 119 (1).svg";
import Start from "./start-course-now-icon-2.svg";
import Djavid from "./djavid-mammadov.svg";
import Mehemmed from "./mehemmed_kerim.svg";
import Turan from "./turan_faramazli.svg";

function Home() {
    return (
        <div className="home-div">
            <div className="centre-part">
                <div className="learnTxt">
                    <div className="learn">
                        <h1 className="learnSpan">Öyrənməyə <span>Bizimlə Başla</span></h1>
                        <p>Texnologiya və dizayn dünyasında uğurlu karyera üçün
                            bizə qoşulun. Codeart ilə təhsil səyahətinizə başlamaq
                            üçün indi qeydiyyatdan keçin.</p>
                    </div>
                    <button className="createAccount">Hesab Yarat</button>
                </div>
            </div>
            <div className="coursePart">
                <h1 className="courseDemand">Ən tələbatlı kurslarımız</h1>
                <div className="courses">
                    <div className="interior">
                        <img src={Interior}></img>
                        <div className="bottomPart">
                            <p className="design">Dizayn</p>
                            <p>Interyer Dizayn</p>
                        </div>
                    </div>
                    <div className="interior">
                        <img src={Graphic}></img>
                        <div className="bottomPart">
                            <p className="design">Dizayn</p>
                            <p>Qrafik Dizayn</p>
                        </div>
                    </div>
                    <div className="interior">
                        <img src={Backend}></img>
                        <div className="bottomPart">
                            <p className="design">Proqramlaşdırma</p>
                            <p>Backend Proqramlaşdırma</p>
                        </div>
                    </div>
                    <div className="interior">
                        <img src={UX}></img>
                        <div className="bottomPart">
                            <p className="design">Dizayn</p>
                            <p>UI/UX Dizayn</p>
                        </div>
                    </div>
                    <div className="interior">
                        <img src={FrontEnd}></img>
                        <div className="bottomPart">
                            <p className="design">Proqramlaşdırma</p>
                            <p>Front-end Proqramlaşdırma</p>
                        </div>
                    </div>
                    <div className="interior">
                        <img src={Exterior}></img>
                        <div className="bottomPart">
                            <p className="design">Dizayn</p>
                            <p>Eksteryer Dizayn</p>
                        </div>
                    </div>
                </div>
                <div className="application">
                    <div>
                        <img src={Group}></img>
                    </div>
                    <div className="courseArticle">
                        <h2>Kursa indi başla</h2>
                        <p>Codeart Təlim Mərkəzində təklif olunan kurslar
                            tələbələri geniş rəqəmsal bacarıqlarla təchiz
                            etmək məqsədi daşıyır.</p>
                        <div className="buttonApp">
                            <button>Müraciət et</button>
                            <img src={Arrow}></img>
                        </div>
                    </div>
                    <div>
                        <img src={Start}></img>
                    </div>
                </div>
                <div className="prefer">
                    <h1 className="preferTxt">Üstünlüklərimiz</h1>
                </div>
                <div className="preference">
                    <div className="prefFirst">
                        <div>
                            <p className="number">1</p>
                            <p className="prefTxt">Müxtəlif kurs imkanları</p>
                        </div>
                        <div>
                            <p className="number">2</p>
                            <p className="prefTxt">Pratik yönümlü təhsil</p>
                        </div>
                    </div>
                    <div className="prefSecond">
                        <div>
                            <p className="number">3</p>
                            <p className="prefTxt">Karyera inkişafı</p>
                        </div>
                        <div>
                            <p className="number">4</p>
                            <p className="prefTxt">Tərəfdaşlıq</p>
                        </div>
                    </div>
                </div>
                <div className="teach">
                    <h1>Müəllimlərimiz</h1>
                </div>
                <div className="teachers">
                    <div className="teacher">
                        <img src={Mehemmed} className="designTeach"></img>
                        <div className="experience">
                            <h1>Məhəmməd Kərim</h1>
                            <p>Qrafik və UI/UX dizayn</p>
                            <p><span className="black">8 il </span>iş təcrübəsi</p>
                        </div>
                    </div>
                    <div className="teacher">
                        <img src={Djavid} className="frontEndTeach"></img>
                        <div className="experience">
                            <h1>Cavid Məmmədov</h1>
                            <p>Front-end və Back-end
                            proqlamlaşdırma</p>
                            <p><span className="black">5 il </span>iş təcrübəsi</p>
                        </div>
                    </div>
                    <div className="teacher">
                        <img src={Turan} className="exteriorTeach"></img>
                        <div className="experience">
                            <h1>Turan Fərəməzli</h1>
                            <p>İnteryer və eksteryer
                            dizayn</p>
                            <p><span className="black">3 il </span>iş təcrübəsi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;


