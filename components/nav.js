import Link from 'next/link'

class Nav extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <>
        <nav>
          <Link href="/"><a className="card actionable r0">New Entry</a></Link>
          <Link href="/journal"><a className="card actionable r1">Journal</a></Link>
          <Link href="/about"><a className="card actionable r2">About</a></Link>
        </nav>

        <style jsx>{`
          nav {
            padding: 1rem;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-end;
            align-items: flex-end;
          }

          nav .card:first-child {
            margin-top: 0;
          }

          nav .card {
            margin: 0;
            margin-top: 1rem;
          }

          @media (min-width: 1000px) {  /* Desktop modifications */
            nav {
              flex-flow: row nowrap;
            }
            nav .card:first-child {
              margin-left: 0;
            }

            nav .card {
              margin: 0;
              margin-left: 1rem;
            }
          }
        `}</style>
      </>
    )
  }
}

export default Nav
