import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Actors.css';


const Actors = (props) => {
    // console.log(props);
    const cartIcon = <FontAwesomeIcon icon={faUserPlus} />
    const { name, img, nationaliy, age, roleName, CastingCost, dateOfBirth } = props.actor;

    return (
        <div className="col ">
            <div className="text-center actor-card card h-100 shadow-sm">
                <div className="mt-2">
                    <img src={img} className="" alt="" />
                </div>
                <div className="d-flex flex-column card-body">
                    <h4 className="card-title pb-3">{name}</h4>
                    <div className="actorInfo mb-3">
                        <p className="card-text"><span className="infoTitle">Role Name</span> : {roleName}</p>
                        <p className="card-text"><span className="infoTitle">Age</span> : {age}</p>
                        <p className="card-text"><span className="infoTitle">Date of birth</span> : {dateOfBirth}</p>
                        <p className="card-text"><span className="infoTitle">Nationality</span> : {nationaliy}</p>
                        <p className="card-text"><span className="infoTitle">Casting Cost</span> : ${CastingCost}</p>
                     
                    </div>
               
                    <div className="mt-auto ">
                        <button onClick={() => props.handleAddedActors(props.actor)} className="btn btn-dark px-3 fw-bold">{cartIcon} Add To Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actors;