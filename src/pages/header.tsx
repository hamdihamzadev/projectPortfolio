import logo from '../assets/imgs/logo.png';

function Header() {
  return (
    <header className="bg-section">
      <div className="container">
      <img className='w-[64px] cursor-pointer' alt='logo' src={logo}/>
        <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a>Skills</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Experience</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
        <button type="button">
          Contact
        </button>
      </div>
    </header>
  )
}

export default Header