import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/layout.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';


function App() {
  return (
    <div className="App">
     <Router>
      <Layout>
        <Routes>
        <Route path='/' element={<Homepage />} />  
        </Routes>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
