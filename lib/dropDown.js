"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../style/dropdown.css");
var arrow_svg_1 = require("../assets/arrow.svg");
var Dropdown = function (props) {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var handleItemClick = function (item) {
        props.setSelectedItem(item);
        props.onSelect(item);
        setIsOpen(false);
    };
    var toggleOpen = function () { return setIsOpen(!isOpen); };
    return (React.createElement("div", { className: "dropdown", style: { cursor: 'pointer' } },
        React.createElement("p", null, props.title),
        React.createElement("div", { className: "dropdown-toggle", onClick: toggleOpen },
            props.selectedItem ? props.selectedItem.label : props.defaultLabel,
            React.createElement("img", { height: 20, width: 20, alt: "arrow", src: arrow_svg_1.default })),
        isOpen && (React.createElement("ul", { className: "dropdown-menu" }, props.items.map(function (item) { return (React.createElement("p", { key: item.value, onClick: function () { return handleItemClick(item); } }, item.label)); })))));
};
exports.default = Dropdown;
