function cakes(recipe, available) {
    let max = Infinity;

    Object.keys(recipe).forEach(ingredient => {
        const store = available[ingredient] || 0;
        if (store / recipe[ingredient] <= max) {
            max = Math.floor(store / recipe[ingredient]);
        }
    });
    return max;
}