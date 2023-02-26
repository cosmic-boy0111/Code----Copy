import React, { useContext } from 'react'
import Bar from '../Bar'
import Polar from '../Polar'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AppContext } from '../../../../App';
import { Theme } from '../../../Theme';
import Heatmap from '../Heatmap';
import { Box, Grid } from '@mui/material';
import Line from '../Line';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const GraphicalRepresentation = () => {

  const { themeToggler } = useContext(AppContext)

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{
        marginBottom:'2rem'
      }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={4} md={4} >
            <Item style={{
                backgroundColor: themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                boxShadow: themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                border: themeToggler ? Theme.Dark.Border : Theme.Light.Border,
                color : themeToggler ? Theme.Dark.fadeColor : Theme.Light.fadeColor
              }}>
                <p>Blogs</p>
                <Line data={[10 ,3 , 14, 8 , 30 ,20,10 ,3 , 14, 8 , 20 ,20]} color={'#64b5f6'}/>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Item
              style={{
                backgroundColor: themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                boxShadow: themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                border: themeToggler ? Theme.Dark.Border : Theme.Light.Border,
                color : themeToggler ? Theme.Dark.fadeColor : Theme.Light.fadeColor
              }}>
                <p>Videos</p>
                <Line data={[11 , 14 , 30, 38 , 18 ,34,11 , 15 , 30, 30 , 16 ,20]} color={'#81c784'}/>

            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Item
              style={{
                backgroundColor: themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
                boxShadow: themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
                border: themeToggler ? Theme.Dark.Border : Theme.Light.Border,
                color : themeToggler ? Theme.Dark.fadeColor : Theme.Light.fadeColor
              }}>
                <p>Courses</p>
                <Line data={[11 , 14 , 30, 38 , 18 ,34,11 , 15 , 30, 30 , 16 ,20]} color={'#ba68c8'}/>

            </Item>
          </Grid>
        </Grid>
      </Box>
      <Item className='card_container' style={{
        backgroundColor: 'transparent',
        boxShadow: themeToggler ? Theme.Dark.BoxShadow : Theme.Light.BoxShadow,
      }}>

        <Heatmap />
      </Item>

    </>
  )
}

export default GraphicalRepresentation