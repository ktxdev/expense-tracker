import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/sidenav/SideNav";
import Stats from "./components/stats/Stats";
import Transactions from "./components/transactions/Transactions";

function App() {
  return (
    <div className="flex flex-col w-full h-screen max-h-screen bg-gray-100 p-10">
      <Navbar balance="38000.00" />
      <div className="flex flex-grow space-x-4">
        <SideNav />
        <div className="w-full flex flex-col">
          <Stats />
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default App;
