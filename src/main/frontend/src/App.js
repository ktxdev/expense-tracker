import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/sidenav/SideNav";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from "./components/Expenses";
import Income from "./components/Income";

function App() {
  return (
    <div className="flex flex-col w-full h-screen max-h-screen bg-gray-100 p-10">
        <Navbar balance="38000.00" />
        <div className="flex flex-grow space-x-4">
          <SideNav />
          <div className="w-full flex flex-col">
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/expenses" element={<Expenses />}/>
              <Route path="/income" element={<Income />}/>
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
