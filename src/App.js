import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';

import './App.css';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  background-color: transparent;
  height: 100%;
`;

export default App;
