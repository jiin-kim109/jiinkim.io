module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AccessTime */ \"@material-ui/icons/AccessTime\");\n/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/HelpOutline */ \"@material-ui/icons/HelpOutline\");\n/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/jiinkim/Desktop/Projects/portfolio/components/Header.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({\n  displayName: \"Header__HeaderContainer\",\n  componentId: \"sc-6tv2nf-0\"\n})([\"display:flex;align-items:center;justify-content:space-between;padding:10px 0;background-color:var(--primary-color);color:white;\"]);\nconst HeaderLeft = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({\n  displayName: \"Header__HeaderLeft\",\n  componentId: \"sc-6tv2nf-1\"\n})([\"flex:0.3;display:flex;align-items:center;margin-left:20px;.MuiSvgIcon-root{margin-left:auto;margin-right:20px;}\"]);\nconst HeaderSearch = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({\n  displayName: \"Header__HeaderSearch\",\n  componentId: \"sc-6tv2nf-2\"\n})([\"flex:0.4;background-color:#421f44;text-align:center;display:flex;padding:0 50px;color:gray;border:1px gray solid;border-radius:6px;input{background-color:transparent;border:none;text-align:center;min-width:35vw;}\"]);\nconst HeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({\n  displayName: \"Header__HeaderRight\",\n  componentId: \"sc-6tv2nf-3\"\n})([\"flex:0.3;display:flex;align-items:flex-end;.MuiSvgIcon-root{margin-left:auto;margin-right:20px;}\"]);\n\nconst Header = () => __jsx(HeaderContainer, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 3\n  }\n}, __jsx(HeaderLeft, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }\n}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n  className: \"avatar\",\n  alt: \"ref\",\n  src: \"\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 7\n  }\n}), __jsx(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 7\n  }\n})), __jsx(HeaderSearch, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }\n}, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 7\n  }\n}), __jsx(\"input\", {\n  placeholder: \"Search Anything\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 7\n  }\n})), __jsx(HeaderRight, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }\n}, __jsx(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 7\n  }\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3g/ZGRiOCJdLCJuYW1lcyI6WyJIZWFkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXJMZWZ0IiwiSGVhZGVyU2VhcmNoIiwiSGVhZGVyUmlnaHQiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsZUFBZSxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVJQUFyQjtBQVNBLE1BQU1DLFVBQVUsR0FBR0Ysd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1SEFBaEI7QUFZQSxNQUFNRSxZQUFZLEdBQUdILHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNE5BQWxCO0FBa0JBLE1BQU1HLFdBQVcsR0FBR0osd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3R0FBakI7O0FBV0EsTUFBTUksTUFBTSxHQUFHLE1BQ2IsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FFRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsd0RBQUQ7QUFBUSxXQUFTLEVBQUMsUUFBbEI7QUFBMkIsS0FBRyxFQUFFLEtBQWhDO0FBQXVDLEtBQUcsRUFBRSxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQUZGLEVBT0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQU8sYUFBVyxFQUFDLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsQ0FQRixFQVlFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FaRixDQURGOztBQW9CZUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBBY2Nlc3NUaW1lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY2Vzc1RpbWVcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XG5pbXBvcnQgSGVscE91dGxpbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscE91dGxpbmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbmBcblxuY29uc3QgSGVhZGVyTGVmdCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAuMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgLk11aVN2Z0ljb24tcm9vdCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAgIFxuICB9XG5gXG5cbmNvbnN0IEhlYWRlclNlYXJjaCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAuNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyMWY0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXI6IDFweCBncmF5IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAzNXZ3OyAgIFxuICB9XG5gXG5cbmNvbnN0IEhlYWRlclJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMC4zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgLk11aVN2Z0ljb24tcm9vdCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAgIFxuICB9XG5gXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPEhlYWRlckNvbnRhaW5lcj5cblxuICAgIDxIZWFkZXJMZWZ0PlxuICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJhdmF0YXJcIiBhbHQ9e1wicmVmXCJ9IHNyYz17XCJcIn0gLz5cbiAgICAgIDxBY2Nlc3NUaW1lSWNvbiAvPlxuICAgIDwvSGVhZGVyTGVmdD5cblxuICAgIDxIZWFkZXJTZWFyY2g+XG4gICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIEFueXRoaW5nXCIgLz5cbiAgICA8L0hlYWRlclNlYXJjaD5cblxuICAgIDxIZWFkZXJSaWdodD5cbiAgICAgIDxIZWxwT3V0bGluZUljb24gLz5cbiAgICA8L0hlYWRlclJpZ2h0PlxuXG4gIDwvSGVhZGVyQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ }),

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/FiberManualRecord */ \"@material-ui/icons/FiberManualRecord\");\n/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Create */ \"@material-ui/icons/Create\");\n/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SidebarOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarOption */ \"./components/SidebarOption.tsx\");\n/* harmony import */ var _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/InsertComment */ \"@material-ui/icons/InsertComment\");\n/* harmony import */ var _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Inbox */ \"@material-ui/icons/Inbox\");\n/* harmony import */ var _material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Drafts */ \"@material-ui/icons/Drafts\");\n/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"@material-ui/icons/ExpandMore\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Add */ \"@material-ui/icons/Add\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/jiinkim/Desktop/Projects/portfolio/components/Sidebar.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Sidebar__Container\",\n  componentId: \"nc49s6-0\"\n})([\"color:white;background-color:var(--primary-color);border-top:1px solid #49274b;max-width:260px;> hr{margin-top:10px;margin-bottom:10px;border:1px solid #49274b;}.header{display:flex;border-bottom:1px solid #49274b;padding-bottom:10px;padding:13px;}.createIcon{padding:8px;color:#49274b;font-size:35px;background-color:white;border-radius:999px;}\"]);\nconst Icon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Sidebar__Icon\",\n  componentId: \"nc49s6-1\"\n})([\"flex:1;> h2{font-size:15px;font-weight:900;margin-bottom:5px;}> h3{display:flex;align-items:center;font-size:13px;font-weight:400;}.fiberManualRecordIcon{font-size:14px;margin-top:1px;margin-right:2px;color:green;}\"]);\n\nconst Sidebar = ({\n  channels\n}) => __jsx(Container, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  className: \"header\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 9\n  }\n}, __jsx(Icon, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 13\n  }\n}, __jsx(\"h2\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 17\n  }\n}, \"My Portfolio\"), __jsx(\"h3\", {\n  className: \"user\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 17\n  }\n}, __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  className: \"fiberManualRecordIcon\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 21\n  }\n}), \"Jiin Kim\")), __jsx(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  className: \"createIcon\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 13\n  }\n})), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: \"Threads\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6___default.a,\n  title: \"Youtube\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7___default.a,\n  title: \"Draft\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: \"Channel\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: \"General\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7___default.a,\n  title: \"Threads\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: \"Threads\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6___default.a,\n  title: \"Inbox\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 9\n  }\n}), __jsx(\"hr\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: \"Threads\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a,\n  title: \"Expand More\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 9\n  }\n}), __jsx(\"hr\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 9\n  }\n}), __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  Icon: _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a,\n  title: \"Add\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 9\n  }\n}), channels.map(channel => {\n  __jsx(_SidebarOption__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    Icon: _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a,\n    title: channel.name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  });\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIudHN4P2U4ZGYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSWNvbiIsIlNpZGViYXIiLCJjaGFubmVscyIsIkluc2VydENvbW1lbnRJY29uIiwiSW5ib3hJY29uIiwiRHJhZnRzSWNvbiIsIkV4cGFuZE1vcmVJY29uIiwiQWRkSWNvbiIsIm1hcCIsImNoYW5uZWwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpV0FBZjtBQTJCQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOE5BQVY7O0FBNkJBLE1BQU1FLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNaLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSyxXQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBRUk7QUFBSSxXQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQywyRUFBRDtBQUF1QixXQUFTLEVBQUMsdUJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixhQUZKLENBREosRUFRSSxNQUFDLGdFQUFEO0FBQVksV0FBUyxFQUFDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFSSixDQURKLEVBWUksTUFBQyxzREFBRDtBQUFlLE1BQUksRUFBRUMsdUVBQXJCO0FBQXdDLE9BQUssRUFBQyxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWkosRUFhSSxNQUFDLHNEQUFEO0FBQWUsTUFBSSxFQUFFQywrREFBckI7QUFBZ0MsT0FBSyxFQUFDLFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFiSixFQWNJLE1BQUMsc0RBQUQ7QUFBZSxNQUFJLEVBQUVDLGdFQUFyQjtBQUFpQyxPQUFLLEVBQUMsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWRKLEVBZUksTUFBQyxzREFBRDtBQUFlLE1BQUksRUFBRUYsdUVBQXJCO0FBQXdDLE9BQUssRUFBQyxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZkosRUFnQkksTUFBQyxzREFBRDtBQUFlLE1BQUksRUFBRUEsdUVBQXJCO0FBQXdDLE9BQUssRUFBQyxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBaEJKLEVBaUJJLE1BQUMsc0RBQUQ7QUFBZSxNQUFJLEVBQUVFLGdFQUFyQjtBQUFpQyxPQUFLLEVBQUMsU0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWpCSixFQWtCSSxNQUFDLHNEQUFEO0FBQWUsTUFBSSxFQUFFRix1RUFBckI7QUFBd0MsT0FBSyxFQUFDLFNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFsQkosRUFtQkksTUFBQyxzREFBRDtBQUFlLE1BQUksRUFBRUMsK0RBQXJCO0FBQWdDLE9BQUssRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBbkJKLEVBb0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFwQkosRUFxQkksTUFBQyxzREFBRDtBQUFlLE1BQUksRUFBRUQsdUVBQXJCO0FBQXdDLE9BQUssRUFBQyxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBckJKLEVBc0JJLE1BQUMsc0RBQUQ7QUFBZSxNQUFJLEVBQUVHLG9FQUFyQjtBQUFxQyxPQUFLLEVBQUMsYUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXRCSixFQXVCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBdkJKLEVBd0JJLE1BQUMsc0RBQUQ7QUFBZSxNQUFJLEVBQUVDLDZEQUFyQjtBQUE4QixPQUFLLEVBQUMsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXhCSixFQTRCS0wsUUFBUSxDQUFDTSxHQUFULENBQWFDLE9BQU8sSUFBSTtBQUNyQixRQUFDLHNEQUFEO0FBQWUsUUFBSSxFQUFFSCxvRUFBckI7QUFBcUMsU0FBSyxFQUFFRyxPQUFPLENBQUNDLElBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSCxDQUZBLENBNUJMLENBREo7O0FBb0NlVCxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZWJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmliZXJNYW51YWxSZWNvcmRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmliZXJNYW51YWxSZWNvcmRcIjtcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFNpZGViYXJPcHRpb24gZnJvbSBcIi4vU2lkZWJhck9wdGlvblwiO1xuaW1wb3J0IEluc2VydENvbW1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zZXJ0Q29tbWVudFwiO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luYm94XCI7XG5pbXBvcnQgRHJhZnRzSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0c1wiO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0OTI3NGI7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcblxuICAgID4gaHIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDkyNzRiOyAgICAgIFxuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ5Mjc0YjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEzcHg7ICAgICAgIFxuICAgIH1cblxuICAgIC5jcmVhdGVJY29uIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBjb2xvcjogIzQ5Mjc0YjtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgfVxuYFxuY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXG4gICAgZmxleDogMTtcblxuICAgID4gaDIge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgPiBoMyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgICAgICAgXG4gICAgfVxuICAgIC5maWJlck1hbnVhbFJlY29yZEljb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgIGNvbG9yOiBncmVlbjsgICAgICAgXG4gICAgfVxuYFxuXG50eXBlIFNpZGViYXJQcm9wcyA9IHtcbiAgICBjaGFubmVsczogQXJyYXk8e1xuICAgICAgICBpZDogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmdcbiAgICB9PlxuICB9XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBjaGFubmVscyB9OiBTaWRlYmFyUHJvcHMpID0+IChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgPGgyPk15IFBvcnRmb2xpbzwvaDI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpYmVyTWFudWFsUmVjb3JkSWNvbiBjbGFzc05hbWU9XCJmaWJlck1hbnVhbFJlY29yZEljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICBKaWluIEtpbVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICA8Q3JlYXRlSWNvbiBjbGFzc05hbWU9XCJjcmVhdGVJY29uXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17SW5zZXJ0Q29tbWVudEljb259IHRpdGxlPVwiVGhyZWFkc1wiLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17SW5ib3hJY29ufSB0aXRsZT1cIllvdXR1YmVcIi8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIEljb249e0RyYWZ0c0ljb259IHRpdGxlPVwiRHJhZnRcIi8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIEljb249e0luc2VydENvbW1lbnRJY29ufSB0aXRsZT1cIkNoYW5uZWxcIi8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIEljb249e0luc2VydENvbW1lbnRJY29ufSB0aXRsZT1cIkdlbmVyYWxcIi8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIEljb249e0RyYWZ0c0ljb259IHRpdGxlPVwiVGhyZWFkc1wiLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17SW5zZXJ0Q29tbWVudEljb259IHRpdGxlPVwiVGhyZWFkc1wiLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17SW5ib3hJY29ufSB0aXRsZT1cIkluYm94XCIvPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17SW5zZXJ0Q29tbWVudEljb259IHRpdGxlPVwiVGhyZWFkc1wiLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gSWNvbj17RXhwYW5kTW9yZUljb259IHRpdGxlPVwiRXhwYW5kIE1vcmVcIi8+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8U2lkZWJhck9wdGlvbiBJY29uPXtBZGRJY29ufSB0aXRsZT1cIkFkZFwiLz5cblxuICAgICAgICB7LyogQ29ubmVjdCB0byBkQiBhbmQgbGlzdCAqL31cbiAgICAgICAgey8qIDxTaWRlYmFyT3B0aW9uIC4uLiAvPiAqL31cbiAgICAgICAge2NoYW5uZWxzLm1hcChjaGFubmVsID0+IHtcbiAgICAgICAgICAgIDxTaWRlYmFyT3B0aW9uIEljb249e0V4cGFuZE1vcmVJY29ufSB0aXRsZT17Y2hhbm5lbC5uYW1lfS8+XG4gICAgICAgIH0pfVxuICAgIDwvQ29udGFpbmVyPlxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ }),

