!function(e){"use strict";var n={2:function(e){return e?"dva":"dv\u011b"},3:function(){return"t\u0159i"},4:function(){return"\u010dty\u0159i"}};e.extend(e.fn.select2.defaults,{formatNoMatches:function(){return"Nenalezeny \u017e\xe1dn\xe9 polo\u017eky"},formatInputTooShort:function(e,t){var o=t-e.length;return 1==o?"Pros\xedm zadejte je\u0161t\u011b jeden znak":4>=o?"Pros\xedm zadejte je\u0161t\u011b dal\u0161\xed "+n[o](!0)+" znaky":"Pros\xedm zadejte je\u0161t\u011b dal\u0161\xedch "+o+" znak\u016f"},formatInputTooLong:function(e,t){var o=e.length-t;return 1==o?"Pros\xedm zadejte o jeden znak m\xe9n\u011b":4>=o?"Pros\xedm zadejte o "+n[o](!0)+" znaky m\xe9n\u011b":"Pros\xedm zadejte o "+o+" znak\u016f m\xe9n\u011b"},formatSelectionTooBig:function(e){return 1==e?"M\u016f\u017eete zvolit jen jednu polo\u017eku":4>=e?"M\u016f\u017eete zvolit maxim\xe1ln\u011b "+n[e](!1)+" polo\u017eky":"M\u016f\u017eete zvolit maxim\xe1ln\u011b "+e+" polo\u017eek"},formatLoadMore:function(){return"Na\u010d\xedtaj\xed se dal\u0161\xed v\xfdsledky..."},formatSearching:function(){return"Vyhled\xe1v\xe1n\xed..."}})}(jQuery);