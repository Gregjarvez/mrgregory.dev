---
title: The internet, a high level overview.
date: '2019-11-28T21:42:55.781Z'
layout: post
draft: false
category: 'Web development'
path: '/posts/components-of-the-internet-and-how-it-works'
description: 'What the internet is made of, How the internet work'
featuredImage: ./hero.jpg
tags:
  - 'Web development'
---

![Internet router](./hero.jpg)

_This article is a comprehensive guide on the different components that makes up the internet._

The internet, the one thing we use daily but haven't really taken the time to understand it, even at a high level. 
If you are like me, you have probably read an article on this subject numerous times and somehow managed to forget it 😅.
This article highlights the most important components of the internet. I found that, it is easier to piece them together once you have
an idea what they all are. I will attach good old wikipedia links to detailed explanations of each of the different components. 

### Internet Address
Here is a good place to begin, the moment you connect a device to the internet, it is assigned a unique IP address. 
This is primarily how the devices connected to the internet are distinguished. It takes the format nnn.nnn.nnn.nnn
`nnn` is a number between 0 and 255. If you connect to the internet via an ISP, you are probably assigned a temporary public IP address.
You can easily find this on google. Search "What is my IP".

Further reading [https://en.wikipedia.org/wiki/IP_address](Internet Address).

### Protocol Stack
Okay, so you are connected to the internet and have a unique IP address. You are ready to send and receive some form of data across the internet.
This is achieved using the **protocol stack**. Every device needs one to communicate over the internet, it is usually built into the operating system.
The protocol stack used on the internet is the **TCP/IP**
 
Further reading [https://en.wikipedia.org/wiki/Protocol_stack](Protocol stack).

### TCP/IP protocol stack.
As mentioned before, this is the protocol stack used on the internet to transform outgoing data from text to electronic signals and vice versa.
**TCP/IP** is made of two major communication protocols (TCP and IP). TCP/IP protocol stack specifies how data is broken into manageable chunks(packets), addressed, transmitted, routed 
and received by the destination host reliably. TCP/IP is made of 4 layers. **Application protocol layer**, **Transport Layer**, **Network Layer** and the **hardware or physical layer**.

Further reading [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite)
 
#### Application protocol layer

Examples of application layer protocols are File Transfer Protocol(FTP), Simple Mail Transfer Protocol(SMTP), Hypertext Transfer Protocol Secure(HTTPS), TELNET and DNS. 
This is the first protocol in the stack. Most of what the user closely interacts with is at this layer. 
If you fired up your favourite browser (chrome) and visited a webpage, it uses the HTTP or HTTPS application protocol.
 
Further reading [Application Protocol Layer](https://en.wikipedia.org/wiki/Application_layer)

#### Transport Layer
The two main transport protocols are Transmission Control Protocol (TCP) and User Datagram Protocol (UDP). 
This layer is responsible for establishing and maintaining a connection between a source and destination host across a network. The connection is stateless. They work in conjunction with
the IP layer and breaks messages into smaller manageable chunks called packets/datagram, addresses, and routes packets to and from applications via port numbers.
TCP is [connection-oriented](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment), reliable and solves many problems regarding packets loss, corruption etc by using an error-checked delivery mechanism. 
[User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) is connectionless and sometimes used instead of TCP. It offers a low-latency packet(datagram) transfer but isn't reliable
(no error-checked delivery mechanism,no guarantee of delivery and no correction is attempted when datagram is corrupted unlike TCP).

#### Network Layer (Internet Layer)
At a high level, this layer is simple yet probably the most important. It delivers packets to a destination host using IP
addresses in the packet headers thus enabling **Internetworking**. IPv4 is dominantly used on the internet, IPv6 is the next version of the Internet Protocol.
The network layer protocols are __Internet Protocol__ and __Internet Control Message Protocol (ICMP)__. 
Internet protocol layer provides identification and a location system for devices on a network and routes packets across the internet. Internet Control Message Protocol is used for error reporting by network devices.
Further reading [Network Layer](https://en.wikipedia.org/wiki/Network_layer)

#### Hardware Layer
This is the lowest layer in the stack. Its role is more with the physical transmission of raw bits. Here, packets are converted to electronic signals or converted from network signals to packets.
Network cards and modems etc are examples in this layer. 

Okay, that is comprehensive summary of what the internet is made up of. There is more obviously, **Networking Infrastructure**, **Internet Infrastructure**, **Domain names and Address Resolution** 
are very crucial parts of the internet too.  
 
