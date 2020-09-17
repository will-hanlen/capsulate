import Nav from '../components/nav'
import FullContainer from '../components/fullContainer'
import Entry from '../components/entry'
import Head from 'next/head'
import { server } from '../config'

const Journal = (props) => {

  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />


      <FullContainer>
        {props.entries.map( entry => {
          return (
            <Entry key={entry.id} date={entry.date} text={entry.text} photo={entry.photo} />
          )
        })}
      </FullContainer>
    </>
  )

}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/journal`)
  const entries = await res.json()

  return {
    props: {
      entries,
    },
  }
}

export default Journal
