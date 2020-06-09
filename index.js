// Code your solution here
function findMatching(array,string){
 return array.filter(item =>  item === string.charAt(0).toUpperCase() || item ===string.charAt(0).toLowerCase()+ string.slice(1))
}