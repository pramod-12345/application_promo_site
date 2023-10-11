import React from "react";
import { Link } from "react-router-dom";
import NavBarComponent from "../../components/Navbar";
import data from '../../listData.json';
import './index.css'

const Home = () => {

  return (
    <div className="main-img" >
      <NavBarComponent />
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '90vh'}}>
        <h1 className="main-title text-center text-white ">
          Welcome to the Application demonstration website.
        </h1>
        <ul className="d-flex flex-column mt-5 align-items-start w-100 ml-5">
          {data.map((data) => (
            <li style={{fontSize: 25}} className="project-name"  key={data.id}>
              <Link  className="text-white" to={`/applications/${data.app_id}`}>
                {data.title}
              </Link>
            </li>
            
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Home;
