+++
title = "This Website: 50ms Load Time and Zero Frameworks"
description = "A deep dive into the technical choices and constraints that led to a 50ms load time and zero frameworks on this website."
overview = "Built a portfolio website that loads in under 50ms and weighs only 15KB total &mdash; no React, no build process, no external dependencies. Just HTML, CSS, and minimal JavaScript."
tags = ["portfolio", "bloat", "performance"]
date = 2025-07-11
draft = false
+++

> *TL;DR:* Built a portfolio website that loads in under 50ms and weighs only 15KB total &mdash; no React, no build process, no external dependencies. Just HTML, CSS, and minimal JavaScript. The whole thing proves that embracing constraints and web fundamentals often produces better results than complex frameworks. Great approach for content sites, but obviously not suitable for complex interactive applications. The fastest code is code that doesn't run.

This website loads in under 50 milliseconds and weighs less than 15KB. No React, no build process, no external dependencies, no analytics, no cookie banners. Just HTML, CSS, and a tiny bit of JavaScript that serves content faster than most sites can even load their tracking scripts.

I'm not trying to be retro or nostalgic here. I just wanted to prove that simple solutions actually work better when you focus on what matters: getting content to people quickly and reliably.

My portfolio shows my technical philosophy through what I built, not through marketing copy. While other developer portfolios show off their webpack configs and imported UI libraries, mine shows the discipline to solve problems without adding unnecessary complexity. Turns out, constraints force you to find better solutions than unlimited framework budgets ever do.

## The numbers that actually matter

Lighthouse scores become meaningless when you're already faster than the testing tools themselves. I get 100/100 across all metrics, but not because I optimized for Lighthouse &mdash; it's because there's basically nothing to optimize. No render-blocking resources, no layout shifts, no cumulative layout shift issues. The HTML just renders immediately because it's doing what HTML was designed to do.

The entire site is 15KB. Everything. HTML, CSS, JavaScript, images &mdash; all of it. Most websites ship more data in their analytics scripts alone than my entire site uses. The efficiency comes from building only what I need instead of importing frameworks and hoping tree-shaking will save me.

I make minimal network requests because I have zero external dependencies. One request for HTML, one for CSS, one for JavaScript, and individual requests for images that are already optimized. No CDN round-trips, no font loading, no tracking pixels. The browser doesn't have to negotiate with a dozen external servers just to show a simple portfolio.

Caching works great because my static assets don't change unless they need to. CSS and JavaScript files use content-based hashing for cache busting, but the actual files stay stable between deployments. Browsers cache everything aggressively, so repeat visits are essentially instantaneous.

Time to interactive is the same as time to first paint because there's no JavaScript framework initialization. The page is ready for interaction the moment it renders. No loading spinners, no hydration delays, no client-side routing setup. People can read content and click links immediately &mdash; which is what websites should do by default.

## How I actually built it

The HTML structure is straightforward. Header, navigation, main content, footer. No framework-specific components, no CSS-in-JS abstractions, no build-time template processing. The markup just describes the content structure naturally, which makes it accessible to screen readers and search engines without any extra configuration.

I use modern CSS features without needing polyfills or preprocessors. Grid layouts for complex arrangements, flexbox for alignment, custom properties for theming. I write the stylesheets by hand rather than generating them with frameworks, which gives me precise control over every declaration. No unused styles, no specificity conflicts, no runtime style injection.

JavaScript enhances the experience without breaking core functionality. The site works perfectly with JavaScript disabled, content displays, forms submit. JavaScript just adds convenience features like keyboard shortcuts and smooth scrolling. These are progressive enhancements, not fundamental requirements.

I optimize images during development rather than at build time. I resize, compress, and convert photos to appropriate formats before adding them to the repository. This front-loads the optimization work but eliminates build pipeline complexity and ensures consistent results.

## Design philosophy in practice

I prioritize content over aesthetics in the visual design. Typography is readable, layouts are scannable, navigation is obvious. No hero sections with meaningless marketing copy, no parallax scrolling effects, no autoplay videos. The design serves the content rather than competing with it for attention.

Color choices are intentional and minimal. High contrast for readability, consistent colors for semantic meaning, no unnecessary gradients or visual effects. I use system colors when possible, which reduces bytes transferred and respects user preferences for dark mode or accessibility settings.

Layout adapts to content rather than forcing content into rigid templates. Text flows naturally, images scale appropriately, navigation adjusts to screen size. The responsive behavior emerges from good HTML structure and CSS fundamentals rather than framework-specific utilities.

