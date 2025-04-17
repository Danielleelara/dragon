import { useEffect, useState } from "react";
import { getList, deleteDragon } from "../../services/api";
import { CgEye, CgTrash, CgPen } from "react-icons/cg";
import { useNavigate } from "react-router";
import styles from "./DragonList.module.css";
import PageWrapper from "../../components/PageWrapper";

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
    <PageWrapper>
      <main>
        {loading ? (
          <h1>...Loading</h1>
        ) : (
          <div className={styles.container}>
            <ul>
              {orderedList &&
                orderedList.map((dragon) => (
                  <div key={dragon.id} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <li>{dragon.name}</li>
                    <li><CgEye onClick={() => navigate(`/details/${dragon.id}`)}/></li>
                    <li> <CgPen onClick={()=> editDragon(Number(dragon.id))}/></li>
                    <li> <CgTrash onClick={()=> removeDragon(Number(dragon.id))}/></li>
                  </div>
                ))}
            </ul>
            <button onClick={()=> navigate('/dragon-create')}>Novo</button>
          </div>
        )}
      </main>
    </PageWrapper>
  );
};
