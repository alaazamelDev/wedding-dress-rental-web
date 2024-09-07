import {Dress} from "@/types/Dress.ts";

export interface Reservation {
    id: number;
    start_date: string;
    expected_due_date: string;
    expected_rental_price: number;
    end_date: string | null;
    rental_price_per_day: number;
    total_rental_price: number | null;
    status: string;
    dress: Dress;
}
