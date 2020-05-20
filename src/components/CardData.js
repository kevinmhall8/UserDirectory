import React from "react"

function CardData(props) {
    return (<div className="card">
        <div className="card-image">
    <figure className="image is-4by5">
      <img src={props.photo} alt="N/A" />
    </figure>
  </div>
  <hr />
    <p className="title is-4 is-centered">{props.name}</p><hr />
    <p className="subtitle is-4 is-centered">{props.email}</p> <hr />
    <p className="subtitle is-4 is-centered">{props.dob}</p>
    <br /> <br />
  </div>
  )
}

export default CardData