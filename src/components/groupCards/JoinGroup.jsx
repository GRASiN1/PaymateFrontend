import React, { useEffect } from "react";
import { useGroups } from "../../contexts/GroupContext";
import { useNavigate, useParams } from "react-router-dom";

export default function JoinGroup() {
  const { joinGroup } = useGroups();
  const { groupLink } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async function join() {
      if (groupLink) {
        await joinGroup(groupLink);
        navigate("/groups");
      }
    })();
  });
  return <div>Joining Group.........</div>;
}
