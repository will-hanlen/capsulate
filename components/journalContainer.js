import Entry from './entry'

const JournalContainer = (props) => {

  return (
    <>
      <main>
        {props.entries.sort((a,b)=>b-a).map( entry => {
          return (
            <Entry key={entry._id} id={entry._id} date={entry.date} text={entry.text} photoUrl={entry.photoUrl} />
          )
        })}
      </main>

      <style jsx>{`

        main {
          width: 90%;
          max-width: 1800px;
          margin: 2rem auto;
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          align-items: center;
        }

      `}</style>
    </>
  )
}



export default JournalContainer
