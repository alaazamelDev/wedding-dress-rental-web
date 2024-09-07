import {Dress} from "@/types/Dress.ts";
import React from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";
import '@/styles/variables.css'

export interface DressCardProps {
    dress: Dress;
}

export const DressCard: React.FC<DressCardProps> = ({dress}: DressCardProps) => {


    return (
        <div className="dress-list__card">
            <img
                className="dress-list__card-img"
                src={dress.image_url}
                alt={dress.name}
            />
            <h1 className="dress-list__card-name"> {dress.name}</h1>
            <div className="dress-list__card-price-container">
                <h2 className="dress-list__card-price-label">Rental Price:</h2>
                <h2 className="dress-list__card-price">{dress.rental_price} / Day</h2>
            </div>
            <div className="dress-list__card-button-container">

                <Link style={{width: "100%"}} to={`/dress/${dress.id}`}>

                    <Button type="primary" style={{
                        width: "100%",
                        padding: "1.5rem",
                        backgroundColor: "black",
                        borderBottomLeftRadius: "1rem",
                        borderBottomRightRadius: "1rem",
                        borderTopRightRadius: "0rem",
                        borderTopLeftRadius: "0rem",
                    }}>View Details</Button>
                </Link>

            </div>
        </div>
    );
}