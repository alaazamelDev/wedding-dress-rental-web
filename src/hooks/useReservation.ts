import {useState} from "react";
import {reserveDress} from "../services/api.ts";

export const useReservation = () => {

    const [reservationMessage, setReservationMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // business logic for handling request.
    const handleReservation = async (dressId: number, duration: number) => {

        // loading state
        setIsSubmitting(true);
        try {
            await reserveDress(dressId, duration);
            setReservationMessage('Dress reserved successfully!');
        } catch (error: any) {
            if (error.response?.status === 400) {
                setReservationMessage('The dress is already reserved.');
            } else if (error.response?.status === 401) {
                setReservationMessage('You need to be logged in to reserve a dress.');
            } else if (error.response?.status === 422) {
                setReservationMessage('Invalid reservation details.');
            } else {
                setReservationMessage('Failed to reserve dress. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }

        return {
            handleReservation,
            reservationMessage,
            isSubmitting,
            setReservationMessage, // Allows clearing the message from the component
        };

    };
    }
