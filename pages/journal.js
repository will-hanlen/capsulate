import Nav from '../components/nav'
import FullContainer from '../components/fullContainer'
import Entry from '../components/entry'
import Head from 'next/head'

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
  const res = await fetch('https://capsulate.vercel.app/api/journal').then(function (response) {
    return response.json();
  }).catch(function (err) {
    console.warn('Could not find a post');
  });


  if(res) {
    const entries = await res.json()

    return {
      props: {
        entries,
      },
    }
  }
  return {
    props: {
      entries: []
    }
  }
}

export default Journal
