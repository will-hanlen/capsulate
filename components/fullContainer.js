const FullContainer = (props) => {

  return (
    <div>
      <main className="journal-flex">
        {props.children}
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
    </div>
  )
}

export default FullContainer
