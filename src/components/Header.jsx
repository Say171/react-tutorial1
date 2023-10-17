import Dove from './assets/dove.png';
import Nav from "./Nav";

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
        
        <Nav />
        
        </header>
    );
  }