import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
 
  Grid,
  InputLabel,
 
  TextField,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { gridSpacing } from "../store/constant.js";
import SelectData from "./selectData.js";
import axios from 'axios';

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const typoStyles = { mb: 1, mt: 2, fontSize: "18px", fontWeight: "bold" };

const Form = () => {
    const[schemaArr, setSchemaArr] = useState([]);
    const [val, setVal] = useState([])
    const[segname, setSegNAme] = useState('');

    const handleAdd = () => {
      const abc = [...val,[]]
      setVal(abc)
      addSchema();
    }



  const addSchema = () => {
    console.log('arr');
    const abc = [...schemaArr,'']
    console.log(abc);
    setSchemaArr(abc)
    console.log(schemaArr);
  }

   

    
    const schemaData = () => {
      const data = {}
      console.log(data);
      data['segment_name'] = segname;
      data['schema'] = schemaArr;
      const apiCall = 
        axios
        .post(`https://webhook.site/56c05bda-714f-4e27-ac52-25520ddec312`,data)
        console.log(apiCall);
        // 56c05bda-714f-4e27-ac52-25520ddec312@email.webhook.site
    }
  
  return (
    <div>
      <form>
        <Box
          maxWidth={700}
          height={500}
          overflow-x='scroll'
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <InputLabel sx={labelStyles}>
            Enter the name of the Segment
          </InputLabel>
          <TextField
            fullWidth
            sx={{ m: 1 }}
            name="title"
            placeholder="Name of the Segment"
            value={segname}
            onChange={(event) => setSegNAme(event.target.value)}
            margin="auto"
            variant="outlined"
          />
          <Typography sx={typoStyles}>
            To Save Your Segment, you need to add your schemas to build the
            query
          </Typography>

        

   
    
          <Accordion style={{ width: "70%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Add Schema to segment</Typography>
            </AccordionSummary>
            
            <AccordionDetails>
              <Button  onClick={handleAdd}>+Add new schema</Button>
              
            </AccordionDetails>
          </Accordion>
          {val.map((data, index) => {
            console.log(index);
            return (
              <div>
              <SelectData  handleChangeArr={setSchemaArr} schemaArr={schemaArr} index={index} />
             
              </div>
            )
          })}
          <Grid container spacing={gridSpacing} style={{ marginTop: "20%" }}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                name="close"
                style={{ lineHeight: 2.5 }}
                onClick={schemaData}
              >
                Save the segment
              </Button>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                name="close"
                style={{ lineHeight: 2.5 }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default Form;
