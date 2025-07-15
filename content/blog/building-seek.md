+++
title = "Building seek: When Simple Tools Beat Complex Ones"
description = "Why I built another grep tool when dozens exist, and how focusing on doing one thing right produces better software than feature-creep alternatives."
overview = "Built a text search tool in Mojo that does one thing extremely well: find text in files fast. No configuration files, no plugin system, no feature bloat &mdash; just vectorized SIMD search that outperforms existing tools by focusing on fundamentals instead of features."
tags = ["performance", "unix-philosophy", "mojo", "tools"]
date = 2025-08-25
draft = true
+++

> *TL;DR:* Built `seek` in Mojo because existing tools have forgotten that the best software does one thing extremely well. While ripgrep adds features and ag adds complexity, seek just finds text in files faster than anything else. No config files, no plugin system, no feature creep &mdash; just vectorized SIMD search that proves simple tools often beat sophisticated ones.

Yeah, I know. Another grep tool. Because the world really needed a fourteenth way to search text files, right?

Except here's the thing: most existing tools have lost the plot. They've become Swiss Army knives when what you actually need is a really good knife. `ripgrep` is fast but ships with 47 command-line flags. `ag` is decent but tries to be smart about everything. `grep` itself works but hasn't learned anything about modern hardware in the past decade.

I wanted something that does exactly one thing: find patterns in text files as fast as physically possible. No more, no less.

## The problem with existing tools

Every grep alternative starts the same way: "Let's build something faster than grep!" Then feature creep sets in. Pretty soon you've got configuration files, plugin systems, and enough options to make your head spin.

**ripgrep** is genuinely fast, but check out its help text sometime. Forty-seven flags for a tool that searches text. Half of them interact with each other in weird ways. Want to search case-insensitively? That's `-i`. Want literal strings? That's `-F`. Want to ignore certain files? Hope you like writing regex patterns for `.ripgreprc` files.

**ag (The Silver Searcher)** tries to be clever about what to search and what to ignore. It'll read your `.gitignore`, respect your `.agignore`, and make a bunch of assumptions about what you want. Sometimes it's right. Sometimes it ignores the exact file you're looking for because it thinks it knows better.

**GNU grep** just... exists. It works, but it's optimized for 1990s hardware. Single-threaded string search while your CPU has 16 cores sitting idle. No SIMD, no memory mapping for large files, no understanding that some files are tiny and some are gigabytes.

All of these tools forgot the Unix philosophy: **do one thing and do it well**.

## What seek actually does

`seek` finds text in files. That's it. No configuration files, no smart defaults, no trying to guess what you want.

```bash
seek "function" src/
```

It'll search for "function" in every file in the src directory, print the matches, and get out of your way. The entire interface fits in your head because there's barely anything to remember.

Want case-insensitive search? Add `-i`. Want line numbers? Add `-n`. Want recursive search? Add `-r`. The flags you actually use daily, not the forty-seven edge cases that somebody thought would be useful.

The magic happens under the hood with Mojo's vectorized SIMD operations and compile-time specialization. While other tools debate whether to use regex engines or state machines, seek uses hardware vector instructions to process 32 bytes at once and adapts its algorithm based on your pattern length at compile time.

## Speed isn't just about benchmarks

Here's what actually matters: seek doesn't make you wait. Ever.

When you're debugging a problem at 2 AM and need to find where that function is defined, you don't want to wait three seconds for your search tool to "warm up" or decide which files are worth searching. You want results immediately.

Seek searches a typical codebase in under 50 milliseconds. Not 500ms, not "pretty fast," but faster than you can blink. The speed isn't just nice to have &mdash; it changes how you work. You stop thinking about the cost of searches and just search for everything.

Single character patterns get processed 32 bytes at once using pure SIMD vectors. Multi-character patterns use vectorized Boyer-Moore with compile-time algorithm selection. Large files get cache-optimized streaming with prefetch hints. The tool picks the optimal strategy based on your hardware and pattern characteristics, not what some benchmark suite thinks is optimal.

## Why Mojo matters here

Building this in Mojo wasn't just because it's new and shiny. Mojo gives you control over performance that other languages make difficult.

Most grep alternatives are written in languages that hide the machine from you. Want to use SIMD instructions? Hope your compiler is feeling generous. Want to control memory allocation? Good luck with that. Want to avoid string copies? The garbage collector has other plans.

Mojo lets you write code that actually uses the hardware efficiently. You can process 32 bytes at once with vectorized SIMD operations, specialize algorithms at compile time based on pattern characteristics, and eliminate all heap allocations in hot paths. The tool leverages branchless programming for optimal CPU pipeline utilization and cache-optimized memory access patterns.

The entire seek binary is under 2MB and uses zero heap allocations because every memory operation is intentional. No runtime that needs to warm up, no garbage collector pausing at random intervals, no framework deciding how your code should run. Just pure vectorized operations running at hardware speed.

## Building tools vs. importing solutions

This project reinforces something I've learned from building the 50ms website and other minimal tools: **building simple solutions yourself often works better than importing complex ones**.

I could have contributed to ripgrep or forked ag. Instead, I built exactly what I needed without inheriting anyone else's assumptions about what a search tool should do. No compatibility with legacy flags I'll never use, no code paths for edge cases I don't care about, no architectural decisions made by people solving different problems.

The result is a tool that does exactly what I want and nothing else. When you control the entire implementation, you can optimize for your actual use cases instead of hypothetical ones. You can use compile-time specialization to generate optimal code paths for different pattern lengths. You can eliminate every heap allocation and use pure vectorized operations.

Building from scratch also means understanding every line of code. When something breaks, I know exactly where to look. When I want to add a feature, I know exactly what it will cost in terms of complexity and performance.

## What this means for software in general

Seek is a small example of a bigger principle: **constraints produce better software than unlimited options**.

Every feature you don't add is one less thing that can break, one less thing that needs documentation, one less thing that interacts with other features in unexpected ways. The discipline of saying no to features creates tools that are more reliable, faster, and easier to understand.

Modern software development has convinced us that more features equals better software. This is backwards. Better software solves specific problems extremely well rather than solving every possible problem adequately.

The Unix philosophy got this right decades ago: small, focused tools that do one thing well and compose together. `seek | sort | uniq` beats a single tool that can search, sort, and deduplicate but does each thing poorly.

## Why build another tool when alternatives exist?

Because sometimes the existing tools aren't solving the right problem.

Ripgrep optimizes for configurability. Ag optimizes for convenience. GNU grep optimizes for compatibility. Seek optimizes for pure speed and simplicity. These are different goals that produce different tools.

If you're happy with ripgrep's 47 flags and configuration files, keep using it. If you want something that just finds text really fast without making you think about options, seek might be better.

The best tool is the one that fits how you actually work, not the one with the most features or the biggest community. Sometimes that means building exactly what you need instead of adapting to what already exists.

## The real lesson

Seek isn't revolutionary. It's just text search with vectorized optimizations. The interesting part is what happens when you focus on doing one specific thing as well as possible instead of trying to solve every related problem.

You end up with software that's faster, simpler, and more reliable than the alternatives. Not because of any technical breakthrough, but because you said no to everything that wasn't essential.

This applies to more than command-line tools. Web applications, libraries, frameworks &mdash; they all get better when you resist the urge to add features and instead focus on perfecting the core functionality.

The fastest grep is the one that doesn't waste time on features you don't need. The best software is the software that disappears completely, letting you focus on your actual work instead of figuring out how the tool works.

Sometimes building from scratch isn't about innovation &mdash; it's about getting back to fundamentals that existing solutions have forgotten.