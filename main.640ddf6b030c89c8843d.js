/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "clone",
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "add",
    value: function add(other) {
      this.x += other.x;
      this.y += other.y;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(other) {
      this.x -= other.x;
      this.y -= other.y;
      return this;
    }
  }, {
    key: "mult",
    value: function mult(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
  }, {
    key: "magSq",
    value: function magSq() {
      var sq = function sq(x) {
        return x * x;
      };
      return sq(this.x) + sq(this.y);
    }
  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(this.magSq());
    }
  }, {
    key: "heading",
    value: function heading() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "limit",
    value: function limit(mag) {
      if (this.magSq() > mag * mag) {
        var h = this.heading();
        this.x = Math.cos(h) * mag;
        this.y = Math.sin(h) * mag;
      }
      return this;
    }
  }], [{
    key: "fromAngle",
    value: function fromAngle(heading, magnitude) {
      return new Vector(Math.cos(heading) * magnitude, Math.sin(heading) * magnitude);
    }
  }, {
    key: "add",
    value: function add(lhs, rhs) {
      return lhs.clone().add(rhs);
    }
  }, {
    key: "sub",
    value: function sub(lhs, rhs) {
      return lhs.clone().sub(rhs);
    }
  }, {
    key: "mult",
    value: function mult(lhs, rhs) {
      return lhs.clone().mult(rhs);
    }
  }]);

  return Vector;
}();

exports.default = Vector;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isKeyDown = isKeyDown;
var keys = {};

var CONTROLLED_KEYS = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Space'];

function onKeyDown(event) {
  keys[event.code] = true;
  if (CONTROLLED_KEYS.indexOf(event.code) !== -1) event.preventDefault();
}

