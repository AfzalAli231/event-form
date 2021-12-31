import React from "react";
import Heart from "react-animated-heart";
import axios from "axios";

const LikeBtn = ({ isTrue, id }) => {
  const [wish, setWish] = React.useState(isTrue ? true : false);

  const wish2 = window.localStorage.getItem("isTrue");
  // const [bidWishList, setBidWishList] = React.useState();
  //  let bidWish = isTrue ? 1 : 0;

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:5000/bids/addWishlist/${id}`, {
        bidWishList: wish ? 0 : 1,
      })
      .then((res) => {
        // setWish(res.data.bidWishList);
        setWish(!wish);
      });
  };
  return <Heart isClick={wish} onClick={handleSubmit} />;
};

export default LikeBtn;
