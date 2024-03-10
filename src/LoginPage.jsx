import React, { useState } from 'react';
//import { withRouter } from 'react-router-dom';
import './LoginPage.css'; // Import CSS file for styling
import RegistrationPage from './RegistrationPage';
import EmployeeManagement from './EmployeeManagement';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showregistration, Setshowregistration] = useState(false);
    const [showAPI, SetshowAPI] = useState(false);
    //const history = useHistory();

    // Function to handle form submission
    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        // Validate credentials - for demo purposes
        if (username === 'admin' && password === 'admin') {
            // Redirect to dashboard on successful login
           // history.push('/EmployeeManagement');
           //render() {
            // Your render logic here
          //}
           //console.log('Logged in');
           //alert('valid credentials');
          SetshowAPI(true);
        } else {
            alert('Invalid credentials');
            Setshowregistration(true);
        }
    };

    return (
        <div>
            {showregistration ? (<RegistrationPage/>):(
                <div>
                    {showAPI?<EmployeeManagement/>: <div className="login-container">
                    
        <form className="login-form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
                
               }
                </div>
                
            )}
           
        </div>
    );
};

export default LoginPage;
