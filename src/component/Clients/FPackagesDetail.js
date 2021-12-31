// mui import
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import StarIcon from "@mui/icons-material/StarBorder";
import { useGetpackagebyserviceandeventQuery } from "../../services/packages";

export default function FPackagesDetail({ eventID }) {
  const res = useGetpackagebyserviceandeventQuery({
    type: "Food",
    id: eventID,
  });

  return (
    <React.Fragment>
      <CssBaseline />
      {res.isFetching ? (
        "...Loading"
      ) : (
        <Grid container spacing={5} alignItems="flex-end">
          {res.data.map((tier) => (
            <Grid
              item
              key={tier.packagename}
              xs={12}
              sm={tier.packagename === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.packagename}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                />
                <CardContent>
                  {/* <ul> */}
                  {/* {tier.packagedescription.map(
                        (itemFoods) => {
                          return itemFoods.map((itemLocalFoods) => (
                            <>
                              <li>{itemLocalFoods.foodCatItemName}</li>
                            </>
                          ));
                        }
                      )} */}
                  {tier.packagedesc}
                  {/* </ul> */}
                </CardContent>

                <CardActions>
                  <Button
                    fullWidth
                    variant="contain"
                    onClick={() => {
                      // handleChange({ title: tier.packageName }, true);
                      window.localStorage.setItem("foodItems", tier.id);
                    }}
                    color="secondary"
                  >
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
}