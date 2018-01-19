


if (!Object.keys){
    Object.keys = function(obj) {
        if (obj !== Object(obj)){
            throw new TypeError('Object.keys called on a non-object');
        }
        var k = [], p;
        for (p in obj){
            if (Object.prototype.hasOwnProperty.call(obj, p)){
                k.push(p);
            };
            return k;
        }
    };
}




