import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function BlogCard({title,description,image,username,time,id,isUser}) {
  const navigate = useNavigate();
  //handle edit button
  const handleEdit = () => {
    navigate(`/blog-details/${id}`)
  }
  //handle delete
  const handleDelete = async() => {
    try {
      const {data} = await axios.delete(`/api/v1/blog/delete-blog/${id}`)
      if(data?.success){
        alert('blog deleted')
        window.location.reload();
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Card sx={{ width: "40%", margin:'auto',marginTop:2,paddingTop:2,boxShadow:'5px 5px 10px #ccc',":hover":{
      boxShadow:"10px 10px 20px #ccc",
      cursor:"pointer"
    }}}>
      {isUser && (
          <Box display={'flex'}>
            <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}} color='primary'>
              <ModeEditIcon/>
            </IconButton>
            <IconButton onClick={handleDelete} color={'error'}>
              <DeleteIcon />
            </IconButton>
          </Box>
      )}

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          </Avatar>
        }
        title={username}
        time={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt= "alt"
      />
      <CardContent>
        <Typography variant="body3" color="text.secondary">
          Title: {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
