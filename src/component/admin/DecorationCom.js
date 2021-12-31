import React from 'react';

export default function DecorationCom({ hello }) {
    const initialState = [
      {
        id: "1",
        foodCatName: "Desi",
        foodCatImg:
          "https://hamariweb.com/recipes/images/recipeimages/3464.jpg",
        FoodCategoryItems: ["Biryani", "Qoram"],
      },
      {
        id: "2",
        foodCatName: "esi",
        foodCatImg:
          "https://hamariweb.com/recipes/images/recipeimages/3464.jpg",
        FoodCategoryItems: ["Biryani", "Qoram"],
      },
      {
        id: "3",
        foodCatName: "si",
        foodCatImg:
          "https://hamariweb.com/recipes/images/recipeimages/3464.jpg",
        FoodCategoryItems: ["Biryani", "Qoram"],
      },
    ];
    const [example, setExample] = React.useState(initialState);
    // setExample(initialState);
    return (
      <div>
        {example.map((ex) => (
          <div>
            <h1>{ hello }{ex.foodCatName}</h1>
          </div>
        ))}
      </div>
    );
}

