/*!
* rete-comment-plugin v0.6.1 
* (c) 2020 Vitaliy Stoliarov 
* Released under the MIT license.
*/
function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

___$insertStyle(".inline-comment, .frame-comment {\n  color: black;\n  padding: 12px;\n  font-size: 140%;\n  position: absolute;\n  cursor: move;\n  border-radius: 16px; }\n  .inline-comment:focus, .frame-comment:focus {\n    outline: none;\n    border-color: #ffd92c; }\n\n.inline-comment {\n  z-index: 4;\n  background: #aec4ff;\n  border: 3px solid #aec4ff; }\n\n.frame-comment {\n  z-index: -10;\n  background: rgba(15, 80, 255, 0.2);\n  border: 6px solid transparent; }\n");

var Draggable =
/*#__PURE__*/
function () {
  function Draggable(el) {
    var onStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var onTranslate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var onDrag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

    _classCallCheck(this, Draggable);

    this.mouseStart = null;
    this.el = el;
    this.onStart = onStart;
    this.onTranslate = onTranslate;
    this.onDrag = onDrag;
    this.initEvents(el);
  }

  _createClass(Draggable, [{
    key: "initEvents",
    value: function initEvents(el) {
      el.addEventListener('pointerdown', this.down.bind(this));
      window.addEventListener('pointermove', this.move.bind(this));
      window.addEventListener('pointerup', this.up.bind(this));
    }
  }, {
    key: "getCoords",
    value: function getCoords(e) {
      var props = e.touches ? e.touches[0] : e;
      return [props.pageX, props.pageY];
    }
  }, {
    key: "down",
    value: function down(e) {
      e.stopPropagation();
      this.mouseStart = this.getCoords(e);
      this.onStart();
    }
  }, {
    key: "move",
    value: function move(e) {
      if (!this.mouseStart) return;
      e.preventDefault();
      e.stopPropagation();

      var _this$getCoords = this.getCoords(e),
          _this$getCoords2 = _slicedToArray(_this$getCoords, 2),
          x = _this$getCoords2[0],
          y = _this$getCoords2[1];

      var delta = [x - this.mouseStart[0], y - this.mouseStart[1]];
      var zoom = this.el.getBoundingClientRect().width / this.el.offsetWidth;
      this.onTranslate(delta[0] / zoom, delta[1] / zoom);
    }
  }, {
    key: "up",
    value: function up() {
      if (this.mouseStart) {
        this.onDrag();
      }

      this.mouseStart = null;
    }
  }]);

  return Draggable;
}();

var Comment =
/*#__PURE__*/
function () {
  function Comment(text, editor) {
    _classCallCheck(this, Comment);

    this.editor = editor;
    this.text = text;
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.dragPosition = [0, 0];
    this.links = [];
    this.initView();
    this.update();
  }

  _createClass(Comment, [{
    key: "initView",
    value: function initView() {
      var _this = this;

      this.el = document.createElement('div');
      this.el.tabIndex = 1;
      this.el.addEventListener('contextmenu', this.onContextMenu.bind(this));
      this.el.addEventListener('focus', this.onFocus.bind(this));
      this.el.addEventListener('blur', this.onBlur.bind(this));
      this.el.title = this.text;
      new Draggable(this.el, function () {
        return _this.onStart();
      }, function (dx, dy) {
        return _this.onTranslate(dx, dy);
      });
    }
  }, {
    key: "linkTo",
    value: function linkTo(ids) {
      this.links = ids || [];
    }
  }, {
    key: "linkedTo",
    value: function linkedTo(node) {
      return this.links.includes(node.id);
    }
  }, {
    key: "k",
    value: function k() {
      return 1;
    }
  }, {
    key: "onContextMenu",
    value: function onContextMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      this.editor.trigger('editcomment', this);
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.scale = Math.max(1, 1 / this.k());
      this.update();
      this.editor.trigger('commentselected', this);
    }
  }, {
    key: "focused",
    value: function focused() {
      return document.activeElement === this.el;
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.scale = 1;
      this.update();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.el.blur();
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this.dragPosition = [this.x, this.y];
    }
  }, {
    key: "onTranslate",
    value: function onTranslate(dx, dy) {
      var _this$dragPosition = _slicedToArray(this.dragPosition, 2),
          x = _this$dragPosition[0],
          y = _this$dragPosition[1];

      this.x = x + this.scale * dx;
      this.y = y + this.scale * dy;
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      this.el.innerText = this.text;
      this.el.style.transform = "translate(".concat(this.x, "px, ").concat(this.y, "px) scale(").concat(this.scale, ")");
      this.el.title = this.text;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        text: this.text,
        position: [this.x, this.y],
        links: this.links
      };
    }
  }]);

  return Comment;
}();

