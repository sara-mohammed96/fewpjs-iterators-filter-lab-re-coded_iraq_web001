// Code your solution here
function findMatching(array,string){
 return array.filter(item => item === string + string.slice(1))
}