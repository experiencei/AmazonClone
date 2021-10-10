import React from 'react'
import Directory from '../product/Directory';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
              <img 
              className="home__image"
                  src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg"
                  alt="amazon home"
              />

              <div className="home__row">
                 <Directory
                     id="120356"
                     title={"Cellet Universal Car CD Slot Phone Holder Mount with One Touch Button Phone Release Design, Adjustable Strong Grip."}
                     imageUrl={"https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_UL320_.jpg"}
                     price={29.89}
                     rating={4}
                 />
                  <Directory
                     id="125656"
                     title={"Adjustable Laptop Stand,Suturun Portable Laptop Computer Stand Rriser&Multi-Angle Stand with Heat-Vent to Elevate Laptop Holder for Mac,Notebook,Lenovo More10-17 Laptop"}
                     imageUrl={"https://m.media-amazon.com/images/I/71cWPw6TxnL._AC_UY218_.jpg"}
                     price={89.89}
                     rating={5}
                 />
              </div>
              <div className="home__row">
              <Directory
                     id="123896"
                     title={"Cozy Line Home Fashions Ryleigh Floral Print Real Plaid Patchwork, 100% Cotton Reversible Coverlet, Bedspread."}
                     imageUrl={"https://m.media-amazon.com/images/I/81-gWdSX+VS._AC_UL320_.jpg"}
                     price={229.89}
                     rating={3}
                 />
              <Directory
                     id="12389"
                     title={"Damipow Hawaiian Shirts for Men Short Sleeve Aloha Beach Shirt Floral Summer Casual Button Down Shirts"}
                     imageUrl={"https://m.media-amazon.com/images/I/9141SmyqudL._AC_UL320_.jpg"}
                     price={69.89}
                     rating={2}
                 />
              <Directory
                     id="13896"
                     title={"Kasa Smart LED Light Strip, 16.4ft WiFi LED Strip Works with Alexa, Google Home, SmartThings, High Brightness."}
                     imageUrl={"https://m.media-amazon.com/images/I/71FN5PwrLLL._AC_UL320_.jpg"}
                     price={129.89}
                     rating={4}
                 />
              </div>
              <div className="home__row">
              <Directory
                     id="1230096"
                     title={"Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN1)"}
                     imageUrl={"https://m.media-amazon.com/images/I/61MrXVP0ZhL._AC_UY218_.jpg"}
                     price={332.89}
                     rating={5}
                 />
              </div>
            </div>
        </div>
    )
}

export default Home
