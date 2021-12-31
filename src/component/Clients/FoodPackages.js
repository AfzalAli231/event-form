// mui import
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    CssBaseline,
    Grid,
    RadioGroup,
    Typography,
  } from "@mui/material/";
  import React, { useEffect } from "react";
  import { useGetpackagebyservicetypeQuery } from "../../services/packages";
  
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  // custom import
  import FPackagesDetail from "./FPackagesDetail";
  export default function FoodPackages() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const res = useGetpackagebyservicetypeQuery({type: "Food"});

    
    return (
      <React.Fragment>
        <CssBaseline />
        {res.isFetching ? (
          "...Loading"
        ) : (
          <>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <Grid container spacing={3}>
                <Grid item md={12} xs={12} align="center">
                  <div>
                    {res.data.map((item, index) => {
                        return (
                          <Accordion key={item.id}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              key={item.id}
                            >
                              <Typography>Event Type: {item.eventtype}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <FPackagesDetail
                                eventID={item.eventtype}
                              />
                            </AccordionDetails>
                          </Accordion>
                        );
                      })
                    }
                  </div>
                </Grid>
              </Grid>
            </RadioGroup>
          </>
        )}
      </React.Fragment>
    );
                }
