// Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
// Usa la función .includes de javascript.

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

const newList = [];

for (const item of products) {
    if (item.includes('Camiseta')){
      newList.push(item)
    }
}
console.log(newList)