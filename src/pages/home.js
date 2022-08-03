import React from 'react'
import RequestList from '../components/requests'
import { useNavigate } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <RequestList />
    </div>
  );
}
export default Home