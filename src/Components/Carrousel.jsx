import Carousel from 'react-bootstrap/Carousel';
import starwars from '../Img/starwars.jpg'
import lordoftherings from '../Img/lordoftherings.jpg'
import wallstreet from '../Img/wallstreet.jpg'
import '../Styles/Carousel.css';

function IndividualIntervalsExample() {
  return (
    <Carousel className='Carousel'>
      <Carousel.Item interval={2500} className="Carousel__item" id="starwars-img">
        <Carousel.Caption>
          <h3>Star Wars, El despertar de la fuerza.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500} className="Carousel__item" id="lordoftherings-img">
        <Carousel.Caption>
          <h3>El Señor de los Anillos.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="Carousel__item" id="wallstreet-img">
        <Carousel.Caption>
          <h3>el Lobo de Wall Street.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;