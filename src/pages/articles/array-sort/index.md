---
title: Understanding Javascript's Array.prototype.sort beyond 1 to 9
date: '2020-01-16T17:44:54.866Z'
layout: post
draft: false
category: 'Web Development'
path: '/posts/understanding-array-sort'
description: 'Understand Array sorting in javascript using Array.prototype.sort'
featuredImage: ./hero.jpg
tags:
  - 'Web development'
---

![Sorting](./hero.jpg)

_If you have programmed in javascript, chance's are you would have come across Array.prototype.sort. Sometimes it does what you 
want, other times it does what it wants. In this article we will try to understand Array.prototype.sort beyond 1 - 9._ 

If you have had to use this method, like me you can recall having to tweak operators to do what you want.
Well, try `a + b` first (which never does what you want), then `a - b`, occasionally an explicit ternary 😄.
 
It feels very intuitive and seemingly simple to use but not quite straight-forward to understand. Here is the signature;

```typescript
const array = [1,4,3,2,7]
array.sort((a, b) => a - b);
```
- a - first element, or left hand side element
- b - second element, or right hand side element

The comparator `(a,b) => a - b` is expected to return 
 - A negative value if  `a < b`
 - A positive value if  `a > b`
 - Zero if the first and second arguments are equal. Thus `a = b` 

```typescript
const positions = [1,5,7,3,9]
const sorted = [...positions].sort((a, b) => a - b)
console.log(sorted) // [1, 3, 5, 7, 9]

//OR

const sortWithoutCompareFn = [...positions].sort()
console.log(sortWithoutCompareFn) // [1, 3, 5, 7, 9]
```

### Weirdness beyond One, Two, Three

**Sort without a comparator**
```typescript
const positions = [1,5,7,3,9, 10, 100]
positions.sort()
console.log(positions) // [1, 10, 100, 3, 5, 7, 9] ❗️
```
Briefly, if the `comparator` is not provided, then the sort order is ascending/alphabetical. The caveat is that, numbers are converted to strings and their 
UTF-16 unit values are compared hence the unintuitive position of `10` and `100` above. Basically _"1"_ ("1", "10", "100") is smaller that _"3"_.


If you are keen on how the [abstract relation comparison works](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262%209th%20edition%20June%202018.pdf#page=112&zoom=100,45,953), step 3c. 
This is easy to fix by providing a compare function.

**Recap Sort with a comparator**

```typescript
const positions = [1,5,7, 10, 100, 3,9]
const sorted = [...positions].sort((a, b) => a - b)
console.log(sorted) // [1, 3, 5, 7, 9, 10, 100]
```
This behaviour is fairly straight-forward and will behave as intended as long as your comparator returns a number. The expression `Number(campareFn(a,b))`
should not evaluate to `NaN` otherwise `a` and `b` are considered equal thus 0 is returned !.

```typescript
const positions = [1,5,7, 'a', 10, 100, 3,9]
const sorted = [...positions].sort((a, b) => a - b)
console.log(sorted) // [1, 5, 7, "a", 3, 9, 10, 100] ❗️
```
This again is easy to fix by providing a compare function

```typescript
const positions = [1,5,7, 'a', 10, 100, 3,9]
const sorted = [...positions].sort((a, b) => a > b ? 1 : -1)
console.log(sorted) // ["a", 1, 3, 5, 7, 9, 10, 100] ✅
```

**The undefined**
```typescript
const positions = [1, 3, undefined, 5, 2]
const sorted = [...positions].sort((a, b) => a - b)
console.log(sorted) // [1, 2, 3, 5, undefined]
```

`undefined` always compare greater than any value. Here a few simple rules;
  - If a and b are both undefined, 0 is returned thus elements are equal.
  - If a is undefined, return 1.
  - If b is undefined, return -1.


### Take away
To achieve a more deterministic or consistent result, always provide a compare function!
Until next time, stay curious ! 
