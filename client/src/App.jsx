import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "", 
    email: ""
  })

  const [clicked, setClicked] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setClicked(clicked => !clicked)

  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({...formData, [name]: value}))
  }

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder='nom' name="nom" value={formData.nom} onChange={handleChange} />
        <input type="text" placeholder='prenom' name="prenom" value={formData.prenom} onChange={handleChange} />
        <input type="number" placeholder='age' name="age" value={formData.age} onChange={handleChange} />
        <input type="text" placeholder='email' name="email" value={formData.email} onChange={handleChange} />
        <button type='submit'>{clicked ?" Clear":"Enregistrer"}</button>
      </form>
      <div className="">
        {clicked&& 
          <>
            <h3>Informations</h3>
            <h4> nom: {formData.nom} </h4>
            <h4> prenom: {formData.prenom} </h4>
            <h4> age: {formData.age} </h4>
            <h4> email: {formData.email} </h4>
          </>
        }
      </div>
    </div>
  )
}

export default App
