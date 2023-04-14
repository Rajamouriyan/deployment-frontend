import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ShowOrderList from './components/ShowOrderList';
import CreateOrder from './components/CreateOrder';
import UpdateOrderInfo from './components/UpdateOrderInfo';
import ShowOrderDetails from './components/ShowOrderDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowOrderList />} />
          <Route path='/create-order' element={<CreateOrder />} />
          <Route path='/edit-order/:id' element={<UpdateOrderInfo />} />
          <Route path='/show-order/:id' element={<ShowOrderDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
