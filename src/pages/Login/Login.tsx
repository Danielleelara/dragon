import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";


type Props = {
    nickname: string;
    password: string;
}

export const Login = () => {
  const [form, setForm] = useState<Props>({
    nickname: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();

    const user = {
      nickname: form.nickname,
      password: form.password,
    };
    setLoading(true);
    const response = await fetch("http://localhost:5173/", {
      method: "POST",
      body: JSON.stringify(user),
    });
    
    setLoading(false);

    const data = await response.json();
    if (data) {
      navigate("/dragons-list");
     }else {
      alert("Usuário ou Senha Incorreta!");
    }

  };

  console.log(form)

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Dragons</h1>
      <form onSubmit={submit}>
          <label htmlFor="nickname">
            Nome
          </label>
          <input
            placeholder="Nome"
            type="text"
            id="nickname"
            name="nickname"
            onChange={handleChange}
          />

          <label htmlFor="password">
            Senha
          </label>
          <input
            name="password"
            placeholder="Apenas números"
            type="password"
            id="password"
            onChange={handleChange}
          />

        <button type="submit" className={styles.button}>{
              loading ? 'Loading' : 'Enviar'
            }
        </button>
      </form>
    </main>
  );
};