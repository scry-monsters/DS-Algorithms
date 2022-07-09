/*557. Given a string s, reverse the order of characters in each word within a sentence while 
still preserving whitespace and initial word order.
Example:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

var reverseWords = function(s) {
  let arr = s.split(" ");
  let holder;
     for(let i = 0; i < arr.length; i++){
       holder = arr[i].split(" ");
       let start = 0;
       let end = arr.length - 1;
       while(start <= end){
        let switcher = holder[end][i];
        holder[end][i] = holder[start][i];
        holder[start][i] = switcher;
        start++;
        end--;
       }
     }
     return holder;
};


console.log(reverseWords("doG gniD"))