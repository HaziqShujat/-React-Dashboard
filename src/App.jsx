import Leftcoloum from "./Components/Leftcoloum";
import Navbar from "./Components/Navbar";
import Rightcoloum from "./Components/Rightcoloum";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <div className='flex flex-col  flex-1  relative '>
        <Navbar/>
      <div className="grid md:grid-cols-3  grid-cols-1 w-full">
        <div className=" col-span-2">
          <Leftcoloum/>
        </div>
        <div className="w-full">
          <Rightcoloum/>
        </div>
      </div>
      </div>
    </main>
  );
}

export default App;
