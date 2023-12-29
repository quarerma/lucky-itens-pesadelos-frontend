import { useState } from "react";
import axios from "axios";

interface Item {
  data: {
    id: number;
    name: string;
    rarity: string;
    probability: number;
  };
}

export const App = () => {
  const [request, setRequest] = useState<Item | null>(null);

  const handleFetch = async () => {
    const response = await axios.get<Item>(
      "http://localhost:3000/item/getItem"
    );
    console.log(response.data);
    setRequest(response.data);
    console.log(response.data);
    console.log(request);
  };

  return (
    <div className="bg-purple-700 w-screen h-screen flex items-center justify-center font-singleDay text-purple-950">
      <div className="h-[40vh] w-fit bg-white rounded-[30px] shadow-2xl border border-black flex flex-col items-center">
        <div className="text-center mt-5 px-16 text-3xl flex flex-col">
          <h1>Pegar Item do Outro Lado</h1>
        </div>

        {request &&
          (console.log(request.data),
          (
            <div className="flex flex-col items-center mt-5">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl">Item: {request.data.name}</h1>
              </div>
            </div>
          ))}

        <div className="mt-auto mb-5">
          <button
            className="w-full py-2 px-2 rounded-[15px] text-2xl border border-purple-950 shadow-2xl z-10 bg-purple-500 text-white"
            onClick={handleFetch}
          >
            Conjurar Ritual
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
