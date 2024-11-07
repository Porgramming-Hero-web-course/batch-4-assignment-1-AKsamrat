# CALLBAKCS

A JavaScript callback is a function which is to be executed after another
function has finished execution . Any function that is passed as an argument to
another function so that it can be executed in that other function is called as
a callback function. This results in callback hell.

```tsx
const fruits = ['apple', 'orange', 'banana'];
const displayFruits = disaplay => {
  setTimeout(() => {
    disaplay(fruits[0]);
    setTimeout(() => {
      disaplay(fruits[1]);
    }, 1000);
  }, 1000);
};

const display = fruits => {
  console.log('Displaying', fruits);
};

displayFruits(display);
```

Output: Displaying apple Displaying banana

# Promises

A promise is an object that will produce a single value sometime in the future.
If the promise is successful, it will produce a resolved value, but if something
goes wrong then it will produce a reason why the promise failed. Simply It
behaves very much similar to real life promises.

```tsx
const fruits = ['apple', 'orange', 'banana'];
const displayFruits = (fruit, disaplay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      disaplay(fruit);
      res(true);
    }, 1000);
  });
};
const displayAllFruits = display => {
  displayFruits(fruits[0], display)
    .then(() => displayFruits(fruits[1], display))
    .then(() => displayFruits(fruits[2], display))
    .catch(err => console.log(err));
};

const display = fruits => {
  console.log('Displaying', fruits);
};

displayFruits(display);
```

Output: Displaying apple Displaying orange Displaying banana
