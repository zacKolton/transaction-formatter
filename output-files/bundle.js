/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./helper-js/fileUpload.js":
/*!*********************************!*\
  !*** ./helper-js/fileUpload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-utils */ "./helper-js/format-utils.js");

document.getElementById('drop-area').addEventListener('dragover', function (event) {
  event.preventDefault();
  event.stopPropagation();
  this.style.backgroundColor = '#f0f0f0';
});
document.getElementById('drop-area').addEventListener('drop', function (event) {
  event.preventDefault();
  event.stopPropagation();
  event.dataTransfer.dropEffect = 'copy';
  if (event.dataTransfer.files.length > 0) {
    const file = event.dataTransfer.files[0];
    processCSV(file);
  }
  this.style.backgroundColor = '';
});
function processCSV(file) {
  const reader = new FileReader();
  reader.onload = function (event) {
    console.log('File is being read.'); // Debug log
    const text = event.target.result;
    const allRows = text.split('\n');
    let headerFound = false;
    let table = document.createElement('table');
    table.innerHTML = '<tr><th>Transaction Date</th><th>Description</th><th>Transaction Amount</th></tr>';
    for (let i = 0; i < allRows.length; i++) {
      const row = allRows[i];
      if (!headerFound) {
        if (row.trim().startsWith('Item #')) {
          headerFound = true;
          console.log('Header found at line:', i); // Debug log
        }
      } else {
        const cols = row.split(',');
        if (cols.length >= 6) {
          const formattedDate = (0,_format_utils__WEBPACK_IMPORTED_MODULE_0__.formatDate)(cols[2].trim());
          const negatedAmount = (0,_format_utils__WEBPACK_IMPORTED_MODULE_0__.negateAmount)(cols[4].trim());
          const html = `<tr><td>${formattedDate}</td><td>${cols[5].trim()}</td><td>${negatedAmount}</td></tr>`;
          table.innerHTML += html;
        }
      }
    }
    document.getElementById('table-container').innerHTML = '';
    document.getElementById('table-container').appendChild(table);
    console.log('Table should now be visible.'); // Debug log
  };
  reader.readAsText(file);
}

/***/ }),

/***/ "./helper-js/format-utils.js":
/*!***********************************!*\
  !*** ./helper-js/format-utils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   negateAmount: () => (/* binding */ negateAmount)
/* harmony export */ });
function formatDate(dateStr) {
  if (dateStr.length === 8) {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${month}/${day}/${year}`;
  }
  return dateStr;
}
function negateAmount(amountStr) {
  // Check if the amount already starts with a minus
  if (amountStr.trim().startsWith('-')) {
    return amountStr.trim().substring(1);
  } else {
    return '-' + amountStr.trim();
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_js_fileUpload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-js/fileUpload.js */ "./helper-js/fileUpload.js");
/* harmony import */ var _helper_js_format_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-js/format-utils.js */ "./helper-js/format-utils.js");
// Helpers


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map