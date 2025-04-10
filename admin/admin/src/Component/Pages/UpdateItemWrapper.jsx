// src/Component/UpdateItemWrapper.jsx
import { useParams } from "react-router-dom";
import UpdateItem from "./UpdateItem";

const categoryToApi = {
  womenClothing: "Womenclothing",
  womenShoes: "Womenshoes",
  menClothing: "Menclothing",
  menShoes: "Menshoes",
  kidsClothing: "Kidsclothing",
  kidsShoes: "Kidsshoes",
};

const UpdateItemWrapper = () => {
    const { category, id } = useParams();

  if (!category || !id) {
    console.error("Category or ID is undefined");
    return <div>Error: Category or ID is missing.</div>;
  }

  // Map category to API route
  const apiRoute = categoryToApi[category];

  if (!apiRoute) {
    console.error("API route not found for category:", category);
    return <div>Error: Invalid category.</div>;
  }

  return <UpdateItem apiRoute={apiRoute} />;
};

export default UpdateItemWrapper;
