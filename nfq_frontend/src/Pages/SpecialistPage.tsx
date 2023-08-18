import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";

  
const InfoPage = () => {
    return (
      <Box p={4} display="flex" flexDirection="column" height="50vh">
  
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4">Customer Visit Management</Typography>
          <Box display="flex" alignItems="center">
            <Avatar/>
            <Typography variant="h6" ml={2}>Dr. Specialist</Typography>
            <Button variant="outlined" >Logout</Button>
          </Box>
        </Box>
  
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Current Visit: John Doe</Typography>
            <Typography variant="subtitle1">Visit Code: ABC123</Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary">Start/End Visit</Button>
            </Box>
          </CardContent>
        </Card>

        <Box mb={4}>
          <List>
            <ListItem>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography >Customer Name</Typography>
                <Button color="secondary">Select as Next</Button>
              </Box>
            </ListItem>
          </List>
        </Box>
        <Snackbar message="Notification Message" />
      </Box>
    );
  }
  
  export default InfoPage;