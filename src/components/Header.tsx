import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice"
import { NavLink } from "react-router-dom";
import { IUser } from "../interfaces/IUser";

export default function Header() {
  const currentUser: IUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(logOut())
  }

  return (
    <div className="header">
      <NavLink to="/about">About</ NavLink>
      <NavLink to="/articles">Articles</ NavLink>
      <NavLink to="/categories">Categories</ NavLink>
      {
        currentUser.username
          ? <>
            <NavLink to="/profile">Profile</ NavLink>
            <NavLink to="" onClick={handleLogout} >Log Out</NavLink>
          </>
          : <NavLink to="/sign-up">Sign Up</ NavLink>
      }
    </div>
  )
}
