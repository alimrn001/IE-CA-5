import './assets/styles/login-styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Baloot from './assets/img/Baloot.svg';

function Nav(props) {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-top fixed-top shadow-sm rounded">
            <div class="container-fluid">
                <a class="navbar-brand" href="home.html">
                    <img src={Baloot}alt="" width="45" height="45" class="d-inline-block align-text"/>
                    <a class="app-name-navbar">Baloot</a>
                </a>

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="btn btn-primary btn-register" href="register.html" role="button">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Nav;