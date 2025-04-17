import { useEffect, useState } from "react";
import { getList, deleteDragon } from "../../services/api";
import { useNavigate } from "react-router";

export type Dragon = {
  createdAt: string;
  id: string;
  name: string;
  type: string;
};

export const DragonsList = () => {
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getDragonList = async () => {
    setLoading(true);
    try {
      const data = await getList();
      setDragons(data as Dragon[]);
    } catch {
      alert(
        "Não foi possivel listar os dragões. Tente novamente ou contate o nosso time!"
      );
    } finally {
      setLoading(false);
    }
  };

  const editDragon = async (id: number) => {
    navigate(`/dragon-edit/${id}`)
  };

  const removeDragon = async (id: number) => {
    setLoading(true);
    try {
      await deleteDragon(id);
    } catch {
      alert(
        "Não foi possivel deletar esse item. Tente novamente ou contate o nosso time!"
      );
    } finally {
      getDragonList()
      setLoading(false);

    }
  };

  useEffect(() => {
    getDragonList();
  }, []);

  const orderedList = dragons.sort((a, b) =>
    a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
  );

  return (
    <main>
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <>
          <ol>
            {orderedList &&
              orderedList.map((dragon) => (
                <div key={dragon.id} style={{display: 'flex', justifyContent: 'space-between'}}>
                <li
                  onClick={() => navigate(`/details/${dragon.id}`)}
                >
                  {dragon.name}
                </li>
                <button onClick={()=> editDragon(Number(dragon.id))}>Editar</button>
                <button onClick={()=> removeDragon(Number(dragon.id))}>Delete</button>
                </div>
              ))}
          </ol>
          <button onClick={()=> navigate('/dragon-create')}>Criar um dragão</button>
        </>
      )}
    </main>
  );
};
