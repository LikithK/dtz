# dtz
A simple JavaScript library to work with date and time zones.

#How to use?
1. Download the minified version(dtz.min.js) or the original one(dtz.js).
2. Use the dtz object to call functions!

dtz.getUTCDateTime();//Gives date object in UTC

dtz.getDay().today();//Gives day in words(ex: Mon)

dtz.getFullDay().tomorrow();//Gives day in words(ex: Wednesday)

dtz.getTimeZoneDateTime(offsetRelativetoUTCInHours);//Gives date object depending on the offset relative to UTC

dtz.getTimeZoneDateTime(-4);//Gives date object UTC-4

dtz.getTimeZoneDateTime(5.5);//Gives date object UTC+530
