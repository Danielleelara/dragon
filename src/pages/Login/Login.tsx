import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import Button from "../../components/Button/Button";

type Props = {
  nickname: string;
  password: string;
};

export const Login = () => {
  const [form, setForm] = useState<Props>({
    nickname: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      nickname: form.nickname,
      password: form.password,
    };
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5173/", {
        method: "POST",
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const { token } = await response.json();
        sessionStorage.setItem("token", token);

        return navigate("/dragons-list");
      }
      throw new Error("Não autenticado");
    } catch {
      alert("Usuário ou Senha Incorreta!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=> {
   const hasToken =  sessionStorage.getItem('token')
    if(hasToken){
      navigate('/dragons-list')
    }
  }, [navigate])

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Dragons</h1>
      <form onSubmit={submit}>
        <label htmlFor="nickname">Nome</label>
        <input
          placeholder="Nome"
          type="text"
          id="nickname"
          name="nickname"
          onChange={handleChange}
        />

        <label htmlFor="password">Senha</label>
        <input
          name="password"
          placeholder="Apenas números"
          type="password"
          id="password"
          onChange={handleChange}
        />
        <Button label={loading ? "Loading" : "Enviar"} />
      </form>
    </main>
  );
};
