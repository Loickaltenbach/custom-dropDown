"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("../style/dropdown.css");
var arrow = require("../assets/arrow.svg");
var Dropdown = function (props) {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    (0, react_1.useEffect)(function () {
        console.log('', props.items);
    }, []);
    var handleItemClick = function (item) {
        props.setSelectedItem(item);
        props.onSelect(item);
        setIsOpen(false);
    };
    var toggleOpen = function () { return setIsOpen(!isOpen); };
    return (React.createElement("div", { className: "dropdown", style: { cursor: "pointer" } },
        React.createElement("p", null, props.title),
        React.createElement("div", { className: "dropdown-toggle", onClick: toggleOpen },
            props.selectedItem ? props.selectedItem.label : props.defaultLabel,
            React.createElement("img", { height: 20, width: 20, alt: "arrow", src: arrow })),
        isOpen && (React.createElement("ul", { className: "dropdown-menu" }, props.items.map(function (item) { return (React.createElement("p", { key: item.value, onClick: function () { return handleItemClick(item); } }, item.label)); })))));
};
exports.default = Dropdown;
