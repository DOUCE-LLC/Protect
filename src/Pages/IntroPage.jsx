import '../Styles/IntroPage.css';
import {Link} from 'react-router-dom';

function IntroPage() {

    return (
    <div className="IntroPage__container">
        <div className="IntroPage__login">
            <Link to="/inicio"><button className="IntroPage__button" data-aos="fade-down" data-aos-delay="600">INICIAR SESION</button></Link>
        </div>

        <div className="IntroPage__textsContainer">
            <div className="IntroPage__texts">
                <h3 data-aos="fade-left" data-aos-delay="300">Tus películas favoritas, gratis.</h3>
                <h1 data-aos="fade-right">PELISFLIX</h1>
                <Link to="/registro"><button className="IntroPage__button" data-aos="flip-up" data-aos-delay="300">REGISTRATE</button></Link>
            </div>
        </div>
    </div>
  );
}

export default IntroPage;