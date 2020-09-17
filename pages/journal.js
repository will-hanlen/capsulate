import Nav from '../components/nav'
import FullContainer from '../components/fullContainer'
import Head from 'next/head'

const Journal = () => {

  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />

      <FullContainer>
        <div className="text-flex">
          <p>In the works</p>
        </div>
      </FullContainer>
    </>
  )

}

export default Journal
