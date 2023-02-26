import React,{useEffect,useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom'

import Card from './Card';
import '../../style/DashBoard/Card.css'

import user_icon from '../../images/icon/user.png'
import blog from '../../images/icon/blogging.png'
import users from '../../images/icon/about-us.png'
import code from '../../images/icon/code.png'
import webDev from '../../images/icon/layers.png'
import more from '../../images/icon/more.png'
import machine from '../../images/icon/big-data.png'
import appDev from '../../images/icon/developer.png'
import code2 from '../../images/icon/code (2).png'
import channel from '../../images/icon/youtube (1).png'

import { AppContext } from '../../App';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Theme } from '../Theme';

// import Graph from './Graph';


// icons
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import VideoStableRoundedIcon from '@mui/icons-material/VideoStableRounded';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CardRoutes = () => {

    
    const { rootUser, setRootUser,themeToggler  } = useContext(AppContext)

    const card_data = [
        // {
        //   title : 'Profile',
        //   icon : user_icon,
        //   link : `/profile/${rootUser._id}`
        // },
        {
            title : 'Users',
            icon : <PeopleOutlineRoundedIcon />,
            link : '/users'
        },
        {
            title : 'Post',
            icon : <VideoStableRoundedIcon />,
            link : '/post'
        },
        {
            title : 'Problems',
            icon : <CodeRoundedIcon /> ,
            link : '/problems'
        },
        {
            title : 'Courses',
            icon : <BookRoundedIcon />,
            link : `/courses`
        },
       
      ]

    // console.log(card_data, "hello world");

  return (
      <>
        {/* <h1>Welcome {rootUser.name}</h1> */}
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md:16}} style={{ paddingTop:'0' }}>
            
            <Grid item xs={4} sm={4} md={4}>
                <Item className='card_container' style={{
                    backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                    boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                    border : themeToggler ? Theme.Dark.Border : Theme.Light.Border
                }}>
                    <Card title={'Users'} link={'/users'} icon={<PeopleOutlineRoundedIcon />} data={[10, 8, 15, 20, 15, 30]} color={'#e57373'} />
                </Item>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Item className='card_container' style={{
                    backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                    boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                    border : themeToggler ? Theme.Dark.Border : Theme.Light.Border
                }}>
                    <Card title={'Posts'} link={'/post'} icon={<VideoStableRoundedIcon />} data={[5, 4, 17, 12, 5, 25]} color={'#ba68c8'} />
                </Item>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Item className='card_container' style={{
                    backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                    boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                    border : themeToggler ? Theme.Dark.Border : Theme.Light.Border
                }}>
                    <Card title={'Problems'} link={'/problems'} icon={<CodeRoundedIcon />} data={[7, 9, 12, 16, 15, 20]} color={'#64b5f6'} />
                </Item>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Item className='card_container' style={{
                    backgroundColor : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                    boxShadow : themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                    border : themeToggler ? Theme.Dark.Border : Theme.Light.Border
                }}>
                    <Card title={'Courses'} link={'/courses'} icon={<BookRoundedIcon />} data={[2, 0, 14, 15, 6, 10]} color={'#81c784'} />
                </Item>
            </Grid>
        </Grid>
        </Box>
        {/* <Graph /> */}
      </>
  );
};

export default CardRoutes;
