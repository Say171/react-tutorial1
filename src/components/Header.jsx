import Dove from './assets/dove.png';

export default function Header() {
    return (
        <header>
        <h1>Birdwatching</h1>
        <figure>
          <img 
            src={Dove} 
            alt="a simple dove logo"
          />
        </figure>
        <nav>
          <ul>
            <li><span>Home</span></li>
            <li><a href="#">Get started</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">Gear</a></li>
            <li><a href="#">Forum</a></li>
          </ul>
        </nav>
        </header>
    );
  }