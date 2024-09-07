import React from "react";
import useDresses from "../../hooks/useDresses.ts";
import {Dress} from "@/types/Dress.ts";
import {DressCard} from "../../components/home/DressCard.tsx";
import '@/styles/variables.css'
import '@/styles/global.css'
import '@/pages/HomePage/HomePage.css'
import Loading from "@/components/common/Loading.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

export const HomePage: React.FC = () => {

    // get the data
    const {dresses, loading, error} = useDresses();

    if (loading) return <Loading/>
    if (error) return <center><p>{error}</p></center>

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar">
                <h1 className="navbar-title">Wedding Dresses</h1>
                <Link to={'/account'}>
                    <Button>My Account</Button>
                </Link>
            </nav>

            {/* Dress List */}
            <div className="dress-list">
                {dresses.map((dress: Dress) => (
                    <DressCard key={dress.id} dress={dress}/>
                ))}
            </div>
        </div>
    );
};