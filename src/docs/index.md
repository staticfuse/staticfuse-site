---
path: "/gatsby-wordpress"
title: "Headless WordPress With Gatsby"
---

So you've heard about Gatsby, but what is it really about? How does it work with WordPress?

**This guide is everything you need to know to get up to speed, and start your first project.**

## What is Gatsby?

Gatsby 

JAMstack is an ambiguous term used to describe modern web front-ends. Technically it means Javascript APIs and Markup, and it refers to a website front end that is using those technologies. That includes Gatsby, Next.js, many progressive web apps, and sites that use plain ol’ Javascript, HTML, and CSS. This stack is way to separate your front end from your back end, which is a contrast to PHP sites and other similar technologies.

Many sites been using this stack for years, it’s nothing new. So why is it such a big deal?

## Why Use Gatsby?

Speed, Security, and Scalability
Gatsby, Next.js and others allow you to create a front-end that is focused on performance, security, and scalability for any data source.

The reason this is important is because it’s not just a small iteration on speed and security, it’s a huge leap.

### Speed

The speed is not just fast, it’s almost instant. It doesn’t take an expensive host with the world’s most advanced caching rules to make it fast, it’s fast out of the box on cheap hosting.

### Security

As for security, if you are using static files, there’s nothing to hack. You don’t have to configure a plugin or setup special security controls on Nginx to be safe, secure is the default. Many sites will use dynamic content which has security implications, but the point I’m making is that we are starting with security and performance, not adding it on later.

That means a PHP based CMS like WordPress can have a headless or decoupled front-end (like this site), and it’s fast and secure. Click around my site to see an example of the speed. Guess how much I’m paying for hosting to get a site this fast? Free-99. Zero dollars.

Of course you can use any data source, including markdown files, a headless CMS like Contentful, an API like meetup.com events or Shopify products, etc.

### Scalability

Because performance is the default, and you are rendering most content server-side, scaling is easy. Serving a bunch of static files is an easy job for any web host, and even with millions of hits you don’t need your own server farm.

When using a PHP based website with a database, you need to optimize queries and fix all of your performance issues before you can start scaling. With JAMstack, it’s scalable out of the box.

### GraphQL

Along with the new wave of front-end technologies, we also have new APIs like GraphQL. GraphQL allows you to make more performant requests to your APIs by building your own queries for only what you need. I won’t go into this too deeply here, but suffice it to say that it’s faster than REST, and it’s baked into Gatsby. There’s even a plugin for WordPress to add GraphQL.

## Why Gatsby With WordPress?

## Create Your First Gatsby + WordPress Site

### What is the structure and workflow of a Gatsby + WP site?

You have a WP site hosted somewhere, with a couple extra plugins (wpgraphql). For example at backend.mycompany.com

Gatsby is a separate React based project that pulls in WP data, it lives in a github repo
Your Gatsby project is deployed to a static host like Netlify (easy to setup, free) and it lives on your public domain mycompany.com (or whatever)
When you publish a new post, our plugin tells Netlify to rebuild and push it live. This can take a few minutes.

### Using a Gatsby Theme

What is a Gatsby theme
How to fire up a new project
How to connect your WordPress data with wpgraphql

### Deploying to the Web

Netlify
Deploy plugin