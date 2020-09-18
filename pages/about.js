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

        <div className="card r2">
          <p>Capsulate is a simple photo journaling app.</p>
          <p>It is being built as a portfolio project.</p>
          <a className="card r4" href="https://github.com/will-hanlen/capsulate">Github Source Code</a>
        </div>
    </>
  )

}

export default About
