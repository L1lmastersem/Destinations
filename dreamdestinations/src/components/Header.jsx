const navItems = ["Home", "Bestemmingen", "Aanbiedingen", "Over ons", "Contact"];

export default function Header() {
  return (
    <header className="header">
      <img src="/images/logo-dream-destinations.png" alt="DreamDestinations logo" className="logo" />
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item}><a href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}