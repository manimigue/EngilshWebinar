import React from 'react'

function List(props) {
  return (
    <li className="list" key={props.text}><div className="beforeLi"><div className="listBar"/></div>{props.text}</li>
  )
}

export default List
