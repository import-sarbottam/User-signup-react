import { Link } from 'react-router-dom';
import React, { useRef,useState } from 'react';
import { useAuth } from './AuthContext';
import '../cssfiles/App.css'

export const Forgotpass = () => {


    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { passwordReset } = useAuth();

    const mailpass = useRef('');
    const [warnmess2, setwarnmess2] = useState('');

    let fstyle={
        color:"red",
        fontSize:"13px"
    }

    const handlePasswordReset = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');
        const email = mailpass.current.value;
        passwordReset(email)
          .then((msg) => {
            setMessage(msg);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      };

    const Fbtn=(e)=>{
        if(mailpass.current.value === ''){
            setwarnmess2('Please enter the email');
            mailpass.current.value ='';
        }
        else
            handlePasswordReset(e);
    }


    let btn3='Forgot Password';


    
    return (
        <div className="App">
        <div className="authentication-box">
        <div className="container">
        <p className="boxhead">{btn3}</p>


        <p className="Credentials1">Enter you email</p>
        <input type="email"  size = '35' className="datainputs" onChange={(e)=>e.target.value} ref={mailpass} />

        <p className='warnimess' style={fstyle}>{error}</p>
        <p className='success'>{message}</p>

         <br />       
         <button disabled={loading} type="submit" onClick={(e)=>Fbtn(e)} className="btn-1 btn5">Next</button>
         <p className="signup"> <Link className="linksign" to='/signin'>Back</Link></p>
            
        </div>
        </div>
        </div>
    )

}
