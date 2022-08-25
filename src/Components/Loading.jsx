import Spinner from 'react-bootstrap/Spinner';
import '../Styles/Loading.css';

function Loading() {

    return (
        <div className="Loading">
            <div className="spinner">
                <Spinner animation="grow" variant="light" />
            </div>
        </div>
    )
}

export default Loading;