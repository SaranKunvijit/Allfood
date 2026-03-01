import { useState } from "react";
import "./Tables.css";
import { DoorOpen, Percent, Plus, Trash2 } from "lucide-react";
import type { Food } from "../../types";
import DialogComponent from "../../Components/DialogComponent/DialogComponent";
import { OrderFoods, foodsData } from "../../Data/foodData";
import InputComponent from "../../Components/InputComponent/InputComponent";
type TablesProps = {
  tableTotal: number;
};

function Tables({ tableTotal }: TablesProps) {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [checedFoodId, setCheckedFoodId] = useState<number[]>([]);
  const [food, setFood] = useState<Food[]>(OrderFoods);
  const [search, setSearch] = useState<string>("");

  const toggleRow = (id: number) => {
    setCheckedFoodId((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const totalPrice = food.reduce((sum, item) => {
    return sum + item.qty * item.price;
  }, 0);
  const fillterFoodData = foodsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const tables = Array.from({ length: tableTotal }, (_, i) => i + 1);

  // const filteredFoods = selectedTable === null
  // ? [] : food.filter(f =>f.tableId)

  return (
    <>
      <DialogComponent
        open={open}
        title="ยืนยันการลบอาหาร"
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setFood((prev) =>
            prev.filter((food) => !checedFoodId.includes(food.id)),
          );
          setCheckedFoodId([]);
          setOpen(false);
        }}
      >
        <p>ต้องการลบรายการอาหารนี้ใช่หรือไหม ? </p>
      </DialogComponent>
      <div className="search">
        <InputComponent
          labels="ค้นหาเมนู"
          inputed="text"
          requireds={false}
          className="input-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <div className="food-dropdown">
            {fillterFoodData.map((item) => (
              <div
                className="food-item"
                key={item.id}
                onClick={() => {
                  if (selectedTable === null) return;
                  setFood((prev) => {
                    const exist = prev.find(
                      (f) => f.id === item.id && f.tableId === selectedTable,
                    );
                    if (exist) {
                      return prev.map((f) =>
                        f.id === item.id && f.tableId === selectedTable
                          ? { ...f, qty: f.qty + 1 }
                          : f,
                      );
                    }
                    return [
                      ...prev,
                      { ...item, qty: 1, tableId: selectedTable },
                    ];
                  });
                  setSearch("");
                }}
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container-table">
        <div className="btn-tables">
          {tables.map((id) => (
            <div className="table-boxs">
              <button
                key={id}
                className={`table-id ${selectedTable === id ? "active" : ""}`}
                onClick={() => {
                  setSelectedTable(id);
                  setSearch("");
                }}
              >
                โต๊ะ {id}
              </button>
            </div>
          ))}
        </div>
        <div className="detail-tabless">
          <div className="data-table-items">
            <div className="table-num">
              <h1>โต๊ะ {selectedTable}</h1>
              <p>
                เวลา <span>10.00</span>
              </p>
              <p>
                ใช้เวลา <span>35 นาที</span>
              </p>
            </div>
            <div className="price-total">
              <p>
                ราคารวม <span>{totalPrice} ฿</span>
              </p>
            </div>
          </div>
          <div className="btn-items">
            <button className="add">
              <Plus />
              เพิ่ม
            </button>
            <button className="discount">
              {" "}
              <Percent />
              ส่วนลด
            </button>
            <button className="move">
              <DoorOpen />
              ย้ายโต๊ะ
            </button>
            <button
              className="removes"
              onClick={() => setOpen(true)}
              disabled={checedFoodId.length === 0}
            >
              <Trash2 /> ลบรายการ
            </button>
          </div>

          <div className="show-foods">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>qty</th>
                  <th>อาหาร</th>
                  <th>ราคา</th>
                </tr>
              </thead>
              <tbody>
                {food.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ textAlign: "center" }}>
                      ไม่มีรายการอาหาร
                    </td>
                  </tr>
                )}
                {food.map((food) => (
                  <tr
                    key={food.id}
                    onClick={() => toggleRow(food.id)}
                    className={
                      checedFoodId.includes(food.id) ? "row-active" : ""
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <th>
                      <input
                        type="checkbox"
                        checked={checedFoodId.includes(food.id)}
                        onClick={(e) => e.stopPropagation()}
                        readOnly
                      />
                    </th>
                    <th>{food.qty}</th>
                    <th>{food.name}</th>
                    <th>{food.price}฿</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="btn-pay-printbill">
            <button className="print">ปริ้นบิล</button>
            <button className="pay">
              คิดเงิน <span>{totalPrice}</span>฿
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tables;