function onKeyUp(event) {
  keys[event.code] = false;
  event.preventDefault();
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

function isKeyDown(code) {
  return !!keys[code];
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _node = __webpack_require__(10);

var _node2 = _interopRequireDefault(_node);

var _transition = __webpack_require__(12);

var _transition2 = _interopRequireDefault(_transition);

var _d3Ease = __webpack_require__(13);

var _colors = __webpack_require__(24);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thing = function (_Node) {
  _inherits(Thing, _Node);

  function Thing(x, y, mass) {
    _classCallCheck(this, Thing);

    var _this = _possibleConstructorReturn(this, (Thing.__proto__ || Object.getPrototypeOf(Thing)).call(this));

    _this.pos = new _vector2.default(x, y);
    _this.vel = new _vector2.default(0, 0);
    _this.forces = new _vector2.default(0, 0);
    _this.mass = mass;
    _this.color = (0, _colors2.default)();

    _this.radius = 0;
    _this.radiusTransition = new _transition2.default({
      start: 0,
      end: _this.calcRadius(),
      duration: 30,
      easing: _d3Ease.easeCubicOut
    });
    return _this;
  }

  _createClass(Thing, [{
    key: 'applyForce',
    value: function applyForce(force) {
      this.forces.add(force.mult(1 / this.mass));
    }
  }, {
    key: 'update',
    value: function update(step) {
      this.vel.add(_vector2.default.mult(this.forces, step));
      this.pos.add(_vector2.default.mult(this.vel, step));

      if (this.radiusTransition !== null) {
        this.radius = this.radiusTransition.step(step);
      }
    }
  }, {
    key: 'calcRadius',
    value: function calcRadius() {
      return Math.sqrt(this.mass * 600 / Math.PI);
    }
  }, {
    key: 'addMass',
    value: function addMass(amount) {
      this.setMass(this.mass + amount);
    }
  }, {
    key: 'setMass',
    value: function setMass(mass) {
      this.mass = mass;
      this.radiusTransition = new _transition2.default({
        start: this.radius,
        end: this.calcRadius(),
        duration: 30,
        easing: _d3Ease.easeBackOut.overshoot(2)
      });
    }
  }, {
    key: 'onCollide',
    value: function onCollide(other) {
      if (other.constructor.name === 'Player') {
        this.remove();
      }
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      renderer.drawCircle(this.pos.x, this.pos.y, this.radius, {
        color: this.color
      });

      this.forces.x = 0;
      this.forces.y = 0;
    }
  }]);

  return Thing;
}(_node2.default);

exports.default = Thing;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(5);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var canvas = document.getElementById('canvas');
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', window.innerHeight);

  var game = new _game2.default(canvas);
  game.start();
}

init();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameScene = __webpack_require__(6);

var _gameScene2 = _interopRequireDefault(_gameScene);

var _renderer = __webpack_require__(25);

var _renderer2 = _interopRequireDefault(_renderer);

var _camera = __webpack_require__(26);

var _camera2 = _interopRequireDefault(_camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    // set up camera
    this.camera = new _camera2.default(canvas.width, canvas.height);

    // set up renderer
    this.renderer = new _renderer2.default(canvas.getContext('2d'), this.camera);

    // set up root scene
    this.scene = new _gameScene2.default(this.camera);

    this.update = this.update.bind(this);
    this.prevTimestamp = null;
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      window.requestAnimationFrame(this.update);
    }
  }, {
    key: 'update',
    value: function update(timestamp) {
      this.renderer.clear();

      if (this.prevTimestamp !== null) {
        var step = timestamp - this.prevTimestamp;

        this.scene.update(step * 60 / 1000);
        this.scene.draw(this.renderer);
      }

      this.prevTimestamp = timestamp;
      window.requestAnimationFrame(this.update);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _physicsScene = __webpack_require__(7);

var _physicsScene2 = _interopRequireDefault(_physicsScene);

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _player = __webpack_require__(9);

var _player2 = _interopRequireDefault(_player);

var _thing = __webpack_require__(2);

var _thing2 = _interopRequireDefault(_thing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_ITEMS = 30;

var GameScene = function (_PhysicsScene) {
  _inherits(GameScene, _PhysicsScene);

  function GameScene(camera) {
    _classCallCheck(this, GameScene);

    var _this = _possibleConstructorReturn(this, (GameScene.__proto__ || Object.getPrototypeOf(GameScene)).call(this, camera));

    _this.player = new _player2.default(0, 0);
    _this.addChild(_this.player);

    for (var i = 0; i < 10; i++) {
      _this.spawnThing();
    }

    _this.itemCount = _this.items.length;
    return _this;
  }

  _createClass(GameScene, [{
    key: 'update',
    value: function update(step) {
      _get(GameScene.prototype.__proto__ || Object.getPrototypeOf(GameScene.prototype), 'update', this).call(this, step);
      this.ensureItemCount();
      this.renderLevel();
      this.moveCamera();
    }
  }, {
    key: 'ensureItemCount',
    value: function ensureItemCount() {
      var _this2 = this;

      // count items on screen
      var onScreen = 0;
      this.items.forEach(function (item) {
        if (_this2.camera.isInBounds(item.pos.x, item.pos.y, item.radius)) {
          onScreen++;
        }
      });

      if (onScreen < this.itemCount) {
        this.spawnThing();
      }

      if (this.items.length > MAX_ITEMS) this.removeFarthestThing();
    }
  }, {
    key: 'spawnThing',
    value: function spawnThing() {
      var coords = this.camera.getRandomInBounds();
      var thing = new _thing2.default(coords.x, coords.y, 0.5);
      this.addChild(thing);
    }
  }, {
    key: 'removeFarthestThing',
    value: function removeFarthestThing() {
      var _this3 = this;

      if (!this.items.length) return;

      var farthestThing = this.items[0];
      this.items.forEach(function (item) {
        var d1 = _vector2.default.sub(farthestThing.pos, _this3.player.pos).magSq();
        var d2 = _vector2.default.sub(item.pos, _this3.player.pos).magSq();

        if (d2 > d1) {
          farthestThing = item;
        }
      });

      this.removeChild(farthestThing);
    }
  }, {
    key: 'renderLevel',
    value: function renderLevel() {
      document.title = 'lvl ' + (this.player.target - 2);
    }
  }, {
    key: 'moveCamera',
    value: function moveCamera() {
      this.camera.center.x = this.player.pos.x;
      this.camera.center.y = this.player.pos.y;
    }
  }]);

  return GameScene;
}(_physicsScene2.default);

exports.default = GameScene;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _scene = __webpack_require__(8);

var _scene2 = _interopRequireDefault(_scene);

var _key = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GRAVITATIONAL_CONSTANT = 100;

var PhysicsScene = function (_Scene) {
  _inherits(PhysicsScene, _Scene);

  function PhysicsScene() {
    _classCallCheck(this, PhysicsScene);

    return _possibleConstructorReturn(this, (PhysicsScene.__proto__ || Object.getPrototypeOf(PhysicsScene)).apply(this, arguments));
  }

  _createClass(PhysicsScene, [{
    key: 'update',
    value: function update(step) {
      this.applyGravity();

      _get(PhysicsScene.prototype.__proto__ || Object.getPrototypeOf(PhysicsScene.prototype), 'update', this).call(this, step);

      // this.wrapItems();
      this.checkCollisions();
    }
  }, {
    key: 'applyGravity',
    value: function applyGravity() {
      for (var i = 0; i < this.items.length - 1; i++) {
        for (var j = i + 1; j < this.items.length; j++) {
          var a = this.items[i];
          var b = this.items[j];

          var d = _vector2.default.sub(a.pos, b.pos);
          var f = GRAVITATIONAL_CONSTANT * a.mass * b.mass / Math.max(d.magSq(), 100);

          if ((0, _key.isKeyDown)('Space')) f *= -1;
          a.applyForce(_vector2.default.fromAngle(d.heading(), -f));
          b.applyForce(_vector2.default.fromAngle(d.heading(), f));
        }
      }
    }
  }, {
    key: 'checkCollisions',
    value: function checkCollisions() {
      for (var i = 0; i < this.items.length - 1; i++) {
        for (var j = i + 1; j < this.items.length; j++) {
          var a = this.items[i];
          var b = this.items[j];
          var d = _vector2.default.sub(a.pos, b.pos).magSq();
          var sq = function sq(x) {
            return x * x;
          };
          if (d < sq(a.radius + b.radius)) {
            a.onCollide(b);
            b.onCollide(a);
          }
        }
      }
    }
  }, {
    key: 'wrapItems',
    value: function wrapItems() {
      var _this2 = this;

      this.items.forEach(function (item) {
        var _item$pos = item.pos,
            x = _item$pos.x,
            y = _item$pos.y;

        if (x < 0) item.pos.x += _this2.width;
        if (y < 0) item.pos.y += _this2.height;
        if (x > _this2.width) item.pos.x -= _this2.width;
        if (y > _this2.height) item.pos.y -= _this2.height;
      });
    }
  }]);

  return PhysicsScene;
}(_scene2.default);

exports.default = PhysicsScene;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene(camera) {
    _classCallCheck(this, Scene);

    this.items = [];
    this.camera = camera;
  }

  _createClass(Scene, [{
    key: "addChild",
    value: function addChild(item) {
      item.setParent(this);
      this.items.push(item);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var index = this.items.indexOf(child);
      if (index > -1) this.items.splice(index, 1);
    }
  }, {
    key: "update",
    value: function update(step) {
      this.items.forEach(function (i) {
        return i.update(step);
      });
    }
  }, {
    key: "draw",
    value: function draw(renderer) {
      this.items.forEach(function (i) {
        return i.draw(renderer);
      });
    }
  }]);

  return Scene;
}();

exports.default = Scene;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _thing = __webpack_require__(2);

var _thing2 = _interopRequireDefault(_thing);

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _key = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FORCE = 0.15;
var INITIAL_COLOR = '#fff';

var Player = function (_Thing) {
  _inherits(Player, _Thing);

  function Player(x, y) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, 1));

    _this.color = INITIAL_COLOR;

    _this.target = 3;
    _this.items = 0;

    _this.scoreAngle = 0;
    return _this;
  }

  _createClass(Player, [{
    key: 'update',
    value: function update(step) {
      if ((0, _key.isKeyDown)('ArrowRight')) this.applyForce(new _vector2.default(FORCE, 0));
      if ((0, _key.isKeyDown)('ArrowLeft')) this.applyForce(new _vector2.default(-FORCE, 0));
      if ((0, _key.isKeyDown)('ArrowDown')) this.applyForce(new _vector2.default(0, FORCE));
      if ((0, _key.isKeyDown)('ArrowUp')) this.applyForce(new _vector2.default(0, -FORCE));

      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'update', this).call(this, step);
      this.scoreAngle += step * this.vel.x / 100;
    }
  }, {
    key: 'score',
    value: function score() {
      this.items++;
      if (this.items >= this.target) {
        this.target++;
        this.reset();
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.items = 0;
      this.setMass(1);
      this.color = INITIAL_COLOR;
    }
  }, {
    key: 'onCollide',
    value: function onCollide(other) {
      if (other.constructor.name === 'Thing') {
        if (other.color !== this.color) {
          this.reset();
          this.color = other.color;
        }

        this.addMass(other.mass);
        this.score();
      }
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'draw', this).call(this, renderer);
      this.renderScore(renderer);
    }
  }, {
    key: 'renderScore',
    value: function renderScore(renderer) {
      for (var i = 0; i < this.target; i++) {
        var theta = Math.PI * 2 / this.target * i + this.scoreAngle;
        var offset = this.radius + 20;
        var pos = _vector2.default.add(this.pos, _vector2.default.fromAngle(theta, offset));

        renderer.drawCircle(pos.x, pos.y, 5, {
          color: this.color,
          stroke: i >= this.items,
          opacity: i >= this.items ? 0.3 : 1
        });
      }
    }
  }]);

  return Player;
}(_thing2.default);

