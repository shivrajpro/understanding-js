// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

/**
 Pete likes to bake some cakes. He has some recipes and ingredients. 
 Unfortunately he is not good in maths. Can you help him to find out, 
 how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients 
(also an object) and returns the maximum number of cakes Pete can bake (integer).
 For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are 
simply 1 or 200).
 Ingredients that are not present in the objects, can be considered as 0.
 */

 // must return 2
 const a1 = cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
const a2 = cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
    {sugar: 500, flour: 2000, milk: 2000}
);
console.log(a1);
console.log(a2);
function cakes(recipe, available) {
    // TODO: insert code
    let numberOfCakes = 0;
    if(Object.values(recipe) >= Object.values(available)){
        for (const ing in recipe)
            available[ing] -= recipe[ing];
        while(hasMoreIngredients(available)){
            for (const ing in recipe)
                available[ing] -= recipe[ing];
            numberOfCakes++;
        }
    }
    return numberOfCakes;
}

function hasMoreIngredients(ingredients) {
    const amountAvailable = Object.values(ingredients);
    for (let i = 0; i < amountAvailable.length; i++)
        if(amountAvailable[i] <= 0) return false;
    return true;
}