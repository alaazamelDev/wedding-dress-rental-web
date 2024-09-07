import {User} from "@/types/User.ts";
import {useEffect, useState} from "react";
import {getMyProfile} from "@/services/api.ts";

export const useGetProfile = () => {

    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchUser = async () => {

            try {
                setLoading(true);
                const response = await getMyProfile();
                if (response.status == 401) {
                    setError('You are not logged in');
                }
                setUser(response.data.data);
            } catch (err) {
                setError(`Error while retrieving profile info: ${err}`);
            } finally {
                setLoading(false);
            }
        }

        fetchUser()
    }, [])

    return {user, loading, error};
}