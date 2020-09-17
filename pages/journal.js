import Nav from '../components/nav'
import FullContainer from '../components/fullContainer'
import Entry from '../components/entry'
import Head from 'next/head'
import path from 'path'
import { server } from '../config'

function Journal(props) {

  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />


      <FullContainer>
        <Entry date="2020-02-02" text="NOTE: These entries are pulled in from an API that reads from a static variable. There is no database yet." />
        {props.entries.map( entry => {
          return (
            <Entry key={entry.id} date={entry.date} text={entry.text} photo={entry.photo} />
          )
        })}
      </FullContainer>
    </>
  )

}


export async function getServerSideProps() {
  const res = await fetch(`${server}/api/journal`)
  const entries = await res.json()

  return { props: { entries } }
}

export default Journal
