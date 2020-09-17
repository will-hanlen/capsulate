import Link from 'next/link'

class Nav extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <>
        <nav className="horizontal-flex">
          <Link href="/"><a className="card">New Entry</a></Link>
          <Link href="/journal"><a className="card">Journal</a></Link>
          <Link href="/about"><a className="card">About</a></Link>
        </nav>

        <style jsx>{`
          nav {
            padding: 1rem;
            box-shadow: var(--shadow);
            background: var(--nav);
          }
        `}</style>
      </>
    )
  }
}

export default Nav
