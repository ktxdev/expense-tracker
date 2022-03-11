import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/sidenav/SideNav";

function App() {
  return (
    <div className="w-full h-screen max-h-screen bg-slate-300 p-10">
        <Navbar balance="38000.00" />
        <SideNav />
    </div>
  );
}

export default App;
