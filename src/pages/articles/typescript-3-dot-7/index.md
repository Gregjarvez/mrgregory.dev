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

_Typescript recently released version 3.7 which provides support for anticipated features such as
Optional chaining and Nullish Coalescing along with tasty ts improvements and features. Here is a summary of the juicy bits._

If you are unfamiliar with [typescript](https://github.com/microsoft/TypeScript), it is basically type-safe javascript.
A feature complete version was recently released and along with this release came some of the most requested features. Here is all you need to know
about the most interesting part of the beta release.

### Optional chaining operator

Optional chaining is a long awaited feature. This language feature was proposed almost 3 years ago and is finally here.
Up until now, the logical operator `&&` has remaining a popular way to "short circuit" code execution. When accessing property values
buried deep, there is usually a need to check if the value exist before chaining on. Here is an example

```typescript
declare var axiosError;

if (axiosError && axiosError.response && axiosError.response.status === 404) {
}

declare var accounts;

const account = accounts.find(a => a.hasTransactions); // Possibly returns undefined
const transactionId =
  account && account.transactions && account.transactions.transactionId;
```

The logical operator `&&` is used to terminate the execute as soon a falsy value (0, undefined, null, "") is encountered.
Meet the **optional chaining operator** `?.`. Similarly, it short circuits and returns undefined when a property value is either **null**
or **undefined**. Note empty strings and 0 are valid operands for this operator ⚠️.
Okay, here is the same code above using optional chaining operator.

```typescript
declare var axiosError;

if(axiosError?.response?.status === 404)
  history.pushState(null, null, "https://mrgregory.dev/404")

declare var accounts;

const account = accounts.find(a => a.hasTransactions); // Possibly returns undefined
const transactionsId = account?.transactions?.transactionId
```

All the conditional branches out of sight ! Handy isn't it ?.
The typescript playground is a great place to see the transpiled output.

```javascript
// Transpiled output.
// NOTE that it only checks whether or not the property value is null or undefined (void 0)
// Returns undefined if value is non-existent.
const account = {};

// account?.merchant
const merchant = account === null || account === void 0 ? void 0 : _a.merchant;
```

Now that we've seen how it works. Lets see a few variation of how it is typically used.
Here is a summary,

```typescript
declare var tween;

tween?.config.colors?.[0].setHue?.(60).result
```

**Optional property access**
This is described in the example above.

```javascript
const transactionId = account?.transactions?.transactionsId;
```

**Optional element access**
This is similar to _optional property access_ but allows dynamic property access.

```typescript
declare var todos;

const todo = todos?.[0];
```

**Optional call**
This is a variation of optional property access for nullable/undefined methods;

```typescript
function getIterator (arg?: any[]) {
 return arg[Symbol.iterator]?.();
}
```

I urge you to [try these out](./https://www.typescriptlang.org/play/index.html)
and see the transpiled output of these example for clarity ! 😀.

### Nullish Coalescing

The nullish coalescing operator `??` is the a complementary operator of optional chaining operator.
Similar to `||` logical operator, It provides a way to fallback. The difference here is that,
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

const multiplier = tween.config.animation.multiplier || 1000; // multiplier falls back to 2
const timing = tween.config.animation.timing || 'linear'; // timing falls back to 'linear'
const delay = tween.config.animation.delay || 1000; // delay falls back to 1000 😬⚠️.
const hidden = tween.config.animation.startHidden || true; //  😬⚠️.
```

We risk property valid/present property values falling back to something else. Nullish coalescing is especially
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
const node = document.querySelector('#article')
const dataTestId = node?.getAttribute("data-testid") ?? 'raw-article';
```

There were other tasty treats in this release such us Assertion Functions, Better Support for never-Returning Functions,
Recursive Type Aliases, Uncalled Function checks etc. [See](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) 
for what is new.
