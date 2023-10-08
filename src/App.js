import Random from "../src/components/Random";
import Tag from "../src/components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
