import { Link } from 'react-router-dom';
import './index.css';

const TOGGLE = false;
const TOGGLE_COLOR_HEADER = true;

export const Header = () => {
  return (
    <div
      className={`header color-${!!TOGGLE_COLOR_HEADER ? 'black' : 'white'}`}
    >
      <ul className="menu">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/listas">Listas</Link>
        </li>
        <li>
          <Link to={`toggle-${!!TOGGLE ? 'ligado' : 'desligado'}`}>Toggle</Link>
        </li>
      </ul>
    </div>
  );
};
