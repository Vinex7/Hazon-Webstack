import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Spinner } from 'reactstrap';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center">Hazon Vinex - User List</h1>
      {loading ? <Spinner /> : (
        <ListGroup>
          {users.map((user, index) => (
            <ListGroupItem key={index}>
              {user.message}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </Container>
  );
}

export default App;

