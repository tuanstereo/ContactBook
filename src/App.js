import './App.css';
import Landing from './page/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactDetail from './page/ContactDetail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='' element={<Landing />} />
          <Route path="detail/:id" element={<ContactDetail />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
