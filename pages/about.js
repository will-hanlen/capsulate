import Nav from '../components/nav'
import Head from 'next/head'

const About = () => {

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />

      <main>
        <div className="card r2">
          <p>Capsulate is a simple photo journaling app.</p>
          <p>It is being built as a portfolio project.</p>
        </div>
        <a className="card actionable r4" href="https://github.com/will-hanlen/capsulate">Github Source Code</a>
      </main>

      <style jsx>{`
        main {
          width: 90%;
          max-width: 500px;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          margin: 2rem auto;
        }
        a {
          margin-top: 1rem;
        }
        p {
          text-align: center;
        }
      `}</style>
    </>
  )

}

export default About
