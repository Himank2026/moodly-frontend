import "./profilePage.css";
import Image from "../../Components/image/image";
import { useState } from "react";
import Gallery from "../../Components/gallery/gallery";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import apiRequest from "../../utils/apiRequest";
import Boards from "../../Components/Boards/boards";
import FollowButton from "./FollowButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // ✅ using only this

const ProfilePage = () => {
  const [type, setType] = useState("saved");
  const { userName } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", userName],
    queryFn: () => apiRequest.get(`/users/${userName}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "User not found!";

  return (
    <div className="profilePage">
      {data.img ? (
        <Image
          className="profileImg"
          w={70}
          h={70}
          src={data.img}
          alt=""
        />
      ) : (
        <AccountCircleIcon
          sx={{ fontSize: 100, color: "#ccc" }} // ✅ icon used directly
        />
      )}

      <h2 className="profileName">{data.displayName}</h2>
      <span className="profileUsername">@{data.userName}</span>

      <div className="followCounts">
        {data.followerCount} followers · {data.followingCount} followings
      </div>

      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <FollowButton
            isFollowing={data.isFollowing}
            username={data.userName}
          />
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>

      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>

      {type === "created" ? (
        <Gallery userId={data._id} />
      ) : (
        <Boards userId={data._id} />
      )}
    </div>
  );
};

export default ProfilePage;