/***/ "./components/SidebarOption.tsx":
/*!**************************************!*\
  !*** ./components/SidebarOption.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jiinkim/Desktop/Projects/portfolio/components/SidebarOption.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"SidebarOption__Container\",\n  componentId: \"r4ob82-0\"\n})([\"display:flex;aligin-items:center;font-size:12px;padding-left:2px;cursor:pointer;:hover{opacity:0.9;background-color:#340e36;}> h3{font-weight:500;}.MuiSvgIcon-root{padding:10px;color:white;font-size:20px;}\"]);\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"SidebarOption__Content\",\n  componentId: \"r4ob82-1\"\n})([\"padding:10px 0;.hash{}\"]);\n\nconst SidebarOption = ({\n  Icon,\n  title\n}) => {\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, Icon && __jsx(Icon, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 22\n    }\n  }), Icon ? __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, title) : __jsx(Content, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    className: \"hash\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }, title)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarOption);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXJPcHRpb24udHN4P2I5ZGMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ29udGVudCIsIlNpZGViYXJPcHRpb24iLCJJY29uIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscU5BQWY7QUF1QkEsTUFBTUMsT0FBTyxHQUFHRix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhCQUFiOztBQWFBLE1BQU1FLGFBQWEsR0FBRyxDQUFDO0FBQUNDLE1BQUQ7QUFBT0M7QUFBUCxDQUFELEtBQXVDO0FBQ3pELFNBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsSUFBSSxJQUFJLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGIsRUFFS0EsSUFBSSxHQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0MsS0FBTCxDQURDLEdBR0QsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCQSxLQUF4QixDQURKLENBTFIsQ0FESjtBQVlILENBYkQ7O0FBZWVGLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWRlYmFyT3B0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN2Z0ljb25Qcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnaW4taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQwZTM2OyAgICAgICBcbiAgICB9XG5cbiAgICA+IGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAuTXVpU3ZnSWNvbi1yb290IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiAxMHB4IDA7ICAgIFxuXG4gICAgLmhhc2gge1xuXG4gICAgfVxuYFxuXG50eXBlIFNpZGViYXJPcHRpb25Qcm9wcyA9IHtcbiAgICBJY29uPzogKHByb3BzOiBTdmdJY29uUHJvcHMpID0+IEpTWC5FbGVtZW50O1xuICAgIHRpdGxlOiBzdHJpbmdcbn1cblxuY29uc3QgU2lkZWJhck9wdGlvbiA9ICh7SWNvbiwgdGl0bGV9OiBTaWRlYmFyT3B0aW9uUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAge0ljb24gJiYgPEljb24vPn1cbiAgICAgICAgICAgIHtJY29uID8gKFxuICAgICAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICk6IChcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzaFwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyT3B0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SidebarOption.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/firebase */ \"./src/firebase.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.tsx\");\nvar _jsxFileName = \"/Users/jiinkim/Desktop/Projects/portfolio/pages/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst Index = props => __jsx(\"div\", {\n  className: \"jsx-7033664\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }\n}), __jsx(\"div\", {\n  className: \"jsx-7033664\" + \" \" + \"app__body\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }\n}, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  channels: props.channels,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 13\n  }\n})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"7033664\",\n  __self: undefined\n}, \"html,body{font-family:Roboto;--primary-color:#3f0f40;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWlua2ltL0Rlc2t0b3AvUHJvamVjdHMvcG9ydGZvbGlvL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjMkIsQUFJZ0MsbUJBQ0ssd0JBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9qaWlua2ltL0Rlc2t0b3AvUHJvamVjdHMvcG9ydGZvbGlvL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0J1xuaW1wb3J0IGRiIGZyb20gXCIuLi9zcmMvZmlyZWJhc2VcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSW5kZXggPSAocHJvcHM6IGFueSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfX2JvZHlcIj5cbiAgICAgICAgICAgIDxTaWRlYmFyIGNoYW5uZWxzPXtwcm9wcy5jaGFubmVsc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEdsb2JhbCBDU1MgTW9kdWxlIFN0eWxlcyAqL31cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgICAgIC0tcHJpbWFyeS1jb2xvcjogIzNmMGY0MDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly8uLi4vcG9zdHMnKVxuICAvL2NvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zdCBjaGFubmVsczogQXJyYXk8b2JqZWN0PiA9IFtdO1xuICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicm9vbVwiKS5nZXQoKVxuICAgICAgLnRoZW4oc25hcHNob3QgPT4gc25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgIGNoYW5uZWxzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBkb2MuZGF0YSgpLm5hbWVcbiAgICAgICAgICB9KVxuICAgICAgfSkpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNoYW5uZWxzLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\\n/*@ sourceURL=/Users/jiinkim/Desktop/Projects/portfolio/pages/index.tsx */\"));\n\nconst getStaticProps = async () => {\n  //const res = await fetch('https://.../posts')\n  //const posts = await res.json()\n  const channels = [];\n  await _src_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].collection(\"room\").get().then(snapshot => snapshot.forEach(doc => {\n    channels.push({\n      id: doc.id,\n      name: doc.data().name\n    });\n  }));\n  return {\n    props: {\n      channels\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY2hhbm5lbHMiLCJnZXRTdGF0aWNQcm9wcyIsImRiIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiaWQiLCJuYW1lIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxLQUFLLEdBQUlDLEtBQUQsSUFDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixFQUVJO0FBQUEsbUNBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQywyREFBRDtBQUFTLFVBQVEsRUFBRUEsS0FBSyxDQUFDQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosQ0FGSjtBQUFBO0FBQUE7QUFBQSwwK0RBREo7O0FBaUJPLE1BQU1DLGNBQThCLEdBQUcsWUFBWTtBQUN4RDtBQUNBO0FBQ0EsUUFBTUQsUUFBdUIsR0FBRyxFQUFoQztBQUNBLFFBQU1FLHFEQUFFLENBQUNDLFVBQUgsQ0FBYyxNQUFkLEVBQXNCQyxHQUF0QixHQUNEQyxJQURDLENBQ0lDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxHQUFHLElBQUk7QUFDdENSLFlBQVEsQ0FBQ1MsSUFBVCxDQUFjO0FBQ1ZDLFFBQUUsRUFBRUYsR0FBRyxDQUFDRSxFQURFO0FBRVZDLFVBQUksRUFBRUgsR0FBRyxDQUFDSSxJQUFKLEdBQVdEO0FBRlAsS0FBZDtBQUlILEdBTGlCLENBRGhCLENBQU47QUFPQSxTQUFPO0FBQ0xaLFNBQUssRUFBRTtBQUNMQztBQURLO0FBREYsR0FBUDtBQUtELENBaEJNO0FBa0JRRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0J1xuaW1wb3J0IGRiIGZyb20gXCIuLi9zcmMvZmlyZWJhc2VcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSW5kZXggPSAocHJvcHM6IGFueSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfX2JvZHlcIj5cbiAgICAgICAgICAgIDxTaWRlYmFyIGNoYW5uZWxzPXtwcm9wcy5jaGFubmVsc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEdsb2JhbCBDU1MgTW9kdWxlIFN0eWxlcyAqL31cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgICAgIC0tcHJpbWFyeS1jb2xvcjogIzNmMGY0MDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly8uLi4vcG9zdHMnKVxuICAvL2NvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zdCBjaGFubmVsczogQXJyYXk8b2JqZWN0PiA9IFtdO1xuICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicm9vbVwiKS5nZXQoKVxuICAgICAgLnRoZW4oc25hcHNob3QgPT4gc25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgIGNoYW5uZWxzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBkb2MuZGF0YSgpLm5hbWVcbiAgICAgICAgICB9KVxuICAgICAgfSkpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNoYW5uZWxzLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/firebase.tsx":
