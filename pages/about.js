import Nav from '../components/nav'
import Container from '../components/container'

const About = () => {

  return (
    <>
    <Nav />
    <Container>
      <div className="text-flex">
        <p>Capsulate is a simple photo journaling app.</p>
        <p>It is being built as a portfolio project.</p>
        <a className="card" href="https://github.com/will-hanlen/capsulate">Github Source Code</a>
      </div>
    </Container>
    </>
  )

}

export default About
