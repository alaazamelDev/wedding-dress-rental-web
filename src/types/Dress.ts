export interface Dress {
    id: number;
    name: string;
    description: string;
    image_url: string;
    rental_price: number;
    size?: string;
    is_available?: boolean;
}