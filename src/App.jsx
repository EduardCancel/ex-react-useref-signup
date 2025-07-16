import { useEffect, useMemo, useRef, useState, usere } from "react"
import "./App.css"

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/~`";

function App() {

  // Campi controllati 
  const [userName, setUsername] = useState("eduard2002")
  const [password, setFormPassword] = useState("Password123!")
  const [description, setDescription] = useState(`Sono un web developer con esperienza in React e Node.js e ho lavorato su diversi progetti complessi. 
    Sono appassionato di tecnologia e mi piace risolvere problemi attraverso il codice. La mia esperienza include la creazione di applicazioni web scalabili e 
    performanti, nonché la collaborazione con team multidisciplinari per raggiungere obiettivi comuni. 
    Sono sempre alla ricerca di nuove sfide e opportunità per crescere professionalmente.`)

  // Campi non controllati
  const fullNameRef = useRef()
  const specializationRef = useRef()
  const experienceYearsRef = useRef()

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

    // Recupero i valori dai campi non controllati
    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value;

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
    <div className="app-container">
      <div className="signup-card">
        <h1 className="signup-title">Welcome Web Developer SignUp</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label className="form-label">Nome Completo</label>
            <input
              type="text"
              ref={fullNameRef}
              placeholder="Inserisci il tuo nome completo"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
            {userName.trim() && (
              <p className={`validation-message ${isUsernameValid ? 'valid' : 'invalid'}`}>
                {isUsernameValid ? "Username valido" : "Username non valido"}
              </p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setFormPassword(e.target.value)}
              className="form-input"
            />
            {password.trim() && (
              <p className={`validation-message ${isPasswordValid ? 'valid' : 'invalid'}`}>
                {isPasswordValid ? "Password valida" : "Password non valida"}
              </p>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Specializzazione</label>
              <select
                ref={specializationRef}
                defaultValue=""
                className="form-select"
              >
                <option value="">Seleziona una specializzazione</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Anni di esperienza</label>
              <input
                type="number"
                ref={experienceYearsRef}
                className="form-input"
                min="0"
                placeholder="0"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Descrizione</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              placeholder="Descrivi la tua esperienza professionale..."
            />
            {description.trim() && (
              <p className={`validation-message ${isDescriptionValid ? 'valid' : 'invalid'}`}>
                {isDescriptionValid ? "Descrizione valida" : "Descrizione non valida"}
              </p>
            )}
          </div>

          <button type="submit" className="submit-button">
            Invia Candidatura
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
