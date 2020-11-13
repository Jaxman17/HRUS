import React from "react";
import "./Dashboard.css";
import Product from "./Product";



function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dash-container">
        <img
          className="mh-banner"
          src="https://img.redbull.com/images/c_crop,x_0,y_0,h_590,w_885/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2017/12/14/b5050af1-7d98-4926-82c5-82173a71f569/monster-hunter-world"
        ></img>
        <div className='welcome'>
          <h1>Welcome to Hunters-R-Us!</h1>
        </div>

        <div className="dash-row">
          <Product
            id='687'
            title="Rathalos Shell"
            price={100}
            image="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathalos_shell-mhw-wiki-guide.png"
          />
          <Product 
          id='165'
          title="Rathalos Plate"
          price={2500}
          image="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathalos_plate-mhw-wiki-guide.png"/>
          {/* Product */}
        </div>

        <div className="dash-row">
          <Product
          id='789'
          title="Rathian Shell"
          price={100}
          image="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathian_shell-mhw-wiki-guide.png" />
          <Product
          id="115"
          title="Rathian Plate"
          price={230}
          image="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathian_plate-mhw-wiki-guide.png" />
          <Product
          id="709"
          title="Rathian Tailspike"
          price={2800}
          image="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathian_spike_plus-mhw-wiki-guide.png" />
          {/* Product */}
          {/* Product */}
        </div>

        <div className="dash-row">
          <Product
          id="666"
          title="Diablos Twistedhorn"
          price={450}
          image="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/twisted-bravehorn-mhw-wiki-guide.png" />
          <Product
          id="321"
          title="Diablos Marrow"
          price={3500}
          image="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_marrow-mhw-wiki-guide.png" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
