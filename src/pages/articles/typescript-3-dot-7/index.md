---
title: Typescript 3.7 The juicy bit
date: '2019-11-06T21:53:17.113Z'
layout: post
draft: false
category: 'Web development'
path: '/posts/typescript-3-7'
description: 'Optional chaining, Nullish Coalescing support in typescript 3.7'
featuredImage: ./hero.jpg
tags:
  - 'Web development'
  - 'Typescript'
---

![Typescript playground](./hero.jpg)

_Typescript recently released version 3.7 which provides support for anticipated features such as the
Optional chaining and Nullish Coalescing operators, along with tasty improvements and features.
Here is a summary of the juicy bits._

If you are unfamiliar with [typescript](https://github.com/microsoft/TypeScript), it is basically type-safe javascript.
A feature complete version was recently released and along with this release came some of the most requested features.
Here is all you need to know about biasedly 😛 the most interesting part of the recent release.

### Optional chaining operator

Optional chaining is a long awaited feature. It was proposed almost 3 years ago and is finally officially supported by typescript.
When accessing object property values buried deep, there is usually a need to check if the value exist before chaining on.
This is also true for the return values some of the standard language APIs as well. The logical operator `&&` has remained a popular way to "short circuit"
code execution in conditional statements. Despite its verbosity, it works great in most cases.

```typescript
declare var accounts;
declare var axiosError;

const didError =
  axiosError && axiosError.response && axiosError.response.status === 404;

const transaction =
  accounts &&
  accounts.transactions &&
  accounts.transactions.find(a => !a.isPending); //😬 
```

The logical operator `&&` is used to terminate the execute as soon a falsy value (0, undefined, null, "", NaN) is encountered.
Meet the **optional chaining operator** `?.`. Similarly, it short circuits the chain of property accesses and returns `undefined` when a left-hand operand is either 
**null** or **undefined**. Note empty strings and 0 are valid operands for this operator ⚠️.
Okay, here is the same code above using optional chaining operator.

```typescript
declare var accounts;
declare var axiosError;

const didError = axiosError?.response?.status === 404
const transaction =  accounts?.transactions?.find(a => !a.isPending); // Hello there gorgeous 😄.
```
All the conditional branches and verbosity is  out of sight ! Handy isn't it ?.

```javascript
// Transpiled output.
// NOTE that it only checks whether or not the property value is null or undefined (void 0)
// Returns undefined if value is non-existent.
const account = {};

// account?.merchant
const merchant = account === null || account === void 0 ? void 0 : _a.merchant;
```

Now that we've seen how the operator works, let's see the semantics.

**Optional property access**<br />
Allows property access if the operand on the left-side of the the operator is not `null` or `undefined`.

```javascript
const transactionId = account?.transactions?.transactionsId;
```

**Optional element access** <br />
This is similar to _optional property access_ but allows dynamic property access.

```typescript
declare var todos;

const todo = todos?.[0];
```

**Optional call** <br />
This is a variation of optional property access for nullable/undefined methods;

```typescript
function getIterator (arg?: any[]) {
 return arg[Symbol.iterator]?.();
}
```

**Short-circuiting**
Because the chain is terminated when the expression on the left-hand side evaluates to `null` or `undefined`, we are able to do this.
Following expression is not executed.

```typescript
declare var source;
declare var next: number;

source?.[next++]  // next is not incremented if source is `undefined` or `null`
```

**Stacking**
Finally, the semantics above can be utilised in a single property access chain. Below we see the use of
_optional property access_, _optional elements access_ and _optional call_ in a single chain expression.

```typescript
declare var tween;

tween?.config.colors?.[0].setHue?.(60).result
```

I urge you to try these out on the typescript [playground](./https://www.typescriptlang.org/play/index.html)
and see the transpiled output of these examples for completeness ! 😀.

### Nullish Coalescing
The nullish coalescing operator `??` is a complementary operator to the optional chaining operator.
Similar to `||` logical operator, It provides a way to "fallback". The difference here is that,
it only falls back when the operand is either `null` or `undefined`, whereas `||` will do for falsy values (`NaN`, `false`, `0`, `''`).

**Before**

```typescript
const tween = {
  type: 'Mother ship',
  config: {
    colors: [],
    animation: { multiplier: null, delay: 0, startHidden: false },
  },
};

const multiplier = tween.config.animation.multiplier || 2; // multiplier falls back to 2
const timing = tween.config.animation.timing || 'linear'; // timing falls back to 'linear'
const delay = tween.config.animation.delay || 1000; // delay falls back to 1000 😬⚠️.
const hidden = tween.config.animation.startHidden || true; //  😬⚠️.
```

We risk valid/present property values falling back to something else. Nullish coalescing is especially
useful where we expect common cases of `null` or `undefined`.

**After**

```typescript
const tween = {

  type: 'Mother ship',
  config: {
    colors: [],
    animation: { multiplier: null, delay: 0, startHidden: false  },
  },
};

// Undefined/null
const multiplier = tween.config.animation.multiplier ?? 2; // multiplier:2
const timing = tween.config.animation.timing ?? 'linear'; // timing:'linear'

//falsy values
const delay = tween.config.animation.delay ??  1000; // delay:0 ✅.
const hidden = tween.config.animation.startHidden || true; //hidden: false ✅.
```

**Use with optional chaining**

```typescript
declare var player
const playerScore = player?.score ?? 1; // playerScore is 1 if score has value  null or undefined. 0 is a valid score !.
```

There are other tasty treats in this release such as Assertion Functions, Better Support for never-Returning Functions,
Recursive Type Aliases, Uncalled Function checks etc. [See](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)
for what is new. Until next time stay curious.