/*!**************************!*\
  !*** ./src/firebase.tsx ***!
  \**************************/
/*! exports provided: auth, provider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"provider\", function() { return provider; });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  apiKey: \"AIzaSyA5S3wUJGFY8D7tFI85eIZSxsPjYwB2YKM\",\n  authDomain: \"portfolio-temp-faa41.firebaseapp.com\",\n  databaseURL: \"https://portfolio-temp-faa41.firebaseio.com\",\n  projectId: \"portfolio-temp-faa41\",\n  storageBucket: \"portfolio-temp-faa41.appspot.com\",\n  messagingSenderId: \"696995990677\",\n  appId: \"1:696995990677:web:98cb3f46bcc805f5001f9c\"\n};\n\nif (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\n}\n\nconst firebaseApp = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();\nconst db = firebaseApp.firestore();\nconst auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();\nconst provider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZWJhc2UudHN4PzU2MzciXSwibmFtZXMiOlsiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VBcHAiLCJhcHAiLCJkYiIsImZpcmVzdG9yZSIsImF1dGgiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHO0FBQ1hDLFFBQU0sRUFBRSx5Q0FERztBQUVYQyxZQUFVLEVBQUUsc0NBRkQ7QUFHWEMsYUFBVyxFQUFFLDZDQUhGO0FBSVhDLFdBQVMsRUFBRSxzQkFKQTtBQUtYQyxlQUFhLEVBQUUsa0NBTEo7QUFNWEMsbUJBQWlCLEVBQUUsY0FOUjtBQU9YQyxPQUFLLEVBQUU7QUFQSSxDQUFmOztBQVdBLElBQUksQ0FBQ0MsK0NBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN2QkYsaURBQVEsQ0FBQ0csYUFBVCxDQUF1QlgsTUFBdkI7QUFDSDs7QUFFRCxNQUFNWSxXQUFXLEdBQUdKLCtDQUFRLENBQUNLLEdBQVQsRUFBcEI7QUFDQSxNQUFNQyxFQUFFLEdBQUdGLFdBQVcsQ0FBQ0csU0FBWixFQUFYO0FBQ0EsTUFBTUMsSUFBSSxHQUFHUiwrQ0FBUSxDQUFDUSxJQUFULEVBQWI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSVQsK0NBQVEsQ0FBQ1EsSUFBVCxDQUFjRSxrQkFBbEIsRUFBakI7QUFFQTtBQUNlSixpRUFBZiIsImZpbGUiOiIuL3NyYy9maXJlYmFzZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUE1UzN3VUpHRlk4RDd0Rkk4NWVJWlN4c1BqWXdCMllLTVwiLFxuICAgIGF1dGhEb21haW46IFwicG9ydGZvbGlvLXRlbXAtZmFhNDEuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9wb3J0Zm9saW8tdGVtcC1mYWE0MS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJwb3J0Zm9saW8tdGVtcC1mYWE0MVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicG9ydGZvbGlvLXRlbXAtZmFhNDEuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2OTY5OTU5OTA2NzdcIixcbiAgICBhcHBJZDogXCIxOjY5Njk5NTk5MDY3Nzp3ZWI6OThjYjNmNDZiY2M4MDVmNTAwMWY5Y1wiXG59O1xuXG5cbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59XG5cbmNvbnN0IGZpcmViYXNlQXBwID0gZmlyZWJhc2UuYXBwKCk7XG5jb25zdCBkYiA9IGZpcmViYXNlQXBwLmZpcmVzdG9yZSgpO1xuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5cbmV4cG9ydCB7IGF1dGgsIHByb3ZpZGVyIH07IFxuZXhwb3J0IGRlZmF1bHQgZGI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/firebase.tsx\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/icons/AccessTime":
/*!************************************************!*\
  !*** external "@material-ui/icons/AccessTime" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AccessTime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjZXNzVGltZVwiP2Q3MzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0FjY2Vzc1RpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjZXNzVGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/AccessTime\n");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Add\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI/M2I5NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Add\n");

/***/ }),

