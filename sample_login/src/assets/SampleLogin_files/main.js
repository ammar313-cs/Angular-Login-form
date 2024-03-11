"use strict";
(self["webpackChunksample_login"] = self["webpackChunksample_login"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-screen/login-screen.component */ 4495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);

 // Import the LoginScreenComponent


const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_0__.LoginScreenComponent
} // Add the route for the LoginScreenComponent
];

class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'sample_login';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-screen/login-screen.component */ 4495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);

 // Import FormsModule here




class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule // Add FormsModule here
    ]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_2__.LoginScreenComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule // Add FormsModule here
    ]
  });
})();

/***/ }),

/***/ 4495:
/*!********************************************************!*\
  !*** ./src/app/login-screen/login-screen.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginScreenComponent: () => (/* binding */ LoginScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class LoginScreenComponent {
  constructor() {
    this.user = {
      companyName: '',
      email: '',
      password: '',
      phone: '',
      country: '',
      terms: false
    };
  }
  onSubmit() {
    console.log('Form submitted:', this.user);
    // Store user data in local storage as JSON
    localStorage.setItem('userData', JSON.stringify(this.user));
  }
  static #_ = this.ɵfac = function LoginScreenComponent_Factory(t) {
    return new (t || LoginScreenComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginScreenComponent,
    selectors: [["app-login-screen"]],
    decls: 50,
    vars: 6,
    consts: [[1, "signup-container"], [1, "signup-header"], ["src", "./assets/angular-logo-black-and-white-1.png", "alt", "Logo"], [1, "signup-form", 3, "ngSubmit"], [1, "form-floating", "mb-3"], ["type", "text", "id", "floatingCompanyName", "placeholder", "Company Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingCompanyName"], ["type", "email", "id", "floatingEmail", "placeholder", "name@example.com", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingEmail"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingPassword"], ["type", "tel", "id", "floatingPhone", "placeholder", "Phone", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingPhone"], ["id", "floatingCountry", "placeholder", "Country", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "pakistan"], ["value", "afghanistan"], ["value", "india"], ["for", "floatingCountry"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "terms", "name", "terms", "required", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "terms", 1, "form-check-label"], ["href", "#"], ["role", "button", 1, "button-28"], [1, "already-registered"]],
    template: function LoginScreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginScreenComponent_Template_form_ngSubmit_3_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginScreenComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.user.companyName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginScreenComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.user.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginScreenComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.user.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4)(14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginScreenComponent_Template_input_ngModelChange_14_listener($event) {
          return ctx.user.phone = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4)(17, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginScreenComponent_Template_select_ngModelChange_17_listener($event) {
          return ctx.user.country = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pakistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Afghanistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "UK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ireland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18)(34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginScreenComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.user.terms = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "I have read and agree to the:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " - Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " - Delivery & Refund Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Start using App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23)(46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.terms);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: [".signup-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 120vw;\n    height: 120vh;\n    background-color: #ffffff;\n}\n\n.signup-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 75px; \n\n    width: 300px; \n\n}\n  \n.signup-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 30px;\n}\n  \n\n  \n.signup-form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    padding: 50px;\n    border: 1px solid #000000;\n    border-radius: 4px;\n    \n}\n\n.signup-form[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin: 1rem 0; \n\n}\n\n  \n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 100px; \n\n}\n  \n.form-control[_ngcontent-%COMP%] {\n    padding: 15px;\n    border: 2px solid #0f0e0e;\n    border-radius: 50px;\n}\n  \n\n\n.form-floating[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 350px; \n\n    height: default;\n  }\n\n\n\n.mb-3.form-check[_ngcontent-%COMP%] {\n    \n\n    margin-bottom: 15px; \n\n  }\n\n  \n  \n  \n  \n  \n\n  .form-check-label[_ngcontent-%COMP%] {\n    color: #333; \n\n    font-family: Arial, sans-serif; \n\n    margin-right: 5px; \n\n  }\n  \n  \n\n  .form-check[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #ff0000; \n\n    text-decoration: none; \n\n  }\n  \n  \n\n  .form-check[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #000000; \n\n  }\n  \n\n\n\n\n\n\n.button-28[_ngcontent-%COMP%] {\n  appearance: none;\n  background-color: transparent;\n  border: 2px solid #1A1A1A;\n  border-radius: 15px;\n  box-sizing: border-box;\n  color: #3B3B3B;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: normal;\n  margin: 0;\n  min-height: 60px;\n  min-width: 0;\n  outline: none;\n  padding: 16px 24px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: 100%;\n  will-change: transform;\n}\n\n.button-28[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n}\n\n.button-28[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #1A1A1A;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  transform: translateY(-2px);\n}\n\n.button-28[_ngcontent-%COMP%]:active {\n  box-shadow: none;\n  transform: translateY(0);\n}\n\n\n\n.already-registered[_ngcontent-%COMP%] {\n    color: #333; \n\n    font-family: Arial, sans-serif; \n\n  }\n  \n  .already-registered[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 5px; \n\n  }\n  \n  .already-registered[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000000; \n\n    text-decoration: underline; \n\n    font-weight: bold; \n\n  }\n  \n  .already-registered[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #b30000; \n\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4tc2NyZWVuL2xvZ2luLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLGdDQUFnQztJQUM5QyxZQUFZLEVBQUUsK0JBQStCO0FBQ2pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksY0FBYyxFQUFFLHNDQUFzQztBQUMxRDs7O0FBR0E7SUFDSSxvQkFBb0IsRUFBRSwyQ0FBMkM7QUFDckU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7OztBQUlBO0lBQ0ksWUFBWSxFQUFFLCtCQUErQjtJQUM3QyxlQUFlO0VBQ2pCOztBQUVGLHlDQUF5QztBQUN6QztJQUNJLCtEQUErRDtJQUMvRCxtQkFBbUIsRUFBRSxxQkFBcUI7RUFDNUM7Ozs7OztFQU1BLGtCQUFrQjtFQUNsQjtJQUNFLFdBQVcsRUFBRSxnQ0FBZ0M7SUFDN0MsOEJBQThCLEVBQUUsaUNBQWlDO0lBQ2pFLGlCQUFpQixFQUFFLHdDQUF3QztFQUM3RDs7RUFFQSxpQkFBaUI7RUFDakI7SUFDRSxjQUFjLEVBQUUsZ0NBQWdDO0lBQ2hELHFCQUFxQixFQUFFLGdDQUFnQztFQUN6RDs7RUFFQSx1QkFBdUI7RUFDdkI7SUFDRSxjQUFjLEVBQUUsc0NBQXNDO0VBQ3hEOzs7Ozs7OztBQVFGO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrSkFBa0o7RUFDbEosZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1EQUFtRDtFQUNuRCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQ0FBMEM7RUFDMUMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7OztBQUlBO0lBQ0ksV0FBVyxFQUFFLGdDQUFnQztJQUM3Qyw4QkFBOEIsRUFBRSxpQ0FBaUM7RUFDbkU7O0VBRUE7SUFDRSxrQkFBa0IsRUFBRSwyQ0FBMkM7RUFDakU7O0VBRUE7SUFDRSxjQUFjLEVBQUUsZ0NBQWdDO0lBQ2hELDBCQUEwQixFQUFFLCtCQUErQjtJQUMzRCxpQkFBaUIsRUFBRSxtQ0FBbUM7RUFDeEQ7O0VBRUE7SUFDRSxjQUFjLEVBQUUsc0NBQXNDO0VBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMjB2dztcbiAgICBoZWlnaHQ6IDEyMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zaWdudXAtaGVhZGVyIGltZyB7XG4gICAgaGVpZ2h0OiA3NXB4OyAvKiBBZGp1c3QgdGhlIGhlaWdodCBhcyBuZWVkZWQgKi9cbiAgICB3aWR0aDogMzAwcHg7IC8qIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkICovXG59XG4gIFxuLnNpZ251cC1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuICBcblxuICBcbi5zaWdudXAtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIFxufVxuXG4uc2lnbnVwLWZvcm0gPiBkaXYge1xuICAgIG1hcmdpbjogMXJlbSAwOyAvKiBBZGQgc3BhY2luZyBiZXR3ZWVuIGZvcm0gZWxlbWVudHMgKi9cbn1cblxuICBcbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDsgLyogSW5jcmVhc2UgdGhlIG1hcmdpbiBib3R0b20gZm9yIHNwYWNpbmcgKi9cbn1cbiAgXG4uZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjBlMGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbiAgXG5cblxuLmZvcm0tZmxvYXRpbmcgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDM1MHB4OyAvKiBBZGp1c3QgdGhlIHdpZHRoIGFzIG5lZWRlZCAqL1xuICAgIGhlaWdodDogZGVmYXVsdDtcbiAgfVxuXG4vKiBPdmVyYWxsIGNvbnRhaW5lciBzdHlsaW5nIChvcHRpb25hbCkgKi9cbi5tYi0zLmZvcm0tY2hlY2sge1xuICAgIC8qIEFkanVzdCBtYXJnaW4gYXMgbmVlZGVkICh1c2luZyBtYXJnaW4tYm90dG9tIGluIHRoaXMgY2FzZSkgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gIH1cblxuICBcbiAgXG4gIFxuICBcbiAgLyogTGFiZWwgc3R5bGluZyAqL1xuICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgY29sb3I6ICMzMzM7IC8qIEFkanVzdCB0ZXh0IGNvbG9yIGFzIG5lZWRlZCAqL1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgLyogQWRqdXN0IGZvbnQgZmFtaWx5IGFzIG5lZWRlZCAqL1xuICAgIG1hcmdpbi1yaWdodDogNXB4OyAvKiBBZGQgc3BhY2luZyBiZXR3ZWVuIGxhYmVsIGFuZCBsaW5rcyAqL1xuICB9XG4gIFxuICAvKiBMaW5rIHN0eWxpbmcgKi9cbiAgLmZvcm0tY2hlY2sgYSB7XG4gICAgY29sb3I6ICNmZjAwMDA7IC8qIEFkanVzdCBsaW5rIGNvbG9yIGFzIG5lZWRlZCAqL1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogUmVtb3ZlIHVuZGVybGluZSBmcm9tIGxpbmtzICovXG4gIH1cbiAgXG4gIC8qIExpbmsgaG92ZXIgc3R5bGluZyAqL1xuICAuZm9ybS1jaGVjayBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQWRqdXN0IGxpbmsgaG92ZXIgY29sb3IgYXMgbmVlZGVkICovXG4gIH1cbiAgXG5cblxuXG5cblxuXG4uYnV0dG9uLTI4IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQTFBMUE7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjM0IzQjNCO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllciguMjMsIDEsIDAuMzIsIDEpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHdpZHRoOiAxMDAlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuXG4uYnV0dG9uLTI4OmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idXR0b24tMjg6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDhweCAxNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5idXR0b24tMjg6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG5cblxuLmFscmVhZHktcmVnaXN0ZXJlZCB7XG4gICAgY29sb3I6ICMzMzM7IC8qIEFkanVzdCB0ZXh0IGNvbG9yIGFzIG5lZWRlZCAqL1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgLyogQWRqdXN0IGZvbnQgZmFtaWx5IGFzIG5lZWRlZCAqL1xuICB9XG4gIFxuICAuYWxyZWFkeS1yZWdpc3RlcmVkIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgLyogQWRkIHNwYWNpbmcgYmV0d2VlbiBwYXJhZ3JhcGggYW5kIGxpbmsgKi9cbiAgfVxuICBcbiAgLmFscmVhZHktcmVnaXN0ZXJlZCBhIHtcbiAgICBjb2xvcjogIzAwMDAwMDsgLyogQWRqdXN0IGxpbmsgY29sb3IgYXMgbmVlZGVkICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIFJlbW92ZSB1bmRlcmxpbmUgZnJvbSBsaW5rICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIE1ha2UgbGluayB0ZXh0IGJvbGQgKG9wdGlvbmFsKSAqL1xuICB9XG4gIFxuICAuYWxyZWFkeS1yZWdpc3RlcmVkIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjYjMwMDAwOyAvKiBBZGp1c3QgbGluayBob3ZlciBjb2xvciBhcyBuZWVkZWQgKi9cbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6576), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map