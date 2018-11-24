var human = {
    species: "human",
    create: function(values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(key => {
            instance[key] = values[key];
        });
        return instance;
    },
    getSpecies: function() {
        console.log(this.species);
    },
    getName: function() {
        console.log(this.name);
    }
};

var will = human.create({name: "Wills", play: "Drums"});

console.log(will);

console.log(will.getName());