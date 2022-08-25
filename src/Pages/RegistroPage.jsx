import React,{useState} from "react"
import '../Styles/IntroPage.css';
import {Link} from 'react-router-dom';
import firebase from "../Config/firebase";
import { useForm } from "react-hook-form"
import user from "../Img/user.svg"
import email from "../Img/email.svg"
import password from "../Img/password.svg"
import Loading from '../Components/Loading';
import {useNavigate} from "react-router-dom"

function RegistroPage(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const loginUser=(user) => {
        localStorage.setItem("isLogin",true)
        localStorage.setItem("userInfo",JSON.stringify(user))
    }

    const onSubmit = async (data)=>{
        console.log("data",data)
        try{
            setLoading(true)
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
            console.log(responseUser.user.uid)
            
            if(responseUser.user.uid){
                await firebase.db.collection("usuarios")
                .add({
                    name: data.name,
                    email: data.email,
                    userId: responseUser.user.uid,
                })
                props.setIsLogin(true)
                navigate("/menu")
                loginUser(user.docs[0].data())
            }
        } catch(e) {
            setLoading(false)
            console.log(e)
        }
    }

    if (loading) {
        return <Loading />
    } else {

    return (
        <div className="IntroPage__container">
            <div className="IntroPage__login">
                <Link to="/inicio"><button className="IntroPage__button">INICIAR SESION</button></Link>
            </div>

            <div className="IntroPage__textsContainer">
                <div className="IntroPage__texts" data-aos="fade-up">
                    <h1>PELISFLIX</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="IntroPage__inputContainer">
                            <img src={user} alt="" />
                            <input type="text" name='name' placeholder='Nombre' {...register("name", {required: true, minLength: 3})} autoComplete="off"/>
                            <div className="IntroPage__errorSpan">
                                {errors.name?.type === 'required' && <span>El Campo es obligatorio</span>}
                                {errors.name?.type === 'minLength' && <span>El nombre es demasiado corto</span>}
                            </div>
                        </div>
                        <div className="IntroPage__inputContainer">
                            <img src={email} alt="" />
                            <input type="email" required name='email' placeholder='Email' {...register("email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/})} autoComplete="off"/>
                            <div className="IntroPage__errorSpan">
                                {errors.email?.type === 'required' && <span>El Campo es obligatorio</span>}
                                {errors.email?.type === 'pattern' && <span>Utiliza un Email valido.</span>}
                            </div>
                        </div>
                        <div className="IntroPage__inputContainer">
                            <img src={password} alt="" />
                            <input type="password" name='password' placeholder='Contraseña' {...register("password", {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/})} autoComplete="off"/>
                            <div className="IntroPage__errorSpan">
                                {errors.password?.type === 'required' && <span>El Campo es obligatorio</span>}
                                {errors.password?.type === 'pattern' && <span>La contraseña debe contener al menos 8 caracteres. Una mayuscula, una minuscula, un digito, al menos un caracter especial, y no puede contener espacios en blanco.</span>}
                            </div>
                        </div>
                        <button type='submit' className="IntroPage__button IniciarSesionPage__button">REGISTRARSE</button>
                    </form>
                </div>
            </div>
        </div>
  );
}
}

export default RegistroPage;