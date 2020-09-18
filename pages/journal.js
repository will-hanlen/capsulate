import Nav from '../components/nav'
import JournalContainer from '../components/journalContainer'
import Head from 'next/head'
import { server } from '../config'

function Journal(props) {

  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />


      <JournalContainer entries={props.entries}/>
    </>
  )

}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/journal`)
  const entries = await res.json()

  return { props: { entries } }
}

export default Journal
