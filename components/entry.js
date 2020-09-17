const Entry = (props) => {
  let date = props.date.split("-")
  let dateString = new Date(date[0], date[1], date[2]).toDateString()
  return (
    <>
      <div className={`card entry-flex r${Math.floor(Math.random() * 5)}`}>
        <p>{dateString}</p>
        <p>{props.text}</p>
        <img className="photoCard" src={props.photo} />
      </div>
    </>
  )
}

export default Entry
