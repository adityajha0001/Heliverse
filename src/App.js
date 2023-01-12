import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import Team from "./components/team/team";
import Nav from "./components/home/nav";
import Data from "./components/home/data";

function App() {
  return (
   <>
     <Provider store={store}>
     <BrowserRouter>
     <Nav/>
        <Routes>
          <Route path="/" element={<Data/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>
    </BrowserRouter>
   
   


     </Provider>
   
   </>
  );
}

export default App;
