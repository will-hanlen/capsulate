import Link from 'next/link'

class Nav extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <>
        <nav className="horizontal-flex">
          <Link href="/"><a className="card r0">New Entry</a></Link>
          <Link href="/journal"><a className="card r1">Journal</a></Link>
          <Link href="/about"><a className="card r2">About</a></Link>
        </nav>

        <style jsx>{`
          nav {
            padding: 1rem;
          }
        `}</style>
      </>
    )
  }
}

export default Nav
