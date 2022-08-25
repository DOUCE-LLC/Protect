import React,{useState} from "react"
import '../Styles/IntroPage.css';
import {Link} from 'react-router-dom';
import firebase from "../Config/firebase";
import { useForm } from "react-hook-form"
import {useNavigate} from "react-router-dom"
import email from "../Img/email.svg"
import password from "../Img/password.svg"
import Loading from '../Components/Loading';

function RegistroPage(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)


    const loginUser=(user) => {
        localStorage.setItem("isLogin",true)
        localStorage.setItem("userInfo",JSON.stringify(user))
    }
  
    const onSubmit = async (data) => {
        console.log("data",data)
        try {
            setLoading(true)
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password);
            console.log(responseUser.user.uid); 
            
            if (responseUser.user.uid) {
              const user = await firebase.db.collection("usuarios")
              .where("userId","==",responseUser.user.uid)
              .get()
              loginUser(user.docs[0].data())
              props.setIsLogin(true)
              navigate("/menu")
          }
        } catch(e) {
            setLoading(false)
            console.log(e)
        }
    }

    if ( loading ) {
        return <Loading />
    } else {
    return (
        <div className="IntroPage__container">
            <div className="IntroPage__login">
                <Link to="/registro"><button className="IntroPage__button">REGISTRARSE</button></Link>
            </div>

            <div className="IntroPage__textsContainer">
                <div className="IntroPage__texts" data-aos="fade-up">
                    <h1>PELISFLIX</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="IntroPage__inputContainer">
                            <img src={email} alt="" />
                            <input type="email" required name='email' placeholder='Email' {...register("email", {required: true, minLength: 5})} autoComplete="off"/>
                        </div>
                        <div className="IntroPage__inputContainer">
                            <img src={password} alt="" />
                            <input type="password" name='password' placeholder='Contraseña' {...register("password", {required: true, minLength: 8})} autoComplete="off"/>
                        </div>
                        <div className="IntroPage__errorSpan">
                            {errors.email?.type === 'required' && <span>Mail o contraseña incorrecta</span>}
                            {errors.email?.type === 'minLength' && <span>Mail o contraseña incorrecta</span>}
                            {errors.password?.type === 'required' && <span>Mail o contraseña incorrecta</span>}
                            {errors.password?.type === 'minLength' && <span>Mail o contraseña incorrecta</span>}
                        </div>
                        <button type='submit' className="IntroPage__button IniciarSesionPage__button">INICIAR SESION</button>
                    </form>
                </div>
            </div>
        </div>
  );
}
}

export default RegistroPage;