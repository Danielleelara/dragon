import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDetails } from "../../services/api";
import PageWrapper from "../../components/PageWrapper";

export type Dragon = {
    createdAt: string;
    id: string;
    name: string;
    type: string;
}


export const Details = () => {
    const { id } = useParams();
     const [dragon, setDragon] = useState<Dragon>();
     const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getDragon = async () => {
            setLoading(true)
            try {
                const data = await getDetails(Number(id))
                setDragon(data as Dragon)
            } catch {
                alert('Não foi possível buscar a lista de dragões! Tente novamente ou contate o nosso time!')
            } finally{
                setLoading(false)
            }
        }
        getDragon();

    }, [id]);

const formatedDate = dragon?.createdAt && new Date (dragon?.createdAt).toLocaleDateString()

    return (
        <PageWrapper >
            {loading ? <h1>...Loading</h1> : <>
                <h1 >Detalhes</h1>
                <p >Data da Criação: {formatedDate}</p>
                <p >Nome: {dragon?.name}</p>
                <p >Tipo: {dragon?.type}</p>
            </>
        }
    </PageWrapper>
  );
};