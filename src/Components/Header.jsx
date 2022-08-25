import '../Styles/Header.css';
import Search from "../Img/search_white_24dp.svg"
import { Link } from 'react-router-dom';
import React from "react"

function Header(props) {

    if (props.isLogin) {
    return (
            <div className="Header">
                <Link className="Header__title" to="/menu" data-aos="fade-down"><h1>PELISFLIX</h1></Link>
                <Link className="Header__search" to="/buscar" data-aos="fade-down" data-aos-delay="300">
                    <img src={Search} alt="" />
                    <form action="">
                        <input value={props.buscar} onChange={props.handleChange} id='inputKeyword' name="keyword" type="text" placeholder='Buscar' autoComplete="off"/>
                    </form>
                </Link>
                <Link className="Header__Generos" to="/generos" data-aos="fade-down" data-aos-delay="600">Generos</Link>
            </div>
    )
}}
export default Header