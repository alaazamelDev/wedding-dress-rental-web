import React, {useState} from "react";
import {useParams} from "react-router-dom";
import useDressDetails from "../../hooks/useDressDetails.ts";
import '@/pages/DressDetailsPage/DressDetailsPage.css'
import Loading from "@/components/common/Loading.tsx";
import Title from "antd/lib/typography/Title";
import {Divider, Flex, Tag, Typography} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import '@/styles/global.css'
import {Button} from "@/components/ui/button.tsx";
import RentalDurationModal from "@/components/dress-details/RentalDurationDialog.tsx";

export const DressDetailsPage: React.FC = () => {

    // get the id from the params
    const {id} = useParams<{ id: string }>();
    const dressId: number = Number(id);

    // get the data
    const {dress, loading, error} = useDressDetails(dressId);

    // State to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Function to handle modal confirmation
    const handleConfirmReservation = (duration: number) => {
        // Placeholder for the reservation action (e.g., API call)
        console.log(`Reserving dress with ID: ${dressId} for ${duration} days`);

    };


    if (loading) return <Loading/>;
    if (error) return <center><p>{error}</p></center>
    if (!dress) return <center><p>Dress not found.</p></center>


    return (


        <div className={"dress-details-container"}>
            <img
                src={"https://m.media-amazon.com/images/I/61+hrj2FI5L._SY695_.jpg"}
                alt={dress.name}
                className={"dress-details-container__img"}
            />
            <div className={"dress-details-container__content"}>
                <Typography>
                    <Title level={1}>{dress.name}</Title>
                    <Paragraph>{dress.description}</Paragraph>

                    <Typography>
                        <Title level={2}>$ {dress.rental_price}</Title>
                        <Divider/>
                        <Flex vertical={false} justify={'space-around'}>
                            <div>
                                <Title level={5}>Available Size</Title>
                                <Tag color="red">{dress.size}</Tag>
                            </div>
                            <div>
                                <Title level={5}>Availability Status</Title>

                                <Tag color={dress.is_available ? "green" : "red"}>
                                    {dress.is_available ? "Available" : "Not Available"}
                                </Tag>
                            </div>
                        </Flex>

                    </Typography>
                </Typography>
                <Divider/>
                <Button disabled={!dress.is_available}
                        onClick={() => setIsModalOpen(true)}>Reserve Dress</Button>
                {
                    !dress.is_available &&
                    <div style={{padding: '10px'}}>
                        <Title level={5} style={{color: "red"}}>*The dress is not available at the moment</Title>
                    </div>
                }
            </div>
            {/* Rental Duration Modal Integration */}
            <RentalDurationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmReservation}
            />
        </div>
    );
};