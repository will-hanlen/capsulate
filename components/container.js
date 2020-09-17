const Container = (props) => {

  return (
    <div>
      <main>
        {props.children}
      </main>

      <style jsx>{`

        main {
          width: 90%;
          max-width: 700px;
          margin: 2rem auto;
        }

      `}</style>
    </div>
  )
}

export default Container
