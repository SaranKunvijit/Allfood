import images from '../assets/image1.png'
export const catagoryTypeFood = [
  { id: 1, label: "ส้มตำ" },
  { id: 2, label: "ลาบ/ยำ" },
  { id: 3, label: "ทอด/ย่าง" },
  { id: 4, label: "ตามสั่ง" },
];

export const foodsData = [
  // ---------- ส้มตำ ----------
  { id: 1, image: images, name: "ส้มตำไทย", price: 50, type: 1, qty: 0 },
  { id: 2, image: images, name: "ส้มตำปูปลาร้า", price: 55, type: 1, qty: 0 },
  { id: 3, image: images, name: "ส้มตำไข่เค็ม", price: 60, type: 1, qty: 0 },
  { id: 4, image: images, name: "ส้มตำผลไม้", price: 65, type: 1, qty: 0 },
  { id: 5, image: images, name: "ตำแตง", price: 45, type: 1, qty: 0 },
  { id: 6, image: images, name: "ตำข้าวโพดไข่เค็ม", price: 70, type: 1, qty: 0 },
  { id: 7, image: images, name: "ตำซั่วขนมจีน", price: 60, type: 1, qty: 0 },
  { id: 8, image: images, name: "ตำถั่วฝักยาว", price: 45, type: 1, qty: 0 },
  { id: 9, image: images, name: "ส้มตำปลาร้า", price: 50, type: 1, qty: 0 },
  { id: 10, image: images, name: "ตำมะม่วง", price: 55, type: 1, qty: 0 },

  // ---------- ลาบ / ยำ ----------
  { id: 11, image: images, name: "ลาบหมู", price: 70, type: 2, qty: 0 },
  { id: 12, image: images, name: "ลาบไก่", price: 70, type: 2, qty: 0 },
  { id: 13, image: images, name: "ลาบปลาดุก", price: 75, type: 2, qty: 0 },
  { id: 14, image: images, name: "ยำวุ้นเส้น", price: 80, type: 2, qty: 0 },
  { id: 15, image: images, name: "ยำหมูยอ", price: 75, type: 2, qty: 0 },
  { id: 16, image: images, name: "ยำทะเล", price: 120, type: 2, qty: 0 },
  { id: 17, image: images, name: "ยำไข่ดาว", price: 65, type: 2, qty: 0 },
  { id: 18, image: images, name: "ยำมาม่า", price: 70, type: 2, qty: 0 },
  { id: 19, image: images, name: "ยำไก่แซ่บ", price: 85, type: 2, qty: 0 },
  { id: 20, image: images, name: "ยำกุ้งสด", price: 120, type: 2, qty: 0 },

  // ---------- ทอด / ย่าง ----------
  { id: 21, image: images, name: "ไก่ย่าง", price: 80, type: 3, qty: 0 },
  { id: 22, image: images, name: "หมูย่าง", price: 85, type: 3, qty: 0 },
  { id: 23, image: images, name: "คอหมูย่าง", price: 90, type: 3, qty: 0 },
  { id: 24, image: images, name: "ไก่ทอด", price: 70, type: 3, qty: 0 },
  { id: 25, image: images, name: "หมูทอดกระเทียม", price: 75, type: 3, qty: 0 },
  { id: 26, image: images, name: "กุ้งทอด", price: 95, type: 3, qty: 0 },
  { id: 27, image: images, name: "ปลาเผา", price: 150, type: 3, qty: 0 },
  { id: 28, image: images, name: "ปลาดุกย่าง", price: 70, type: 3, qty: 0 },
  { id: 29, image: images, name: "หมูกรอบทอด", price: 80, type: 3, qty: 0 },
  { id: 30, image: images, name: "ไก่ย่างสมุนไพร", price: 95, type: 3, qty: 0 },

  // ---------- ตามสั่ง ----------
  { id: 31, image: images, name: "กระเพราไก่", price: 50, type: 4, qty: 0 },
  { id: 32, image: images, name: "กระเพราหมู", price: 50, type: 4, qty: 0 },
  { id: 33, image: images, name: "ข้าวผัดหมู", price: 55, type: 4, qty: 0 },
  { id: 34, image: images, name: "ข้าวผัดกุ้ง", price: 65, type: 4, qty: 0 },
  { id: 35, image: images, name: "ผัดพริกแกงหมู", price: 55, type: 4, qty: 0 },
  { id: 36, image: images, name: "ผัดซีอิ๊วหมู", price: 55, type: 4, qty: 0 },
  { id: 37, image: images, name: "ผัดไทยกุ้งสด", price: 70, type: 4, qty: 0 },
  { id: 38, image: images, name: "ราดหน้า", price: 55, type: 4, qty: 0 },
  { id: 39, image: images, name: "ผัดผงกะหรี่ทะเล", price: 90, type: 4, qty: 0 },
  { id: 40, image: images, name: "ทอดกระเทียมหมู", price: 55, type: 4, qty: 0 },
];


export const OrderFoods = [
    { id: 1,  name: "ผัดซีอิ๊วหมู", price: 55, type: "ตามสั่ง", qty: 1, tableId: 2 },
    { id: 2,  name: "กระเพราไก่ไข่ดาว", price: 60, type: "ตามสั่ง", qty: 2, tableId: 1 },
    { id: 3,  name: "ข้าวผัดกุ้ง", price: 65, type: "ตามสั่ง", qty: 3, tableId: 3 },
    { id: 4,  name: "ราดหน้าเส้นใหญ่หมู", price: 55, type: "ตามสั่ง", qty: 4, tableId: 5 },
    { id: 5,  name: "ผัดพริกแกงหมูกรอบ", price: 70, type: "ตามสั่ง", qty: 1, tableId: 1 },
    { id: 6,  name: "ข้าวผัดกระเทียมหมู", price: 55, type: "ตามสั่ง", qty: 5, tableId: 2 },
    { id: 7,  name: "ผัดไทยกุ้งสด", price: 70, type: "ตามสั่ง", qty: 2, tableId: 2 },
    { id: 8,  name: "คะน้าหมูกรอบราดข้าว", price: 60, type: "ตามสั่ง", qty: 1, tableId: 5 },
    { id: 9,  name: "ผัดขี้เมาทะเล", price: 75, type: "ตามสั่ง", qty: 2, tableId: 1 },
    { id: 10, name: "หมูทอดกระเทียม", price: 60, type: "ตามสั่ง", qty: 3, tableId: 2 },
  ];

  
