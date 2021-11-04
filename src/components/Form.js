import '../styles/Form.css';
import { useState } from 'react';

const Form = ({ addUser, setError }) => {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username && !age) {
            //alert('enter all fields')
            setError({ title: 'Invalid Username and Age', message: 'Please enter all the fields' })
        } else if (!username) {
            setError({ title: 'Invalid Username', message: 'Please enter a Username' })
        } else if (!age || age < 0 || age > 120) {
            setError({ title: 'Invalid Age', message: 'Please enter a valid age between 0 and 120' })
        } else {
            let id = Math.random() * 100
            addUser(username.trim(), age, id.toFixed(2))
            setUsername('')
            setAge('')
        }
    }

    return (

        <form className="form" onSubmit={handleSubmit}>
            <h2>Enter User Details</h2>
            <label htmlFor="username">Username</label>
            <input value={username} type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="age">Age</label>
            <input value={age} type="number" id="age" onChange={(e) => setAge(e.target.value)} />
            <button className="btn" type="submit">Add</button>
        </form>

    );
}

export default Form;