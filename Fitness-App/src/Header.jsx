function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/workout">Workout</Link>
          </li>
          <li>
            <Link to ="/set-card">set-card</Link>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header
