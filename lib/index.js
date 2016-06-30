'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  var start = 0,
      end = 0;

  if (!el) {
    return { start: start, end: end };
  }

  if (typeof el.selectionStart == 'number' && typeof el.selectionEnd == 'number') {
    return { start: el.selectionStart, end: el.selectionEnd };
  }

  if (!document) {
    return { start: start, end: end };
  }

  var range = document.selection.createRange();

  if (!range && range.parentElement() !== el) {
    return { start: start, end: end };
  }

  var len = el.value.length;
  var normalizedValue = el.value.replace(/\r\n/g, "\n");
  var textInputRange = el.createTextRange();

  textInputRange.moveToBookmark(range.getBookmark());

  var endRange = el.createTextRange();

  endRange.collapse(false);

  if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
    start = end = len;
  } else {
    start = -textInputRange.moveStart('character', -len);
    start += normalizedValue.slice(0, start).split("\n").length - 1;

    if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
      end = len;
    } else {
      end = -textInputRange.moveEnd('character', -len);
      end += normalizedValue.slice(0, end).split("\n").length - 1;
    }
  }

  return { start: start, end: end };
};

var setCaretPosition = exports.setCaretPosition = function setCaretPosition(elem, caretPos) {
  if (elem) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();

      range.move('character', caretPos);
      range.select();
    } else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else {
        elem.focus();
      }
    }
  }
};