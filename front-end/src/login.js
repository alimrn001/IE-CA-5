import Nav from './nav';
import Footer from './footer';
import './assets/styles/login-styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";


const loginRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  


function Login(props) {
    return (
      <div>
        <Nav />
        <div class="bg-light page-body">
            <div class="form">
                <h2>Baloot Account Login</h2>
                <p class="welcome-msg">Welcome back! You can log In with your username here!</p>

                <form class="login-from" action="" method="POST">
                    <div class="form-group">
                        <label>Username</label>
                        <input name="username" type="text" class="form-control form-field" required />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input name="password" type="password" class="form-control form-field" required />
                    </div>
                    <button type="submit" class="btn btn-default login-btn">Log In</button>
                </form>

                <div class="reg-link">
                    <a class="reg-msg" href="register.html"><b>Register now</b></a>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export {Login, loginRouter};