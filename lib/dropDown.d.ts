/// <reference types="react" />
import "../style/dropdown.css";
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
declare const Dropdown: (props: DropdownProps) => JSX.Element;
export default Dropdown;
