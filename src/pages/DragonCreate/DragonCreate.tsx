import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createDragon, getDetails, updateDragon } from "../../services/api";

export type Dragon = {
    createdAt?: string;
    id?: string;
    name: string;
    type: string;
}


export const DragonCreate = () => {
    const { id } = useParams();
    const [dragon, setDragon] = useState<Dragon>({
        name: '',
        type: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const newDragon = async () => {
        setLoading(true)
        try {
            const data = await createDragon({
                name: dragon.name,
                type: dragon.type,
            })
            navigate('/dragons-list')
            console.log(data)
        } catch {
            alert('Não foi possível criar um novo dragão! Tente novamente ou contate o nosso time!')
        } finally{
            setLoading(false)
        }
    }



    const getDragon = async () => {
    setLoading(true)
        try {
        const data = await getDetails(Number(id))
        setDragon({
            name: data.name,
            type: data.type,
        })
        } catch {
        alert('Não foi possível buscar os detalhes do dragão! Tente novamente ou contate o nosso time!')
        } finally{
        setLoading(false)
        }
    }

    const editDragon = async () => {
        setLoading(true)
        try {
            const data = await updateDragon(Number(id), {
                name: dragon.name,
                type: dragon.type,
            })
            navigate('/dragons-list')
            console.log(data)
        } catch {
            alert('Não foi possível editar esse dragão! Tente novamente ou contate o nosso time!')
        } finally{
            setLoading(false)
        }
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDragon({
            ...dragon,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
    getDragon();
    }, [id]);

  return (
    <main >
        {loading ? <h1>...Loading</h1> : <>
            <h1 >{id ? 'Editar': 'Criar'}</h1>
            <input
            value={dragon.name}
            name='name'
            onChange={(e)=> handleChange(e)}
            />
             <input
             name='type'
             value={dragon.type}
             onChange={(e)=> handleChange(e)}
             />
             <button onClick={()=> id ? editDragon() : newDragon()}> {id ? 'Editar': 'Criar'} </button>
           
        </>
}
   
    </main>
  );
};