!function(e){"function"==typeof define&&define.amd?define(["moment"],e):"object"==typeof exports?module.exports=e(require("../moment")):e(window.moment)}(function(e){return e.lang("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xu\xf1o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xu\xf1._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_M\xe9rcores_Xoves_Venres_S\xe1bado".split("_"),weekdaysShort:"Dom._Lun._Mar._M\xe9r._Xov._Ven._S\xe1b.".split("_"),weekdaysMin:"Do_Lu_Ma_M\xe9_Xo_Ve_S\xe1".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextDay:function(){return"[ma\xf1\xe1 "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"\xe1s":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"\xe1":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"\xe1s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return"uns segundos"===e?"nuns segundos":"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinal:"%d\xba",week:{dow:1,doy:7}})});