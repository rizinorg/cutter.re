---
layout: post
title: "Improving Decompiler Widget - GSoC Project"
date: 2020-05-20
tags: ["Decompiler", "GSoC"]
categories: ["Cutter", "Decompiler", "GSoC"]
author: nirmal_manoj
post_image: "/assets/images/blog/posts/improving-decompiler-widget-gsoc/decompiler_1.png"
description: "The decompiler widget is now responsive then ever! Read about the improvements made possible by Nirmal, a GSoC student"
---

<!-- <meta name="twitter:image:src" content="https://cutter.re/assets/images/blog/posts/survey-2020/survey2020.png"> -->
My name is Nirmal Manoj. I am a second-year CS undergraduate student at IIIT Hyderabad, India. This summer, I participated in a GSoC project for radareorg. The main aim of my project is to improve the decompiler interface in the cutter.

As a part of my project, I worked on multiple repositories, including cutter, r2ghidra-dec, and radare2. I have also sent a couple of patches to the retdec-r2plugin. The following sections sum up the important work that I have done and its impacts. Each section will describe some specific features or important API that I have worked on. It will also have links to the code and discussions related to that topic. 

## Shifting of RAnnotatedCode to radare2 for making it the standard decompiler interface

> Context: Cutter’s decompiler didn’t have a good enough decompiler interface for supporting context-sensitive actions. A basic structure named `RAnnotatedCode` and some useful API functions were already present in r2ghidra-dec for storing the information we get from the Ghidra decompiler.

After discussions in the community, we decided to use `RAnnotatedCode` as the standard decompiler interface across all the decompilers in the cutter. The related work involved shifting `RAnnotatedCode` API from r2ghidra-dec to radare2. I also implemented unit tests for nine API functions related to `RAnntoatedCode`.

Cutter supports three decompilers: R2Ghidra(plugin for Ghidra), R2Dec, and R2RetDec(plugin for RetDec). The output from all these decompilers was being parsed into a custom structure named `AnnotatedCode`. The cutter’s decompiler used this. Even then, internally, r2ghidra-dec and r2retdec used `RAnnotatedCode`. After I shifted `RAnnotatedCode` to radare2, I sent patches to both r2ghidra-dec and r2retdec to use `RAnnotatedCode` directly from radare2.

Related PRs:

1. radare2 [PR #16939](https://github.com/radareorg/radare2/pull/16939): Shifting RAnnotatedCode to radare2:
2. r2ghidra-dec [PR #107](https://github.com/radareorg/r2ghidra-dec/pull/107): Patching r2ghidra-dec after migrating RAnntoatedCode to use radare2:
3. retdec-r2plugin [PR #16](https://github.com/avast/retdec-r2plugin/pull/16): Patching retdec-r2plugin after migrating RAnnotatedCode to radare2

## Enabling cutter to use RAnnotatedCode for the decompiler

This involved refactoring the decompiler widget to use `RAnnotatedCode` instead of the custom `AnnotatedCode` we have been using. Using `RAnnotatedCode` will enable the cutter to have more data about the decompiled code that is essential for implementing a dedicated context menu. I also worked on refactoring all the decompiler plugins (r2dec, r2ghidra-dec, r2retdec) to emit RAnnotatedCode directly to the cutter.

Related PRs:

1. cutter [PR #2227](https://github.com/radareorg/cutter/pull/2227): Refactored Decompiler Widget and R2Dec Plugin to use RAnnotatedCode. 
    The description of this PR contains more precise details on the significant changes.
2. r2ghidra-dec [PR #112](https://github.com/radareorg/r2ghidra-dec/pull/112): Emit RAnnotatedCode to Cutter (r2ghidra-dec)
3. retdec-r2plugin [PR #16](https://github.com/avast/retdec-r2plugin/pull/17)