exports.default = Player;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getId = __webpack_require__(11);

var _getId2 = _interopRequireDefault(_getId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node() {
    _classCallCheck(this, Node);

    this.__isNode = true;
    this.id = (0, _getId2.default)();
    this.parent = null;
  }

  _createClass(Node, [{
    key: 'setParent',
    value: function setParent(parent) {
      this.parent = parent;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.parent.removeChild(this);
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }]);

  return Node;
}();

exports.default = Node;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getId;
var id = 0;

function getId() {
  return id++;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easings = exports.easings = {
  // props to gre (https://gist.github.com/gre/1650294) for this list
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

var Transition = function () {
  function Transition(config) {
    _classCallCheck(this, Transition);

    var defaultConfig = {
      start: 0,
      end: 0,
      duration: 60,
      easing: easings.linear
    };

    config = _extends({}, defaultConfig, config);

    this.start = config.start;
    this.end = config.end;
    this.duration = config.duration;
    this.easing = config.easing;
    this.timer = 0;
  }

  _createClass(Transition, [{
    key: "step",
    value: function step(_step) {
      var t = this.timer / this.duration;
      if (t < 1) {
        this.timer += _step;
        return this.easing(t) * (this.end - this.start) + this.start;
      } else {
        return this.end;
      }
    }
  }]);

  return Transition;
}();

exports.default = Transition;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return __WEBPACK_IMPORTED_MODULE_0__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["b"]; });





















/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
function linear(t) {
  return +t;
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quadIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = quadOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = cubicOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sinIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = sinOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = expOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = circleOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bounceIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = bounceOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getColor;
var COLORS = ['#ffff00', '#00ffff', '#ff00ff'];

function getColor() {
  return COLORS[~~(Math.random() * COLORS.length)];
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(drawingContext, camera) {
    _classCallCheck(this, Renderer);

    this.ctx = drawingContext;
    this.camera = camera;
  }

  _createClass(Renderer, [{
    key: "withStyle",
    value: function withStyle(style, callback) {
      if (style.opacity !== undefined) {
        this.ctx.globalAlpha = style.opacity;
      }

      if (style.stroke) {
        if (style.color !== undefined) this.ctx.strokeStyle = style.color;
        if (style.strokeWidth !== undefined) this.ctx.lineWidth = style.strokeWidth;
      } else {
        if (style.color !== undefined) this.ctx.fillStyle = style.color;
      }

      callback();

      this.ctx.globalAlpha = 1;
      this.ctx.lineWidth = 1;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.camera.width, this.camera.height);
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, radius, style) {
      var _this = this;

      if (this.camera.isInBounds(x, y, radius)) {
        var coords = this.camera.getScreenCoordinates(x, y);

        this.withStyle(style, function () {
          _this.ctx.beginPath();
          _this.ctx.arc(coords.x, coords.y, radius, 0, 2 * Math.PI);

          if (style.stroke) {
            _this.ctx.stroke();
          } else {
            _this.ctx.fill();
          }
        });
      }
    }
  }]);

  return Renderer;
}();

exports.default = Renderer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _rect = __webpack_require__(27);

var _rect2 = _interopRequireDefault(_rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(width, height) {
    _classCallCheck(this, Camera);

    this.center = new _vector2.default(0, 0);
    this.width = width;
    this.height = height;
  }

  _createClass(Camera, [{
    key: 'getScreenCoordinates',
    value: function getScreenCoordinates(x, y) {
      return new _vector2.default(x, y).sub(this.center).add(new _vector2.default(this.width / 2, this.height / 2));
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var tl = new _vector2.default(-this.width / 2, -this.height / 2).add(this.center);
      return new _rect2.default(tl.x, tl.y, tl.x + this.width, tl.y + this.height);
    }
  }, {
    key: 'getRandomInBounds',
    value: function getRandomInBounds() {
      var bounds = this.getBounds();

      return new _vector2.default(Math.random() * bounds.width() + bounds.x1, Math.random() * bounds.height() + bounds.y1);
    }
  }, {
    key: 'setCenter',
    value: function setCenter(x, y) {
      this.center = new _vector2.default(x, y);
    }
  }, {
    key: 'isInBounds',
    value: function isInBounds(x, y) {
      var margin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var bounds = this.getBounds();

      return x + margin > bounds.x1 && x - margin < bounds.x2 && y + margin > bounds.y1 && y - margin < bounds.y2;
    }
  }]);

  return Camera;
}();

exports.default = Camera;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rect = function () {
  function Rect(x1, y1, x2, y2) {
    _classCallCheck(this, Rect);

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  _createClass(Rect, [{
    key: "width",
    value: function width() {
      return Math.abs(this.x1 - this.x2);
    }
  }, {
    key: "height",
    value: function height() {
      return Math.abs(this.y1 - this.y2);
    }
  }]);

  return Rect;
}();

exports.default = Rect;

/***/ })
/******/ ]);
//# sourceMappingURL=main.640ddf6b030c89c8843d.js.map