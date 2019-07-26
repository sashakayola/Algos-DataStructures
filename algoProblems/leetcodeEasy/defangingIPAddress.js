// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function(address) {
    // need to put every character in an array because can't replace the characters in a string because pass by value
    address = address.split('')
    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            address[i] = '\[.\]'
        }
    }
    
    return address.join('')
};
