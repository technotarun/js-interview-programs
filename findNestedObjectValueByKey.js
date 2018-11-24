let nestedObj = {
	id: 1,
    name: 'tarun',
    address: {
        village: 'dingamanik',
        post: 'sekati',
        house: {
            housenumber: 123,
            landmark: 'dps',
            position: {
                longitude: 12,
                latitude: 21
            }   
        }
    }
};


let findValueInNestedObj = function(nestedObj, key) {
	if(nestedObj.hasOwnProperty(key)) {
    	found = nestedObj[key];
    }
    
    for(let item in nestedObj) {
    	if(typeof nestedObj[item] === 'object'){
    		findValueInNestedObj(nestedObj[item], key);
    	}
    }
    
    return found;
}

console.log(findValueInNestedObj(nestedObj, 'latitude'));
