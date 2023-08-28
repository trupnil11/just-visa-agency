import './App.css';
import Layout from './components/layout/layout.component';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Homepage from './pages/home';
import AddConsultancy from './pages/add-consultancy';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';



function App() {

  return (
    <div className="App">
     <Router>
      <Layout>
        <Routes>
        <Route path='/'  element={<Navigate to="/consultancy/analytics" replace />} /> 
        <Route path="/consultancy/analytics"  element={<Homepage />}/>
        <Route path='/consultancy/add/' element={<AddConsultancy />} />
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/registration' element={<RegisterPage />} /> 
         <Route path="*" element={<Navigate to="/login" replace />} />  
        </Routes>
      </Layout>
      
      </Router>
    </div>
  );
}

export default App;
