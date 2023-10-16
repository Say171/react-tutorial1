export default function Header() {
    return (
        <header className>
        <h1>Birdwatching</h1>
        <img src="./assets/dove.png" alt="a simple dove logo"></img>
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