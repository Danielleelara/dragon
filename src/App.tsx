import { BrowserRouter, Route, Routes } from 'react-router';
import { Login } from './pages/Login/Login'
import { Details } from './pages/Details/Details';
import { DragonsList } from './pages/DragonsList/DragonsList';
import { DragonCreate } from './pages/DragonCreate/DragonCreate';
import { NotFound } from './pages/NotFound/NotFound';


function App() {

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Login />}></Route>
            <Route path="/dragons-list" element={<DragonsList />}></Route>
            <Route path="/dragon-create" element={<DragonCreate />}></Route> 
            <Route path="/dragon-edit/:id" element={<DragonCreate />}></Route> 
            <Route path="/details/:id" element={<Details />}></Route> 
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  
}

export default App
