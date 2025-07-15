+++
title = "seek"
description = "Vectorized SIMD text search tool that does one thing extremely well"
overview = "Built a text search engine in Mojo that outperforms existing tools by leveraging hardware vector instructions and zero-allocation algorithms. No configuration files, no plugin system, no bloat &mdash; just the fastest text search you'll find."
draft = true
date = 2025-08-11
tags = ["performance", "mojo", "unix-philosophy", "simd", "vectorization"]
github = "https://github.com/wherd/seek"
download = "https://github.com/wherd/seek/releases"
status = "Released"
features = ["Sub-50ms search times on typical codebases", "Vectorized SIMD operations processing 32 bytes per instruction", "Zero heap allocations in hot paths", "Compile-time algorithm specialization", "Cache-optimized memory access patterns"]
+++

## A text search tool that actually respects your time

Seek finds text in files faster than you can blink. Not "pretty fast" or "fast enough" &mdash; actually fast. Built in Mojo with vectorized SIMD operations and compile-time specialization that existing tools can't match.

Started because I got tired of waiting for search results. Ripgrep has 47 command-line flags, ag tries to be smart about everything, and GNU grep pretends modern CPUs don't exist. Sometimes you just want a tool that finds text without the philosophy lecture.

## Why it's genuinely fast (and why that matters)

**Vectorized SIMD operations** process 32 bytes per instruction instead of one character at a time. Most grep tools are written in languages that make this optimization difficult or impossible.

**Compile-time algorithm specialization** generates optimal code paths for different pattern lengths. Single characters use pure vectorized scanning, short patterns use SIMD micro-matching, and long patterns use vectorized Boyer-Moore.

**Zero-allocation design** means no heap allocations in hot paths, no runtime to warm up, no garbage collector pausing randomly. The entire binary is under 2MB because every byte serves a purpose.

**Cache-optimized memory access** through aligned memory operations, prefetch hints, and processing data in cache-friendly chunks. Modern CPUs reward predictable memory patterns.

The speed isn't just nice to have &mdash; it changes how you work. When searches are instant, you stop thinking about the cost and just search for everything. No more hesitating before running grep on a large codebase.

## Built with constraints that make it better

**No configuration files** because the tool should work perfectly out of the box. If you need to configure a text search tool, the tool is solving the wrong problem.

**Minimal flags** with only the options you actually use daily. Case-insensitive search (`-i`), line numbers (`-n`), recursive search (`-r`). No flags for edge cases that 99% of users will never need.

**Single purpose focus** on finding text in files. No trying to be smart about what to search, no plugin system, no attempting to solve every text-processing problem. Just search, extremely well.

**Zero dependencies** means no supply chain issues, no version conflicts, no security vulnerabilities in packages you don't control. The entire tool is self-contained and deploys as a single binary.

## Technical approach that actually works

**Vectorized SIMD processing** uses hardware vector instructions to process multiple bytes simultaneously. Single character searches can process 32 bytes per instruction on modern CPUs.

**Compile-time algorithm selection** generates specialized code paths based on pattern characteristics. The compiler chooses optimal strategies rather than runtime decisions adding overhead.

**Branchless programming** eliminates branch prediction misses through packed flag operations and SIMD mask techniques. Modern CPUs reward predictable execution patterns.

**Cache-optimized data structures** with aligned memory access patterns and prefetch hints. Processing data in cache-friendly chunks maximizes memory bandwidth utilization.

The implementation focuses on the common case (searching source code and text files) rather than trying to handle every possible edge case that might exist in theory.

## Why Mojo makes the difference

**Direct hardware control** lets you use vectorized SIMD instructions, eliminate heap allocations, and avoid abstraction layers that make other tools slower than necessary.

**Compile-time optimization** through parameter specialization and algorithm selection. The compiler generates optimal machine code for specific pattern lengths and hardware capabilities.

**Zero-allocation design** where all data structures live on the stack or use memory-mapped operations. No garbage collection, no heap fragmentation, no unpredictable performance.

**Branchless programming** support through SIMD mask operations and packed data structures. Modern CPUs reward predictable execution patterns with better pipeline utilization.

Most grep alternatives are written in languages that prioritize developer convenience over performance. Mojo lets you optimize for both: Python-like syntax with assembly-level control over the machine.

## What this proves about tool design

**Constraints create better software** when you say no to features that aren't essential. Every feature you don't add is one less thing that can break or slow down the core functionality.

**Hardware-aware programming** produces dramatically better results than hoping frameworks optimize for you. Understanding SIMD, cache behavior, and memory patterns matters more than adding features.

**Compile-time optimization** often beats runtime flexibility. Specializing algorithms based on known characteristics produces faster code than dynamic dispatch and runtime decisions.

**Zero-allocation design** eliminates entire classes of performance problems. When nothing allocates, there's no memory pressure, no fragmentation, and no unpredictable pauses.

The Unix philosophy got this right: do one thing and do it well. Seek proves this approach still produces better software than trying to solve every related problem in a single tool.

## Real-world impact

**Development workflow improvement** because instant search results remove the mental friction of finding code. You search more often when searches don't make you wait.

**Large codebase handling** that actually works on multi-gigabyte repositories without bringing your machine to a crawl or consuming excessive memory through zero-allocation streaming.

**Deployment simplicity** with a single binary that works immediately without installation procedures, configuration files, or dependency management.

**Predictable performance** regardless of file types, directory structure, or system load. The tool uses the same vectorized algorithms consistently, producing deterministic execution times.

This isn't about building the most feature-complete search tool. It's about building the fastest, most reliable tool for the specific task of finding text in files. Sometimes doing less, but doing it with hardware-level optimization, produces better results than doing everything adequately.