var min = function min(arr) {
  return arr.length === 0 ? 0 : Math.min.apply(Math, _toConsumableArray(arr));
};

var max = function max(arr) {
  return arr.length === 0 ? 0 : Math.max.apply(Math, _toConsumableArray(arr));
};

function intersectRect(r1, r2) {
  return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
}
function containsRect(r1, r2) {
  return r2.left > r1.left && r2.right < r1.right && r2.top > r1.top && r2.bottom < r1.bottom;
}
function nodesBBox(editor, nodes, margin) {
  var left = min(nodes.map(function (node) {
    return node.position[0];
  })) - margin;
  var top = min(nodes.map(function (node) {
    return node.position[1];
  })) - margin;
  var right = max(nodes.map(function (node) {
    return node.position[0] + editor.view.nodes.get(node).el.clientWidth;
  })) + 2 * margin;
  var bottom = max(nodes.map(function (node) {
    return node.position[1] + editor.view.nodes.get(node).el.clientHeight;
  })) + 2 * margin;
  return {
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    width: Math.abs(left - right),
    height: Math.abs(top - bottom),
    getCenter: function getCenter() {
      return [(left + right) / 2, (top + bottom) / 2];
    }
  };
}

var FrameComment =
/*#__PURE__*/
function (_Comment) {
  _inherits(FrameComment, _Comment);

  function FrameComment(text, editor) {
    var _this;

    _classCallCheck(this, FrameComment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FrameComment).call(this, text, editor));
    _this.width = 0;
    _this.height = 0;
    _this.links = [];
    _this.el.className = 'frame-comment';
    return _this;
  }

  _createClass(FrameComment, [{
    key: "linkedNodesView",
    value: function linkedNodesView() {
      var _this2 = this;

      return this.links.map(function (id) {
        return _this2.editor.nodes.find(function (n) {
          return n.id === id;
        });
      }).map(function (node) {
        return _this2.editor.view.nodes.get(node);
      });
    }
  }, {
    key: "onStart",
    value: function onStart() {
      _get(_getPrototypeOf(FrameComment.prototype), "onStart", this).call(this);

      this.linkedNodesView().map(function (nodeView) {
        return nodeView.onStart();
      });
    }
  }, {
    key: "onTranslate",
    value: function onTranslate(dx, dy) {
      _get(_getPrototypeOf(FrameComment.prototype), "onTranslate", this).call(this, dx, dy);

      this.linkedNodesView().map(function (nodeView) {
        return nodeView.onDrag(dx, dy);
      });
    }
  }, {
    key: "isContains",
    value: function isContains(node) {
      var commRect = this.el.getBoundingClientRect();
      var view = this.editor.view.nodes.get(node);
      return containsRect(commRect, view.el.getBoundingClientRect());
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(FrameComment.prototype), "update", this).call(this);

      this.el.style.width = this.width + 'px';
      this.el.style.height = this.height + 'px';
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _objectSpread({}, _get(_getPrototypeOf(FrameComment.prototype), "toJSON", this).call(this), {
        type: 'frame',
        width: this.width,
        height: this.height
      });
    }
  }]);

  return FrameComment;
}(Comment);

