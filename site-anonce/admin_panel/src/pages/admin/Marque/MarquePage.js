import { Breadcrumbs, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GridDemo from "../../../components/GridDemo";




const MarquePage = () => {


  return (
    <div className="">
      <Breadcrumbs aria-label="breadcrumb">
        <Typography>Configurations</Typography>
        <Typography sx={{ color: 'text.primary' }}>Marques</Typography>
      </Breadcrumbs>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: 1,
          justifyContent: "space-between",
          

        }}
      >
        <Typography variant="h4" gutterBottom>
          Marques
        </Typography>
        <Button variant="contained">Ajouter</Button>
      </Stack>


      <Paper sx={{
          mt: 1,
       
          

        }}>

        <GridDemo></GridDemo>
      </Paper>



    </div>
  );
};

export default MarquePage;