import Nav from '../../components/nav'
import JournalContainer from '../../components/journalContainer'
import Head from 'next/head'
import { server } from '../../config'
import fetch from 'isomorphic-unfetch'
import InertEntry from '../../components/inertEntry'
import { useRouter } from 'next/router'

function singleEntry(props) {

  const router = useRouter()

  let navLinks = [
    { href: "/", name: "New Entry" },
    { href: "/journal", name: "Journal" },
    { href: "/about", name: "About" },
  ]

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this entry?")) {
      return
    }

    let entryId = router.query.id

    try {
      const deleted = await fetch(`${server}/api/journal/${entryId}`, { method: 'DELETE' })

      router.push('/journal')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <Head>
        <title>Single Entry</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav links={navLinks} />

      <main>

        <InertEntry date={props.date} text={props.text} photoUrl={props.photoUrl} />

        <button className="card actionable r2" onClick={handleDelete}>Delete</button>
      </main>

      <style jsx>{`
        main {
          max-width: 800px;
          width: 90%;
          margin: auto;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
        }

      `}</style>

    </>
  )

}

singleEntry.getInitialProps = async ({ query: { id } }) => {

  const res = await fetch(`${server}/api/journal/${id}`)
  const { data } = await res.json()

  return data
}

export default singleEntry
