import React from 'react'

function Details(props) {
  const seminars = props.seminars.map((seminar) => {
    return (
      <React.Fragment>
        <h5>{seminar.title}</h5>
        <h6>{seminar.level}</h6>
        {seminar.text}
      </React.Fragment>
    )
  }
  )
  return (
    <div className="details" id="details">
      <h2 className="title">詳細</h2>
      {seminars}
    </div>
  )
}

export default Details
