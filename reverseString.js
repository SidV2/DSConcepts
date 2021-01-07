
function reverse(str) {
    if(str || str.length > 2 || typeof(str) === string) {
        const newArray = [];
        for(var i = str.length - 1; i >= 0; i--) {
            newArray.push(str[i]);
        }
        var reversedString = newArray.toString();
        return reversedString.replace(/,/g, '');
    }
} 

