!function(t){"use strict";t.extend(t.fn.select2.defaults,{formatNoMatches:function(){return"\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1"},formatInputTooShort:function(t,n){var o=n-t.length;return"\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 "+o+" \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03bf"+(1==o?"":"\u03c5\u03c2")+" \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1"+(1==o?"\u03b1":"\u03b5\u03c2")},formatInputTooLong:function(t,n){var o=t.length-n;return"\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03c4\u03b5 "+o+" \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1"+(1==o?"\u03b1":"\u03b5\u03c2")},formatSelectionTooBig:function(t){return"\u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03b5\u03c4\u03b5 \u03bc\u03cc\u03bd\u03bf "+t+" \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd"+(1==t?"\u03bf":"\u03b1")},formatLoadMore:function(){return"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03c9\u03bd..."},formatSearching:function(){return"\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7..."}})}(jQuery);