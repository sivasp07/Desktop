let str1=['l','i','s','t','e','n'];
let str2=['s','i','l','e','n','t'];
function areAnagram(str1,str2){
let n1=str1.lenth;
let n2=str2.lenth;
if(n2!=n1)
return false;
str1.sort();
srt2.sort();
if(str1!=str2)
return false;
else
return true;
if(areAnagram(str1,str2))
console.log("the two strings are"+"anagram of each other");
else
console.log("the two stings are"+"not anagram of each other");
}