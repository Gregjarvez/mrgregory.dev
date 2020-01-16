---
title: Components of the internet for web developers.
date: '2019-11-28T21:42:55.781Z'
layout: post
draft: true
category: 'Web development'
path: '/posts/how-the-internet-works'
description: 'Javascript setTimeout is variadic and not many people talk about it'
featuredImage: ./hero.jpg
tags:
  - 'Web development'
---


![Internet router](./hero.jpg)

_This article is a comprehensive guide on how the internet works, You will learn about ISP, IP, The protocol stack , packets and what role they play._

Often when i ask someone how the internet works, they briefly mention DNS resolution, request and response and end it right there. Well, these are very crucial 
parts of what makes the internet tick, but is a very small part of the entire picture. We will explore to a good depth (the interview answer) how data is transferred across the internet.


Every computer connected to the internet has an [IP address](#IP-Address) assigned to them by the [Internet Protocol](#Internet-Protocol). If computer A sends a message "Hello World" to 
computer B, the message would obviously be marhshalled and transmitted over some kind of wire that connects computer A to the internet. The message is sent over the internet using the 
[Protocol stack](#Protocol stack), every computer one needs one these to communicate over the internet. The protocol stack used on the internet is called the [TCP/IP](#TCP/IP).

Ok that is it folks, those are what makes the internet tick. let's look at them into details.




