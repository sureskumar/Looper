webpackJsonp([0,3],{

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(517);


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/catch';
var IconsService = (function () {
    function IconsService(http) {
        var _this = this;
        this.http = http;
        this.getIcons = function () {
            return _this.http.get('assets/grid.json').map(function (res) { return res.json(); });
        };
    }
    IconsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], IconsService);
    return IconsService;
    var _a;
}());
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/icons.service.js.map

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 516;


/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(666);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/main.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(835),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/app.component.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__importer_importer_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_service__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_search_pipe__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_lazyload_image__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_infinite_scroll__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_infinite_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_infinite_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_groupby_pipe__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__colorpicker_colorpicker_component__ = __webpack_require__(667);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__importer_importer_component__["a" /* ImporterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_groupby_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_12__colorpicker_colorpicker_component__["a" /* ColorpickerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_infinite_scroll__["InfiniteScrollModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__icons_service__["a" /* IconsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/app.module.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_animations__ = __webpack_require__(668);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorpickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorpickerComponent = (function () {
    function ColorpickerComponent() {
        this.onColorPicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chosenColor = {
            name: 'grey600',
            value: '#757575'
        };
        this.colors = [
            {
                name: 'grey600',
                value: '#757575'
            },
            {
                name: 'black',
                value: '#000000'
            },
            {
                name: 'white',
                value: '#FFFFFF'
            },
            {
                name: 'googblue',
                value: '#4285F4'
            }
        ];
        this.showDropdown = false;
    }
    ColorpickerComponent.prototype.ngOnInit = function () {
    };
    ColorpickerComponent.prototype.toggleDropDown = function (color) {
        this.chosenColor = color || this.chosenColor;
        this.onColorPicked.emit(this.chosenColor);
        this.showDropdown = !this.showDropdown;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ColorpickerComponent.prototype, "onColorPicked", void 0);
    ColorpickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-colorpicker',
            template: __webpack_require__(836),
            styles: [__webpack_require__(832)],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__menu_animations__["a" /* transformMenu */],
                __WEBPACK_IMPORTED_MODULE_1__menu_animations__["b" /* fadeInItems */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ColorpickerComponent);
    return ColorpickerComponent;
}());
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/colorpicker.component.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transformMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fadeInItems; });

/**
 * Below are all the animations for the md-menu component.
 * Animation duration and timing values are based on AngularJS Material.
 */
/**
 * This animation controls the menu panel's entry and exit from the page.
 *
 * When the menu panel is added to the DOM, it scales in and fades in its border.
 *
 * When the menu panel is removed from the DOM, it simply fades out after a brief
 * delay to display the ripple.
 */
// TODO(kara): switch to :enter and :leave once Mobile Safari is sorted out.
var transformMenu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('transformMenu', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('showing', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
        opacity: 1,
        transform: "scale(1)"
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 0,
            transform: "scale(0)"
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("200ms cubic-bezier(0.25, 0.8, 0.25, 1)")
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms 100ms linear', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
    ])
]);
/**
 * This animation fades in the background color and content of the menu panel
 * after its containing element is scaled in.
 */
var fadeInItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInItems', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('showing', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("200ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/menu-animations.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_service__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImporterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImporterComponent = (function () {
    function ImporterComponent(iconsService) {
        var _this = this;
        this.iconsService = iconsService;
        this.icons = [];
        this.baseUrl = '';
        this.groups = [];
        this.searchResults = [];
        this.paginationSize = 100;
        this.lastIndex = 50;
        this.query = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]();
        this.chosenColor = {
            name: 'grey600',
            value: '#757575'
        };
        this.groupName = function (key) {
            var group = this.groups.find(function (item) {
                if (item.data.id == key) {
                    return true;
                }
            });
            return group.data.name;
        };
        this.updateSearch = function (query) {
            // if (!query) {
            //   this.searchResults = this.icons;
            // }
            this.searchResults = this.icons.filter(function (icon) {
                var nameSearch = icon.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
                var keywords = icon.keywords.join(' ');
                var isKeyword = true;
                var queryWords = query.split(' ');
                for (var i = 0; i < queryWords.length; i++) {
                    if (keywords.indexOf(queryWords[i]) == -1) {
                        isKeyword = false;
                    }
                }
                return nameSearch || isKeyword;
            });
            this.iconsToShow = this.searchResults.slice(0, this.paginationSize);
            // this.iconsToShow = this.searchResults;
        };
        this.query.valueChanges
            .debounceTime(100)
            .subscribe(function (term) {
            _this.updateSearch(term);
        });
    }
    ImporterComponent.prototype.onScroll = function () {
        var nextPage = this.searchResults.slice(this.iconsToShow.length, this.iconsToShow.length + this.paginationSize);
        if (nextPage.length > 0) {
            this.iconsToShow = this.iconsToShow.concat(nextPage);
        }
    };
    ImporterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.container = document.getElementById('search-results');
        this.iconsService.getIcons()
            .subscribe(function (data) {
            _this.icons = data['icons'];
            _this.baseUrl = data['base_path'];
            _this.groups = data['groups'];
            _this.searchResults = _this.icons;
            _this.iconsToShow = _this.icons.slice(0, _this.paginationSize);
            // this.iconsToShow = this.icons;
        }, function (error) { return console.log("error : " + error); });
    };
    ImporterComponent.prototype.onColorPicked = function (color) {
        this.chosenColor = color;
    };
    ImporterComponent.prototype.isGlif = function (group_id) {
        var groups = ['avatars_and_widgets', 'alphabet_logos', 'internal_logos', 'non_material_product_logos', 'product_logos'];
        return !groups.includes(group_id);
    };
    ImporterComponent.prototype.dragEnd = function (icon) {
        var isGlif = this.isGlif(icon.group_id);
        var colorExtension = isGlif ? "_" + this.chosenColor.name : '';
        var data = {
            name: icon.id + colorExtension,
            colorName: this.chosenColor.name,
            colorValue: this.chosenColor.value,
            isGlif: isGlif
        };
        window['ga']('send', 'event', 'icons panel', 'dragged', 'icons');
        if (window['MDAction']) {
            window['MDAction']('drag-end', data);
        }
    };
    ImporterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-importer',
            template: __webpack_require__(837),
            styles: [__webpack_require__(833)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__icons_service__["a" /* IconsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__icons_service__["a" /* IconsService */]) === 'function' && _a) || Object])
    ], ImporterComponent);
    return ImporterComponent;
    var _a;
}());
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/importer.component.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupByPipe = (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, term) {
        var newValue = [];
        if (!collection) {
            return [];
        }
        var _loop_1 = function(i) {
            // let keyVal = GroupByPipe.deepFind(collection[i], term);
            var keyVal = collection[i][term];
            var index = newValue.findIndex(function (myObj) { return myObj.key == keyVal; });
            if (index >= 0) {
                newValue[index].value.push(collection[i]);
            }
            else {
                newValue.push({ key: keyVal, value: [collection[i]] });
            }
        };
        for (var i = 0; i < collection.length; i++) {
            _loop_1(i);
        }
        return newValue;
    };
    GroupByPipe.deepFind = function (obj, path) {
        var paths = path.toString().split(/[\.\[\]]/);
        var current = obj;
        for (var i = 0; i < paths.length; ++i) {
            if (paths[i] !== "") {
                if (current[paths[i]] == undefined) {
                    return undefined;
                }
                else {
                    current = current[paths[i]];
                }
            }
        }
        return current;
    };
    GroupByPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "groupBy"
        }), 
        __metadata('design:paramtypes', [])
    ], GroupByPipe);
    return GroupByPipe;
}());
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/groupby.pipe.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, arg1, arg2) {
        var query = arg1;
        var icons = arg2;
        if (!query) {
            return value;
        }
        return icons.filter(function (icon) {
            var nameSearch = icon.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            var keywords = icon.keywords.join(' ');
            var isKeyword = true;
            var queryWords = query.split(' ');
            for (var i = 0; i < queryWords.length; i++) {
                if (keywords.indexOf(queryWords[i]) == -1) {
                    isKeyword = false;
                }
            }
            return nameSearch || isKeyword;
        });
    };
    SearchPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/search.pipe.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/environment.prod.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/gsid/work/projects/side/sketch-material/importer/src/polyfills.js.map

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = ".color-picker {\n  width: 20px;\n  margin-left: 16px;\n  position: relative;\n}\n.color-picker .color {\n  height: 16px;\n  width: 16px;\n  border-radius: 20px;\n  background: #757575;\n  border: solid 3px #f5f5f5;\n  cursor: pointer;\n}\n.color-picker .color:hover {\n  border: solid 3px #ccc;\n}\n.color-picker .color-dropdown {\n  position: absolute;\n  padding: 8px;\n  background: #fff;\n  z-index: 3;\n  border-radius: 2px;\n  -webkit-transform-origin: 50% 20px;\n          transform-origin: 50% 20px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  left: -9px;\n  top: -5px;\n}\n.color-picker .color-dropdown .color {\n  margin-bottom: 5px;\n}\n.color-picker .color-dropdown .color:last-child {\n  margin-bottom: 0;\n}\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = ".container {\n  min-width: 300px;\n  margin: 0 auto;\n  background: #fff;\n  min-height: 300px;\n  font-family: \"Roboto\", -apple-system, BlinkMacSystemFont, \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.search {\n  background: #546E7A;\n  padding: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.search .search-icon {\n  position: absolute;\n  left: 21px;\n  top: 21px;\n}\n.search input {\n  height: 32px;\n  width: 100%;\n  border: 0;\n  font-size: 13px;\n  padding: 8px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-family: inherit;\n  border: 1px solid rgba(0, 0, 0, 0);\n  -webkit-transition: background 100ms ease-in, width 100ms ease-out;\n  transition: background 100ms ease-in, width 100ms ease-out;\n  background: rgba(255, 255, 255, 0.9);\n  padding-left: 32px;\n}\n.search input:focus {\n  background: #fff;\n  outline: 0;\n  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.24);\n}\n.search-results {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 64px;\n  bottom: 0;\n  overflow-x: auto;\n  background: #fff;\n}\n.icon-name {\n  color: #757575;\n  font-size: 10px;\n  margin-top: 5px;\n  text-align: center;\n  visibility: hidden;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  height: 22px;\n  display: none;\n}\n.group-title {\n  padding: 8px 16px 24px;\n  color: #888;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n}\n.group-title:first-child {\n  margin-top: 16px;\n}\n.cells {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.cells .cell {\n  -ms-flex-preferred-size: 20%;\n      flex-basis: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 16px;\n}\n.cells .cell:hover .icon-name {\n  visibility: visible;\n  -webkit-user-select: all;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: inline;\n}\n.cells .cell img {\n  width: 32px;\n  display: inline-block;\n  margin: 0 auto;\n  -webkit-transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s;\n  transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s;\n}\n.animated {\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  -webkit-animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s;\n          animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n@media only screen and (min-width: 400px) {\n  .cells .cell {\n    -ms-flex-preferred-size: 20%;\n        flex-basis: 20%;\n  }\n}\n@media only screen and (min-width: 600px) {\n  .cells .cell {\n    -ms-flex-preferred-size: 12.5%;\n        flex-basis: 12.5%;\n  }\n}\n@media only screen and (min-width: 800px) {\n  .cells .cell {\n    -ms-flex-preferred-size: 10%;\n        flex-basis: 10%;\n  }\n}\n@media only screen and (min-width: 1000px) {\n  .cells .cell {\n    -ms-flex-preferred-size: 5%;\n        flex-basis: 5%;\n  }\n}\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<app-importer></app-importer>\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div class=\"color-picker\">\n  <div data-id=\"grey600\"  [ngStyle]=\"{'background-color': chosenColor.value}\" class=\"color\" (click)='toggleDropDown(null)'></div>\n  <div class=\"color-dropdown\" *ngIf=\"showDropdown\" [@transformMenu]=\"'showDropdown'\">\n    <div class=\"colors\" [@fadeInItems]=\"'showDropdown'\">\n      <div class=\"color\" (click)='toggleDropDown(color)' *ngFor=\"let color of colors\" [ngStyle]=\"{'background-color': color.value}\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"search\">\n    <input type=\"text\" [formControl]=\"query\" autofocus>\n    <div class=\"search-icon\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 48 48\">\n        <path d=\"M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z\" fill='#888'/>\n        <path d=\"M0 0h48v48H0z\" fill=\"none\"/>\n      </svg>\n    </div>\n    <app-colorpicker (onColorPicked)=\"onColorPicked($event)\"></app-colorpicker>\n  </div>\n  <div class=\"search-results\" id=\"search-results\" infinite-scroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"300\" [scrollWindow]=\"false\" (scrolled)=\"onScroll()\">\n        <div class=\"padding\"></div>\n        <div class=\"groups\">\n          <div *ngFor=\"let group of iconsToShow | groupBy:'group_id'\">\n            <!--<img [src]=\"baseUrl + 'google-assets/' + icon.image\" alt=\"\">-->\n            <div class=\"group-title\">\n              {{groupName(group.key)}}\n            </div>\n            <div class=\"cells\">\n              <div *ngFor=\"let icon of group.value\" class=\"cell\">\n                  <img (dragend)=\"dragEnd(icon)\" class=\"animated fadeIn\" data-name='{{icon.image}}' [src]=\"baseUrl + 'google-assets/' + icon.image\" alt=\"\">\n                  <div class=\"icon-name\">{{icon.name}}</div>\n              </div>\n            </div>\n          </div>\n    </div>\n  </div>\n</div>\n"

/***/ })

},[1091]);
//# sourceMappingURL=main.bundle.map