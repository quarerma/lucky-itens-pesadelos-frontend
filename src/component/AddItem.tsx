import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CreateItem {
  name: string;
  rarity: string;
}

export const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemRarity, setItemRarity] = useState("");

  const handleCreateItem = async () => {
    try {
      const newItem: CreateItem = {
        name: itemName,
        rarity: itemRarity,
      };
      console.log(newItem);
      await axios.post(
        "https://lucky-itens-pesadelos-backend.onrender.com/item/create",
        newItem
      );
    } catch (error) {
      console.error("Erro ao criar o item:", error);
    }
  };
  return (
    <div className="bg-purple-700 w-screen h-screen flex items-center justify-center font-singleDay text-purple-700">
      <div className="h-fit w-fit bg-white rounded-[30px] shadow-2xl border border-black items-center">
        <Link to={"/"} className="z-10 relative top-2 left-5  cursor-pointer">
          <div className="border w-fit px-1 border-purple-700 rounded-xl hover:scale-125">
            Voltar
          </div>
        </Link>
        <div className="mt-7 mb-7 px-10 flex-col">
          <input
            type="text"
            placeholder="Nome"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="border text-2xl px-2 border-purple-700 placeholder-purple-700 focus:outline-none  rounded-[24px] py-1"
          />
          <div className="text-1xl items-center  mt-5 relative">
            <select
              name="rarity"
              className="border border-purple-700 rounded-[24px] p focus:outline-none  w-full block p-2"
              value={itemRarity}
              onChange={(e) => setItemRarity(e.target.value)}
            >
              <option value="COMMON"> Comum</option>
              <option value="RARE"> Raro</option>
              <option value="EPIC"> Épico</option>
              <option value="LEGENDARY"> Lendário</option>
            </select>
          </div>
          <div className="items-center text-center mt-5 ">
            <button
              className="border rounded-lg text-[1.354rem] hover:scale-125 px-2 bg-violet-200 border-purple-700"
              onClick={handleCreateItem}
            >
              Criar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
