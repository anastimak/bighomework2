import './header.css'

function Header({ countInHeader }) {

    console.log('Header render');
  
    return (
      <>
        <header className="wrapper">Header</header>
        <hr/>
        {countInHeader}
        <hr/>
      </>
    )
  }
  
  export { Header }