import Nav from '../components/nav'
import Container from '../components/container'
import Head from 'next/head'

const About = () => {

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />

      <Container>
        <div className="text-flex card r2">
          <p>Capsulate is a simple photo journaling app.</p>
          <p>It is being built as a portfolio project.</p>
          <a className="card r4" href="https://github.com/will-hanlen/capsulate">Github Source Code</a>
        </div>
      </Container>
    </>
  )

}

export default About