var InlineComment =
/*#__PURE__*/
function (_Comment) {
  _inherits(InlineComment, _Comment);

  function InlineComment(text, editor) {
    var _this;

    _classCallCheck(this, InlineComment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InlineComment).call(this, text, editor));
    _this.el.className = 'inline-comment';

    _this.el.addEventListener('mouseup', _this.onDrag.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    return _this;
  }

  _createClass(InlineComment, [{
    key: "onDrag",
    value: function onDrag() {
      var intersection = this.getIntersectNode();
      this.linkTo(intersection ? [intersection.node.id] : []);
    }
  }, {
    key: "getIntersectNode",
    value: function getIntersectNode() {
      var commRect = this.el.getBoundingClientRect();
      return Array.from(this.editor.view.nodes).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            node = _ref2[0],
            view = _ref2[1];

        return {
          node: node,
          rect: view.el.getBoundingClientRect()
        };
      }).find(function (_ref3) {
        var rect = _ref3.rect;
        return intersectRect(commRect, rect);
      });
    }
  }, {
    key: "offset",
    value: function offset(dx, dy) {
      this.x += dx;
      this.y += dy;
      this.update();
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _objectSpread({}, _get(_getPrototypeOf(InlineComment.prototype), "toJSON", this).call(this), {
        type: 'inline'
      });
    }
  }]);

  return InlineComment;
}(Comment);

