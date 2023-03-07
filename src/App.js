import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/cart/CartPage';
import DetailsPage from './pages/details/DetailsPage';
import IndexPage from './pages/index/IndexPage';

import { DataProvider } from './data/context';
import DataSources from './data'

function App() {
  return (
    <BrowserRouter>
      <DataProvider value={DataSources}>
        <div className="App">
          <Routes>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/details/:id' element={<DetailsPage />} />
            <Route path='/' element={<IndexPage />} />
          </Routes>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
