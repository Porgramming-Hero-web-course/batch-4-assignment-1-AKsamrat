{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (obj: Profile, Update: Partial<Profile>): Profile => {
    const modifyObj: Profile = { ...obj, ...Update };

    return modifyObj;
  };
  // const myProfile = {
  //   name: 'Alice',
  //   age: 25,
  //   email: 'alice@example.com',
  // };
  // console.log(updateProfile(myProfile, { name: 'Samrat' }));
  //
}
