const wordContainer=document.querySelector(".word");
const check =document.getElementById("check-button");

// a function to check for the palindrome

function isPalindrome(str){
  const cleanedStr=str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

check.addEventListener('click',function(){
  const inputText=document.getElementById("text").value;
  const result=isPalindrome(inputText);

  if(result){
    wordContainer.textContent=`"${inputText}" is a palindrome.Correct!!`;
    wordContainer.style.color="green";
  }else{
    wordContainer.textContent=`"${inputText}" is not a palindrome!`
  }
  document.getElementById("text").value = "";
});

