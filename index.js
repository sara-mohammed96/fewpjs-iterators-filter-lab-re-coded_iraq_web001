// Code your solution here
function findMatching(array,string){
 return array.filter(item => item === string.toLowerCase() || element === string.toUpperCase() || element === string.charAt(0).toUpperCase() + string.slice(1))
}