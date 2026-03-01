
import type { InputHTMLAttributes, ReactNode } from "react";
import type React from "react";
export type TypeProps = {
  id:number;
  label:string
}
export type ItemsProps = {
  id: number;
  image: string;
  name: string;
  qty?: number;
  price: number;
  type: TypeProps;
};
export type Food = {
  id: number
  name: string
  price: number
  qty: number
  tableId:number
}
export type SildeBarComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  cartItem: ItemsProps[];
  setCartItem: React.Dispatch<React.SetStateAction<ItemsProps[]>>;
};

export type ImageUploadsComponentProps = {
  id?: string;
  label?: string;
  onImageChange?: (file: File | null, imageURL: string | null) => void;
};

export type DialogComponentProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
};

export type CardComponentProps = {
  data: ItemsProps;
  onIncrese: () => void;
  onDecline: () => void;
  addCart: (qty?: number) => void;
};

export type TableProps = {
  id: number;
  title: string;
  category: TypeProps
  foods: ItemsProps[];
  onEdit: (food: ItemsProps) => void;
  onDelete: (id: number) => void;
  onAddFood: (
    image: string,
    name: string,
    price: number,
    type: number,
    qty: number
  ) => void;
  onDeleteCatagory: (id: number) => void;
};


export type DropDownProps = {
  items:TypeProps[]
  defaultLabel?: string
  onSelect?:(value:number) => void
  className: string
}

export type InputProps = {
  labels: string
  requireds:boolean
  inputed: React.HTMLInputTypeAttribute
  className: string
} & InputHTMLAttributes<HTMLInputElement>
