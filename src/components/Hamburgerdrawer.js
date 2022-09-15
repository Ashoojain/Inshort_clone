import React, { useState } from 'react'
// import clsx from 'clsx'
// import {makeStyles} from '@material-ui/core/styles'
// import  SwipeableDrawer  from '@material-ui/core/SwipeableDrawer'
// import Button from '@material-ui/core/Button'
// import List from '@material-ui/core/List'
// import Divider from '@material-ui/core/Divider'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'



import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


import categories from '../data/category'

// const useStyles =makeStyles({
//     list: {
//         width:200,
//         paddingLeft:10,
//         paddingRight:5
//     },
//     fullList: {
//         width:'auto'

//     }
// })

// function Hamburgerdrawer({setCategory}) {
//     const classes = useStyles();
//     const [state , setState] =useState({left:false});
  
//   const toggleDrawer =(anchor,open)=>(event)=>{
//     if(event && event.type === 'keydown' && (event.key==='Tab' || event.key=== 'Shift'))
//            {
//           return;
//            }
//      setState({
//         ...state,[anchor]:open
//      })        
// };

// const list =(anchor)=>{
//     <div className={clsx(classes.list,{
//         [classes.fullList]:anchor ==='top' || anchor ==='bottom',
//     })}
//     role='presentation'
//     onClick={toggleDrawer(anchor,false)}
//     onKeyDown={toggleDrawer(anchor,false)}
//     >
//      <List>
//               <ListItem>Categories</ListItem>
//      </List>
//      <Divider />
//      <List>
//         {   categories.map((text,index)=>(<ListItem style={{
//                 height:40,
//                 borderRadius:3}}
//                 button
//                 onClick={()=>setCategory(text)}
//                 key={text}
//                 > 
//                 <ListItemText primary={text}></ListItemText>
//                 </ListItem>
//         ))
//         }
//      </List>
//     </div>
//     };



//     return (
//     <div>
//       <Button onClick={toggleDrawer('left',true)}>
//         <MenuIcon />
//       </Button>
//       <SwipeableDrawer
//       anchor='left'
//       open={state['left']}
//       onClose={toggleDrawer('left',false)}
//       onOpen={toggleDrawer('left',true)}>
//         {list('left')}
//       </SwipeableDrawer>
//     </div>
//   )
// }
// export default Hamburgerdrawer;



const Hamburgerdrawer = ({setCategory}) => {
  
    const [state, setState] = React.useState({
    //   top: false,
      left: false
    //   bottom: false,
    //   right: false,
    });
  
    // const toggleDrawer = (anchor, open) => (event) => {
    //   if (
    //     event &&
    //     event.type === 'keydown' &&
    //     (event.key === 'Tab' || event.key === 'Shift')
    //   ) {
    //     return;
    //   }
  
    //   setState({ ...state, [anchor]: open });
    // };
  
      const toggleDrawer =(anchor,open)=>(event)=>{
    if(event && event.type === 'keydown' && (event.key==='Tab' || event.key=== 'Shift'))
           {
          return;
           }
     setState({
        ...state,[anchor]:open
     })        
};
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
             <List>
               <ListItem>Categories</ListItem>
            </List>
    <Divider />

             <List>
        {   categories.map((text,index)=>(
               <ListItem  style={{
                height:50,
                borderRadius:3}}
                button
                onClick={()=>setCategory(text)}
                key={text}
                > 
                       <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                <ListItemText primary={text}></ListItemText>
                </ListItem>
        ))
        }
     </List>
        <Divider />
      </Box>
    );
  
    return (
      <div>
       
          
            <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </Button>

            <SwipeableDrawer
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}
              onOpen={toggleDrawer('left', true)}
            >
              {  list('left')  }
            </SwipeableDrawer>
         
       
      </div>
    );
  }
  
  export default Hamburgerdrawer



//   <List>
//   {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//     <ListItem key={text} disablePadding>
//       {/* <ListItemButton> */}
//         <ListItemIcon>
//           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//         </ListItemIcon>
//         <ListItemText primary={text} />
//       {/* </ListItemButton> */}
//     </ListItem>
//   ))}


  
// </List>