import React, { useContext } from "react"
import FavContext from "../store/FavContext"
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {

    const {favs, favActions} = useContext(FavContext)
    const navigate = useNavigate()


    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container d-flex justify-content-between">
                <img className="navbar-brand bg-warning rounded iconosw" style={{width: "60px"}} src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000" onClick={() => navigate("/")}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown d-flex">
                            <button className="nav-link  btn btn-dark text-warning iconosw" onClick={() => navigate("/favorites")} >
                                Favorites {favs && favs.length}
                            </button>
                            <Link
                                className="dropdown-toggle text-light btn btn-dark flecha"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ></Link>
                            <ul className="dropdown-menu">
                                {favs && favs.map((fav, index) => (
                                    <li key={index}><a className="dropdown-item d-flex justify-content-between" href="#">{fav.name} <i className="fa-solid fa-trash" onClick={() => favActions({type:"delete", payload:{name:fav.name, uid:fav.uid, tipo:fav.tipo}})}></i></a></li>
                                ))}
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default Navbar