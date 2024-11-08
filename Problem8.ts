{
  //
  type User = {
    name: string;
    age: number;
    email: string;
  };

  function validateKeys<T extends User>(obj: T, oKeys: (keyof T)[]): boolean {
    return oKeys.every(key => obj.hasOwnProperty(key));
    // const haskey = oKeys.filter(key => obj.hasOwnProperty(key));
    // if (haskey) return true;
    // else return false;
  }
  // const person = { name: 'Alice', age: 25, email: 'alice@example.com' };
  // console.log(validateKeys(person, ['name', 'email']));
  //
}
