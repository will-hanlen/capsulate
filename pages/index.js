import Nav from '../components/nav'
import NewEntry from '../components/newEntry'
import Head from 'next/head'

class Home extends React.Component {
  render () {
    return (
      <>
        <Head>
          <title>Capsulate</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Nav />

        <NewEntry />
      </>
    )
  }
}

export default Home
