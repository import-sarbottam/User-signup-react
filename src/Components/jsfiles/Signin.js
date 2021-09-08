import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import google  from '../image/google.png';
import React, { useRef,useState } from 'react';
import '../cssfiles/App.css'


export const Signin = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const userid1 = useRef('');
    const pass1 = useRef('');

    const { signin } = useAuth();
    const history = useHistory();

    const [warnmess1, setwarnmess1] = useState('');
    
    let Stylesheet1={
      color:"red",
      fontSize:"13px"
    }

    const handleSignin = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const email = userid1.current.value;
        const password = pass1.current.value;
        signin(email, password)
          .then((ref) => {
            setLoading(false);
            history.push('/');
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      };

    const checksign=(e)=>{
        if(pass1.current.value === '' || userid1.current.value === ''){
            setwarnmess1('Both fields are mandatory');
            pass1.current.value='';
            userid1.current.value='';
        }
        else
            handleSignin(e);
      

    }

  

    let btn1='Sign in';

    



    return (
        <div className="App">
             
        <div className="authentication-box">
        <div className="container">
        <p className="boxhead">{btn1}</p>


        <p className="Credentials1">Email</p>
        <input type="email" size='35' className="datainputs" ref={userid1}/>

         <p className="Credentials2">Password</p>
         <input type="password" size='35' className="datainputs" ref={pass1}/>
         <p className="warnimess" style={Stylesheet1}>{error}</p>


         <br />       
         <button disabled={loading} type="submit" onClick={(e)=> checksign(e)} className="btn-1">{btn1}</button>
         {/* {error && <AuthError>{error}</AuthError>} */}
         <p className="signup">Don't have an account? <Link className="linksign" to='/signup'>Sign up</Link></p>

         
         <div className="Forgetpass">
            <Link className="forgottext" to="/forgot">Forgot password?</Link>
          </div>
         <div className="googlecont">
         <button className="googlebtn"> <img src={google} alt="" width="25px"  className="googleimg"/> <p className="loginwithg">login with Google</p></button>
         </div>
         </div>

      </div>
            
        </div>
    )
}
