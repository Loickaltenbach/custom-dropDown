const React = require("react");
import { useEffect, useState } from "react";
import "../style/dropdown.css";
const arrow = require("../assets/arrow.svg");

type MenuItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  title: string;
  items: MenuItem[];
  defaultLabel: string;
  selectedItem: MenuItem | null;
  setSelectedItem: (item: MenuItem) => void;
  onSelect: (item: MenuItem) => void;
};

const Dropdown= (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log('', props.items);
  }, []);

  const handleItemClick = (item: MenuItem) => {
    props.setSelectedItem(item);
    props.onSelect(item);
    setIsOpen(false);
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown" style={{ cursor: "pointer" }}>
      <p>{props.title}</p>
      <div className="dropdown-toggle" onClick={toggleOpen}>
        {props.selectedItem ? props.selectedItem.label : props.defaultLabel}
        <img height={20} width={20} alt="arrow" src={arrow} />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {props.items.map((item) => (
            <p key={item.value} onClick={() => handleItemClick(item)}>
              {item.label}
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
