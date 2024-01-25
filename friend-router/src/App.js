import './App.css';
import Home from './Complonents/Home/Home';
import Details from './Complonents/Details/details';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="friend/:fid" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
