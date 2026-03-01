import { ImagePlus, Package } from "lucide-react";
import "../ManagePage/SettingsPageCss/SettingsFoods.css";
import { useState, type ChangeEvent } from "react";
import { catagoryTypeFood, foodsData } from "../../../Data/foodData";
import TableComponent from "../../../Components/TableComponent/TableComponent";
import DialogComponent from "../../../Components/DialogComponent/DialogComponent";
import DropdownComponent from "../../../Components/DropdownComponent/DropdownComponent";
import type { ItemsProps, TypeProps } from "../../../types";
import InputComponent from "../../../Components/InputComponent/InputComponent";

function SettingsFoods() {
  const [openCatagory, setOpenCatagory] = useState(false);
  const [newCatagory, setNewCatagory] = useState("");
  const [editItem, setEditItem] = useState<any>(null);
  const [editImage, setEditImage] = useState("");
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectType, setSelectype] = useState<number>(0);
  const [foods, setFoods] = useState(foodsData);
  const [deleteCategoryId, setDeleteCategoryId] = useState<number | null>(null);
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);

  const foodsByType = (typeName: number) =>
    foods.filter((f) => f.type === typeName);

  const [catagoryFood, setCatagoryFood] = useState(catagoryTypeFood);

  const totalFoods =
    selectType === 0
      ? foods.length
      : foods.filter((f) => f.type === selectType).length;
  const handleEdit = (food: any) => {
    setEditItem(food);
    setEditName(food.name);
    setEditImage(food.image);
    setEditPrice(food.price.toString());
    setOpenEdit(true);
  };
  const handleConfirmEdit = () => {
    if (editItem) {
      setFoods(
        foods.map((f) =>
          f.id === editItem.id
            ? {
                ...f,
                image: editImage,
                name: editName,
                price: Number(editPrice),
              }
            : f,
        ),
      );
    }
    setOpenEdit(false);
    setEditItem(null);
  };
  const handleDelete = (id: number) => {
    setDeleteId(id);
    setOpen(true);
  };
  const hanleDeleteCat = (id: number) => {
    setDeleteCategoryId(id);
    setOpenDeleteCategory(true);
  };
  const confirmDeleteCategory = () => {
    if (!deleteCategoryId) return;
    const categoryName = catagoryFood.find(
      (c) => c.id === deleteCategoryId,
    )?.label;
    setCatagoryFood((prev) => prev.filter((c) => c.id !== deleteCategoryId));
    if (categoryName) {
      setFoods((prev) => prev.filter((f) => f.type !== deleteCategoryId));
    }
    setDeleteCategoryId(null);
    setOpenDeleteCategory(false);
  };

  const hanleEditImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editItem) {
      const imgURL = URL.createObjectURL(file);
      setEditImage(imgURL);
      setFoods((prev) =>
        prev.map((f) => (f.id === editItem.id ? { ...f, image: imgURL } : f)),
      );
    }
  };

  const handleAddFoods = (
    image: string,
    name: string,
    price: number,
    type: number,
    qty: number,
  ) => {
    const newFoods = {
      id: foods.length + 1,
      image,
      name,
      price,
      type,
      qty,
    };
    setFoods([...foods, newFoods]);
  };
  const allFoods: TypeProps[] = [
    { id: 0, label: "อาหารทั้งหมด" },
    ...catagoryFood,
  ];
  return (
    <div>
      {/* Dialog ลบ */}
      <DialogComponent
        open={open}
        title="ยืนยันการลบ"
        onClose={() => {
          setOpen(false);
          setDeleteId(null);
        }}
        onConfirm={() => {
          if (deleteId) {
            setFoods(foods.filter((f) => f.id !== deleteId));
          }
          setOpen(false);
          setDeleteId(null);
        }}
      >
        <p>คุณต้องการลบรายการนี้ใช่ไหม?</p>
      </DialogComponent>

      <DialogComponent
        open={openEdit}
        title="แก้ไขอาหาร"
        onClose={() => {
          setOpenEdit(false);
          setEditItem(null);
        }}
        onConfirm={handleConfirmEdit}
      >
        <div className="edit-dialog">
          {editImage ? (
            <div className="img-wrapper">
              <img src={editImage} alt="" className="show-images" />

              <div className="img-overlay">
                <button
                  className="btn-change"
                  onClick={() =>
                    document.getElementById("imageUpload")?.click()
                  }
                >
                  เปลี่ยนรูป
                </button>
                <button
                  className="btn-remove"
                  onClick={() => {
                    setEditImage("");
                    if (editItem) {
                      setFoods((prev) =>
                        prev.map((f) =>
                          f.id === editItem.id ? { ...f, image: "" } : f,
                        ),
                      );
                    }
                  }}
                >
                  ลบรูปภาพ
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => document.getElementById("imageUpload")?.click()}
              className="btn-edit"
            >
              <ImagePlus size={50} className="icon-img" />
            </button>
          )}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={hanleEditImageUpload}
            style={{ display: "none" }}
          />

          <InputComponent
            labels="ชื่ออาหาร"
            inputed="text"
            requireds
            className="new-food"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <InputComponent
            labels="ราคา"
            inputed="text"
            requireds
            className="new-food"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
        </div>
      </DialogComponent>
      <DialogComponent
        open={openCatagory}
        title="เพิ่มประเภทสินค้า"
        onClose={() => {
          setOpenCatagory(false);
          setNewCatagory("");
        }}
        onConfirm={() => {
          if (newCatagory.trim() !== "") {
            const newId = catagoryFood.length + 1;
            const newItem = { id: newId, label: newCatagory };

            setCatagoryFood([...catagoryFood, newItem]);
          }
          setOpenCatagory(false);
          setNewCatagory("");
        }}
      >
        <div className="edit-dialog">
          <InputComponent
            labels="ชื่อประเภท"
            inputed="text"
            requireds
            className="type-category"
            value={newCatagory}
            onChange={(e) => setNewCatagory(e.target.value)}
          />
        </div>
      </DialogComponent>
      <DialogComponent
        open={openDeleteCategory}
        title="ลบประเภทสินค้า"
        onClose={() => {
          setOpenDeleteCategory(false);
          setDeleteCategoryId(null);
        }}
        onConfirm={confirmDeleteCategory}
      >
        <p>
          คุณต้องการลบประเภทสินค้านี้
          และรายการอาหารที่อยู่ในหมวดนี้ทั้งหมดใช่ไหม?
        </p>
      </DialogComponent>

      <div className="foods-headers">
        <div className="texts-header">
          <div className="total-food">
            <h1>รายการทั้งหมด</h1>
            <p>{totalFoods} รายการ</p>
          </div>

          <div className="btn-createselect">
            <DropdownComponent
              items={allFoods}
              defaultLabel="อาหารทั้งหมด"
              onSelect={(id) => setSelectype(id)}
              className="allfoodtype"
            />
            <button onClick={() => setOpenCatagory(true)}>
              <Package /> เพิ่มประเภทสินค้า
            </button>
          </div>
        </div>

        {selectType === 0 && (
          <div className="table-show">
            {catagoryFood.map((cat) => {
              const list = foodsByType(cat.id).map((f) => ({
                ...f,
                type: {
                  id: f.id,
                  label: catagoryFood.find((c) => c.id === f.type)?.label ?? "",
                },
              }));
              return (
                <div>
                  <TableComponent
                    id={cat.id}
                    key={cat.id}
                    title={cat.label}
                    category={cat}
                    foods={list}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAddFood={handleAddFoods}
                    onDeleteCatagory={() => hanleDeleteCat(cat.id)}
                  />
                </div>
              );
            })}
          </div>
        )}

        {selectType !== 0 && (
          <div className="table-show">
            {(() => {
              const selectCatagory = catagoryFood.find(
                (c) => c.id === selectType,
              );
              if (!selectCatagory) return null;
              const list = foodsByType(selectCatagory.id);
              const foodType: ItemsProps[] = list.map((item) => ({
                ...item,
                type: { id: item.id, label: selectCatagory.label },
              }));
              return (
                <div>
                  <TableComponent
                    id={selectCatagory.id}
                    title={selectCatagory.label}
                    category={selectCatagory}
                    foods={foodType}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAddFood={handleAddFoods}
                    onDeleteCatagory={() => hanleDeleteCat(selectCatagory.id)}
                  />
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsFoods;
