import Entry from './entry'

const JournalContainer = (props) => {

  return (
    <>
      <main>
        {props.entries.map( entry => {
          return (
            <Entry key={entry.id} date={entry.date} text={entry.text} photo={entry.photo} />
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
