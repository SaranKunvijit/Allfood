import React, { useState, type FC } from "react";
import "./DropdownComponent.css";
import type { TypeProps, DropDownProps } from "../../types";
import { ChevronRight } from "lucide-react";
const DropdownComponent: FC<DropDownProps> = ({
  items,
  defaultLabel = "",
  onSelect,
  className = "",
}) => {
  const [selectType, setSelectType] = useState<string>(defaultLabel);
  const handleSelect = (items:TypeProps) => {
    setSelectType(items.label);
    onSelect?.(items.id);
  };
  return (
    <div>
      <div className="dropdowns">
        <p className={`dropdown-btns ${className}`}>
          <span className="label">{selectType}</span>
          <span className="icon">
            <ChevronRight size={18} />
          </span>
        </p>
        <ul className="dropdown-menus">
          {items.map((item:any) => (
            <li key={item.id} onClick={() => handleSelect(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownComponent;
