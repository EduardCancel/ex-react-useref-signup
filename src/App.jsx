import { useState } from "react"

function App() {

  // Campi controllati 

  const [fullName, setFullName] = useState("Eduard")
  const [userName, setUsername] = useState("xrey55x")
  const [password, setFormPassword] = useState("Password")
  const [specialization, setSpecialization] = useState("Fullstack Developer")
  const [experienceYears, setExperienceYears] = useState("5")
  const [description, setDescription] = useState("Sono un web developer con esperienza in React e Node.js.")

  const handleSubmit = e => {
    e.preventDefault()

    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears < 0 ||
      !description.trim()
    ) {
      alert("Compila tutti i campi richiesti prima di inviare il modulo.")
    }
    console.log("Form submitted with values:", {
      fullName,
      userName,
      password,
      specialization,
      experienceYears,
      description
    });


  }
  return (
    <>
      <div>
        <h1>Welcome Web Developer SignUp  </h1>
        <form onSubmit={handleSubmit} >
          <label>
            <p> Nome Completo </p>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label>
            <p> Username </p>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <p> Password </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setFormPassword(e.target.value)}
            />
          </label>
          <label>
            <p> Specializzazione </p>
            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">Seleziona una specializzazione</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
            </select>
          </label>
          <label>
            <p> Anni di esperienza </p>
            <input
              type="number"
              value={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
            />
          </label>
          <label>
            <p> Descrizione </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Invia</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
