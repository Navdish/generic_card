"use client"
import './styles.css'
import { BoxProps, SxProps } from '@mui/system';
import { Avatar, Box, Button } from '@mui/material';
import { styled } from '@mui/material';

interface CardComponentProps {
    containerProps?: BoxProps
    imageStyles?: SxProps;
    contentProps?: BoxProps,
    userDetails?: {
        firstName?: string,
        lastName?: string,
        age?: Number,
        image?: string,
    }
    buttonProps ?: boolean,
}


const Container = styled(Box)({
    backgroundColor: "red",
});
const Content = styled(Box)({
    backgroundColor:"red"
})

const CardComponent = (props: CardComponentProps) => {
    const handlePhoto = (e: React.MouseEvent<HTMLElement>)=> {
        console.log("photo");
    }
    return (
        <>
            <Container sx={props?.containerProps?.sx}
             className={props?.containerProps?.className}
             onClick={props.containerProps?.onClick}
            >
                <Avatar src={props?.userDetails?.image} sx={{...props.imageStyles} }/>
                <Content sx={{...props?.contentProps }}>
                    <Box>{props?.userDetails && props?.userDetails?.firstName ? props.userDetails.firstName : "firstName"}</Box>
                    <Box>{props?.userDetails && props?.userDetails?.lastName ? props.userDetails.lastName : "lastName"}</Box>
                </Content>
                {props.buttonProps && <Button variant='contained' onClick={(e) => handlePhoto(e)}>Button</Button> }
            </Container>
        </>
    )
}

export default CardComponent;