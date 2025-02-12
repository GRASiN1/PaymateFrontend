import { createContext, useContext, useEffect, useState } from "react";
import { api, END_POINTS } from "../services/api";
import { useUser } from "./UserContext";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const { user } = useUser();
  const [groups, setGroups] = useState(() => {
    const groups = JSON.parse(localStorage.getItem("groups")) || [];
    return groups;
  });

  useEffect(() => {
    if (user) fetchGroups();
  }, [groups, user]);

  async function fetchGroups() {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.get(END_POINTS.GET_GROUPS, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        const updatedGroups = response.data.data.groups;
        setGroups(updatedGroups);
        // Store in localStorage after state is updated
        localStorage.setItem("groups", JSON.stringify(updatedGroups));
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log("Error fetching groups:", error);
    }
  }
  function fetchGroupDetails(groupId) {
    const group = groups.find((group) => group._id === groupId);
    return group;
  }
  async function createGroup(groupForm) {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.post(END_POINTS.CREATE_GROUP, groupForm, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        const newGroup = response.data.data.newGroup;
        // Update state correctly and persist in localStorage
        setGroups((prevGroups) => {
          const updatedGroups = [...prevGroups, newGroup];
          // Save the updated groups to localStorage
          localStorage.setItem("groups", JSON.stringify(updatedGroups));
          return updatedGroups;
        });
        alert("Group created successfully!");
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log("Error creating group:", error);
    }
  }
  async function joinGroup(groupLink) {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.post(
        END_POINTS.JOIN_GROUP + groupLink,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        const newGroup = response.data.data;
        setGroups((prevGroups) => {
          const updatedGroups = [...prevGroups, newGroup];
          localStorage.setItem("groups", JSON.stringify(updatedGroups));
          return updatedGroups;
        });
        alert("Successfully joined the group!");
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  async function closeGroup(groupId) {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.post(
        END_POINTS.CLOSE_GROUP + groupId,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        const closedGroup = response.data.data;
        setGroups((prevGroups) => {
          const updatedGroups = prevGroups.map((group) =>
            group._id === closedGroup._id ? closedGroup : group
          );
          localStorage.setItem("groups", JSON.stringify(updatedGroups));
          return updatedGroups;
        });
        alert("Group closed successfully!");
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log("Error closing group:", error);
    }
  }

  return (
    <GroupContext.Provider
      value={{
        groups,
        createGroup,
        joinGroup,
        fetchGroups,
        closeGroup,
        fetchGroupDetails,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroups = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroups must be used within a GroupProvider");
  }
  return context;
};
