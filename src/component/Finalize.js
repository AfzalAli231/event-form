import React from "react";
import axios from "axios";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import ClearSharpIcon from "@material-ui/icons/ClearSharp";
import IconButton from "@material-ui/core/IconButton";

const Finalize = ({ isTrue, id }) => {
  const [wish, setWish] = React.useState(isTrue ? true : false);

  const wish2 = window.localStorage.getItem("isTrue");
  // const [bidWishList, setBidWishList] = React.useState();
  //  let bidWish = isTrue ? 1 : 0;

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:5000/bids/finalize/${id}`, {
        bidFinalize: wish ? 0 : 1,
      })
      .then((res) => {
        // setWish(res.data.bidWishList);
        setWish(!wish);
      });
  };
  return (
    <div onClick={handleSubmit}>
      {wish ? (
        <IconButton>
          <ClearSharpIcon style={{ color: "red" }} />
        </IconButton>
      ) : (
        <IconButton>
          <CheckSharpIcon style={{ color: "green" }} />{" "}
        </IconButton>
      )}
    </div>
  );
};

export default Finalize;
