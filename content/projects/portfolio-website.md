+++
title = "Portfolio Website"
description = "A blazingly fast, zero-framework portfolio that loads in 50ms and weighs 15KB total"
overview = "Built a portfolio website that proves constraints produce better solutions than unlimited complexity budgets. Loads faster than most sites can initialize their tracking scripts."
draft = false
date = 2025-07-11
tags = ["performance", "minimalism", "web-fundamentals"]
www = "https://wherd.dev"
github = "https://github.com/wherd/wherd.dev"
status = "Released"
features = ["50ms load time with 15KB total size", "Zero external dependencies or frameworks", "100/100 Lighthouse scores across all metrics"]
+++

## A website that actually loads fast

This thing loads in under 50 milliseconds and weighs less than 15KB total. No React, no webpack, no external dependencies, no analytics tracking you around the web. Just HTML, CSS, and a bit of JavaScript that gets content to people faster than most sites can even start loading their bloated tracking scripts.

Started as an experiment: what if I just said no to the entire modern web development stack? Turns out, when you stop importing half of npm and actually write code yourself, you end up with something that's genuinely fast. Who would've thought.

## Why it's actually fast (spoiler: it's not rocket science)

**Lighthouse scores become meaningless** when you're already faster than the testing tools. I get 100/100 across everything, but not because I spent weeks optimizing &mdash; there's just nothing to optimize. No render-blocking junk, no layout shifting around, no cumulative layout shift nonsense. The HTML renders immediately because that's what HTML was designed to do before we broke it with frameworks.

**Zero external dependencies** means the browser makes one request for HTML, one for CSS, one for JavaScript. That's it. No waiting for Google Fonts, no CDN round-trips to twelve different servers, no tracking pixels phoning home. Your browser doesn't have to play phone tag with the entire internet just to show you a portfolio.

**Instant interactivity** because there's no JavaScript framework that needs to *"boot up"* and *"hydrate"* and do whatever other nonsense modern frameworks do before letting you click a link. The page works the moment it appears. Crazy concept, I know.

## Hosting that doesn't suck

Runs on a basic VPS with nginx serving static files. No CDN, no load balancers, no Kubernetes cluster that requires a PhD to understand. The entire server config fits in one file that any developer with basic Linux knowledge can read without crying.

Deploying means copying files to the server. No build artifacts, no npm install taking forever, no environment variables to mess up. SSL through Let's Encrypt because free certificates that auto-renew are better than expensive ones you have to babysit.

Monitoring? Server logs and basic uptime checks. That's it. There's nothing complex enough to break, so there's nothing complex to monitor. The whole thing just works because simple things tend to work.

## What I learned (and why it matters)

**The fastest code is code that doesn't run.** Sounds obvious, but apparently the entire JavaScript ecosystem missed this memo. Want a fast website? Don't make the browser download and execute 2MB of React just to show some text and images.

**Constraints make you better.** Anyone can build a slow website by importing every npm package that looks useful. Building something fast forces you to actually understand HTML, CSS, and JavaScript instead of just copying code from Stack Overflow and hoping it works.

**Simple systems don't break.** This site needs almost zero maintenance because there's almost nothing to break. Updates mean editing HTML files. No framework migrations, no dependency hell, no security patches for packages I don't even use.

The whole thing proves that modern web development has this backwards. We've convinced ourselves that simple websites need complex tools, when really it's the opposite. Save the frameworks for when you actually need them.

## The point of all this

Look, this approach isn't right for everything. If you're building a complex web app with real-time updates and user authentication, you probably need more than vanilla HTML and CSS. But for a portfolio? For a blog? For most content websites? All that framework complexity is just making things slower and harder to maintain.

This project proves you can build something fast, simple, and functional without importing half the internet. Sometimes the best technology is the technology that gets out of your way and lets you focus on actually solving problems.

Most importantly: constraints aren't limitations—they're opportunities to find better solutions. When you can't just throw another framework at a problem, you have to actually understand the problem. And usually, the solution is simpler than you think.