/***/ "@material-ui/icons/Create":
/*!********************************************!*\
  !*** external "@material-ui/icons/Create" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Create\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCI/ODlhNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Create\n");

/***/ }),

/***/ "@material-ui/icons/Drafts":
/*!********************************************!*\
  !*** external "@material-ui/icons/Drafts" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Drafts\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRHJhZnRzXCI/MGU5YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvRHJhZnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Drafts\n");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ExpandMore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiPzA3ZDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/ExpandMore\n");

/***/ }),

/***/ "@material-ui/icons/FiberManualRecord":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/FiberManualRecord" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/FiberManualRecord\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmliZXJNYW51YWxSZWNvcmRcIj84N2RjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9GaWJlck1hbnVhbFJlY29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GaWJlck1hbnVhbFJlY29yZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/FiberManualRecord\n");

/***/ }),

/***/ "@material-ui/icons/HelpOutline":
/*!*************************************************!*\
  !*** external "@material-ui/icons/HelpOutline" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/HelpOutline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscE91dGxpbmVcIj8xODE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/HelpOutline\n");

/***/ }),

/***/ "@material-ui/icons/Inbox":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Inbox" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Inbox\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5ib3hcIj9kZWY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9JbmJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbmJveFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Inbox\n");

/***/ }),

/***/ "@material-ui/icons/InsertComment":
/*!***************************************************!*\
  !*** external "@material-ui/icons/InsertComment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/InsertComment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zZXJ0Q29tbWVudFwiP2IwNGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0luc2VydENvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zZXJ0Q29tbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/InsertComment\n");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Search\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI/N2JkZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Search\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });