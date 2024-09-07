import {useEffect, useState} from "react";
import {Reservation} from "@/types/Reservation.ts";
import {getPreviousReservations} from "@/services/api.ts";


export const usePreviousReservations = () => {

    const [requestLoading, setRequestLoading] = useState<boolean>(false);
    const [requestError, setRequestError] = useState<string | null>(null);
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {

        async function loadPreviousReservations() {

            try {

                setRequestLoading(true);
                const response = await getPreviousReservations();
                if (response.status === 200) {
                    setReservations(response.data.data);
                }
            } catch (err) {
                setRequestError(`Error while retrieving previous reservations: ${err}`);
            } finally {
                setRequestLoading(false);
            }
        }

        loadPreviousReservations();

    }, []);

    return {requestLoading, requestError, reservations};
}