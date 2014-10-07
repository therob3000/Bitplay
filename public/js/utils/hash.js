//function lucky_number(server_seed, client_seed, nonce) {
var server_seed = "c8bX0ELYbeoL";
var client_seed = "rLkSBGopoAsbRcmm";
var nonce = "2798";
var hex_chars_to_use = 5;
var hash = crypto.createHmac('sha512', server_seed).update(client_seed + ':' + nonce.toString()).digest('hex');
var len = hash.length;
console.log("Hash Length:" + len);
for (var i = 0; i < len; i += hex_chars_to_use) {
    var hex = hash.substring(i, i + hex_chars_to_use);
    var lucky = parseInt(hex, 16);
    if (lucky < 1000000)
        console.log(lucky);
}

// the 26th substring will always be <4096 (3 hex digits), so we won't get here
util.log(0, 'RAN OUT OF HASH!  using ' + hash + ' - returning', 0);
return 0;
//};