import Nav from '../../components/nav'
import JournalContainer from '../../components/journalContainer'
import Head from 'next/head'
import { server } from '../../config'
import fetch from 'isomorphic-unfetch'

function Journal(props) {

  let navLinks = [
    { href: "/", name: "New Entry" },
    { href: "/about", name: "About" },
  ]

  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav links={navLinks} />


      <JournalContainer entries={props.entries}/>
    </>
  )

}

Journal.getInitialProps = async () => {

  const res = await fetch(`${server}/api/journal`)
  const { data } = await res.json()

  return { entries: data }
}

export default Journal
