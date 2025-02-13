import React, { useEffect } from "react";
import { useGroups } from "../../contexts/GroupContext";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

export default function JoinGroup() {
  const { joinGroup } = useGroups();
  const { groupLink } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    (async function join() {
      if(user){
        if (groupLink) {
          await joinGroup(groupLink);
          navigate("/groups");
        }
      }else{
        navigate("/authenticate");
      }
    })();
  });
  return <div>Joining Group.........</div>;
}
