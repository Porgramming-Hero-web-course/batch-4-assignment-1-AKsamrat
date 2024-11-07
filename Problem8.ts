{
  //
  function validateKeys<T>(obj: T, oKeys: (keyof T)[]): boolean {
    return oKeys.every(key => Object.hasOwnProperty.call(obj, key));
    // const haskey = oKeys.filter(key => obj.hasOwnProperty(key));
    // if (haskey) return true;
    // else return false;
  }
  // const person = { name: 'Alice', age: 25, email: 'alice@example.com' };
  // console.log(validateKeys(person, ['name', 'email']));
  //
}
