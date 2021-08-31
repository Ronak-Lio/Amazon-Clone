import React from "react";
import "./Home.css";
import home from "./images/home.jpg";
import Product from "./Product";
import StarIcon from "@material-ui/icons/Star";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={home} alt="No Image" />

        <div className="home_row">
          <Product
          id = "12321341"
           title = "The Lean Startup: How Constant Innovation Creates Radically Successful Buisness Paperback "
           price  = {29.99}
           image = "https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=120&h=181&c=7&o=5&dpr=1.25&pid=1.7"
           rating  = {5}
          />
          <Product 
           id = "49538094"
           title = "Kenwood kMix Stand Mixer for Baking , Stylish Kitchen Mixer with K-beater , Dough Hook and Whisk, 5 Litre Glass Bowl"
           price = {239.0}
           rating = {4}
           image = "https://cf.shopee.com.my/file/a93be5906449af6d9af648e4c113b50b_tn"
          />
        </div>

        <div className="home_row">
        <Product 
        id = "4903850"
        title = "Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor" 
        price = {199.99}
        rating = {3}
        image = "https://www.kingfishercomputers.co.uk/wp-content/uploads/2020/10/Samsung-LC49RG90SSUXEN-49-Curved-LED-Gaming-Monitor-Super-Ultra-Wide-Dual-WQHD-5120-x-1440-120Hz-Freesync-Gsync-Compatible-HDMI-2-x-Displayport-USB-0.jpg"
        />
        <Product
        id =  "2344590"
        title = "Amazon Echo(3rd generation) | Smart speaker with Alexa , Charcoal Fabric"
        price = {98.99}
        rating = {5}
        image = "https://th.bing.com/th/id/OIP.HLjlytgs6C3OaGGr1opIswHaFs?w=229&h=180&c=7&o=5&dpr=1.25&pid=1.7"
        />
        <Product
        id = "3254354345"
        title = "New Apple iPad Pro {12.9-inch  , Wi-Fi , 128GB} - Silver(4th Generation)"
        price = {598.99}
        rating = {4}
        image = "https://th.bing.com/th/id/OIP.Gdaqiw1JQLpqzT0U-49PbQHaHa?w=197&h=197&c=7&o=5&dpr=1.25&pid=1.7"
        />
        </div>

        <div className="home_row">
        <Product 
        id = "90829332"
        title = "Smasung LC49RG90SSUXEN 49' Curved Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
        price = {1094.98}
        rating = {4}
        image = "https://th.bing.com/th/id/OIP.j1289iEDdUh32m-sr3_o4gHaE8?w=294&h=196&c=7&o=5&dpr=1.25&pid=1.7"
        />
        </div>
      </div>
    </div>
  );
}

export default Home;
