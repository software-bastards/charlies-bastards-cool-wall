import Axios from "axios";

const handleFetchTechnologyList = async () => {
  const response = await Axios.get("techlist");
  console.log(response);
  const data = await response.data;
  return data;
};

export default handleFetchTechnologyList;
