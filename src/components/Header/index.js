import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';

export const Header = () => {
  const { toggles } = useSelector((state) => state.toggles);

  const TOGGLE_CHANGE_ROUTER = toggles.change_router_toggle;
  const TOGGLE_CHANGE_HEADER = toggles.change_color_header;

  return (
    <div
      className={`header color-${!!TOGGLE_CHANGE_HEADER ? 'black' : 'white'}`}
    >
      <ul className="menu">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/listas">Listas</Link>
        </li>
        <li>
          <Link
            to={`toggle-${!!TOGGLE_CHANGE_ROUTER ? 'ligado' : 'desligado'}`}
          >
            Toggle
          </Link>
        </li>
      </ul>
    </div>
  );
};
