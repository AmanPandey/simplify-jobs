import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../Context/AdminContext";
import axios from "axios";

export const Check = () => {
  const { token } = useContext(AdminContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get(
        "https://api-simplify-jobs.tekalgo.com/application/get_employers_list.php"
      );
      console.log(res.data);
    }
    loadData();
  }, []);

  return <div>Check</div>;
};
