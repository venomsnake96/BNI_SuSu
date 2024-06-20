import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './cards.css'
import { red } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards({title,imageFor, textFor, texrParh, textFoot, textFoot2}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='card-info' sx={{ maxWidth: 345, background: red }}>
      <CardHeader className='card-title'
        
        title={title}
        
      />
      <CardMedia className='card-img'
        component="img"
        height="194"
        image={imageFor}
        alt="img"

      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {textFor}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
          <Typography variant='body1' paragraph>
            {texrParh}
          </Typography>
          
          <Typography variant='caption' color='GrayText'>
            {textFoot}
          </Typography>
          <br />
          <Typography  variant='overline' color='GrayText'>
            {textFoot2}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
