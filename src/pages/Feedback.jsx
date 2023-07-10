import React, { useState } from 'react'
import '../styles/Feedback.css'
import Axios from 'axios'

const Feedback = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const [feedbackList, setFeedbackList] = useState([]);
    
    const sendFeedback = () => {
        console.log('sending...');
        Axios.post('http://localhost:3001/feedback', {
            name: name,
            address: address,
            email: email,
        }).then(() => {
            console.log('Success');
        });
    }

    const getFeedback = () => {
        Axios.get('http://localhost:3001/feedback').then((response) => {
            console.log(response);
            setFeedbackList(response.data);
        });

        document.getElementsByClassName('db_table')[0].classList.add("visible");;
    }

    const feedbackMessage = async () => {
        let re = /\S+@\S+\.\S+/;
        if (re.test(email)){
            alert('Not an email');
        }
        else if (name === '' | address === '' | email === ''){
            alert('Some fields are empty');
        }
        else if (name.length > 50){
            alert('Your name is to long');
        }
        else if (address.length > 200){
            alert('Yout email is to long');
        }
        else if (email.length > 50){
            alert('Your email is to long')
        }
        else {        
            sendFeedback();
        }
    }

    return (
        <div className='feedback'>
            <a href='/' className="home_button">Home</a>
            <div className="form_wrapper">
                <div className="form_container">
                    <h1 className="form_header">Feedback form</h1>
                    <form className="feedback_form" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name">Enter your name:</label>
                            <input id='name' type="text"placeholder='name...' onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="address">Enter you address:</label>
                            <input id='address' type="text" placeholder='address...' onChange={(event) => setAddress(event.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email">Enter your email:</label>
                            <input id='email' type="email" placeholder='email...' onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <button className="form_button" onClick={feedbackMessage}>Send</button>
                    </form>
                </div>
            </div>
            <button className="getData_button" onClick={getFeedback}>DATA FROM DB</button>
            <div className="table_container">
                <table className='db_table'>
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>address</td>
                            <td>email</td>
                        </tr>
                    </thead>
                    <tbody>
                    {feedbackList.map((val) => {
                        return <tr key={val.id}><td>{val.name}</td><td>{val.address}</td><td>{val.email}</td></tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
    }

export default Feedback