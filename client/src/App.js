// Import dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Footer />
    </Router>
  );
}

export default App;
