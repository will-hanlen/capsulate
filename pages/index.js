import Nav from '../components/nav'
import Container from '../components/container'
import NewEntry from '../components/newEntry'
import Head from 'next/head'

class Home extends React.Component {
  render () {
    return (
      <>
        <Head>
          <title>Capsulate</title>
        </Head>
        <Nav />
        <Container>
          <NewEntry />
        </Container>
      </>
    )
  }
}

export default Home
