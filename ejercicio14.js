const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
   const counter = {};

   for (const word of list) {

    if (counter[word]){
        counter[word]++;
    } else {
        counter[word] = 1;
    }
   };
   console.log(counter)
}

    
    repeatCounter(words)