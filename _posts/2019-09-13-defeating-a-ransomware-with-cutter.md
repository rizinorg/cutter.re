---
layout: post
title: "Defeating a Ransomware using Cutter's Emulation"
date: 2019-09-13 
tags: ["Guest article"]
categories: []
author: cutter
post_image: "/assets/images/blog/posts/ransowmare-cutter-emulation/cover.png"
---


<p>Last week I attended the <a href="https://www.radare.org/con/2019/">r2con conference</a> for the first time (for those who haven't heard about it before, it is a reverse engineering conference focused on <a href="https://www.radare.org/r/">radare2</a>) and apart from listening to great talks, I signed up for the basic trainings since I had not used r2 in the past and my RE experience is quite basic. One of the trainings was "Dissecting binaries with Cutter" given by <a href="https://twitter.com/xarkes_">Antide Petit</a>, <a href="https://twitter.com/megabeets_">Itay cohen</a>, and <a href="https://twitter.com/thestr4ng3r">Florian Märkl</a>. It was an introduction to the official GUI application for r2, <a href="https://cutter.re/">Cutter</a>.</p>

<p>During the training, there were 3 different exercises and one of them was about reversing a binary called <em>"M1ghty Ransomware.exe"</em> which by the name of it, you can guess what it is. Along with the binary, there was also a PNG file called <em>"flag.png"</em> that was encrypted by the malware. We had to use Cutter to analyse the binary and figure out the encryption algorithms, the keys used for the encryption, and finally write a script to decrypt the png file. Sounds easy, right? Well, it took me a while to figure it out. Let's dissect it.</p>

<a href="http://camaya.co/posts/2019/09/11/defeating-a-ransomware-with-cutter/" target="_blank" class="dwn-btn3 btn btn-primary"><span>Read on Cristhian Amaya's website</span></a>
<but>
