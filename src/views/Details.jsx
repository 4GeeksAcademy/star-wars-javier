import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Detail = () => {

  const { id, tipo } = useParams()
  const [detailElements, setDetailElements] = useState(null)

  useEffect(() => {
    if (tipo == "mundo") {
      fetch("https://www.swapi.tech/api/planets/" + id)
        .then(res => res.json())
        .then(data => setDetailElements(data.result))
        .catch(err => console.error(err))
    }
    else if (tipo == "vehiculo") {
      fetch("https://www.swapi.tech/api/vehicles/" + id)
        .then(res => res.json())
        .then(data => setDetailElements(data.result))
        .catch(err => console.error(err))
    }
    else if (tipo == "personaje") {
      fetch("https://www.swapi.tech/api/people/" + id)
        .then(res => res.json())
        .then(data => setDetailElements(data.result))
        .catch(err => console.error(err))
    }

  }, [id, tipo])


  return (

    <div className="card mb-3 container detalle">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://img.freepik.com/fotos-premium/imperio-galactico_1234738-172806.jpg?w=740" className="img-fluid rounded detalle-img" alt="..." />
        </div>
        <div className="col-md-8 p-3">
          <div className="card-body container text-light">
            <h5 className="card-title">{detailElements && detailElements.properties.name}</h5>
            {detailElements && detailElements.properties.diameter ? <p className="card-text">Diamater: {detailElements && detailElements.properties.diameter}</p>: null} 
            {detailElements && detailElements.properties.population ? <p className="card-text">Population: {detailElements && detailElements.properties.population}</p>: null}
            {detailElements && detailElements.properties.climate ? <p className="card-text">Climate: {detailElements && detailElements.properties.climate}</p>: null}
            {detailElements && detailElements.properties.model ? <p className="card-text">Model: {detailElements && detailElements.properties.model}</p>: null}
            {detailElements && detailElements.properties.passengers ? <p className="card-text">Passengers: {detailElements && detailElements.properties.passengers}</p>: null}
            {detailElements && detailElements.properties.consumables ? <p className="card-text">Consumables: {detailElements && detailElements.properties.consumables}</p>: null}
            {detailElements && detailElements.properties.height ? <p className="card-text">Height: {detailElements && detailElements.properties.height}</p>: null}
            {detailElements && detailElements.properties.mass ? <p className="card-text">Mass: {detailElements && detailElements.properties.mass}</p>: null}
            {detailElements && detailElements.properties.gender ? <p className="card-text">Gender: {detailElements && detailElements.properties.gender}</p>: null}
            
          </div>
        </div>
      </div>
    </div>



  )
}

export default Detail