var CommentManager =
/*#__PURE__*/
function () {
  function CommentManager(editor) {
    var _this = this;

    _classCallCheck(this, CommentManager);

    this.editor = editor;
    this.comments = [];
    editor.on('zoomed', function () {
      _this.comments.map(function (c) {
        return c.blur.call(c);
      });
    });
  }

  _createClass(CommentManager, [{
    key: "addInlineComment",
    value: function addInlineComment(text, _ref) {
      var _this2 = this;

      var _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      var links = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var comment = new InlineComment(text, this.editor);

      comment.k = function () {
        return _this2.editor.view.area.transform.k;
      };

      comment.x = x;
      comment.y = y;
      comment.linkTo(links);
      this.addComment(comment);
    }
  }, {
    key: "addFrameComment",
    value: function addFrameComment(text, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          x = _ref4[0],
          y = _ref4[1];

      var links = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var comment = new FrameComment(text, this.editor);
      comment.x = x;
      comment.y = y;
      comment.width = width;
      comment.height = height;
      comment.linkTo(links);
      this.addComment(comment);
    }
  }, {
    key: "addComment",
    value: function addComment(comment) {
      comment.update();
      this.comments.push(comment);
      this.editor.view.area.appendChild(comment.el);
      this.editor.trigger('commentcreated', comment);
    }
  }, {
    key: "deleteComment",
    value: function deleteComment(comment) {
      this.editor.view.area.removeChild(comment.el);
      this.comments.splice(this.comments.indexOf(comment), 1);
      this.editor.trigger('commentremoved', comment);
    }
  }, {
    key: "deleteFocusedComment",
    value: function deleteFocusedComment() {
      var focused = this.comments.find(function (c) {
        return c.focused();
      });
      if (focused) this.deleteComment(focused);
    }
  }, {
    key: "deleteComments",
    value: function deleteComments() {
      var _this3 = this;

      _toConsumableArray(this.comments).map(function (c) {
        return _this3.deleteComment(c);
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.comments.map(function (c) {
        return c.toJSON();
      });
    }
  }, {
    key: "fromJSON",
    value: function fromJSON(list) {
      var _this4 = this;

      this.deleteComments();
      list.map(function (item) {
        if (item.type === 'frame') {
          _this4.addFrameComment(item.text, item.position, item.links, item.width, item.height);
        } else {
          _this4.addInlineComment(item.text, item.position, item.links);
        }
      });
    }
  }]);

  return CommentManager;
}();

function install(editor, _ref) {
  var _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 30 : _ref$margin,
      _ref$disableBuiltInEd = _ref.disableBuiltInEdit,
      disableBuiltInEdit = _ref$disableBuiltInEd === void 0 ? false : _ref$disableBuiltInEd;
  editor.bind('commentselected');
  editor.bind('commentcreated');
  editor.bind('commentremoved');
  editor.bind('syncframes');
  editor.bind('addcomment');
  editor.bind('removecomment');
  editor.bind('editcomment');
  var manager = new CommentManager(editor);

  if (!disableBuiltInEdit) {
    editor.on('editcomment', function (comment) {
      comment.text = prompt('Edit comment', comment.text);
      comment.update();
    });
  }

  function handleKey(e) {
    if (e.code === 'KeyF' && e.shiftKey) {
      var ids = editor.selected.list.map(function (node) {
        return node.id;
      });
      var nodes = ids.map(function (id) {
        return editor.nodes.find(function (n) {
          return n.id === id;
        });
      });
      editor.trigger('addcomment', {
        type: 'frame',
        nodes: nodes
      });
    } else if (e.code === 'KeyC' && e.shiftKey) {
      var position = Object.values(editor.view.area.mouse);
      editor.trigger('addcomment', {
        type: 'inline',
        position: position
      });
    } else if (e.code === 'Delete') {
      manager.deleteFocusedComment();
    }
  }

  window.addEventListener('keydown', handleKey);
  editor.on('destroy', function () {
    return window.removeEventListener('keydown', handleKey);
  });
  editor.on('addcomment', function (_ref2) {
    var type = _ref2.type,
        text = _ref2.text,
        nodes = _ref2.nodes,
        position = _ref2.position;

    if (type === 'inline') {
      manager.addInlineComment(text, position);
    } else if (type === 'frame') {
      var _nodesBBox = nodesBBox(editor, nodes, margin),
          left = _nodesBBox.left,
          top = _nodesBBox.top,
          width = _nodesBBox.width,
          height = _nodesBBox.height;

      var ids = nodes.map(function (n) {
        return n.id;
      });
      manager.addFrameComment(text, position || [left, top], ids, width, height);
    } else {
      throw new Error("type '".concat(type, "' not supported"));
    }
  });
  editor.on('removecomment', function (_ref3) {
    var comment = _ref3.comment,
        type = _ref3.type;

    if (comment) {
      manager.deleteComment(comment);
    } else if (type === 'inline') {
      manager.comments.filter(function (c) {
        return c instanceof InlineComment;
      }).map(function (c) {
        return manager.deleteComment(c);
      });
    } else if (type === 'frame') {
      manager.comments.filter(function (c) {
        return c instanceof FrameComment;
      }).map(function (c) {
        return manager.deleteComment(c);
      });
    }
  });
  editor.on('syncframes', function () {
    manager.comments.filter(function (comment) {
      return comment instanceof FrameComment;
    }).map(function (comment) {
      var nodes = comment.links.map(function (id) {
        return editor.nodes.find(function (n) {
          return n.id === id;
        });
      });

      var _nodesBBox2 = nodesBBox(editor, nodes, margin),
          left = _nodesBBox2.left,
          top = _nodesBBox2.top,
          width = _nodesBBox2.width,
          height = _nodesBBox2.height;

      comment.x = left;
      comment.y = top;
      comment.width = width;
      comment.height = height;
      comment.update();
    });
  });
  editor.on('nodetranslated', function (_ref4) {
    var node = _ref4.node,
        prev = _ref4.prev;
    var dx = node.position[0] - prev[0];
    var dy = node.position[1] - prev[1];
    manager.comments.filter(function (comment) {
      return comment instanceof InlineComment;
    }).filter(function (comment) {
      return comment.linkedTo(node);
    }).map(function (comment) {
      return comment.offset(dx, dy);
    });
  });
  editor.on('nodedraged', function (node) {
    manager.comments.filter(function (comment) {
      return comment instanceof FrameComment;
    }).filter(function (comment) {
      var contains = comment.isContains(node);
      var links = comment.links.filter(function (id) {
        return id !== node.id;
      });
      comment.links = contains ? [].concat(_toConsumableArray(links), [node.id]) : links;
    });
  });
  editor.on('commentselected', function () {
    var list = _toConsumableArray(editor.selected.list);

    editor.selected.clear();
    list.map(function (node) {
      return node.update ? node.update() : null;
    });
  });
  editor.on('export', function (data) {
    data.comments = manager.toJSON();
  });
  editor.on('import', function (data) {
    manager.fromJSON(data.comments || []);
  });

  if (editor.exist('clear')) {
    // compatibility with previous versions
    editor.on('clear', function () {
      return manager.deleteComments();
    });
  }
}

var index = {
  name: 'comment',
  install: install
};

export default index;
//# sourceMappingURL=comment-plugin.esm.js.map
