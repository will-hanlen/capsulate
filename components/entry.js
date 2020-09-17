const Entry = (props) => {
  return (
    <>
      <div className="card vertical-flex">
        <p>{props.date}</p>
        <p>{props.text}</p>
        <img className="photoCard" src={props.photo} />
      </div>
    </>
  )
}

export default Entry
