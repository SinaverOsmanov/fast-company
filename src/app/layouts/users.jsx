import React from "react";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import UserProvider from "../hooks/useUsers";
import QualityProvider from "./../hooks/useQuality";
const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
        <UserProvider>
        <QualityProvider>
            {userId ? (
                edit ? (
                    <EditUserPage />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </QualityProvider>
        </UserProvider>
        </>
    );
};

export default Users;
