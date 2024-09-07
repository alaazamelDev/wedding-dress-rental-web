import {useEffect, useState} from "react";
import {Dress} from "../types/Dress.ts";
import {fetchDresses} from "../services/api.ts";

export const useDresses = (page: number = 1, perPage: number = 15) => {

    const [dresses, setDresses] = useState<Dress[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        // send the api request
        const loadDresses = async (): Promise<void> => {
            setLoading(true);
            try {
                const data = await fetchDresses(page, perPage);
                setDresses(data);
            } catch (err) {
                setError(`Failed to fetch dresses: ${err}`);
            } finally {
                setLoading(false);
            }
        }

        loadDresses();
    }, [page, perPage]);

    return {dresses, loading, error};
}

export default useDresses;