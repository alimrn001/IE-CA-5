import "./assets/styles/login-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Baloot from "./assets/img/Baloot.svg";

function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-top fixed-top shadow-sm rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="home.html">
            <img
              src={Baloot}
              alt=""
              width="45"
              height="45"
              className="d-inline-block align-text"
            />
          </a>
          <a className="app-name-navbar" href="home.html">
            Baloot
          </a>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="btn btn-primary btn-register"
                href="register.html"
                role="button"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
