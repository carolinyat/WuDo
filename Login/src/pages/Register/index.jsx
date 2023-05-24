import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/WuDo-logo.jpeg";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationError, setValidationError] = useState(null);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    const userData = { email, password, birthDate, phoneNumber };
    createUserWithEmailAndPassword(userData);
  }

  if (loading) {
    return <p>Redirecionando...</p>;
  }
  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="WuDo" className="logoImg" />
        <span>Por favor, digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="usuario@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Digite novamente sua senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="birthDate">Insira sua data de nascimento</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="dd/mm/aaaa"
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="phoneNumber">Insira seu número de telefone</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="(XX) XXXXX-XXXX"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button onClick={handleSignOut} type='submit' className="button">
          Cadastrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
