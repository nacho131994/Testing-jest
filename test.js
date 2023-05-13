// // importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// // comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     //dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });

test('One euro should be 1.2 USA dollars', function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(1)).toBe(1.2)
})

test('Ten dollars should be 1279  Japanese yens', function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1279)
})

test("Twenty yen should be 16  British pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(20)).toBe(16);
})