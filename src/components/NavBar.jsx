import { Link, Outlet} from "react-router-dom";


const NavBar = ({user}) => {

  const logout = () => {
    window.open("http://localhost:9000/auth/logout", "_self");
  }

  return (
    <>
    <div className="navBar">
      <spam className="logo">
       <Link className="link" to='/'>Logito</Link>
      </spam>
      {
        user ? (
          <ul className="list">
          <li className="listItem">
              <img src={user.photos} alt="" className="avatar"/>
          </li>
          <li className="listItem">
              {user.name}
          </li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
        ): (
          <Link className="link" to='/login'>Login</Link>
        )
      }
    </div>
    <Outlet/>
    </>
  )
}

export default NavBar;
