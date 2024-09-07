import React from "react";
import '@/pages/AccountPage/AccountPage.css'
import '@/styles/global.css'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useGetProfile} from "@/hooks/useGetProfile.ts";
import Loading from "@/components/common/Loading.tsx";
import Title from "antd/lib/typography/Title";
import {Button, Divider, Flex, Tooltip, Typography} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import {EditOutlined} from "@ant-design/icons";
import {usePreviousReservations} from "@/hooks/usePreviousReservations.ts";
import {Reservation} from "@/types/Reservation.ts";
import {ReservationCard} from "@/components/account/ReservationCard.tsx";

export const AccountPage: React.FC = () => {


    const {user, loading, error} = useGetProfile();
    const {requestLoading, requestError, reservations} = usePreviousReservations();

    if (loading) return <Loading/>
    if (error) return <center>{error}</center>

    return (<Flex vertical={true} style={{paddingLeft: '4rem', paddingRight: '4rem'}}>

        <div className="account-page-header">
            <Avatar style={{width: 200, height: 200}}>
                <AvatarImage src={user?.profile_pic_url} style={{objectFit: 'cover'}}/>
                <AvatarFallback>Not Specified</AvatarFallback>
            </Avatar>

            <div className="account-page-header__content">
                <Title level={1}>{(user?.first_name ?? '') + ' ' + (user?.last_name ?? '')}</Title>
                <Divider/>
                <Typography>
                    <Flex vertical={false} gap={'1rem'}>
                        <Paragraph>Email: {user?.email}</Paragraph>
                        <Tooltip title={'Edit'}>
                            <Button icon={<EditOutlined/>}/>
                        </Tooltip>
                    </Flex>
                    <Flex vertical={false} gap={'1rem'}>
                        <Paragraph>Birth Date: {user?.birth_date}</Paragraph>
                        <Tooltip title={'Edit'}>
                            <Button icon={<EditOutlined/>}/>
                        </Tooltip>
                    </Flex>
                </Typography>
            </div>
        </div>
        <div className="account-page-body">
            <Divider orientation={'left'}>Previous Reservations</Divider>
        </div>
        {requestLoading && <Loading/>}
        {requestError && <center>{requestError}</center>}
        <Flex vertical={true}>
            {
                reservations.map((reservation: Reservation) => (
                    <ReservationCard reservation={reservation}/>
                ))
            }
        </Flex>
    </Flex>);

};