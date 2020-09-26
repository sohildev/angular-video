(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-publisher, app-subscriber {\n  display: block;\n  float: left;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div *ngIf=\"session\">\n  <app-publisher [session]=\"session\"></app-publisher>\n  <app-subscriber *ngFor=\"let stream of streams\" [stream]=\"stream\" [session]=\"session\"></app-subscriber>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opentok.service */ "./src/app/opentok.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ref, opentokService) {
        this.ref = ref;
        this.opentokService = opentokService;
        this.title = 'Angular Basic Video Chat';
        this.streams = [];
        this.changeDetectorRef = ref;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opentokService.initSession().then(function (session) {
            _this.session = session;
            _this.session.on('streamCreated', function (event) {
                _this.streams.push(event.stream);
                _this.changeDetectorRef.detectChanges();
            });
            _this.session.on('streamDestroyed', function (event) {
                var idx = _this.streams.indexOf(event.stream);
                if (idx > -1) {
                    _this.streams.splice(idx, 1);
                    _this.changeDetectorRef.detectChanges();
                }
            });
        })
            .then(function () { return _this.opentokService.connect(); })
            .catch(function (err) {
            console.error(err);
            alert('Unable to connect. Make sure you have updated the config.ts file with your OpenTok details.');
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publisher/publisher.component */ "./src/app/publisher/publisher.component.ts");
/* harmony import */ var _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscriber/subscriber.component */ "./src/app/subscriber/subscriber.component.ts");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opentok.service */ "./src/app/opentok.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__["PublisherComponent"],
                _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_4__["SubscriberComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_opentok_service__WEBPACK_IMPORTED_MODULE_5__["OpentokService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/opentok.service.ts":
/*!************************************!*\
  !*** ./src/app/opentok.service.ts ***!
  \************************************/
/*! exports provided: OpentokService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpentokService", function() { return OpentokService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opentok_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpentokService = /** @class */ (function () {
    function OpentokService() {
    }
    OpentokService.prototype.getOT = function () {
        return _opentok_client__WEBPACK_IMPORTED_MODULE_1__;
    };
    OpentokService.prototype.initSession = function () {
        var _this = this;
        if (_config__WEBPACK_IMPORTED_MODULE_2__["default"].API_KEY && _config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKEN && _config__WEBPACK_IMPORTED_MODULE_2__["default"].SESSION_ID) {
            this.session = this.getOT().initSession(_config__WEBPACK_IMPORTED_MODULE_2__["default"].API_KEY, _config__WEBPACK_IMPORTED_MODULE_2__["default"].SESSION_ID);
            this.token = _config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKEN;
            return Promise.resolve(this.session);
        }
        else {
            return fetch(_config__WEBPACK_IMPORTED_MODULE_2__["default"].SAMPLE_SERVER_BASE_URL + '/session')
                .then(function (data) { return data.json(); })
                .then(function (json) {
                _this.session = _this.getOT().initSession(json.apiKey, json.sessionId);
                _this.token = json.token;
                return _this.session;
            });
        }
    };
    OpentokService.prototype.connect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.session.connect(_this.token, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(_this.session);
                }
            });
        });
    };
    OpentokService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OpentokService);
    return OpentokService;
}());



/***/ }),

/***/ "./src/app/publisher/publisher.component.css":
/*!***************************************************!*\
  !*** ./src/app/publisher/publisher.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/publisher/publisher.component.html":
/*!****************************************************!*\
  !*** ./src/app/publisher/publisher.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n"

/***/ }),

/***/ "./src/app/publisher/publisher.component.ts":
/*!**************************************************!*\
  !*** ./src/app/publisher/publisher.component.ts ***!
  \**************************************************/
