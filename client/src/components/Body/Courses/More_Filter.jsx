import React,{useContext,useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import { AppContext } from '../../../App';
import { Theme } from '../../Theme';
import { Divider } from '@mui/material';



import { CourseTags } from '../../Shared/Tags';
import { Button, FormControl, FormControlLabel, IconButton, Radio, RadioGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import More_filter_tags from './More_filter_tags';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function More_Filter() {
    const { themeToggler } = useContext(AppContext)
    
  const [currentItems, setCurrentItems] = useState(4)
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={8} md={8} >
            <Item style={{
                backgroundColor:'transparent',
                boxShadow:'none',
                textAlign : 'left',
                padding:'0',
                color: themeToggler ? Theme.Dark.fadeColor : Theme.Light.fadeColor,
            }}>

<div className='course_tags'>
          <h6 className='display_flex' >
            <span> Course Tags  </span>
            <Button color="secondary" style={{
              textTransform: 'none'
            }} onClick={() => setCurrentItems(4)} >Clear</Button>
          </h6>
          <div className='tags_container' >
            {
              CourseTags.map((e) => {
                return <More_filter_tags name = {e}/>
              })
            }
            
          </div>
        </div>

            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Item style={{
                backgroundColor:'transparent',
                boxShadow:'none',
                textAlign : 'left',
                padding:'0',
                color: themeToggler ? Theme.Dark.fadeColor : Theme.Light.fadeColor,
            }}>

<h6 className='display_flex' >
            <span> Upload Date  </span>
          </h6>
          <div className='tags_container' >
            {
              ['Today', 'This Week', 'This Month', 'This Year'].map((e) => {
                return <More_filter_tags name = {e}/>
              })
            }
            
          </div>

            </Item>
          </Grid>
      </Grid>
    </Box>
  );
}