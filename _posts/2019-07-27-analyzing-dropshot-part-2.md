---
layout: post
title: "Decrypting APT33’s Dropshot Malware with Radare2 and Cutter – Part 2"
date: 2019-07-26 15:12:09 +0600
tags: Plugins
categories: [Plugins Cutter]
author: itay_cohen
post_image: /assets/images/blog/posts/dropshot-analysis/dropshot_part2.png"
---

# Prologue

<p>Previously, in the first part of this article, we used Cutter, a GUI for radare2, to statically analyze APT33’s Dropshot malware. We also used radare2’s Python scripting capabilities in order to decrypt encrypted strings in Dropshot. If you didn’t read the first part yet, I suggest you do it <a href="https://www.megabeets.net/decrypting-dropshot-with-radare2-and-cutter-part-21">now</a>.</p><p>Today’s article will be shorter, now that we are familiar with cutter and r2pipe, we can quickly analyze another interesting component of Dropshot — an encrypted resource that includes Dropshot’s actual payload. So without further ado, let’s start.</p>

<a href="https://www.megabeets.net/decrypting-dropshot-with-radare2-and-cutter-part-2/" target="_blank" class="dwn-btn3 btn btn-primary"><span>Read on megabeets.net</span></a>
<but>