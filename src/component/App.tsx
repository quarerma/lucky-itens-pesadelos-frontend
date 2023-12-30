import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const [rarity, setRarity] = useState("");

  useEffect(() => {
    if (request?.data) {
      switch (request.data.rarity) {
        case "COMMON":
          setRarity("Comum");
          break;
        case "RARE":
          setRarity("Raro");
          break;
        case "EPIC":
          setRarity("Épico");
          break;
        case "LEGENDARY":
          setRarity("Lendário");
          break;
        default:
          setRarity("Comum");
      }
    }
  }, [request]);
  const handleFetch = () => {
    setLoading(true);

    axios
      .get<Item>("http://localhost:3000/item/getItem")
      .then((response) => {
        console.log(response.data);
        setRequest(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-purple-700 w-screen h-screen flex items-center justify-center font-singleDay text-purple-950">
      <div className="h-[40vh] w-fit bg-white rounded-[30px] shadow-2xl border border-black flex flex-col items-center">
        <div className="text-center mt-5 px-16 text-3xl flex flex-col">
          <h1>Pegar Item do Outro Lado</h1>
        </div>

        {loading ? (
          <p className="text-2xl mt-5">Carregando...</p>
        ) : (
          request && (
            <div className="flex flex-col items-center mt-5">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl">Item: {request.data.name}</h1>
                <div className="text-[1.24567rem] flex">
                  <h1 className="mr-1">Raridade: </h1>
                  <h2
                    className={` ${
                      request.data.rarity === "COMMON"
                        ? "text-green-500"
                        : request.data.rarity === "RARE"
                        ? "text-blue-500"
                        : request.data.rarity === "EPIC"
                        ? "text-violet-500"
                        : request.data.rarity === "LEGENDARY"
                        ? "text-yellow-500"
                        : "" // Adicione outras condições conforme necessário
                    }`}
                  >
                    {rarity.toLowerCase()}
                  </h2>
                </div>
              </div>
            </div>
          )
        )}

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
