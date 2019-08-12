chrome.browserAction.onClicked.addListener(function (tab) {
    SetTransferArea(completed_number("51", 16));
});

function SetTransferArea(str) {
    document.oncopy = function (event) {
        event.clipboardData.setData("text/plain", str);
        event.preventDefault();
    };
    document.execCommand("copy", false, null);
}

function strrev(str) {
   if (!str) return '';
   var revstr='';
   for (i = str.length-1; i>=0; i--)
       revstr+=str.charAt(i)
   return revstr;
}

function completed_number(prefix, length) {
    var ccnumber = prefix;
    while ( ccnumber.length < (length - 1) ) 
        ccnumber += Math.floor(Math.random()*10);
    var reversedCCnumberString = strrev( ccnumber );
    var reversedCCnumber = new Array();
    for ( var i=0; i < reversedCCnumberString.length; i++ ) 
        reversedCCnumber[i] = parseInt( reversedCCnumberString.charAt(i) );
    var sum = 0;
    var pos = 0;
    while ( pos < length - 1 ) {
        odd = reversedCCnumber[ pos ] * 2;
        if ( odd > 9 ) 
            odd -= 9;
        sum += odd;
        if ( pos != (length - 2) ) 
            sum += reversedCCnumber[ pos +1 ];
        pos += 2;
    }
    var checkdigit = (( Math.floor(sum/10) + 1) * 10 - sum) % 10;
    ccnumber += checkdigit;
    return ccnumber;
}