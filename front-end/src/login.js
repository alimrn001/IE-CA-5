import Nav from "./nav";
import Footer from "./footer";
import "./assets/styles/login-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const loginRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

function Login(props) {
  return (
    <div className="bg-light">
      <Nav />
      <div className="page-body">
        <div className="form">
          <h2>Baloot Account Login</h2>
          <p className="welcome-msg">
            Welcome back! You can log In with your username here!
          </p>

          <form className="login-from" action="" method="POST">
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                type="text"
                className="form-control form-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control form-field"
                required
              />
            </div>
            <button type="submit" className="btn btn-default login-btn">
              Log In
            </button>
          </form>

          <div className="reg-link">
            <a className="reg-msg" href="register.html">
              <b>Register now</b>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Login, loginRouter };
