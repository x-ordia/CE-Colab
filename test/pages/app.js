
import { Navigation } from './Navbar';
import { Cardsss } from './Cards';
import {SSRProvider} from 'react-aria';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// <Cardsss/>

function App() {
  return (
    <SSRProvider>
      <Navigation/>
    </SSRProvider>
  );
}

export default App;
