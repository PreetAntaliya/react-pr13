import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleAuthProvider } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/googleAuth';

const Login = () => {
    const [GoogleAuth,setAuth] = useAuth();
    const navigate = useNavigate()
    const handleLogin = async() => {
        try{
            const googleData = await signInWithPopup(auth,googleAuthProvider)
            const token = googleData.user.accessToken;
            setAuth({
                ...GoogleAuth,
                token : token
            })
            localStorage.setItem('token',token)
            navigate('/home');
        }catch(err){
            console.log(err);
            return false;
        }
    }
  return (
    <div align="center">
        <h1>Google Login</h1>
        <button onClick={ () => handleLogin()}>Login With Google</button>
    </div>
  )
}

export default Login