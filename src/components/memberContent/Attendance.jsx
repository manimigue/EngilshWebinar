import React from 'react'
import useWindowSize from '../../hooks/windowSize'

const Attendance = (props) => {
  const size = useWindowSize();
  return (
    <React.Fragment>
      <h4>出欠</h4>
      <iframe
        title="Attendance spreadsheet"
        width={size.width - 20}
        height="500"
        widget='false'
        frameBorder="0"
        src="https://docs.google.com/spreadsheets/d/1CWg4z5tLkoU1br6qk0LP6nr_t4l2oL3WVEr4neidJaA/edit?usp=sharing"
      ></iframe>
    </React.Fragment>
  )
}

export default Attendance