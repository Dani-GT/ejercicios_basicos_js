const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  let counter = 0;
  for (const item of list) {
    if (typeof item === "string"){
      counter += item.length
    } else {
      counter += item;
    }  
  }
  const average = counter/list.length;
  console.log(average);
}
averageWord(mixedElements)