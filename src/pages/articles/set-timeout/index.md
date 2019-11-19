---
title: Javascript setTimeout, the parameters no one uses
date: '2019-11-14T23:15:23.645Z'
layout: post
draft: false
category: 'Web development'
path: '/posts/setTimeout-is-variadic'
description: 'Javascript setTimeout is variadic and not many people talk about it'
featuredImage: ./old-clock.jpg
tags:
  - 'Web development'
---

![Old timer](./old-clock.jpg)

_Javascript setTimeout function takes more than just 2 arguments but not a lot of people talk about its variadic nature.
This article will reintroduce you to javascript's setTimeout function and what variadic functions are._

If you have conjured any form of javascript timer or done any asynchronous programming, you would have come across the setTimeout function.
Typically, it takes a function as the first argument and timeout number as the second to say the least. Often, this signature
is the one you see the most. So far so good.

Here is what I just said in code.

```javascript
setTimeout(() => window.scrollTo(0, 0), 2000);
```

Okay, I said earlier that setTimeout was variadic. So what exactly is a **variadic function**.
A **variadic function** is a function that takes an indefinite number of arguments. Yeah that is it 😅. There are some variadic functions in javascript,
A lot of which you use every 😄. `console.log`, `Array.of`, `Array.concat`, `Object.assign`, and of course `setTimeout` to name a few.
If you had to write a signature for this type of function it would look something like this.

```typescript
declare function iAmVariadic(...args: unknown[]): unknown;
```

Okay that was a bit of a tangent but the bright side is we know a variadic function when we see one 😉.

**What makes setTimout variadic**

**setTimeout** accepts any number of arguments after the commonly known ones and thus variadic. Here is a typescript declaration expressing what
I mean.

```typescript
declare function setTimeout(
  handler: Function | string,
  timeout?: number,
  ...arguments: unknown[]
): number;
```

And yes you read correctly, the first argument can be of type string. The string literal is compiled and executed similar to what `eval` does.
Shocking ay.

Often I see people create throwaway lambda/functions which wraps their handler. Here is a piece of code that
resets scroll position after x number of milliseconds.

```typescript
setTimeout(
  () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
  2000,
);
```

I did not talk about the what `...arguments` was in the declaration above. You might have guessed it. The `...rest` is passed to the handler as arguments
in the order they are specified.

```typescript
setTimeout(window.scrollTo, 2000, {
  top: 0,
  left: 0,
  behavior: 'smooth',
});

// Or
setTimeout(window.scrollTo, 2000, 0, 0);
```

After 2000 milliseconds, `window.scollTo` is called with the arguments specified. Shiny right ?.
Any number of arguments can be passed following the timeout parameter. This can a little weird to get used to.

**If you are using typescript, It is important to know that typescript does not statically check the arguments list passed after the timeout parameter.
You essentially lose every type checking.**

```typescript
function println(arg1: number, arg2: number) {
  console.log(arg1, arg2);
}

println(); // ❌ Invalid number of arguments, expected 2
println(1, 'string'); // ❌ Argument of type "string" is not assignable to type number.
println(1, 1); // ✅

setTimeout(println, 0, 1, 'string'); // 🤔 Typescript has no clue
```

Alright now that you know about the variadic nature of `setTimeout`, cut back on throwaway functions will you 😃.
Until next time folks, stay curious

Hero image by
<a 
                  style="background-color:black;
                         color:white;
                         text-decoration:none;
                         padding:4px 6px; 
                         font-size:12px; font-weight:bold; line-height:1.2; display:inline-block; border-radius:3px"
                         href="https://unsplash.com/@jamessutton_photography?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer">
<span style="display:inline-block;padding:2px 3px">
<svg style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32">
<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">
James Sutton
</span>
</a>
