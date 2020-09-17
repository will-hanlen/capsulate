const Entry = (props) => {
  let date = props.date.split("-")
  let dateString = new Date(date[0], date[1], date[2]).toDateString()
  console.log(dateString)
  return (
    <>
      <div className="card vertical-flex">
        <p>{dateString}</p>
        <p>{props.text}</p>
        <img className="photoCard" src={props.photo} />
      </div>
    </>
  )
}

export default Entry
