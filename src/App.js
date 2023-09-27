import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import About from './pages/About';
import Search from './pages/Search';

import './App.css';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Category' element={<Category/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Search' element={<Search/>} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  background-color: transparent;
  height: 100%;
`;

export default App;
