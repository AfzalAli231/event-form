// mui imports
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
// import { eventDecoration } from "../../app/rootSlice";
import { useGetCategoryQuery } from "../../services/category";

import React, { useEffect, useState } from "react";

import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Formik } from "formik";

export default function DecorationSelect({ values, setValues }) {
  const [selectedCategory, setSelectedCategory] = useState([]);

  const response = useGetCategoryQuery({ type: "Decoration" });
  const [data, setData] = useState({ categories: response.data, selected: "" });

  const { handleSubmit, setValue } = useForm();
  const onSubmit = () => {
    setValues({ ...values, createyourown: data });
    console.log(values);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(onSubmit);
    setValues({ ...values, createyourown: data });
  };

  const handleDelete = (chiptodelete) => {
    selectedCategory.filter((s) => {
      setSelectedCategory(s.catitemname !== chiptodelete.key);
    });
    setData({ ...data, selected: selectedCategory });
    setValues({ ...values, createyourown: data });
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <form onSubmit={handleFormSubmit}>
      {response.isFetching ? (
        "...Loading"
      ) : (
        <Grid
          container
          spacing={3}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          {response.data.map((decoration) => {
            return (
              <Container
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "1vw",
                }}
                key={decoration.id}
              >
                <Grid item md={2} xs={12}>
                  <AirlineSeatReclineNormalIcon />
                  <Typography variant="subtitle2" gutterBottom>
                    {decoration.catname}
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={10}
                  xs={12}
                  style={{
                    width: "60vw",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <Autocomplete
                      id={decoration.id}
                      style={{ width: "40rem" }}
                      multiple
                      name={decoration.catname}
                      options={decoration.categoryitems}
                      // value={[]}
                      disableCloseOnSelect
                      onChange={(event, value) => {
                        setValue(`${decoration.catname}`, value);
                        setSelectedCategory(value);
                        setData({ ...data, selected: selectedCategory });
                        setValues({ ...values, createyourown: data });
                        console.log(values);
                      }}
                      getOptionLabel={(option) => {
                        return option.catitemname;
                      }}
                      getOptionSelected={(option, value) =>
                        value.catitemname === option.catitemname
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Choose decoration Items"
                          placeholder="Add decoration Item"
                          name={decoration.catname}
                        />
                      )}
                      renderValue={(selected) => (
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 0.5,
                          }}
                        >
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              onDelete={handleDelete}
                            />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    ></Autocomplete>
                  </FormControl>
                </Grid>
              </Container>
            );
          })}
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              style={{
                marginTop: "2vw",
                marginLeft: "2.5vw",
              }}
            >
              Save
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setSelectedCategory([]);
                setValues({ ...values, createyourown: "" });
                console.log(values);
              }}
              style={{
                marginLeft: "47vw",
                marginTop: "2vw",
              }}
            >
              Cancel
            </Button>
          </div>
        </Grid>
      )}
    </form>
  );
}
