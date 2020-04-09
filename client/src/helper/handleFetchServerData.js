import Axios from "axios";

const handleFetchServerData = async () => {
  const response = await Axios.get("techlist");
  const data = await response.data;
  return data;
};

export default handleFetchServerData;
