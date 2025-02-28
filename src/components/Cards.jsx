import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavContext from "../store/FavContext";



const Card = ({ name, uid, tipo }) => {

    const navigate = useNavigate()
    const {favActions, favs} = useContext(FavContext)

    return (

        <div className="container d-flex flex-wrap gap-3 mb-3">
            <div className="card bg-dark" style={{ width: "18rem" }}>
                <img src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png" className="card-img-top" alt="..." />
                <div className="card-body text-light">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{tipo}</p>
                    <div className="d-flex justify-content-between">
                        <button href="#" className="btn btn-dark text-warning" onClick={() => navigate("/detail/"+uid+"/"+tipo)}>Learn more</button>
                        {favs.find((element) => element.uid == uid && element.tipo == tipo) ?
                        <button type="button" className="btn btn-outline-warning" onClick={() => favActions({type:"delete", payload:{name, uid, tipo}})}><i class="fa-solid fa-heart"></i></button>:
                        <button type="button" className="btn btn-outline-warning" onClick={() => favActions({type:"add", payload:{name, uid, tipo}})}><i className="fa-regular fa-heart"></i></button>
                        }
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Card