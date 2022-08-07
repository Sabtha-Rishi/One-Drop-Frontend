import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AccountsAPI from "../api/accounts";
import DonorProfile from "../components/donorProfile";

const singleDonor = () => {
  const [donor, setDonor] = useState({});
  const userId = useParams().userId;
  useEffect(() => {
    AccountsAPI.getSingleUser(setDonor, userId);
  }, []);

  return (
    <div>
      <DonorProfile user={donor} />
    </div>
  );
};

export default singleDonor;
