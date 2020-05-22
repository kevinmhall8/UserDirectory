import React from "react"

function CardData(props) {
  return (<div>
    {props.users.map(user => {
      return (
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by5">
              <img src={user.picture.medium} alt="N/A" />
            </figure>
          </div>
          <hr />
          <p className="title is-4 is-centered">{user.name.first}</p><hr />
          <p className="subtitle is-4 is-centered">{user.email}</p> <hr />
          <p className="subtitle is-4 is-centered">{user.dob.age}</p>
          <br /> <br />
        </div>

      );
    })}
  </div>
  )
}

export default CardData