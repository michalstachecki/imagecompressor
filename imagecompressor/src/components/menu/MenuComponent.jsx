import {
    NavLink
} from 'react-router-dom';
import "./MenuComponent.css";

const MenuComponent = () => {
    return (
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="link-selected">Main Page</NavLink>
            </li>
            <li>
                <NavLink to="/upload" activeClassName="link-selected">Image Compression</NavLink>
            </li>
            <li>
                <NavLink to="/history" activeClassName="link-selected">History</NavLink>
            </li>
        </ul>
    )
}

export default MenuComponent;