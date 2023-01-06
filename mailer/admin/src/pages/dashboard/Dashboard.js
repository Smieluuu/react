import React from 'react';
import { useEffect } from 'react';
import './Dashboard.scss';
import axios from 'axios';

const Dashboard = () => {
    const [users, setUsers] = React.useState([]);
    const nameRef = React.createRef();
    const surnameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const _isIncorrectEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return false;
    
        return true;
    }

    const addEmailHandler = async (e) => {
        e.preventDefault();
        
        const name = nameRef.current.value,
              surname = surnameRef.current.value,
              email = emailRef.current.value,
              password = passwordRef.current.value;

        if (name.length < 3 ||
            surname.length < 3 ||
            password.length < 5 ||
            _isIncorrectEmail(email)) {
            return;
        }

        const data = { name, surname, email, password };

        console.log(data);

        try {
            const response = await axios.post('/api/users/add', data);

            if (response.data.success) {
                getUsers();
                document.getElementById('form').reset();
            }
        } catch (error) {
            alert('Error')
        }
    };

    const getUsers = async () => {
        const response = await axios.get('/api/users?=' + sessionStorage.getItem('token'));

        if (response.data.success) {
            setUsers(response.data.users)
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='Dashboard-container'>
            <h1>Welcome in mailer Dashboard</h1>

            <form>
                <input ref={nameRef} type='text' placeholder='Name' />
                <input ref={surnameRef} type='text' placeholder='Surname' />
                <input ref={emailRef} type='text' placeholder='Email' />
                <input ref={passwordRef} type='text' placeholder='Password' />
                <button onClick={addEmailHandler}>Dodaj</button>
            </form>

            <div>
                {users.map(user => {
                        return <div>
                            <p>{user.name}</p>
                            <p>{user.surname}</p>
                            <p>{user.email}</p>
                            <p>{user.password}</p>
                        </div>
                    }
                )}
            </div>
        </div>
    )
};

export default Dashboard;