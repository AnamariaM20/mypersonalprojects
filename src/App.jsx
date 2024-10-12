import { useState } from "react"

const App = () => {
  
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    telefono: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setForm((form) => {
      return {
        ...form,
        [name]: value,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label  htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" value={form.name} onInput={handleInput} required/>
      </div>
      <div>
        <label  htmlFor="cognome">Cognome</label>
        <input type="text" id="cognome" name="cognome"  value={form.cognome} onInput={handleInput} required/>
      </div>
      <div>
        <label  htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" value={form.email} onInput={handleInput} required/>
      </div>
      <div>
        <label  htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={form.password} onInput={handleInput} required/>
      </div>
      <div>
        <label  htmlFor="telefono">Telefono</label>
        <input type="tel" id="telefono" name="telefono" value={form.telefono} onInput={handleInput} required/>
      </div>
      <div>
        <button type="submit">Invia</button>
      </div>
    </form>
    </>
  )
}

export default App 