import { useSelector } from "react-redux";
import { Link, Outlet, Navigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import { IUser } from "../interfaces/IUser";

export default function Profile () {
  const currentUser: IUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);
  
  if(!loggedIn) {
    return <Navigate to="/sign-up" />
  }

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`edit`}>Edit</Link>
      <Outlet />
    </main>
  )
}
