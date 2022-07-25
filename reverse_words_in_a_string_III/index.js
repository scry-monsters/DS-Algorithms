/*557. Given a string s, reverse the order of characters in each word within a sentence while 
still preserving whitespace and initial word order.
Example:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

var reverseWords = function(s) {
     let holder = [];
    let splitty = s.split(" ");
for(let i = 0; i < splitty.length; i++){
    holder.push(splitty[i].split("").reverse().join(""));
}
    return holder.join(" ");
}


console.log(reverseWords("doG gniD"))

























// let arr = s.split(" ");
//   let holder = "";
//      for(let i = 0; i < arr.length; i++){
//        holder += arr[i].split("").reverse().join("") + " ";
//      }
//      return holder.trim();