import { Link } from "react-router-dom";

const Nav = ({ NavList }) => {
  return (
    <nav>
      <ul className="NavList">
        {NavList.map((list, index) => (
          <li key={index}>
            <Link to={`/${list}`}>{list}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
