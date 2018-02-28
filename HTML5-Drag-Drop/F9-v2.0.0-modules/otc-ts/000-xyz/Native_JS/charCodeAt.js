"\n".charCodeAt(0);
// 10
"\n".charCodeAt();
// 10


`a`.charCodeAt(0);
// 97
`a`.charCodeAt();
// 97

`a`.charCodeAt(1);
// NaN


`a`.codePointAt();
// 97

`97`.codePointAt();
// 57

`97`.charCodeAt();
// 57



`97`.charAt();
// "9"
`97`.charAt(0);
// "9"
`97`.charAt(1);
// "7"

String.fromCodePoint(`97`);
// "a"

String.fromCodePoint(1);
// ""
String.fromCodePoint(0);
// " "

/*


https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript


https://websitebuilders.com/tools/html-codes/a-z/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint




*/