Loading states don't exist because loading is instantaneous. Progressive enhancement means core functionality works immediately while optional features activate without blocking. Users never wait for content to appear because it's already there in the initial HTML response.

## Simple hosting that scales

The site runs on a basic VPS with nginx serving static files. No CDN, no load balancers, no container orchestration. The server configuration fits in a single file that anyone with basic Linux knowledge can read and modify. Deployment means copying files to the server—no build artifacts, no dependency installation, no environment configuration.

SSL certificates through Let's Encrypt provide HTTPS without ongoing costs or management overhead. Automatic renewal through certbot eliminates certificate expiration issues. The security setup required one afternoon of initial configuration but provides production-quality encryption indefinitely.

Monitoring is minimal because there's little to monitor. Server logs capture access patterns and errors. Uptime monitoring ensures the server responds correctly. No application performance monitoring because there's no application complexity to monitor. Simple systems create simple operational requirements.

Backup is straightforward because the entire site is static files in a git repository. The canonical source lives in version control, making the production server expendable. Recovery from hardware failure means cloning the repository and configuring nginx. No database dumps, no application state restoration, no complex disaster recovery procedures.

Cost optimization happens automatically through efficiency rather than complex pricing optimization. The site uses minimal bandwidth, requires minimal server resources, and generates no external service costs. Monthly hosting costs are predictable and low because resource usage is predictable and low.

## What this says about technical judgment

Building fast websites requires understanding performance fundamentals rather than optimizing complex systems. The fastest code is code that doesn't run. The smallest bundle is no bundle. The most reliable dependency is no dependency. These principles guide architectural decisions that prevent performance problems instead of solving them after they occur.

Technical competence shows through embraced constraints rather than managed complexity. Anyone can build slow websites with modern frameworks. Building fast websites requires understanding web fundamentals well enough to avoid unnecessary abstraction layers. The constraint forces better solutions than unlimited complexity budgets typically produce.

Maintenance simplicity emerges from implementation simplicity. The site requires minimal ongoing attention because there are minimal moving parts to break. Updates mean editing HTML files and copying them to the server. Security patches affect the operating system and web server, not application dependencies. The operational overhead matches the technical complexity.

User experience improves when developer experience focuses on fundamentals rather than tooling sophistication. Understanding HTML, CSS, and JavaScript deeply enables better user interfaces than superficial knowledge of React, Vue, or Angular. The tools should serve the user experience, not the other way around.

## Why this approach actually scales

Team collaboration improves when anyone can understand the entire system. The website's technical architecture fits in one person's head, making it accessible to designers, content creators, and developers regardless of their framework experience. Simplicity enables contribution rather than requiring specialized knowledge.

Content management becomes natural when content is just markdown files in version control. Writers can edit markdown, developers can review changes through pull requests, and deployment happens through git workflows that everyone already understands. No headless CMS, no admin panels, no content management complexity.

Performance optimization is automatic rather than ongoing. The site will load quickly on any reasonably modern connection because it transfers minimal data and requires minimal processing. No performance budgets to monitor, no bundle analysis to perform, no optimization strategies to implement. Good performance emerges from good architecture.

Evolution happens through addition rather than migration. New features become new HTML files or additional CSS rules. No framework upgrades, no dependency updates, no breaking changes to manage. The technical foundation remains stable while functionality grows organically based on actual needs.

## Understanding the limitations

This approach isn't right for complex interactive applications that need dynamic functionality, user authentication, or real-time updates. Single-page applications, e-commerce platforms, and collaborative tools benefit from frameworks designed to manage client-side complexity. The key is matching technical approaches to actual requirements rather than defaulting to industry standards.

But for content-focused websites &mdash; portfolios, blogs, documentation, marketing sites &mdash; simple implementations often work better than complex ones. They load faster, break less frequently, cost less to operate, and stay maintainable over time. The trade-offs favor simplicity when requirements favor content delivery over interactive functionality.

This website proves that performance, simplicity, and functionality aren't mutually exclusive. Good web development means choosing appropriate tools for specific problems rather than applying sophisticated solutions to simple requirements. Sometimes the best technology is the technology that disappears completely, letting you focus on content and user goals rather than technical implementation.

The most important lesson? Constraints often produce better results than unlimited options. Building fast websites requires saying no to features that seem useful but aren't essential. The discipline of building only what's necessary creates better user experiences than accumulating every possible convenience feature.

Modern web development has convinced developers that simple websites require complex tools. This is backwards. Simple websites require simple tools, and complex websites should only use complex tools when the complexity serves specific user needs. Choose based on what you're actually building, not what you might eventually need to build.