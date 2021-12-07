import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Gallery from './components/Gallery';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <Container>
                <Header />
                <Gallery />
            </Container>
        </div>
    );
}

export default App;
