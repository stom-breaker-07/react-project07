import './App.css';
import { AllRoutes } from './routers/AllRoutes';

import {Header,Footer} from "../src/components/Export";

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
