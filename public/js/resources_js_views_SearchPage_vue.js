"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_SearchPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Footer.vue */ "./resources/js/components/Footer.vue");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SearchPage",
  components: {
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      defaultData: {
        accountType: '',
        location: '',
        gender: '',
        age: '',
        numberFollowers: '',
        numberPosts: '',
        lastPost: ''
      },
      notSelectedCategories: ['ccc', 'ddd', 'eeee', 'fff'],
      selectedCategories: ['aaa', 'bbb'],
      numberFollowers: false,
      transitionPlatform: false,
      transitionCategory: false,
      options: ["foo", "bar", "baz", "test test"]
    };
  },
  methods: {
    selectedCategory: function selectedCategory(value) {
      var index = this.notSelectedCategories.indexOf(value);
      if (index !== -1) {
        this.notSelectedCategories.splice(index, 1);
        this.selectedCategories.push(value);
        this.selectedCategories.sort();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vs__dropdown-toggle[data-v-4c663994] {\n  background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%) !important;\n  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7) !important;\n  border-radius: 20px !important;\n  padding: 0 12px !important;\n  height: 56px !important;\n}\n.vs__dropdown-toggle .vs__selected[data-v-4c663994] {\n  font-family: \"Rubik\", sans-serif !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-size: 24px !important;\n  line-height: 28px !important;\n  letter-spacing: 0.02em !important;\n  color: #595656 !important;\n}\n.vs--single.vs--loading .vs__selected[data-v-4c663994], .vs--single.vs--open .vs__selected[data-v-4c663994] {\n  opacity: 1 !important;\n  position: relative !important;\n}\n.vs__clear[data-v-4c663994] {\n  display: none !important;\n}\n.vs__dropdown-menu[data-v-4c663994] {\n  top: 87px !important;\n  padding: 32px 22px !important;\n  border-radius: 25px !important;\n}\n.vs__dropdown-option--highlight[data-v-4c663994] {\n  background: #FEFDFF !important;\n}\n.vs__dropdown-menu li[data-v-4c663994] {\n  padding: 12px 0 !important;\n  text-align: center !important;\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.vs--open .vs__dropdown-toggle[data-v-4c663994] {\n  border: 0 !important;\n}\n.vs__dropdown-toggle[data-v-4c663994] {\n  border: 0 !important;\n}\n.vs__dropdown-menu li[data-v-4c663994]:hover {\n  background: #E9EDF0 !important;\n  border-radius: 10px !important;\n  color: #000000 !important;\n}\n.vs__dropdown-menu li.active[data-v-4c663994] {\n  background: red !important;\n}\n.search-page-content[data-v-4c663994] {\n  background: #E9EDF0;\n}\n.search-page-content .search-content[data-v-4c663994] {\n  margin-top: 48px;\n  display: flex;\n  justify-content: space-between;\n}\n.search-page-content .search-content button[data-v-4c663994] {\n  border: 2px solid #FCFCFD;\n  background: #EAEEF1;\n  filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));\n  border-radius: 20px;\n  height: 60px;\n  padding: 0 40px;\n  font-family: arialAum;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  color: #595656;\n  cursor: pointer;\n}\n.search-page-content .search-content input[data-v-4c663994] {\n  width: 100%;\n  margin-right: 100px;\n  background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);\n  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);\n  border-radius: 40px;\n  border: 0;\n  height: 60px;\n  padding: 0 50px;\n  outline: 0;\n  font-family: arialAum;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n}\n.search-page-content .search-content input[data-v-4c663994]::-moz-placeholder {\n  color: #8B8989;\n}\n.search-page-content .search-content input[data-v-4c663994]::placeholder {\n  color: #8B8989;\n}\n.search-page-content .filter-vars[data-v-4c663994] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 15px -10px;\n}\n.search-page-content .filter-vars > div[data-v-4c663994] {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);\n  border-radius: 40px;\n  font-family: arialAum;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  color: #686868;\n  padding: 15px 30px;\n  margin: 10px;\n}\n.search-page-content .filter-vars > div img[data-v-4c663994] {\n  margin-left: 30px;\n  cursor: pointer;\n}\n.search-page-content .input-filter-content[data-v-4c663994] {\n  margin-bottom: 136px;\n}\n.search-page-content .input-filter-content > .title[data-v-4c663994] {\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  color: #595656;\n  margin-bottom: 25px;\n  margin-top: 90px;\n}\n.search-page-content .input-filter-content .items .fields[data-v-4c663994] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: -15px;\n}\n.search-page-content .input-filter-content .items .fields > div[data-v-4c663994] {\n  margin: 30px 12px;\n  width: calc(25% - 25px);\n  position: relative;\n}\n.search-page-content .input-filter-content .items .fields > div p[data-v-4c663994] {\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  color: #686868;\n  margin-bottom: 10px;\n}\n.search-page-content .input-filter-content .items .fields > div > input[data-v-4c663994] {\n  width: 100%;\n  background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);\n  border-radius: 20px;\n  border: 0;\n  height: 56px;\n  padding: 0 29px;\n  outline: 0;\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn[data-v-4c663994] {\n  width: 100%;\n  height: 56px;\n  position: relative;\n  background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);\n  border-radius: 20px;\n  border: 0;\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn img[data-v-4c663994] {\n  position: absolute;\n  right: 20px;\n  transition: 0.25s ease;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn img.active[data-v-4c663994] {\n  transform: rotate(180deg);\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select[data-v-4c663994] {\n  width: 100%;\n  position: absolute;\n  top: 119px;\n  background: #FEFDFF;\n  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n  border-radius: 25px;\n  padding: 20px 10px;\n  z-index: 99;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content[data-v-4c663994] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n  border-radius: 25px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content span[data-v-4c663994] {\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  color: #595656;\n  margin: 0 4px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content > .search-input[data-v-4c663994] {\n  width: 100%;\n  height: 52px;\n  padding: 0 35px;\n  border: 2px solid #E9ECF2;\n  border-radius: 10px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  color: #595656;\n  background: #ffffff;\n  outline: 0;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count[data-v-4c663994] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count > div[data-v-4c663994] {\n  width: calc(50% - 10px);\n  padding: 12px 0;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 10px;\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count > div.active[data-v-4c663994] {\n  background: #E9EDF0;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .search-category-content[data-v-4c663994] {\n  margin-bottom: 22px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .search-category-content input[data-v-4c663994] {\n  width: 100%;\n  height: 48px;\n  border: 2px solid #E9ECF2;\n  border-radius: 10px;\n  outline: 0;\n  background: #FFFFFF;\n  padding: 0 22px;\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content[data-v-4c663994] {\n  padding-bottom: 20px;\n  margin-bottom: 10px;\n  border-bottom: 0.5px solid #5F5C5C;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content p[data-v-4c663994] {\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.02em;\n  color: #9C99EF;\n  padding-left: 22px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content > div[data-v-4c663994] {\n  margin-bottom: 5px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content .checkbox-container[data-v-4c663994] {\n  background: linear-gradient(134.17deg, #9D99EE 4.98%, #BBA7E6 94.88%);\n  box-shadow: -12px -2px 20px rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content .checkbox-container span[data-v-4c663994] {\n  color: #ffffff;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .category-list[data-v-4c663994] {\n  height: 325px;\n  overflow-y: auto;\n  padding-bottom: 30px;\n  border-bottom: 0.5px solid #5F5C5C;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .cancel[data-v-4c663994] {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .cancel span[data-v-4c663994] {\n  cursor: pointer;\n}\n.search-page-content .search-result > .title[data-v-4c663994] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.search-page-content .search-result > .title div[data-v-4c663994]:first-child {\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 43px;\n  letter-spacing: 0.02em;\n  background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n}\n.search-page-content .search-result > .title div[data-v-4c663994]:last-child {\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 21px;\n  letter-spacing: 0.02em;\n  color: #686868;\n}\n.search-page-content .search-result > .search-result-header[data-v-4c663994] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: space-between;\n}\n.search-page-content .search-result > .search-result-header > div[data-v-4c663994] {\n  text-align: center;\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 19px;\n  line-height: 23px;\n  letter-spacing: 0.02em;\n  color: #000000;\n  display: flex;\n  flex-direction: column;\n}\n.search-page-content .search-result > .search-result-header > div[data-v-4c663994]:nth-child(1) {\n  width: 33%;\n}\n.search-page-content .search-result > .search-result-header > div[data-v-4c663994]:nth-child(2) {\n  width: 15%;\n}\n.search-page-content .search-result > .search-result-header > div[data-v-4c663994]:nth-child(3) {\n  width: 15%;\n}\n.search-page-content .search-result > .search-result-header > div[data-v-4c663994]:nth-child(4) {\n  width: 15%;\n}\n.search-page-content .search-result > .search-result-header > div[data-v-4c663994]:nth-child(5) {\n  width: 15%;\n}\n.search-page-content .search-result > .search-result-header > div[data-v-4c663994]:nth-child(6) {\n  width: 20%;\n}\n.search-page-content .search-result > .items-mobile[data-v-4c663994] {\n  display: none;\n}\n.search-page-content .search-result > .items[data-v-4c663994] {\n  margin-top: 85px;\n}\n.search-page-content .search-result > .items .item[data-v-4c663994] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.search-page-content .search-result > .items .item[data-v-4c663994]:not(:last-child) {\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n  border-bottom: 1.05182px solid #88898A;\n}\n.search-page-content .search-result > .items .item > div[data-v-4c663994]:nth-child(1) {\n  width: 30%;\n}\n.search-page-content .search-result > .items .item > div[data-v-4c663994]:nth-child(2) {\n  width: 55%;\n  margin: 0 80px;\n}\n.search-page-content .search-result > .items .item > div[data-v-4c663994]:nth-child(3) {\n  width: 15%;\n}\n.search-page-content .search-result > .items .item .left-section[data-v-4c663994] {\n  display: flex;\n  align-items: center;\n}\n.search-page-content .search-result > .items .item .left-section > img[data-v-4c663994] {\n  margin-right: 15px;\n}\n.search-page-content .search-result > .items .item .left-section .name[data-v-4c663994] {\n  display: flex;\n  align-items: center;\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 19px;\n  line-height: 23px;\n  letter-spacing: 0.02em;\n  color: #595656;\n  margin-bottom: 10px;\n}\n.search-page-content .search-result > .items .item .left-section .name img[data-v-4c663994] {\n  margin-left: 10px;\n}\n.search-page-content .search-result > .items .item .left-section .sub-name[data-v-4c663994] {\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  letter-spacing: 0.02em;\n  color: #686868;\n}\n.search-page-content .search-result > .items .item .center-section[data-v-4c663994] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.search-page-content .search-result > .items .item .center-section > div[data-v-4c663994] {\n  font-family: \"Rubik\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 19px;\n  line-height: 23px;\n  letter-spacing: 0.02em;\n  color: #686868;\n}\n.search-page-content .search-result > .items .item .right-section[data-v-4c663994] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.search-page-content .search-result > .items .item .right-section > div[data-v-4c663994] {\n  width: 22px;\n  height: 21px;\n  background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n  box-shadow: 0 0 5.25909px rgba(156, 161, 169, 0.69);\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.search-page-content .search-result > .items .item .right-section > div[data-v-4c663994]:not(:last-child) {\n  margin-right: 5px;\n}\n.search-page-content .search-result > .items .item .right-section > div:nth-child(1) img[data-v-4c663994] {\n  margin-top: 2px;\n}\n@media screen and (max-width: 1280px) {\n.container[data-v-4c663994] {\n    padding-left: 60px;\n    padding-right: 60px;\n}\n}\n@media screen and (max-width: 992px) {\n.search-result-header[data-v-4c663994] {\n    display: none !important;\n}\n}\n@media screen and (max-width: 768px) {\n.search-page-content[data-v-4c663994] {\n    background: #E9EDF0;\n}\n.search-page-content .search-content[data-v-4c663994] {\n    margin-top: 48px;\n    display: flex;\n    justify-content: space-between;\n}\n.search-page-content .search-content button[data-v-4c663994] {\n    border: 2px solid #FCFCFD;\n    background: #EAEEF1;\n    filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));\n    border-radius: 20px;\n    height: 60px;\n    padding: 0 40px;\n    font-family: arialAum;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 28px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    cursor: pointer;\n}\n.search-page-content .search-content input[data-v-4c663994] {\n    width: 100%;\n    margin-right: 30px;\n    background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);\n    border-radius: 40px;\n    border: 0;\n    height: 60px;\n    padding: 0 50px;\n    outline: 0;\n    font-family: arialAum;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.02em;\n}\n.search-page-content .search-content input[data-v-4c663994]::-moz-placeholder {\n    color: #8B8989;\n}\n.search-page-content .search-content input[data-v-4c663994]::placeholder {\n    color: #8B8989;\n}\n.search-page-content .filter-vars[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: 15px -10px;\n}\n.search-page-content .filter-vars > div[data-v-4c663994] {\n    display: flex;\n    align-items: center;\n    background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);\n    border-radius: 40px;\n    font-family: arialAum;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    padding: 15px 30px;\n    margin: 10px;\n}\n.search-page-content .filter-vars > div img[data-v-4c663994] {\n    margin-left: 30px;\n    cursor: pointer;\n}\n.search-page-content .input-filter-content[data-v-4c663994] {\n    margin-bottom: 136px;\n}\n.search-page-content .input-filter-content > .title[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    margin-bottom: 25px;\n    margin-top: 90px;\n}\n.search-page-content .input-filter-content .items .fields[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: -15px;\n}\n.search-page-content .input-filter-content .items .fields > div[data-v-4c663994] {\n    margin: 30px 12px;\n    width: calc(33.3333333333% - 25px);\n    position: relative;\n}\n.search-page-content .input-filter-content .items .fields > div p[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    margin-bottom: 10px;\n}\n.search-page-content .input-filter-content .items .fields > div > input[data-v-4c663994] {\n    width: 100%;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);\n    border-radius: 20px;\n    border: 0;\n    height: 56px;\n    padding: 0 29px;\n    outline: 0;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 28px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn[data-v-4c663994] {\n    width: 100%;\n    height: 56px;\n    position: relative;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);\n    border-radius: 20px;\n    border: 0;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn img[data-v-4c663994] {\n    position: absolute;\n    right: 20px;\n    transition: 0.25s ease;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn img.active[data-v-4c663994] {\n    transform: rotate(180deg);\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select[data-v-4c663994] {\n    width: 100%;\n    position: absolute;\n    top: 119px;\n    background: #FEFDFF;\n    box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n    border-radius: 25px;\n    padding: 20px 10px;\n    z-index: 99;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content[data-v-4c663994] {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n    border-radius: 25px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content span[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    margin: 0 4px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content > .search-input[data-v-4c663994] {\n    width: 100%;\n    height: 52px;\n    padding: 0 35px;\n    border: 2px solid #E9ECF2;\n    border-radius: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    background: #ffffff;\n    outline: 0;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count > div[data-v-4c663994] {\n    width: calc(50% - 10px);\n    padding: 12px 0;\n    cursor: pointer;\n    text-align: center;\n    border-radius: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 22px;\n    letter-spacing: 0.02em;\n    color: #000000;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count > div.active[data-v-4c663994] {\n    background: #E9EDF0;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .search-category-content[data-v-4c663994] {\n    margin-bottom: 22px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .search-category-content input[data-v-4c663994] {\n    width: 100%;\n    height: 48px;\n    border: 2px solid #E9ECF2;\n    border-radius: 10px;\n    outline: 0;\n    background: #FFFFFF;\n    padding: 0 22px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content[data-v-4c663994] {\n    padding-bottom: 20px;\n    margin-bottom: 10px;\n    border-bottom: 0.5px solid #5F5C5C;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content p[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.02em;\n    color: #9C99EF;\n    padding-left: 22px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content > div[data-v-4c663994] {\n    margin-bottom: 5px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content .checkbox-container[data-v-4c663994] {\n    background: linear-gradient(134.17deg, #9D99EE 4.98%, #BBA7E6 94.88%);\n    box-shadow: -12px -2px 20px rgba(255, 255, 255, 0.8);\n    border-radius: 10px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content .checkbox-container span[data-v-4c663994] {\n    color: #ffffff;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .category-list[data-v-4c663994] {\n    height: 325px;\n    overflow-y: auto;\n    padding-bottom: 30px;\n    border-bottom: 0.5px solid #5F5C5C;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .cancel[data-v-4c663994] {\n    display: flex;\n    justify-content: center;\n    margin-top: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .cancel span[data-v-4c663994] {\n    cursor: pointer;\n}\n.search-page-content .search-result > .title[data-v-4c663994] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.search-page-content .search-result > .title div[data-v-4c663994]:first-child {\n    font-family: \"Rubik\", sans-serif;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 43px;\n    letter-spacing: 0.02em;\n    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n}\n.search-page-content .search-result > .title div[data-v-4c663994]:last-child {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #686868;\n}\n.search-page-content .search-result > .search-result-header[data-v-4c663994] {\n    display: none;\n}\n.search-page-content .search-result > .items[data-v-4c663994] {\n    display: none;\n}\n.search-page-content .search-result > .items-mobile[data-v-4c663994] {\n    display: block;\n    margin-top: 35px;\n}\n.search-page-content .search-result > .items-mobile .item[data-v-4c663994] {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-bottom: 50px;\n    padding-bottom: 50px;\n}\n.search-page-content .search-result > .items-mobile .item[data-v-4c663994]:not(:last-child) {\n    border-bottom: 0.912564px solid #88898A;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(1) {\n    width: 60%;\n    display: flex;\n    align-items: center;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) > img[data-v-4c663994] {\n    margin-right: 32px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .name[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16.7923px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .name > img[data-v-4c663994] {\n    margin-left: 15px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .sub-name[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14.9265px;\n    line-height: 18px;\n    letter-spacing: 0.02em;\n    color: #686868;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(2) {\n    width: 40%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(2) > div[data-v-4c663994] {\n    width: 22px;\n    height: 21px;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: 0 0 5.25909px rgba(156, 161, 169, 0.69);\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(2) > div[data-v-4c663994]:not(:last-child) {\n    margin-right: 5px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(2) > div:nth-child(1) img[data-v-4c663994] {\n    margin-top: 2px;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(3) {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 10px;\n    padding-left: 113px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16.7923px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    display: flex;\n    align-items: center;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div img[data-v-4c663994] {\n    margin-right: 10px;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(4) {\n    display: none;\n}\n}\n@media screen and (max-width: 580px) {\n.search-page-content[data-v-4c663994] {\n    background: #E9EDF0;\n}\n.search-page-content .search-content[data-v-4c663994] {\n    margin-top: 48px;\n    display: flex;\n    justify-content: space-between;\n}\n.search-page-content .search-content button[data-v-4c663994] {\n    border: 2px solid #FCFCFD;\n    background: #EAEEF1;\n    filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));\n    border-radius: 20px;\n    height: 60px;\n    padding: 0 25px;\n    font-family: arialAum;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 28px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    cursor: pointer;\n}\n.search-page-content .search-content input[data-v-4c663994] {\n    width: 100%;\n    margin-right: 10px;\n    background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);\n    border-radius: 40px;\n    border: 0;\n    height: 60px;\n    padding: 0 20px;\n    outline: 0;\n    font-family: arialAum;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16.5804px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #8B8989;\n}\n.search-page-content .search-content input[data-v-4c663994]::-moz-placeholder {\n    color: #8B8989;\n}\n.search-page-content .search-content input[data-v-4c663994]::placeholder {\n    color: #8B8989;\n}\n.search-page-content .filter-vars[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: 15px -10px;\n}\n.search-page-content .filter-vars > div[data-v-4c663994] {\n    display: flex;\n    align-items: center;\n    background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);\n    border-radius: 32px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14.7382px;\n    line-height: 17px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    padding: 15px 13px;\n    margin: 10px;\n}\n.search-page-content .filter-vars > div img[data-v-4c663994] {\n    margin-left: 30px;\n    cursor: pointer;\n}\n.search-page-content .input-filter-content[data-v-4c663994] {\n    margin-bottom: 136px;\n}\n.search-page-content .input-filter-content > .title[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 12.8899px;\n    line-height: 15px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    margin-bottom: 25px;\n    margin-top: 90px;\n}\n.search-page-content .input-filter-content .items .fields[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: -15px;\n}\n.search-page-content .input-filter-content .items .fields > div[data-v-4c663994] {\n    margin: 20px 12px;\n    width: calc(50% - 25px);\n    position: relative;\n}\n.search-page-content .input-filter-content .items .fields > div p[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    margin-bottom: 10px;\n}\n.search-page-content .input-filter-content .items .fields > div > input[data-v-4c663994] {\n    width: 100%;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);\n    border-radius: 20px;\n    border: 0;\n    height: 56px;\n    padding: 0 16px;\n    outline: 0;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 19px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn[data-v-4c663994] {\n    width: 100%;\n    height: 56px;\n    position: relative;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);\n    border-radius: 20px;\n    border: 0;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn img[data-v-4c663994] {\n    position: absolute;\n    right: 20px;\n    transition: 0.25s ease;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn img.active[data-v-4c663994] {\n    transform: rotate(180deg);\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select[data-v-4c663994] {\n    width: 100%;\n    position: absolute;\n    top: 119px;\n    background: #FEFDFF;\n    box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n    border-radius: 25px;\n    padding: 20px 10px;\n    z-index: 99;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content[data-v-4c663994] {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n    border-radius: 25px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content span[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    margin: 0 4px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content > .search-input[data-v-4c663994] {\n    width: 100%;\n    height: 52px;\n    padding: 0 35px;\n    border: 2px solid #E9ECF2;\n    border-radius: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    background: #ffffff;\n    outline: 0;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count > div[data-v-4c663994] {\n    width: calc(50% - 10px);\n    padding: 12px 0;\n    cursor: pointer;\n    text-align: center;\n    border-radius: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 22px;\n    letter-spacing: 0.02em;\n    color: #000000;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count > div.active[data-v-4c663994] {\n    background: #E9EDF0;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .search-category-content[data-v-4c663994] {\n    margin-bottom: 22px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .search-category-content input[data-v-4c663994] {\n    width: 100%;\n    height: 48px;\n    border: 2px solid #E9ECF2;\n    border-radius: 10px;\n    outline: 0;\n    background: #FFFFFF;\n    padding: 0 22px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content[data-v-4c663994] {\n    padding-bottom: 20px;\n    margin-bottom: 10px;\n    border-bottom: 0.5px solid #5F5C5C;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content p[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.02em;\n    color: #9C99EF;\n    padding-left: 22px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content > div[data-v-4c663994] {\n    margin-bottom: 5px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content .checkbox-container[data-v-4c663994] {\n    background: linear-gradient(134.17deg, #9D99EE 4.98%, #BBA7E6 94.88%);\n    box-shadow: -12px -2px 20px rgba(255, 255, 255, 0.8);\n    border-radius: 10px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content .checkbox-container span[data-v-4c663994] {\n    color: #ffffff;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .category-list[data-v-4c663994] {\n    height: 325px;\n    overflow-y: auto;\n    padding-bottom: 30px;\n    border-bottom: 0.5px solid #5F5C5C;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .cancel[data-v-4c663994] {\n    display: flex;\n    justify-content: center;\n    margin-top: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .cancel span[data-v-4c663994] {\n    cursor: pointer;\n}\n.search-page-content .search-result > .title[data-v-4c663994] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.search-page-content .search-result > .title div[data-v-4c663994]:first-child {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 28px;\n    letter-spacing: 0.02em;\n    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n}\n.search-page-content .search-result > .title div[data-v-4c663994]:last-child {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.02em;\n    color: #686868;\n}\n.search-page-content .search-result > .search-result-header[data-v-4c663994] {\n    display: none;\n}\n.search-page-content .search-result > .items[data-v-4c663994] {\n    display: none;\n}\n.search-page-content .search-result > .items-mobile[data-v-4c663994] {\n    display: block;\n    margin-top: 35px;\n}\n.search-page-content .search-result > .items-mobile .item[data-v-4c663994] {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 50px;\n    padding-bottom: 50px;\n}\n.search-page-content .search-result > .items-mobile .item[data-v-4c663994]:not(:last-child) {\n    border-bottom: 0.912564px solid #88898A;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(1) {\n    display: flex;\n    align-items: center;\n    width: 55%;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) > img[data-v-4c663994] {\n    margin-right: 20px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .name[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16.7923px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .name > img[data-v-4c663994] {\n    margin-left: 15px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .sub-name[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14.9265px;\n    line-height: 18px;\n    letter-spacing: 0.02em;\n    color: #686868;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(2) {\n    width: 40%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(2) > div[data-v-4c663994] {\n    width: 22px;\n    height: 21px;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: 0 0 5.25909px rgba(156, 161, 169, 0.69);\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(2) > div[data-v-4c663994]:not(:last-child) {\n    margin-right: 5px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(2) > div:nth-child(1) img[data-v-4c663994] {\n    margin-top: 2px;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(3) {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-top: 10px;\n    padding-left: 100px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div[data-v-4c663994] {\n    width: 50%;\n    display: flex;\n    flex-wrap: wrap;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16.7923px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    align-items: center;\n    margin-bottom: 20px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div[data-v-4c663994]:nth-child(2) {\n    padding-left: 30px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div[data-v-4c663994]:nth-child(4) {\n    padding-left: 30px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div img[data-v-4c663994] {\n    margin-right: 10px;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(4) {\n    display: none;\n}\n}\n@media screen and (max-width: 500px) {\n.container[data-v-4c663994] {\n    padding-left: 45px;\n    padding-right: 45px;\n}\n.search-page-content[data-v-4c663994] {\n    background: #E9EDF0;\n}\n.search-page-content .search-content[data-v-4c663994] {\n    margin-top: 48px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.search-page-content .search-content button[data-v-4c663994] {\n    width: 100px;\n    border: 2px solid #FCFCFD;\n    background: #EAEEF1;\n    filter: drop-shadow(-12px -12px 20px rgba(255, 255, 255, 0.8)) drop-shadow(10px 10px 20px rgba(166, 180, 200, 0.7));\n    border-radius: 20px;\n    height: 43px;\n    padding: 0;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    cursor: pointer;\n}\n.search-page-content .search-content input[data-v-4c663994] {\n    width: 100%;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(166, 180, 200, 0.75);\n    border-radius: 40px;\n    border: 0;\n    height: 53px;\n    padding: 0 20px;\n    outline: 0;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.02em;\n    color: #8B8989;\n}\n.search-page-content .search-content input[data-v-4c663994]::-moz-placeholder {\n    color: #8B8989;\n}\n.search-page-content .search-content input[data-v-4c663994]::placeholder {\n    color: #8B8989;\n}\n.search-page-content .filter-vars[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: 15px -10px;\n}\n.search-page-content .filter-vars > div[data-v-4c663994] {\n    display: flex;\n    align-items: center;\n    background: linear-gradient(134.17deg, #EEF1F5 4.98%, #E6E9EF 94.88%);\n    border-radius: 32px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12.549px;\n    line-height: 15px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    padding: 10px 10px;\n    margin: 10px;\n}\n.search-page-content .filter-vars > div img[data-v-4c663994] {\n    margin-left: 30px;\n    cursor: pointer;\n}\n.search-page-content .input-filter-content[data-v-4c663994] {\n    margin-bottom: 136px;\n}\n.search-page-content .input-filter-content > .title[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 12.8899px;\n    line-height: 15px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    margin-bottom: 25px;\n    margin-top: 90px;\n}\n.search-page-content .input-filter-content .items .fields[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    margin: -15px;\n}\n.search-page-content .input-filter-content .items .fields > div[data-v-4c663994] {\n    margin: 15px 12px;\n    width: 100%;\n    position: relative;\n}\n.search-page-content .input-filter-content .items .fields > div p[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    margin-bottom: 10px;\n}\n.search-page-content .input-filter-content .items .fields > div > input[data-v-4c663994] {\n    width: 100%;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);\n    border-radius: 20px;\n    border: 0;\n    height: 56px;\n    padding: 0 16px;\n    outline: 0;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn[data-v-4c663994] {\n    width: 100%;\n    height: 56px;\n    position: relative;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);\n    border-radius: 20px;\n    border: 0;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn img[data-v-4c663994] {\n    position: absolute;\n    right: 20px;\n    transition: 0.25s ease;\n}\n.search-page-content .input-filter-content .items .fields > div .select-btn img.active[data-v-4c663994] {\n    transform: rotate(180deg);\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select[data-v-4c663994] {\n    width: 100%;\n    position: absolute;\n    top: 119px;\n    background: #FEFDFF;\n    box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n    border-radius: 25px;\n    padding: 20px 10px;\n    z-index: 99;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content[data-v-4c663994] {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n    border-radius: 25px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content span[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    margin: 0 4px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .transition-search-content > .search-input[data-v-4c663994] {\n    width: 100%;\n    height: 52px;\n    padding: 0 35px;\n    border: 2px solid #E9ECF2;\n    border-radius: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    background: #ffffff;\n    outline: 0;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count[data-v-4c663994] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count > div[data-v-4c663994] {\n    width: calc(50% - 10px);\n    padding: 12px 0;\n    cursor: pointer;\n    text-align: center;\n    border-radius: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 22px;\n    letter-spacing: 0.02em;\n    color: #000000;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .followers-count > div.active[data-v-4c663994] {\n    background: #E9EDF0;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .search-category-content[data-v-4c663994] {\n    margin-bottom: 22px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .search-category-content input[data-v-4c663994] {\n    width: 100%;\n    height: 48px;\n    border: 2px solid #E9ECF2;\n    border-radius: 10px;\n    outline: 0;\n    background: #FFFFFF;\n    padding: 0 22px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content[data-v-4c663994] {\n    padding-bottom: 20px;\n    margin-bottom: 10px;\n    border-bottom: 0.5px solid #5F5C5C;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content p[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.02em;\n    color: #9C99EF;\n    padding-left: 22px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content > div[data-v-4c663994] {\n    margin-bottom: 5px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content .checkbox-container[data-v-4c663994] {\n    background: linear-gradient(134.17deg, #9D99EE 4.98%, #BBA7E6 94.88%);\n    box-shadow: -12px -2px 20px rgba(255, 255, 255, 0.8);\n    border-radius: 10px;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .selected-category-content .checkbox-container span[data-v-4c663994] {\n    color: #ffffff;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .category-list[data-v-4c663994] {\n    height: 325px;\n    overflow-y: auto;\n    padding-bottom: 30px;\n    border-bottom: 0.5px solid #5F5C5C;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .cancel[data-v-4c663994] {\n    display: flex;\n    justify-content: center;\n    margin-top: 10px;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    letter-spacing: 0.02em;\n    color: #595656;\n}\n.search-page-content .input-filter-content .items .fields > div .transition-select .cancel span[data-v-4c663994] {\n    cursor: pointer;\n}\n.search-page-content .search-result > .title[data-v-4c663994] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n}\n.search-page-content .search-result > .title div[data-v-4c663994]:first-child {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 28px;\n    letter-spacing: 0.02em;\n    background: linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n    margin-bottom: 10px;\n}\n.search-page-content .search-result > .title div[data-v-4c663994]:last-child {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.02em;\n    color: #686868;\n}\n.search-page-content .search-result > .search-result-header[data-v-4c663994] {\n    display: none;\n}\n.search-page-content .search-result > .items[data-v-4c663994] {\n    display: none;\n}\n.search-page-content .search-result > .items-mobile[data-v-4c663994] {\n    display: block;\n    margin-top: 35px;\n}\n.search-page-content .search-result > .items-mobile .item[data-v-4c663994] {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 50px;\n    padding-bottom: 50px;\n}\n.search-page-content .search-result > .items-mobile .item[data-v-4c663994]:not(:last-child) {\n    border-bottom: 0.912564px solid #88898A;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(1) {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) > img[data-v-4c663994] {\n    margin-right: 20px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .name[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16.7923px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #595656;\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .name > img[data-v-4c663994] {\n    margin-left: 15px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(1) .sub-name[data-v-4c663994] {\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14.9265px;\n    line-height: 18px;\n    letter-spacing: 0.02em;\n    color: #686868;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(2) {\n    display: none;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(3) {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-top: 10px;\n    padding-left: 75px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div[data-v-4c663994] {\n    width: 50%;\n    display: flex;\n    flex-wrap: wrap;\n    font-family: \"Rubik\", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16.7923px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #686868;\n    align-items: center;\n    margin-bottom: 20px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div[data-v-4c663994]:nth-child(2) {\n    padding-left: 0;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div[data-v-4c663994]:nth-child(4) {\n    padding-left: 0;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(3) div img[data-v-4c663994] {\n    margin-right: 10px;\n}\n.search-page-content .search-result > .items-mobile .item > div[data-v-4c663994]:nth-child(4) {\n    display: flex;\n    padding-left: 75px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(4) > div[data-v-4c663994] {\n    width: 34px;\n    height: 33px;\n    background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);\n    box-shadow: 0 0 5.25909px rgba(156, 161, 169, 0.69);\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(4) > div[data-v-4c663994]:not(:last-child) {\n    margin-right: 8px;\n}\n.search-page-content .search-result > .items-mobile .item > div:nth-child(4) > div:first-child img[data-v-4c663994] {\n    margin-top: 2px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-select/dist/vue-select.css":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-select/dist/vue-select.css ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --vs-colors--lightest: rgba(60, 60, 60, 0.26);\n    --vs-colors--light: rgba(60, 60, 60, 0.5);\n    --vs-colors--dark: #333;\n    --vs-colors--darkest: rgba(0, 0, 0, 0.15);\n    --vs-search-input-color: inherit;\n    --vs-search-input-bg: #fff;\n    --vs-search-input-placeholder-color: inherit;\n    --vs-font-size: 1rem;\n    --vs-line-height: 1.4;\n    --vs-state-disabled-bg: #f8f8f8;\n    --vs-state-disabled-color: var(--vs-colors--light);\n    --vs-state-disabled-controls-color: var(--vs-colors--light);\n    --vs-state-disabled-cursor: not-allowed;\n    --vs-border-color: var(--vs-colors--lightest);\n    --vs-border-width: 1px;\n    --vs-border-style: solid;\n    --vs-border-radius: 4px;\n    --vs-actions-padding: 4px 6px 0 3px;\n    --vs-controls-color: var(--vs-colors--light);\n    --vs-controls-size: 1;\n    --vs-controls--deselect-text-shadow: 0 1px 0 #fff;\n    --vs-selected-bg: #f0f0f0;\n    --vs-selected-color: var(--vs-colors--dark);\n    --vs-selected-border-color: var(--vs-border-color);\n    --vs-selected-border-style: var(--vs-border-style);\n    --vs-selected-border-width: var(--vs-border-width);\n    --vs-dropdown-bg: #fff;\n    --vs-dropdown-color: inherit;\n    --vs-dropdown-z-index: 1000;\n    --vs-dropdown-min-width: 160px;\n    --vs-dropdown-max-height: 350px;\n    --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);\n    --vs-dropdown-option-bg: #000;\n    --vs-dropdown-option-color: var(--vs-dropdown-color);\n    --vs-dropdown-option-padding: 3px 20px;\n    --vs-dropdown-option--active-bg: #5897fb;\n    --vs-dropdown-option--active-color: #fff;\n    --vs-dropdown-option--deselect-bg: #fb5858;\n    --vs-dropdown-option--deselect-color: #fff;\n    --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n    --vs-transition-duration: 150ms\n}\n\n.v-select {\n    font-family: inherit;\n    position: relative\n}\n\n.v-select, .v-select * {\n    box-sizing: border-box\n}\n\n:root {\n    --vs-transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);\n    --vs-transition-duration: 0.15s\n}\n\n@keyframes vSelectSpinner {\n    0% {\n        transform: rotate(0deg)\n    }\n    to {\n        transform: rotate(1turn)\n    }\n}\n\n.vs__fade-enter-active, .vs__fade-leave-active {\n    pointer-events: none;\n    transition: opacity var(--vs-transition-duration) var(--vs-transition-timing-function)\n}\n\n.vs__fade-enter, .vs__fade-leave-to {\n    opacity: 0\n}\n\n:root {\n    --vs-disabled-bg: var(--vs-state-disabled-bg);\n    --vs-disabled-color: var(--vs-state-disabled-color);\n    --vs-disabled-cursor: var(--vs-state-disabled-cursor)\n}\n\n.vs--disabled .vs__clear, .vs--disabled .vs__dropdown-toggle, .vs--disabled .vs__open-indicator, .vs--disabled .vs__search, .vs--disabled .vs__selected {\n    background-color: var(--vs-disabled-bg);\n    cursor: var(--vs-disabled-cursor)\n}\n\n.v-select[dir=rtl] .vs__actions {\n    padding: 0 3px 0 6px\n}\n\n.v-select[dir=rtl] .vs__clear {\n    margin-left: 6px;\n    margin-right: 0\n}\n\n.v-select[dir=rtl] .vs__deselect {\n    margin-left: 0;\n    margin-right: 2px\n}\n\n.v-select[dir=rtl] .vs__dropdown-menu {\n    text-align: right\n}\n\n.vs__dropdown-toggle {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: var(--vs-search-input-bg);\n    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);\n    border-radius: var(--vs-border-radius);\n    display: flex;\n    padding: 0 0 4px;\n    white-space: normal\n}\n\n.vs__selected-options {\n    display: flex;\n    flex-basis: 100%;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    padding: 0 2px;\n    position: relative\n}\n\n.vs__actions {\n    align-items: center;\n    display: flex;\n    padding: var(--vs-actions-padding)\n}\n\n.vs--searchable .vs__dropdown-toggle {\n    cursor: text\n}\n\n.vs--unsearchable .vs__dropdown-toggle {\n    cursor: pointer\n}\n\n.vs--open .vs__dropdown-toggle {\n    border-bottom-color: transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0\n}\n\n.vs__open-indicator {\n    fill: var(--vs-controls-color);\n    transform: scale(var(--vs-controls-size));\n    transition: transform var(--vs-transition-duration) var(--vs-transition-timing-function);\n    transition-timing-function: var(--vs-transition-timing-function)\n}\n\n.vs--open .vs__open-indicator {\n    transform: rotate(180deg) scale(var(--vs-controls-size))\n}\n\n.vs--loading .vs__open-indicator {\n    opacity: 0\n}\n\n.vs__clear {\n    fill: var(--vs-controls-color);\n    background-color: transparent;\n    border: 0;\n    cursor: pointer;\n    margin-right: 8px;\n    padding: 0\n}\n\n.vs__dropdown-menu {\n    background: #FEFDFF;\n    box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25), -2px -2px 10px rgba(180, 175, 175, 0.25);\n    box-sizing: border-box;\n    display: block;\n    left: 0;\n    list-style: none;\n    margin: 0;\n    max-height: var(--vs-dropdown-max-height);\n    min-width: var(--vs-dropdown-min-width);\n    overflow-y: auto;\n    padding: 32px 22px;\n    position: absolute;\n    text-align: left;\n    width: 100%;\n    z-index: var(--vs-dropdown-z-index)\n}\n\n.vs__no-options {\n    text-align: center\n}\n\n.vs__dropdown-option {\n    clear: both;\n    color: var(--vs-dropdown-option-color);\n    cursor: pointer;\n    display: block;\n    line-height: 1.42857143;\n    padding: var(--vs-dropdown-option-padding);\n    white-space: nowrap\n}\n\n.vs__dropdown-option--highlight {\n    background: var(--vs-dropdown-option--active-bg);\n    color: var(--vs-dropdown-option--active-color)\n}\n\n.vs__dropdown-option--deselect {\n    background: var(--vs-dropdown-option--deselect-bg);\n    color: var(--vs-dropdown-option--deselect-color)\n}\n\n.vs__dropdown-option--disabled {\n    background: var(--vs-state-disabled-bg);\n    color: var(--vs-state-disabled-color);\n    cursor: var(--vs-state-disabled-cursor)\n}\n\n.vs__selected {\n    align-items: center;\n    background-color: var(--vs-selected-bg);\n    border: var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);\n    border-radius: var(--vs-border-radius);\n    color: var(--vs-selected-color);\n    display: flex;\n    line-height: var(--vs-line-height);\n    margin: 4px 2px 0;\n    padding: 0 .25em;\n    z-index: 0\n}\n\n.vs__deselect {\n    fill: var(--vs-controls-color);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: none;\n    border: 0;\n    cursor: pointer;\n    display: inline-flex;\n    margin-left: 4px;\n    padding: 0;\n    text-shadow: var(--vs-controls--deselect-text-shadow)\n}\n\n.vs--single .vs__selected {\n    background-color: transparent;\n    border-color: transparent\n}\n\n.vs--single.vs--loading .vs__selected, .vs--single.vs--open .vs__selected {\n    opacity: .4;\n    position: absolute\n}\n\n.vs--single.vs--searching .vs__selected {\n    display: none\n}\n\n.vs__search::-webkit-search-cancel-button {\n    display: none\n}\n\n.vs__search::-ms-clear, .vs__search::-webkit-search-decoration, .vs__search::-webkit-search-results-button, .vs__search::-webkit-search-results-decoration {\n    display: none\n}\n\n.vs__search, .vs__search:focus {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: none;\n    border: 1px solid transparent;\n    border-left: none;\n    box-shadow: none;\n    color: var(--vs-search-input-color);\n    flex-grow: 1;\n    font-size: var(--vs-font-size);\n    line-height: var(--vs-line-height);\n    margin: 4px 0 0;\n    max-width: 100%;\n    outline: none;\n    padding: 0 7px;\n    width: 0;\n    z-index: 1\n}\n\n.vs__search::-moz-placeholder {\n    color: var(--vs-search-input-placeholder-color)\n}\n\n.vs__search::placeholder {\n    color: var(--vs-search-input-placeholder-color)\n}\n\n.vs--unsearchable .vs__search {\n    opacity: 1\n}\n\n.vs--unsearchable:not(.vs--disabled) .vs__search {\n    cursor: pointer\n}\n\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n    opacity: .2\n}\n\n.vs__spinner {\n    align-self: center;\n    animation: vSelectSpinner 1.1s linear infinite;\n    border: .9em solid hsla(0, 0%, 39%, .1);\n    border-left-color: rgba(60, 60, 60, .45);\n    font-size: 5px;\n    opacity: 0;\n    overflow: hidden;\n    text-indent: -9999em;\n    transform: translateZ(0) scale(var(--vs-controls--spinner-size, var(--vs-controls-size)));\n    transition: opacity .1s\n}\n\n.vs__spinner, .vs__spinner:after {\n    border-radius: 50%;\n    height: 5em;\n    transform: scale(var(--vs-controls--spinner-size, var(--vs-controls-size)));\n    width: 5em\n}\n\n.vs--loading .vs__spinner {\n    opacity: 1\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_4c663994_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_4c663994_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_4c663994_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-select/dist/vue-select.css":
/*!*****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-select.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-select/dist/vue-select.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_select_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_select_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/SearchPage.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/SearchPage.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchPage_vue_vue_type_template_id_4c663994_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPage.vue?vue&type=template&id=4c663994&scoped=true& */ "./resources/js/views/SearchPage.vue?vue&type=template&id=4c663994&scoped=true&");
/* harmony import */ var _SearchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPage.vue?vue&type=script&lang=js& */ "./resources/js/views/SearchPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _SearchPage_vue_vue_type_style_index_0_id_4c663994_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss& */ "./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchPage_vue_vue_type_template_id_4c663994_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchPage_vue_vue_type_template_id_4c663994_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4c663994",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SearchPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/SearchPage.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/SearchPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_4c663994_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=style&index=0&id=4c663994&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/views/SearchPage.vue?vue&type=template&id=4c663994&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/SearchPage.vue?vue&type=template&id=4c663994&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_4c663994_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_4c663994_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_4c663994_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchPage.vue?vue&type=template&id=4c663994&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=template&id=4c663994&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=template&id=4c663994&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SearchPage.vue?vue&type=template&id=4c663994&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "search-page-content" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "filter-vars" }, [
            _vm.defaultData.accountType
              ? _c("div", [
                  _vm._v(_vm._s(_vm.defaultData.accountType) + " "),
                  _c("img", {
                    attrs: { src: "/images/icons/close-icon.png", alt: "" },
                    on: {
                      click: function ($event) {
                        _vm.defaultData.accountType = ""
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.defaultData.location
              ? _c("div", [
                  _vm._v(_vm._s(_vm.defaultData.location) + " "),
                  _c("img", {
                    attrs: { src: "/images/icons/close-icon.png", alt: "" },
                    on: {
                      click: function ($event) {
                        _vm.defaultData.location = ""
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.defaultData.gender
              ? _c("div", [
                  _vm._v(_vm._s(_vm.defaultData.gender) + " "),
                  _c("img", {
                    attrs: { src: "/images/icons/close-icon.png", alt: "" },
                    on: {
                      click: function ($event) {
                        _vm.defaultData.gender = ""
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.defaultData.Age
              ? _c("div", [
                  _vm._v(_vm._s(_vm.defaultData.Age) + " "),
                  _c("img", {
                    attrs: { src: "/images/icons/close-icon.png", alt: "" },
                    on: {
                      click: function ($event) {
                        _vm.defaultData.Age = ""
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.defaultData.numberFollowers
              ? _c("div", [
                  _vm._v(_vm._s(_vm.defaultData.numberFollowers) + " "),
                  _c("img", {
                    attrs: { src: "/images/icons/close-icon.png", alt: "" },
                    on: {
                      click: function ($event) {
                        _vm.defaultData.numberFollowers = ""
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.defaultData.numberPosts
              ? _c("div", [
                  _vm._v(_vm._s(_vm.defaultData.numberPosts) + " "),
                  _c("img", {
                    attrs: { src: "/images/icons/close-icon.png", alt: "" },
                    on: {
                      click: function ($event) {
                        _vm.defaultData.numberPosts = ""
                      },
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.defaultData.lastPost
              ? _c("div", [
                  _vm._v(_vm._s(_vm.defaultData.lastPost) + " "),
                  _c("img", {
                    attrs: { src: "/images/icons/close-icon.png", alt: "" },
                    on: {
                      click: function ($event) {
                        _vm.defaultData.lastPost = ""
                      },
                    },
                  }),
                ])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-filter-content" }, [
            _c("div", { staticClass: "title" }, [_vm._v("Search filters")]),
            _vm._v(" "),
            _c("div", { staticClass: "items" }, [
              _c("div", { staticClass: "fields" }, [
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Platform")]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "select-btn",
                        on: {
                          click: function ($event) {
                            _vm.transitionPlatform = !_vm.transitionPlatform
                          },
                        },
                      },
                      [
                        _c("img", {
                          class: { active: _vm.transitionPlatform },
                          attrs: { src: "/images/icons/dropdown.svg", alt: "" },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("transition", { attrs: { name: "slide" } }, [
                      _vm.transitionPlatform
                        ? _c("div", { staticClass: "transition-select" }, [
                            _c(
                              "div",
                              { staticClass: "search-category-content" },
                              [
                                _c("input", {
                                  staticClass: "search-input",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Choose category",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "selected-category-content" },
                              [
                                _c("p", [_vm._v("Selected:")]),
                                _vm._v(" "),
                                _vm._l(_vm.selectedCategories, function (item) {
                                  return _c("div", [
                                    _c(
                                      "label",
                                      { staticClass: "checkbox-container" },
                                      [
                                        _c("span", [_vm._v(_vm._s(item))]),
                                        _vm._v(" "),
                                        _c("input", {
                                          attrs: {
                                            type: "checkbox",
                                            checked: "",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass: "checkmark",
                                        }),
                                      ]
                                    ),
                                  ])
                                }),
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "category-list" },
                              _vm._l(
                                _vm.notSelectedCategories,
                                function (item) {
                                  return _c("div", { key: item }, [
                                    _c(
                                      "label",
                                      { staticClass: "checkbox-container" },
                                      [
                                        _c("span", [_vm._v(_vm._s(item))]),
                                        _vm._v(" "),
                                        _c("input", {
                                          attrs: { type: "checkbox" },
                                          on: {
                                            change: function ($event) {
                                              return _vm.selectedCategory(item)
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass: "checkmark",
                                        }),
                                      ]
                                    ),
                                  ])
                                }
                              ),
                              0
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "cancel" }, [
                              _c(
                                "span",
                                {
                                  on: {
                                    click: function ($event) {
                                      _vm.transitionPlatform = false
                                    },
                                  },
                                },
                                [_vm._v("Cancel")]
                              ),
                            ]),
                          ])
                        : _vm._e(),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Category")]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "select-btn",
                        on: {
                          click: function ($event) {
                            _vm.transitionCategory = !_vm.transitionCategory
                          },
                        },
                      },
                      [
                        _c("img", {
                          class: { active: _vm.transitionCategory },
                          attrs: { src: "/images/icons/dropdown.svg", alt: "" },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("transition", { attrs: { name: "slide" } }, [
                      _vm.transitionCategory
                        ? _c("div", { staticClass: "transition-select" }, [
                            _c(
                              "div",
                              { staticClass: "search-category-content" },
                              [
                                _c("input", {
                                  staticClass: "search-input",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Choose category",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "selected-category-content" },
                              [
                                _c("p", [_vm._v("Selected:")]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "label",
                                    { staticClass: "checkbox-container" },
                                    [
                                      _c("span", [_vm._v("Business")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "checkmark" }),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "label",
                                    { staticClass: "checkbox-container" },
                                    [
                                      _c("span", [_vm._v("Business")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        attrs: {
                                          type: "checkbox",
                                          checked: "",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "checkmark" }),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "category-list" }, [
                              _c("div", [
                                _c(
                                  "label",
                                  { staticClass: "checkbox-container" },
                                  [
                                    _c("span", [_vm._v("Business")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: { type: "checkbox" },
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "label",
                                  { staticClass: "checkbox-container" },
                                  [
                                    _c("span", [_vm._v("Business")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: { type: "checkbox" },
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "label",
                                  { staticClass: "checkbox-container" },
                                  [
                                    _c("span", [_vm._v("Business")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: { type: "checkbox" },
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "label",
                                  { staticClass: "checkbox-container" },
                                  [
                                    _c("span", [_vm._v("Business")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: { type: "checkbox" },
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "label",
                                  { staticClass: "checkbox-container" },
                                  [
                                    _c("span", [_vm._v("Business")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: { type: "checkbox" },
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "label",
                                  { staticClass: "checkbox-container" },
                                  [
                                    _c("span", [_vm._v("Business")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: { type: "checkbox" },
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" }),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "cancel" }, [
                              _c(
                                "span",
                                {
                                  on: {
                                    click: function ($event) {
                                      _vm.transitionCategory = false
                                    },
                                  },
                                },
                                [_vm._v("Cancel")]
                              ),
                            ]),
                          ])
                        : _vm._e(),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Account type")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.options },
                      model: {
                        value: _vm.defaultData.accountType,
                        callback: function ($$v) {
                          _vm.$set(_vm.defaultData, "accountType", $$v)
                        },
                        expression: "defaultData.accountType",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Location")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.options },
                      model: {
                        value: _vm.defaultData.location,
                        callback: function ($$v) {
                          _vm.$set(_vm.defaultData, "location", $$v)
                        },
                        expression: "defaultData.location",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Gender")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.options },
                      model: {
                        value: _vm.defaultData.gender,
                        callback: function ($$v) {
                          _vm.$set(_vm.defaultData, "gender", $$v)
                        },
                        expression: "defaultData.gender",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Age")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.options },
                      model: {
                        value: _vm.defaultData.age,
                        callback: function ($$v) {
                          _vm.$set(_vm.defaultData, "age", $$v)
                        },
                        expression: "defaultData.age",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Number of followers")]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "select-btn",
                        on: {
                          click: function ($event) {
                            _vm.numberFollowers = !_vm.numberFollowers
                          },
                        },
                      },
                      [
                        _c("img", {
                          class: { active: _vm.numberFollowers },
                          attrs: { src: "/images/icons/dropdown.svg", alt: "" },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("transition", { attrs: { name: "slide" } }, [
                      _vm.numberFollowers
                        ? _c("div", { staticClass: "transition-select" }, [
                            _c(
                              "div",
                              { staticClass: "transition-search-content" },
                              [
                                _c("input", {
                                  staticClass: "search-input",
                                  attrs: { type: "text" },
                                }),
                                _vm._v(" "),
                                _c("span", [_vm._v("-")]),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "search-input",
                                  attrs: { type: "text" },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "followers-count" }, [
                              _c("div", [_vm._v("1k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("1k")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "active" }, [
                                _vm._v("5k"),
                              ]),
                              _vm._v(" "),
                              _c("div", [_vm._v("5k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("10k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("10k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("20k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("20k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("100k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("100k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("500k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("500k")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("1M")]),
                              _vm._v(" "),
                              _c("div", [_vm._v("1M")]),
                            ]),
                          ])
                        : _vm._e(),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Number of posts")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.options },
                      model: {
                        value: _vm.defaultData.numberFollowers,
                        callback: function ($$v) {
                          _vm.$set(_vm.defaultData, "numberFollowers", $$v)
                        },
                        expression: "defaultData.numberFollowers",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("p", [_vm._v("Last post")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.options },
                      model: {
                        value: _vm.defaultData.numberPosts,
                        callback: function ($$v) {
                          _vm.$set(_vm.defaultData, "numberPosts", $$v)
                        },
                        expression: "defaultData.numberPosts",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(3),
        ]),
      ]),
      _vm._v(" "),
      _c("Footer"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-content" }, [
      _c("input", {
        attrs: {
          type: "text",
          placeholder: "Keywords: fashion, design, marketing",
        },
      }),
      _vm._v(" "),
      _c("button", [_vm._v("Search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Required keywords")]),
      _vm._v(" "),
      _c("input", { attrs: { type: "text" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Negative keywords")]),
      _vm._v(" "),
      _c("input", { attrs: { type: "text" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-result" }, [
      _c("div", { staticClass: "title" }, [
        _c("div", [_vm._v("Search result")]),
        _vm._v(" "),
        _c("div", [_vm._v("Found 125 accounts")]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "search-result-header" }, [
        _c("div", [
          _c("span", [_vm._v("Influencer")]),
          _vm._v(" "),
          _c("span", [_vm._v("account")]),
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("Influencer")]),
          _vm._v(" "),
          _c("span", [_vm._v("category")]),
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("Influencer")]),
          _vm._v(" "),
          _c("span", [_vm._v("followers")]),
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("Influencer")]),
          _vm._v(" "),
          _c("span", [_vm._v("posts")]),
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("Influencer")]),
          _vm._v(" "),
          _c("span", [_vm._v("location")]),
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("Influencer")]),
          _vm._v(" "),
          _c("span", [_vm._v("platform")]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "items" }, [
        _c("div", { staticClass: "item" }, [
          _c("div", { staticClass: "left-section" }, [
            _c("img", { attrs: { src: "/images/user.png", alt: "" } }),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "name" }, [
                _vm._v("Iveta Mukuchyan "),
                _c("img", {
                  attrs: { src: "/images/icons/done.png", alt: "" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "sub-name" }, [
                _vm._v("iveta.mukuchyan"),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "center-section" }, [
            _c("div", [_vm._v("Beauty")]),
            _vm._v(" "),
            _c("div", [_vm._v("281.4K")]),
            _vm._v(" "),
            _c("div", [_vm._v("19")]),
            _vm._v(" "),
            _c("div", [_vm._v("Armenia")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "right-section" }, [
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/facebook.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/Subtract.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/Vector.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/twitter.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/TikTok.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/telegram.png", alt: "" },
              }),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "items-mobile" }, [
        _c("div", { staticClass: "item" }, [
          _c("div", { staticClass: "left-section" }, [
            _c("img", { attrs: { src: "/images/user.png", alt: "" } }),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "name" }, [
                _vm._v("Iveta Mukuchyan "),
                _c("img", {
                  attrs: { src: "/images/icons/done.png", alt: "" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "sub-name" }, [
                _vm._v("iveta.mukuchyan"),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "right-section" }, [
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/facebook.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/Subtract.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/Vector.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/twitter.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/TikTok.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/telegram.png", alt: "" },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "center-section" }, [
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/Icon-color.png", alt: "" },
              }),
              _c("span", [_vm._v("Beauty")]),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/Icon-color2.png", alt: "" },
              }),
              _c("span", [_vm._v("Armenia")]),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/Icon-color3.png", alt: "" },
              }),
              _c("span", [_vm._v("281.4K")]),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/Icon-color5.png", alt: "" },
              }),
              _c("span", [_vm._v("19")]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon-section" }, [
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/fb-small.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: {
                  src: "/images/icons/small/Subtract-small.png",
                  alt: "",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/Vector-small.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: {
                  src: "/images/icons/small/twitter-small.png",
                  alt: "",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/tiktok-small.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: {
                  src: "/images/icons/small/telegram-small.png",
                  alt: "",
                },
              }),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item" }, [
          _c("div", { staticClass: "left-section" }, [
            _c("img", { attrs: { src: "/images/user.png", alt: "" } }),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "name" }, [
                _vm._v("Iveta Mukuchyan "),
                _c("img", {
                  attrs: { src: "/images/icons/done.png", alt: "" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "sub-name" }, [
                _vm._v("iveta.mukuchyan"),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "right-section" }, [
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/facebook.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/Subtract.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/Vector.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/twitter.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/TikTok.png", alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/small/telegram.png", alt: "" },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "center-section" }, [
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/Icon-color.png", alt: "" },
              }),
              _c("span", [_vm._v("Beauty")]),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/Icon-color2.png", alt: "" },
              }),
              _c("span", [_vm._v("Armenia")]),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/Icon-color3.png", alt: "" },
              }),
              _c("span", [_vm._v("281.4K")]),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("img", {
                attrs: { src: "/images/icons/Icon-color5.png", alt: "" },
              }),
              _c("span", [_vm._v("19")]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);