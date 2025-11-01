import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";
import apiRequest from "../../utils/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../utils/authStore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // TEMP
  // const currentUser = true;

  const { currentUser, removeCurrentUser } = useAuthStore();



  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  };

  // In UserButton.jsx
  return currentUser ? (
    <div className="userButton">
      {/* If user has an image, use the <Image /> component for the cloud */}
      {currentUser.img ? (
        <Image src={currentUser.img} alt="" w={40} h={40} />
      ) : (
        /* 2. IF NOT, USE THE MUI ICON AS THE DEFAULT AVATAR */
        <AccountCircleIcon sx={{ fontSize: 40, color: "#777" }} />
      )}

      {/* The arrow is always a local file, so it MUST be an img tag */}
      <div onClick={() => setOpen((prev) => !prev)}>
        <ArrowDropDownIcon sx={{ fontSize: 30 }} />
      </div>

      {open && (
        <div className="userOptions">
          <Link to={`/${currentUser.userName}`} className="userOption">
            Profile
          </Link>
          <div className="userOption">Setting</div>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
      Login / Sign Up
    </Link>
  );
};

export default UserButton;