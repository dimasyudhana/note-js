console.log(arguments);
console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5)); // 7 

// exports
// const calc2 =  require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(2, 5)); // 10

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

// dari module turun ke hati <<< ini namanya caching yang di executing sekali
// log this text
// log this text
// log this text

// dimasyudhana@LAPTOP-MFFJ933U:~/node-js/event-loop$  node modules.js
// [Arguments] {
//   '0': {},
//   '1': [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },
//     main: Module {
//       id: '.',
//       path: '/home/dimasyudhana/node-js/event-loop',
//       exports: {},
//       filename: '/home/dimasyudhana/node-js/event-loop/modules.js',
//       loaded: false,
//       children: [],
//       paths: [Array]
//     },
//     extensions: [Object: null prototype] {
//       '.js': [Function (anonymous)],
//       '.json': [Function (anonymous)],
//       '.node': [Function (anonymous)]
//     },
//     cache: [Object: null prototype] {
//       '/home/dimasyudhana/node-js/event-loop/modules.js': [Module]
//     }
//   },
//   '2': Module {
//     id: '.',
//     path: '/home/dimasyudhana/node-js/event-loop',
//     exports: {},
//     filename: '/home/dimasyudhana/node-js/event-loop/modules.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/home/dimasyudhana/node-js/event-loop/node_modules',
//       '/home/dimasyudhana/node-js/node_modules',
//       '/home/dimasyudhana/node_modules',
//       '/home/node_modules',
//       '/node_modules'
//     ]
//   },
//   '3': '/home/dimasyudhana/node-js/event-loop/modules.js',
//   '4': '/home/dimasyudhana/node-js/event-loop'
// }

// [
//     '(function (exports, require, module, __filename, __dirname) { ',
//     '\n});'
//   ]