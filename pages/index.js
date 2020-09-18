import Nav from '../components/nav'
import NewEntry from '../components/newEntry'
import Head from 'next/head'

class Home extends React.Component {
  render () {
    let navLinks = [
      { href: "/journal", name: "Journal" },
      { href: "/about", name: "About" },
    ]

    return (
      <>
        <Head>
          <title>Capsulate</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Nav links={navLinks}/>

        <NewEntry />
      </>
    )
  }
}

export default Home
