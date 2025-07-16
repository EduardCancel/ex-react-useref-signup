import { useEffect, useMemo, useState } from "react"

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/~`";

function App() {

  // Campi controllati 

  const [fullName, setFullName] = useState("Eduard")
  const [userName, setUsername] = useState("eduard2002")
  const [password, setFormPassword] = useState("Password123!")
  const [specialization, setSpecialization] = useState("Fullstack Developer")
  const [experienceYears, setExperienceYears] = useState("5")
  const [description, setDescription] = useState(`Sono un web developer con esperienza in React e Node.js e ho lavorato su diversi progetti complessi. 
    Sono appassionato di tecnologia e mi piace risolvere problemi attraverso il codice. La mia esperienza include la creazione di applicazioni web scalabili e 
    performanti, nonché la collaborazione con team multidisciplinari per raggiungere obiettivi comuni. 
    Sono sempre alla ricerca di nuove sfide e opportunità per crescere professionalmente.`)

  const isUsernameValid = useMemo(() => {
    const charsValid = userName.split("").every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    )
    return charsValid && userName.trim().length >= 6;
  }, [userName])

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    )
  }, [password])

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length <= 1000;
  }, [description])

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
      || !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
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
            {userName.trim() && (
              <p style={{ color: isUsernameValid ? "green" : "red" }}>
                {isUsernameValid ? "Username valido" : "Username non valido"}
              </p>
            )}
          </label>
          <label>
            <p> Password </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setFormPassword(e.target.value)}
            />
            {password.trim() && (
              <p style={{ color: isPasswordValid ? "green" : "red" }}>
                {isPasswordValid ? "Password valida" : "Password non valida"}
              </p>
            )}
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
            {description.trim() && (
              <p style={{ color: isDescriptionValid ? "green" : "red" }}>
                {isDescriptionValid ? "Descrizione valida" : "Descrizione non valida"}
              </p>
            )}
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
