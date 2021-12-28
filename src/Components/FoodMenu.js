// mui imports
import Button from '@mui/material/Button'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";

import React, { useState } from "react";

import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';

export default function FoodMenuMain() {

  const [selectedCategory, setSelectedCategory] = useState([]);

  const [foodCat, setFoodCat] = useState([
    {
      id: 1,
      catname: "Dessert",
      catimg: "Images",
      cattype: "Food",
      is_deleted: 0,
      createdAt: "2021-12-10T06:32:20.000Z",
      updatedAt: "2021-12-10T08:23:51.000Z",
      categoryitems: [
        {
          id: 1,
          catid: 1,
          catitemname: "Kheer 1",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:52.000Z",
          updatedAt: "2021-12-10T08:21:32.000Z",
        },
        {
          id: 2,
          catid: 1,
          catitemname: "Zarda",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:58.000Z",
          updatedAt: "2021-12-10T06:46:36.000Z",
        },
        {
          id: 3,
          catid: 1,
          catitemname: "Kheer 2",
          is_deleted: 0,
          createdAt: "2021-12-10T09:02:28.000Z",
          updatedAt: "2021-12-10T09:02:28.000Z",
        },
        {
          id: 4,
          catid: 1,
          catitemname: "Kheer 4",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:52.000Z",
          updatedAt: "2021-12-10T08:21:32.000Z",
        },
      ],
    },
    {
      id: 2,
      catname: "Starters",
      catimg: "Images",
      cattype: "Food",
      is_deleted: 0,
      createdAt: "2021-12-10T06:33:23.000Z",
      updatedAt: "2021-12-10T06:33:23.000Z",
      categoryitems: [
        {
          id: 1,
          catid: 1,
          catitemname: "Kheer 1123",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:52.000Z",
          updatedAt: "2021-12-10T08:21:32.000Z",
        },
        {
          id: 2,
          catid: 1,
          catitemname: "Zarda234567",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:58.000Z",
          updatedAt: "2021-12-10T06:46:36.000Z",
        },
        {
          id: 3,
          catid: 1,
          catitemname: "Kheer 2213",
          is_deleted: 0,
          createdAt: "2021-12-10T09:02:28.000Z",
          updatedAt: "2021-12-10T09:02:28.000Z",
        },
        {
          id: 4,
          catid: 1,
          catitemname: "Kheer 45678i",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:52.000Z",
          updatedAt: "2021-12-10T08:21:32.000Z",
        },
      ],
    },
    {
      id: 3,
      catname: "Main Courses",
      catimg: "Images",
      cattype: "Food",
      is_deleted: 0,
      createdAt: "2021-12-10T06:33:13.000Z",
      updatedAt: "2021-12-10T06:45:37.000Z",
      categoryitems: [
        {
          id: 1,
          catid: 1,
          catitemname: "Kheer 145",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:52.000Z",
          updatedAt: "2021-12-10T08:21:32.000Z",
        },
        {
          id: 2,
          catid: 1,
          catitemname: "Zarda3567",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:58.000Z",
          updatedAt: "2021-12-10T06:46:36.000Z",
        },
        {
          id: 3,
          catid: 1,
          catitemname: "Kheer 234567",
          is_deleted: 0,
          createdAt: "2021-12-10T09:02:28.000Z",
          updatedAt: "2021-12-10T09:02:28.000Z",
        },
        {
          id: 4,
          catid: 1,
          catitemname: "Kheer 4766879",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:52.000Z",
          updatedAt: "2021-12-10T08:21:32.000Z",
        },
      ],
    },
    {
      id: 4,
      catname: "Sides",
      catimg: "Images",
      cattype: "Food",
      is_deleted: 0,
      createdAt: "2021-12-10T06:33:13.000Z",
      updatedAt: "2021-12-10T06:45:37.000Z",
      categoryitems: [
        {
          id: 1,
          catid: 1,
          catitemname: "Kheer 2134567",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:52.000Z",
          updatedAt: "2021-12-10T08:21:32.000Z",
        },
        {
          id: 2,
          catid: 1,
          catitemname: "Zarda56789",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:58.000Z",
          updatedAt: "2021-12-10T06:46:36.000Z",
        },
        {
          id: 3,
          catid: 1,
          catitemname: "Kheer 908767",
          is_deleted: 0,
          createdAt: "2021-12-10T09:02:28.000Z",
          updatedAt: "2021-12-10T09:02:28.000Z",
        },
        {
          id: 4,
          catid: 1,
          catitemname: "Kheer 4564",
          is_deleted: 0,
          createdAt: "2021-12-10T06:36:52.000Z",
          updatedAt: "2021-12-10T08:21:32.000Z",
        },
      ],
    },
  ]);
  
  const { handleSubmit, setValue } = useForm();
  const onSubmit = () => {
    console.log(JSON.stringify(selectedCategory));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(onSubmit);
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
  console.log(setFoodCat);
  return (
    <form onSubmit={handleFormSubmit}>
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
        {foodCat
          ? foodCat.map((food) => {
              return (
                <Container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "1vw",
                  }}
                  key={food.id}
                >
                  <Grid item md={2} xs={12}>
                    <FastfoodOutlinedIcon />
                    <Typography variant="subtitle2" gutterBottom>
                      {food.catname}
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
                        id={food.id}
                        style={{ width: "40rem" }}
                        multiple
                        name={food.catname}
                      options={food.categoryitems}
                      // value={[]}
                      disableCloseOnSelect
                      onChange={(event, value) => {
                        setValue(`${food.catname}`, value);
                      }}
                      getOptionLabel={(option) => {
                        return option.catitemname
                      }}
                      getOptionSelected={(option, value) =>
                          value.catitemname === option.catitemname
                      }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Choose Food Items"
                            placeholder="Add Food Item"
                            name={food.catname}
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
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                      </Autocomplete>
                    </FormControl>
                  </Grid>
                </Container>
              );
            })
          : "not found"}
          {/* {foodCat
          ? foodCat.map((food) => {
              return (
                <>
                  <Grid item md={10} xs={12}>
                    <FastfoodOutlinedIcon />
                    <Typography variant="subtitle2" gutterBottom>
                      {food.catname}
                    </Typography>
                  </Grid>
                  <Grid item md={10} xs={12}>
                    <Autocomplete
                      multiple
                      id={JSON.stringify(food.id)}
                      name="foodCatID"
                      options={food.categoryitems}
                      // value={[]}
                      disableCloseOnSelect
                      onChange={(event, value) => {
                        setValue(`${food.catname}`, value);
                      }}
                      getOptionLabel={(option) => {
                        return option.catitemname;
                      }}
                      getOptionSelected={(option, value) =>
                        value.catitemname === option.catitemname
                      }
                      renderOption={(option, { selected }) => (
                        <>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                            name="foodCatID"
                          />
                          {console.log(option)}
                          {option.key}
                        </>
                      )}
                      style={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Choose Food Items"
                          placeholder="Add Food Item"
                          name={food.catname}
                        />
                      )}
                      renderValue={(selected) => (
                                  <div>
                                    {selected.map((value) => (
                                      <>
                                        <Chip
                                          key={value}
                                          label={value}
                                          clickable
                                          deleteIcon={
                                            <CancelIcon
                                              onMouseDown={(event) => event.stopPropagation()}
                                            />
                                          }
                                          onDelete={(e) => handleDelete(e, value)}
                                          onClick={() => console.log("clicked chip")}
                                        />
                                      </>
                                    ))}
                                  </div>
                                )}
                    />
                  </Grid>
                </>
              );
            })
          : "not found"} */}
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
    </form>
  );
}
