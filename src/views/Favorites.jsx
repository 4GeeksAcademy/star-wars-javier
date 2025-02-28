import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavContext from "../store/FavContext";
import React from "react";


const Favorites = () => {
    const navigate = useNavigate
    const { favActions, favs } = useContext(FavContext)


return (
<div className="card mb-3 container detalle">
    <div className="row g-0">
        <div className="col-md-6">
            <img src="https://img.freepik.com/fotos-premium/imperio-galactico_1234738-172806.jpg?w=740" className="img-fluid rounded favorites-img" alt="..." />
        </div>
        <div className="col-md-6 p-3">
            <div className="card-body container text-light">
                <ul className="custom-list">
                    {favs && favs.map((fav, index) => (
                        <p key={index} ><button className="btn btn-secondary d-flex justify-content-between mx-auto text-black my-2 custom-element" onClick={() => navigate("/detail/" + fav.uid + "/" + fav.tipo)} href="#">{fav.name}<i className="fa-solid fa-trash"
                            onClick={(e) => { e.stopPropagation(); favActions({ type: "delete", payload: { uid: fav.uid, name: fav.name, tipo: fav.tipo } }) }}></i></button></p>
                    ))}
                </ul>


            </div>
        </div>
    </div>
</div>
)}
export default Favorites;