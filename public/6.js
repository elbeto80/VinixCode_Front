(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TagsComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TagsComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      idTag: 0,
      tagName: '',
      inputSearch: '',
      listTags: []
    };
  },
  methods: {
    saveTag: function saveTag() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var me;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.validateInputs()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", false);

              case 2:
                me = _this;
                CargandoSweet(0, 'Guardando...');
                _context.next = 6;
                return axios.post(urlApi + '/tag/save', {
                  idTag: me.idTag,
                  tagName: me.tagName.trim()
                }).then(function (response) {
                  CargandoSweet(1);

                  if (response.data.error) {
                    Success_Error_Mostrar('Error', response.data.info, 'error');
                    return false;
                  }

                  Success_Error_Mostrar("Registro Correcto", response.data.info, "success", 1);
                  me.getTags();
                  $("#cerrarModal").trigger("click");
                  me.clearInputs();
                })["catch"](function (error) {
                  CargandoSweet(1);
                  console.log(error);
                  Success_Error_Mostrar('Error', error, 'error');
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validateInputs: function validateInputs() {
      if (this.tagName.trim() == '') {
        Success_Error_Mostrar('Falta información', 'Nombre de etiqueta abligatorio', 'warning');
        return false;
      }

      return true;
    },
    clearInputs: function clearInputs() {
      this.idTag = 0;
      this.tagName = '';
    },
    getTags: function getTags() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var me;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                CargandoSweet(0, 'Cargando...');
                me = _this2;
                _context2.next = 4;
                return axios.get(urlApi + '/tags', {
                  params: {
                    inputSearch: me.inputSearch
                  }
                }).then(function (response) {
                  me.listTags = response.data.info.tags;
                  CargandoSweet(1);
                })["catch"](function (error) {
                  CargandoSweet(1);
                  console.log(error);
                  Success_Error_Mostrar('Error', error, 'error');
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteTag: function deleteTag(tag) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Swal.fire({
                  title: "Esta Seguro?",
                  text: "Desea eliminar etiqueta " + tag.name + "?",
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#6c757d',
                  confirmButtonText: 'Aceptar',
                  cancelButtonText: 'Cancelar'
                }).then(function (result) {
                  if (result.value) {
                    var me = _this3;
                    CargandoSweet(0, 'Eliminando...');
                    axios.post(urlApi + '/tag/delete', {
                      idTag: tag.id
                    }).then(function (response) {
                      CargandoSweet(1);

                      if (response.data.error) {
                        Success_Error_Mostrar('Error', response.data.info, 'error');
                        return false;
                      }

                      Success_Error_Mostrar("", response.data.info, "success", 1);
                      me.getTags();
                      me.clearInputs();
                    })["catch"](function (error) {
                      CargandoSweet(1);
                      console.log(error);
                      Success_Error_Mostrar('Error', error, 'error');
                    });
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    editTag: function editTag(tag) {
      this.idTag = tag.id;
      this.tagName = tag.name;
    },
    clearSearch: function clearSearch() {
      // limpia la busqueda en la tabla segun campo
      this.inputSearch = '', this.getTags();
    }
  },
  mounted: function mounted() {
    this.getTags();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TagsComponent.vue?vue&type=template&id=29269e89&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TagsComponent.vue?vue&type=template&id=29269e89& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Inicio")])],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Etiquetas")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "card card-solid" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-sm-6 col-xs-12" }, [
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputSearch,
                      expression: "inputSearch"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  attrs: { type: "text" },
                  domProps: { value: _vm.inputSearch },
                  on: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.getTags($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.inputSearch = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(2)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 col-sm-6 col-xs-6" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { value: "filter" },
                  on: { click: _vm.getTags }
                },
                [_vm._v("Buscar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary btn-sm",
                  attrs: { type: "button" },
                  on: { click: _vm.clearSearch }
                },
                [_vm._v("Limpiar")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.listTags.length <= 0
                      ? _c("tr", [_vm._m(4)])
                      : _vm._l(_vm.listTags, function(tag, index) {
                          return _c("tr", { key: tag.id }, [
                            _c("th", {
                              attrs: { scope: "row" },
                              domProps: { textContent: _vm._s(index + 1) }
                            }),
                            _vm._v(" "),
                            _c("td", {
                              domProps: { textContent: _vm._s(tag.name) }
                            }),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-warning btn-xs",
                                  attrs: {
                                    title: "Editar etiqueta",
                                    "data-toggle": "modal",
                                    "data-target": "#modalNuevaTag"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editTag(tag)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-pencil-alt"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger btn-xs",
                                  attrs: { title: "Eliminar etiqueta" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteTag(tag)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon far fa-trash-alt"
                                  })
                                ]
                              )
                            ])
                          ])
                        })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: {
                  id: "modalNuevaTag",
                  tabindex: "-1",
                  "aria-hidden": "true",
                  "data-backdrop": "static",
                  "data-keyboard": "false"
                }
              },
              [
                _c("div", { staticClass: "modal-dialog" }, [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("h5", {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" },
                        domProps: {
                          textContent: _vm._s(
                            _vm.idTag > 0
                              ? "Editar etiqueta"
                              : "Agregar etiqueta"
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: {
                            type: "button",
                            "data-dismiss": "modal",
                            "aria-label": "Close"
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              attrs: { "aria-hidden": "true" },
                              on: { click: _vm.clearInputs }
                            },
                            [_vm._v("×")]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12 form-group" }, [
                          _c("label", { attrs: { for: "tagName" } }, [
                            _vm._v("Nombre etiqueta")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.tagName,
                                expression: "tagName"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "tagName",
                              autocomplete: "off"
                            },
                            domProps: { value: _vm.tagName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.tagName = $event.target.value
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: { click: _vm.saveTag }
                        },
                        [_vm._v("Guardar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: {
                            type: "button",
                            id: "cerrarModal",
                            "data-dismiss": "modal"
                          },
                          on: { click: _vm.clearInputs }
                        },
                        [_vm._v("Cerrar")]
                      )
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("Etiquetas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12  mb-3" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { "data-toggle": "modal", "data-target": "#modalNuevaTag" }
        },
        [_vm._v("Nueva Etiqueta")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fas fa-search" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre etiqueta")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Opciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "3" } }, [
      _c("h5", [_vm._v("No Hay Elementos Para Mostrar")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TagsComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/TagsComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagsComponent_vue_vue_type_template_id_29269e89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagsComponent.vue?vue&type=template&id=29269e89& */ "./resources/js/components/TagsComponent.vue?vue&type=template&id=29269e89&");
/* harmony import */ var _TagsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/TagsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TagsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagsComponent_vue_vue_type_template_id_29269e89___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagsComponent_vue_vue_type_template_id_29269e89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TagsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TagsComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/TagsComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TagsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TagsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TagsComponent.vue?vue&type=template&id=29269e89&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/TagsComponent.vue?vue&type=template&id=29269e89& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsComponent_vue_vue_type_template_id_29269e89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TagsComponent.vue?vue&type=template&id=29269e89& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TagsComponent.vue?vue&type=template&id=29269e89&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsComponent_vue_vue_type_template_id_29269e89___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsComponent_vue_vue_type_template_id_29269e89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);