/*! exports provided: PublisherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherComponent", function() { return PublisherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../opentok.service */ "./src/app/opentok.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var publish = function () {
};
var PublisherComponent = /** @class */ (function () {
    function PublisherComponent(opentokService) {
        this.opentokService = opentokService;
        this.publishing = false;
    }
    PublisherComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var OT = this.opentokService.getOT();
        this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, { insertMode: 'append' });
        if (this.session) {
            if (this.session['isConnected']()) {
                this.publish();
            }
            this.session.on('sessionConnected', function () { return _this.publish(); });
        }
    };
    PublisherComponent.prototype.publish = function () {
        var _this = this;
        this.session.publish(this.publisher, function (err) {
            if (err) {
                alert(err.message);
            }
            else {
                _this.publishing = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('publisherDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PublisherComponent.prototype, "publisherDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", OT.Session)
    ], PublisherComponent.prototype, "session", void 0);
    PublisherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publisher',
            template: __webpack_require__(/*! ./publisher.component.html */ "./src/app/publisher/publisher.component.html"),
            styles: [__webpack_require__(/*! ./publisher.component.css */ "./src/app/publisher/publisher.component.css")]
        }),
        __metadata("design:paramtypes", [_opentok_service__WEBPACK_IMPORTED_MODULE_1__["OpentokService"]])
    ], PublisherComponent);
    return PublisherComponent;
}());



/***/ }),

/***/ "./src/app/subscriber/subscriber.component.css":
/*!*****************************************************!*\
  !*** ./src/app/subscriber/subscriber.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subscriber/subscriber.component.html":
/*!******************************************************!*\
  !*** ./src/app/subscriber/subscriber.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #subscriberDiv></div>\n"

/***/ }),

/***/ "./src/app/subscriber/subscriber.component.ts":
/*!****************************************************!*\
  !*** ./src/app/subscriber/subscriber.component.ts ***!
  \****************************************************/
/*! exports provided: SubscriberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberComponent", function() { return SubscriberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opentok_client__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscriberComponent = /** @class */ (function () {
    function SubscriberComponent() {
    }
    SubscriberComponent.prototype.ngAfterViewInit = function () {
        var subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, {}, function (err) {
            if (err) {
                alert(err.message);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('subscriberDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SubscriberComponent.prototype, "subscriberDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _opentok_client__WEBPACK_IMPORTED_MODULE_1__["Session"])
    ], SubscriberComponent.prototype, "session", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _opentok_client__WEBPACK_IMPORTED_MODULE_1__["Stream"])
    ], SubscriberComponent.prototype, "stream", void 0);
    SubscriberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscriber',
            template: __webpack_require__(/*! ./subscriber.component.html */ "./src/app/subscriber/subscriber.component.html"),
            styles: [__webpack_require__(/*! ./subscriber.component.css */ "./src/app/subscriber/subscriber.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscriberComponent);
    return SubscriberComponent;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    // Set this to the base URL of your sample server, such as 'https://your-app-name.herokuapp.com'.
    // Do not include the trailing slash. See the README for more information:
    SAMPLE_SERVER_BASE_URL: 'http://YOUR-SERVER-URL',
    // OR, if you have not set up a web server that runs the learning-opentok-php code,
    // set these values to OpenTok API key, a valid session ID, and a token for the session.
    // For test purposes, you can obtain these from https://tokbox.com/account.
    API_KEY: '45828062',
    SESSION_ID: '1_MX40NTgyODA2Mn5-MTYwMTE0MzY4ODQ4M35nUS9WcTZQY1ZtLzlRVG51eVFCOGRYT0h-UH4',
    TOKEN: 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9ZDc3MDY2OWRhOTRhNDRlODNjZmZhZmNhOTA2MGVjYzE1MWI2Y2YxNjpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UWXdNVEUwTXpZNE9EUTRNMzVuVVM5V2NUWlFZMVp0THpsUlZHNTFlVkZDT0dSWVQwaC1VSDQmY3JlYXRlX3RpbWU9MTYwMTE0NDU2MiZub25jZT0wLjUxNjMyNTkxNzAzMDQ0NDQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYwMTIzMDk2Mg=='
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\freelancer\ex\Angular-Basic-Video-Chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map