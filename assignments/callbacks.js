const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  let passedItem = arr[0]
    if (typeof cb === "function") {
      cb(passedItem)}
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
let arraylength = arr.length
  if (typeof cb === "function") {
    cb(arraylength)
  }
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
let endItem = arr[arr.length-1]
  if (typeof cb === "function") {
    cb(endItem)
  }
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
let theSum = x+y
  if (typeof cb === "function") {
    cb(theSum)
  }
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
let theProduct = x*y
  if (typeof cb === "function") {
    cb(theProduct)
  }
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
let inOrOut = list.includes(item)
  if (typeof cb === "function") {
    cb(inOrOut)
  }
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = array.filter(function(item, position) { 
  return array.indexOf(item) == position })

  if (typeof cb === "function") {
    cb(newArray)
    }
  }
