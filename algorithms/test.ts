


//  num1 

const nums1 = [1,2,3, 0,0, 0]// m = 3
const nums2 = [4,5, 6]; //n = 3


function quickSort(arr){

  let left = [];

  let right = [];


  const pivot = Math.floor(arr.length / 2);

  const midlle = arr.split(pivot, 1)

  for(let i = 0; i < arr.length; i++){

    if(arr[i] <= pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(midlle, quickSort(right))

}


const srotedNums1 = quickSort(nums1)


const srotedNums2 = quickSort(nums2)

const result = 






function nums2SortToNumbs1(nums1, nums2, m, n ){
    // 遍历nums1 
    for(let i = 0; i < nums1.length; i++ ){
      const cur = nums1[i];

      const firstNumberOfNumber2 = nums2[0]
      if(firstNumberOfNumber2 <= cur){
        nums1.splice(i, 0, firstNumberOfNumber2)
        nums2.shift()
      }
    }
    return nums1
}