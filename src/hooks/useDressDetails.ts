import {useEffect, useState} from "react";
import {Dress} from "../types/Dress.ts";
import {fetchDressDetails} from "../services/api.ts";

const useDressDetails = (id: number) => {


    // define the vars
    const [dress, setDress] = useState<Dress | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadDressDetails = async () => {

            try {
                setLoading(true);
                const response = await fetchDressDetails(id);
                setDress(response)
            } catch (err) {
                setError(`Failed to load dress details: ${err}.`);
            } finally {
                setLoading(false);
            }
        }

        // call the action
        loadDressDetails();
    }, [id]);

    return {dress, loading, error};
}

export default useDressDetails;