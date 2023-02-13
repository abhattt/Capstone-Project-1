import {AppBar,Toolbar,Button,Stack,Typography,Link} from '@mui/material'




function App(){
   
    return(
        <>
            <AppBar position='absolute' color='transparent'>
                <Toolbar>
                <Typography variant='h4' component='div' flexGrow={2} align="left">AlmaBetter</Typography>
                    

                    <Stack direction="row" spacing={4}>
                    <Link component="button" color="black" underline="hover" variant='h5'  >Home</Link>
                    <Link component="button" underline="hover" variant='h5' color='black'>Create Quiz</Link>
                    <Link component="button" underline="hover" variant='h5'  color='black'>Play Quiz</Link>
                    <Link component="button" underline="hover" color="black" variant='h5' >My Quiz</Link>
                    

                    

                    </Stack>
                 
                </Toolbar>
            </AppBar>
           
            </>
    )
}


export default App;

   

