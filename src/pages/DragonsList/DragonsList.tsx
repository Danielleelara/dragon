import { useEffect, useState } from "react";
import { getList, deleteDragon } from "../../services/api";
import { CgEye, CgTrash, CgPen } from "react-icons/cg";
import { useNavigate } from "react-router";
import styles from "./DragonList.module.css";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Button from "../../components/Button/Button";

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
    navigate(`/dragon-edit/${id}`);
  };

  const removeDragon = async (id: number) => {
    setLoading(true);
    const removeConfirm = confirm('Tem certeza que deseja excluir esse dragão?');
    if(!removeConfirm){
      setLoading(false);
      return;
    }
    try {
      await deleteDragon(id);
    } catch {
      alert(
        "Não foi possivel deletar esse item. Tente novamente ou contate o nosso time!"
      );
    } finally {
      getDragonList();
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
      <div className={styles.container}>
        {loading ? (
          <h1>...Carregando</h1>
        ) : (
          <>
            <div className={styles.buttonDiv}>
              <Button label="Novo" onClick={() => navigate("/dragon-create")} />
            </div>
            <ul>
              {orderedList &&
                orderedList.map((dragon) => (
                  <div key={dragon.id} className={styles.listContainer}>
                    <li className={styles.dragonsName}>{dragon.name}</li>
                    <li>
                      <CgEye
                        title="Detalhes"
                        className={styles.icon}
                        onClick={() => navigate(`/details/${dragon.id}`)}
                      />
                      <CgPen
                        title="Editar"
                        className={styles.icon}
                        onClick={() => editDragon(Number(dragon.id))}
                      />
                      <CgTrash
                        title="Deletar"
                        className={styles.icon}
                        onClick={() => removeDragon(Number(dragon.id))}
                      />
                    </li>
                  </div>
                ))}
            </ul>
          </>
        )}
      </div>
    </PageWrapper>
  );
};
