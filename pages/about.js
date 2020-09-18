import Nav from '../components/nav'
import Head from 'next/head'

const About = () => {

  let navLinks = [
    { href: "/", name: "New Entry" },
    { href: "/journal", name: "Journal" },
  ]


  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav links={navLinks} />

      <main>
        <div className="card r2">
          <p>Capsulate is a simple photo journaling app being built for <a href="https://www.linkedin.com/in/will-hanlen/">Will Hanlen's</a> portfolio.</p>
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
