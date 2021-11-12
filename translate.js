const num = 216; // bits --> 11011000
const zeroSuppress = (num, len) => num.toString(2).slice(len);

for (let i = 0; i < 4; i ++) {

    let PERFECT = !!(num >> (i * 2) & 1 && num >> (i * 2 + 1) & 1);
    let YES = !!(num >> (i * 2) & 1);
    let NO = !!(num >> (i * 2 + 1) & 1);

    let res = PERFECT ? "PERFECT" : YES ? "YES" : NO ? "NO" : "BAD";

    console.log("num >> ", res)
}
