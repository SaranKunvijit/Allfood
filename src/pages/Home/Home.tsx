
import slid from "../../assets/image1.png";
import card from "../../assets/image2.png";
import card1 from "../../assets/image.png";
import "./home.css";
import { useState, type FC } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import type { ItemsProps } from "../../types";


type HomeProps = {
  handleAddCart: (menu: any, qty: number) => void;
};
const Home: FC<HomeProps> = ({ handleAddCart }) => {
  const CatagoryMenu = [
    { id: 1, name: "ส้มตำ", detail: "รายละเอียด", image: card },
    { id: 2, name: "ต้มแซ่บๆนัวๆ", detail: "รายละเอียด", image: card1 },
    { id: 3, name: "เมนูย่างทอด", detail: "รายละเอียด", image: card },
    { id: 4, name: "อาหารตามสั่ง", detail: "รายละเอียด", image: card1 },
  ];

  const [recommendMenus, setRecommendMenus] = useState<ItemsProps[]>([
    { id: 1, name: "ต้มแซ่บกระดูกอ่อน", price: 200, qty: 1, image: card, type: "แนะนำ" },
    { id: 2, name: "ตำไทย", price: 80, qty: 1, image: card, type: "แนะนำ" },
    { id: 3, name: "ลาบเป็ด", price: 80, qty: 1, image: card, type: "แนะนำ" },
    { id: 4, name: "คอหมอย่าง", price: 80, qty: 1, image: card, type: "แนะนำ" },
  ]);

  const [bestSellers, setBestSellers] = useState<ItemsProps[]>([
    { id: 1, name: "ข้าวผัดกุ้ง", price: 75, qty: 1, image: card, type: "ยอดฮิต" },
    { id: 2, name: "ราดหน้าเนื้อ", price: 95, qty: 1, image: card, type: "ยอดฮิต" },
    { id: 3, name: "ราดหน้าเนื้อ", price: 95, qty: 1, image: card, type: "ยอดฮิต" },
    { id: 4, name: "ราดหน้าเนื้อ", price: 95, qty: 1, image: card, type: "ยอดฮิต" },
  ]);

  const handleIncrese = (id: number, type: string) => {
    if (type === 'recommendMenus') {
      setRecommendMenus((prev) => prev.map((menu) =>
        menu.id === id ? { ...menu, qty: (menu.qty ?? 1) + 1 } : menu
      ))
    } else if (type === 'bestSellers') {
      setBestSellers((prev) => prev.map((menu) =>
        menu.id === id ? { ...menu, qty: (menu.qty ?? 1) + 1 } : menu
      ))
    }
  }

  const handleDecline = (id: number, type: any) => {
    if (type === 'recommendMenus') {
      setRecommendMenus((prev) => prev.map((menu) =>
        menu.id === id && (menu.qty ?? 1) > 1 ? { ...menu, qty: (menu.qty ?? 1) - 1 } : menu
      ))
    } else if (type === 'bestSellers') {
      setBestSellers((prev) => prev.map((menu) =>
        menu.id === id && (menu.qty ?? 1) > 1 ? { ...menu, qty: (menu.qty ?? 1) - 1 } : menu
      ))
    }
  }
  return (
    <div className="container">
      <div className="head">
        <img src={slid} alt="background" className="img-head" />
      </div>
     
      <div className="catagory-menu">
         
        <h1 className="text-class">ประเภทอาหาร</h1>
        <div className="catagory-grid">
          {CatagoryMenu.map((catagory) => (
            <div
              className="bg-catagory"
              key={catagory.id}
              style={{
                backgroundImage: `url(${catagory.image})`,
              }}
            >
              <div className="overlay">
                <h1>{catagory.name}</h1>
                <p>{catagory.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="best-sells">
        <div className="img-sells">
          <img src={slid} alt="" />
        </div>
        <div className="text-sells">
          <h1>หมี่ผัด 5 พลัง</h1>
          <p>ราคาเพียงแค่ 120 บาท</p>
        </div>
      </div>

      <div className="recommend-menu">
        <div className="text-rec">
          <h1>เมนูแนะนำ</h1>
          <p>แสดงทั้งหมด</p>
        </div>

        <div className="headeres-card">
          {recommendMenus.map((menu) => (

            <CardComponent
              key={menu.id}
             data={menu}
              onIncrese={() => handleIncrese(menu.id, 'recommendMenus')}
              onDecline={() => handleDecline(menu.id, 'recommendMenus')}
              addCart={(qty) => handleAddCart(menu, qty ?? 1)
              }
            />
          ))}
        </div>
      </div>

      <div className="best-sell">
        <div className="text-best">
          <h1>เมนูยอดฮิต</h1>
          <p>แสดงทั้งหมด</p>
        </div>
        <div className="best-menu">
          {bestSellers.map((menu) => (
            <CardComponent
              key={menu.id}
              data={menu}
              onIncrese={() => handleIncrese(menu.id, 'bestSellers')}
              onDecline={() => handleDecline(menu.id, 'bestSellers')}
              addCart={(qty) => handleAddCart(menu, qty ?? 1)
              }
            />
          ))}
        </div>
      </div>

      <div className="contact">
        <div className="name-res">
          <h2>ชื่อร้าน</h2>
        </div>

        <div className="contact-res">
          <div className="tel-email">
            <div className="con">
              <h2>ติดต่อ</h2>
            </div>
            <div className="con-res">
              <p>tel: 000-000-0000</p>
              <p>line: sarankvk</p>
              <p>FB: Zaabelider</p>
            </div>
          </div>

          <div className="address">
            <h2>ที่อยู่</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              sequi fugiat quo perspiciatis dolorem saepe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
