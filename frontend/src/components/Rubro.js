import React from 'react'

export default function Rubro(props) {
    const {rubro}= props;
  return (
    <div key={rubro._id} className="card">
            <a href={`/servicios/${rubro._id}`}>
                <img className="medium" src={rubro.image} alt={rubro.categoria} />
            </a>
            <div className="card-body">
                <a href={`/servicios/${rubro._id}`}>
                    <h2>{rubro.categoria}</h2>
                </a>
                <div className="price">${rubro.monto}</div>
            </div>
        </div> 
    );
}
