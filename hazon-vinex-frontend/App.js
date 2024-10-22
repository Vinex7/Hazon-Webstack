import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [skills, setSkills] = useState('');
    
    // Fetch users
    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);
    
    // Create user
    const createUser = () => {
        const user = { name, email, bio, skills: skills.split(',') };
        axios.post('http://localhost:5000/api/users', user)
            .then(res => console.log('User created:', res.data))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Hazon Vinex Portfolio</h1>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Bio" value={bio} onChange={e => setBio(e.target.value)} />
            <input placeholder="Skills (comma separated)" value={skills} onChange={e => setSkills(e.target.value)} />
            <button onClick={createUser}>Create User</button>

            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

