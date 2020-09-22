
const inertEntry = (props) => {
  let date = props.date.split("-")
  let dateString = new Date(date[0], date[1], date[2]).toDateString()

  let tiltClass = `r${Math.floor(Math.random()*5)}`

  return (
    <>

      <div className={`card ${tiltClass}`}>
        <p>{dateString}</p>
        <p>{props.text}</p>
        <img className="card photoCard" src={props.photoUrl} />
      </div>


      <style jsx>{`

        div {
          text-decoration: none;
          flex-basis: 30%;
          min-width: 200px;
          flex-grow: 1;
          margin: 1rem;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
        }

      `}</style>
    </>
  )
}

export default inertEntry
