!function(e){"function"==typeof define&&define.amd?define(["moment"],e):"object"==typeof exports?module.exports=e(require("../moment")):e(window.moment)}(function(e){function n(e,n,r,t){var a=e;switch(r){case"s":return t||n?"n\xe9h\xe1ny m\xe1sodperc":"n\xe9h\xe1ny m\xe1sodperce";case"m":return"egy"+(t||n?" perc":" perce");case"mm":return a+(t||n?" perc":" perce");case"h":return"egy"+(t||n?" \xf3ra":" \xf3r\xe1ja");case"hh":return a+(t||n?" \xf3ra":" \xf3r\xe1ja");case"d":return"egy"+(t||n?" nap":" napja");case"dd":return a+(t||n?" nap":" napja");case"M":return"egy"+(t||n?" h\xf3nap":" h\xf3napja");case"MM":return a+(t||n?" h\xf3nap":" h\xf3napja");case"y":return"egy"+(t||n?" \xe9v":" \xe9ve");case"yy":return a+(t||n?" \xe9v":" \xe9ve")}return""}function r(e){return(e?"":"[m\xfalt] ")+"["+t[this.day()]+"] LT[-kor]"}var t="vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");return e.lang("hu",{months:"janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),monthsShort:"jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),weekdays:"vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),weekdaysShort:"vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return r.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return r.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m\xfalva",past:"%s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinal:"%d.",week:{dow:1,doy:7}})});