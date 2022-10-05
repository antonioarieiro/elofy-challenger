import React from 'react';
import RouterComponent from './_router/RouterComponent';
function App() {

  function checkPalindrome(word:string) {
    var str = word.toLocaleLowerCase()
    for(var a = 0; a < str.length / 2; a++) {
      if(str[a] != str[str.length - a - 1]) {
        console.log(false);
      }
    }
    console.log(true)
  }
  React.useEffect(() => {
   checkPalindrome('Anilina')
   checkPalindrome('Arara')
   checkPalindrome('Esse')
   checkPalindrome('Reviver')
   checkPalindrome('Tases')
  },[])
  return (
    <div className="App">
      <RouterComponent />
    </div>
  );
}

export default App;
