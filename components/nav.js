import Link from 'next/link'

class Nav extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let navLinks = (<></>)

    if (this.props.links) {
      navLinks = this.props.links.map( (link, index) => {
        return (
          <Link key={index} href={link.href}><a className="card actionable r1">{link.name}</a></Link>
        )
      })
    }

    return (
      <>
        <nav>
          {navLinks}
        </nav>

        <style global jsx>{`
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
