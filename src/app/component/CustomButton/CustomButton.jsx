// import style from "./style.module.css"

// import { combineClasses } from "../../utils/Format";

// export const CustomButton = (props) => {
//   const classNames = {
//     primary: "Btn",
//     outline: "transparentbtn",
//     secondary: "bigBtn",
//     outlinetwo: "Btn-invert",
//     logprimary: "LogBtnBlack",
//     logsecondary: "LogBtnBlue",
//     logoutline: "LogBtnTrans",
//     loginprimary: "logInBtn",
//   };

//   const className = classNames[props.type] || classNames.primary;
//   const classes = combineClasses(className, props.className);

//   return props.onClick ? (
//     <button onClick={props.onClick} className={classes}>
//       {props.children}
//     </button>
//   ) : (
//     <a href="#/" className={classes}>
//       {props.children}
//     </a>
//   );
// };

import React from "react";
import PropTypes from "prop-types";


const CustomButton = ({ onClick, children, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  className: "",
};

export default CustomButton;

