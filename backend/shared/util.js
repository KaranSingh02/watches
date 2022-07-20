module.exports=class Util{
    static filterUndefinedValues(object) {
    if (!object && object.constructor.name !== "Object") {
        return object;
    }
    const returnObject = {};

    /* Iterate over keys and filter out the falsy values in object. */
    Object.keys(object).forEach((key) => {
        if (object[key] !== undefined) {
            returnObject[key] = object[key];
        }
    });

    return returnObject;
}
}