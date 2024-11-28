import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function Header(props) {
  const { userName } = props;
  return (
    <header>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/">Ana Sayfa</Link>
      </nav>
      <p>User: {userName}</p>
    </header>
  );
}
