---
layout: post
title: "Improving Decompiler Widget - GSoC Project"
date: 2020-08-31
tags: ["Decompiler", "GSoC"]
categories: ["Cutter", "Decompiler", "GSoC"]
author: nirmal_manoj
post_image: "/assets/images/blog/posts/improving-decompiler-widget-gsoc/decompiler_cover.png"
description: "The decompiler widget is now responsive than ever! Read about the improvements made possible by Nirmal, a GSoC student"
---

My name is Nirmal Manoj. I am a second-year CS undergraduate student at IIIT Hyderabad, India. This summer, I participated in a [Google Summer of Code](https://summerofcode.withgoogle.com/) project for [radareorg](https://github.com/radareorg/). The main goal of my project is to improve the decompiler interface in Cutter.

As a part of my project, I worked on multiple repositories, including [Cutter](https://github.com/radareorg/cutter/), [r2ghidra-dec](https://github.com/radareorg/r2ghidra-dec/), and [radare2](https://github.com/radareorg/radare2/). I have also sent a couple of patches to the [retdec-r2plugin](https://github.com/avast/retdec-r2plugin). The following sections sum up the important work that I have done and its impacts. Each section will describe specific features or important API that I have worked on. It will also have links to the code and discussions related to that topic. 

## Creating a standard decompiler interface

Cutter’s decompiler didn’t have a good enough decompiler interface for supporting context-sensitive actions. A basic structure named `RAnnotatedCode` and some useful API functions were already present in r2ghidra-dec for storing the information we get from the Ghidra decompiler.

After discussions in the community, we decided to use `RAnnotatedCode` as the standard decompiler interface across all the decompilers used in Cutter and Radare2. The related work involved shifting `RAnnotatedCode` API from r2ghidra-dec to radare2. I also implemented unit tests for API functions related to `RAnnotatedCode`.

Currently, Cutter supports three decompilers: [R2Ghidra](https://github.com/radareorg/r2ghidra-dec)(plugin for Ghidra), [R2Dec](https://github.com/radareorg/r2dec-js), and [RetDec-Radare2](https://github.com/avast/retdec-r2plugin)(plugin for RetDec). The output from all these decompilers was being parsed into a custom structure named `AnnotatedCode` to use in Cutter.  Even then, internally, r2ghidra-dec and retdec-radare2 used `RAnnotatedCode`. After I shifted `RAnnotatedCode` to radare2, I sent patches to both r2ghidra-dec and retdec-radare2 to use `RAnnotatedCode` directly from radare2.

### Related PRs:

1. radare2 [PR #16939](https://github.com/radareorg/radare2/pull/16939): Shifting RAnnotatedCode to radare2
2. r2ghidra-dec [PR #107](https://github.com/radareorg/r2ghidra-dec/pull/107): Patching r2ghidra-dec after migrating RAnntoatedCode to use radare2
3. retdec-r2plugin [PR #16](https://github.com/avast/retdec-r2plugin/pull/16): Patching retdec-r2plugin after migrating RAnnotatedCode to radare2

## Allow Cutter to use RAnnotatedCode for the decompiler

This involved refactoring the decompiler widget to use `RAnnotatedCode` instead of the custom `AnnotatedCode` it has been using. Using `RAnnotatedCode` will enable Cutter to have more data about the decompiled code that is essential for implementing a dedicated context menu. I also refactored the decompiler plugins (r2dec, r2ghidra-dec, r2retdec) to emit RAnnotatedCode directly to Cutter.

### Related PRs:

1. cutter [PR #2227](https://github.com/radareorg/cutter/pull/2227): Refactored Decompiler Widget and R2Dec Plugin to use RAnnotatedCode. 
    The description of this PR contains more precise details on the significant changes.
2. r2ghidra-dec [PR #112](https://github.com/radareorg/r2ghidra-dec/pull/112): Emit RAnnotatedCode to Cutter
3. retdec-r2plugin [PR #16](https://github.com/avast/retdec-r2plugin/pull/17): Emit RAnnotatedCode from decompileAt() 

## Implementing a skeleton for the decompiler context menu 

This involves me making a context-menu with a single action for the decompiler. I replaced the disassembly context menu completely in the decompiler widget. The only action implemented along with the context menu skeleton was an action to copy selected decompiled code.

GIF that shows the decompiler context menu with just copy action
![skeleton-copy](/assets/images/blog/posts/improving-decompiler-widget-gsoc/skeleton-copy.gif)

### Related PR:
1. cutter [PR #2256](https://github.com/radareorg/cutter/pull/2256): Dedicated decompiler context menu (skeleton) with an action to copy selected code

## Implementing actions for debugging 
This involved me implementing actions for toggling breakpoint, accessing the menu for advanced breakpoint definition, and also for two other debugging related actions in the decompiler context menu. Multiple breakpoints could exist in a decompiled code line, as that’s often a more straightforward representation of multiple lines in assembly. The option to choose the breakpoint that a user wants to edit from the breakpoints list was also implemented. 

The following GIFs show key functionalities.

Demonstrating toggling of breakpoints
![toggle-breakpoint](/assets/images/blog/posts/improving-decompiler-widget-gsoc/toggle-breakpoint.gif)

Demonstrating the ability to choose the breakpoint in a line for opening the edit breakpoint menu.
![edit-advanced-breakpoint](/assets/images/blog/posts/improving-decompiler-widget-gsoc/edit-advanced-breakpoint.gif)

### Related PR
1. cutter [PR #2260](https://github.com/radareorg/cutter/pull/2260): Breakpoint Menu and Debug Menu in the Decompiler Context Menu

## Insertion and manipulation of comments in the decompiled code 
This involves implementing offset annotation for comments in r2ghidra-dec and implementing actions to add, edit, and delete comments in the decompiler context menu.

The following GIF demonstrates the actions.
![comment-display](/assets/images/blog/posts/improving-decompiler-widget-gsoc/comment-display.gif)

### Related PRs
1. cutter [PR #2265](https://github.com/radareorg/cutter/pull/2265): Comment-related actions for the Decompiler Context Menu
2. r2ghidra-dec [PR #121](https://github.com/radareorg/r2ghidra-dec/pull/121): Implemented offset annotation for comments

## Implementing function name annotation and rename function action 
This involved introducing a new type of annotation for function names in radare2 and implementing an annotator to annotate function names in r2ghidra-dec. I have also implemented a rename function action along with these. Other actions are implemented using this annotation. They will be shown in later sections.

GIF demonstrating rename function action:
![rename-function-action](/assets/images/blog/posts/improving-decompiler-widget-gsoc/rename-function-action.gif)

### Related PRs
1. radare2 [PR #17204](https://github.com/radareorg/radare2/pull/17204): Annotation for function name
2. r2ghidra-dec [PR #123](https://github.com/radareorg/r2ghidra-dec/pull/123): Function name annotation annotator implemented
3. cutter [PR #2286](https://github.com/radareorg/cutter/pull/2286): Action to rename functions in the decompiler context menu

## Implementing annotations for global variables, constant variables, and related actions 
This involved consolidating all references (function names, global variables, and constant variables) under a single structure called a "reference". Two new annotation types were also introduced to accommodate global variables and constant variables. Also, annotators were implemented for these new types of annotations in r2ghidra-dec. 

The decompiled code shown in the decompiler widget represents and refers to specific memory addresses in the binary. The ability to view these addresses in other widgets such as Hexdump or Disassembly can be very handy. For this, I created a "show-in" menu that allows the user to open the address related to the decompiled code under the cursor in other widgets. These other widgets include Hexdump, Graph, and Disassembly. One other related feature that can become useful is opening a reference in another widget. For instance, a function referenced under the cursor can be opened in a new decompiler widget or a graph widget. A targeted show-in menu for references was implemented for this. In this same PR, actions for adding, renaming, and deleting global variable names were implemented. See GIFs below to see the functionality implemented.

Along with these features, actions for copying instruction address and also reference’s address were implemented. The normal copy action was enhanced to copy a highlighted word to the clipboard if there is no text currently selected by the user. In the event where there is no highlighted word or selection, the entire line of code under the cursor will be copied to the clipboard. 

Demonstrating show-in menu
![show-in-disassembly](/assets/images/blog/posts/improving-decompiler-widget-gsoc/show-in-disassembly.gif)

Demonstrating targeted show-in menu. Here, the function referenced under the cursor is opened in a new widget.
![show-in-new-graph](/assets/images/blog/posts/improving-decompiler-widget-gsoc/show-in-new-graph.gif)

Demonstrating adding, renaming, and deleting global variable names
![manipulate-global-variable](/assets/images/blog/posts/improving-decompiler-widget-gsoc/manipulate-global-variable.gif)

Demonstrating enhanced copy action
![copy-actions](/assets/images/blog/posts/improving-decompiler-widget-gsoc/copy-actions.gif)


### Related PRs
1. radare2 [PR #17281](https://github.com/radareorg/radare2/pull/17281): Annotations for Constant Variables and Global Variables for the decompiler
2. r2ghidra-dec [PR #124](https://github.com/radareorg/r2ghidra-dec/pull/124): Annotation for constant and global variables
3. cutter [PR #2295](https://github.com/radareorg/cutter/pull/2295): Show-in menu for references and add/rename/delete name for global variables

## X-Refs action in the decompiler and X-Refs for variables in other widgets 
This involved making an action to show X-Refs to a reference (functions, global variables, constant variables with an address) in the decompiler. I have also implemented an action to show X-Refs for local variables and arguments in the disassembly context menu. The following GIFs demonstrate these actions:

X-Refs for variables in the disassembly widgets
![xrefs-for-variables](/assets/images/blog/posts/improving-decompiler-widget-gsoc/xrefs-for-variables.gif)

X-Refs for references in the decompiler context menu
![xrefs-for-references](/assets/images/blog/posts/improving-decompiler-widget-gsoc/xrefs-for-references.gif)

### Related PRs
1. cutter [PR #2297](https://github.com/radareorg/cutter/pull/2297): X-refs for variables
2. cutter [PR #2352](https://github.com/radareorg/cutter/pull/2352): X-Refs for references 

## Edit local variables and function arguments 
This involved introducing two new types of annotations as well as implementing the required annotators in r2ghidra-dec. In Cutter, actions have been implemented for renaming and editing local variables and function arguments. Only variables that are present in the disassembly will be editable. The following GIF demonstrates the two actions:
![manipulate-local-variable](/assets/images/blog/posts/improving-decompiler-widget-gsoc/manipulate-local-variable.gif)

### Related PRs
1. radare2 [PR #17375](https://github.com/radareorg/radare2/pull/17375): Annotation for local variables
2. r2ghidra-dec [PR #128](https://github.com/radareorg/r2ghidra-dec/pull/128): Annotator for local variables and function parameters
3. cutter [PR #2357](https://github.com/radareorg/cutter/pull/2357): Edit/Rename Variables Actions for function variables 
4. radare2 [PR #17386](https://github.com/radareorg/radare2/pull/17386): API for checking if an annotation is a reference or function variable

## Documentation, Unit tests, Final clean-up, and Merging to Master 
A dedicated context-menu has been implemented by the PRs linked in the previous sections. All of these changes from the skeleton of the decompiler context menu were merged into branches named ‘decompiler-refactoring’ in the involved repositories. This was merged to master. 

Before merging to master, the new code was documented, and unit tests were made for new annotations and API functions in radare2. The final clean-up removed unnecessary parts after careful observation. 

### Related PRs
1. radare2 [PR #17397](https://github.com/radareorg/radare2/pull/17397): Update docs in annotate code API 
2. radare2 [PR #17403](https://github.com/radareorg/radare2/pull/17403): Unit tests for annotated code API 
3. cutter [PR #2374](https://github.com/radareorg/cutter/pull/2374): Code Documentation + Final Clean Up

#### The following PRs merge all the changes to the master branch
1. radare2 [PR #17429](https://github.com/radareorg/radare2/pull/17429): New annotations and API functions for the decompiler
2. r2ghidra-dec [PR #129](https://github.com/radareorg/r2ghidra-dec/pull/129): Annotators for new annotations
3. cutter [PR #2391](https://github.com/radareorg/cutter/pull/2391): Enhanced Decompiler Widget with new Dedicated Context Menu



## Synchronized Decompiler and Enabling Multiple Decompiler Widgets
The existing auto-refresh mechanism with a refresh button was often confusing to users, particularly when the auto-refresh is disabled. In this case, questions like whether renaming a reference or editing instruction in disassembly should reflect on the decompiler were often asked. Moreover, there were multiple benefits to making the decompiler widget a syncable widget like disassembly or graph. These are explained in the issue [#2370](https://github.com/radareorg/cutter/issues/2370). Allowing multiple decompiler widgets to be opened simultaneously will enable users to compare the output of multiple decompilers that Cutter supports, e.g., Ghidra, RetDec, and R2Dec. This was an existing issue [#1766](https://github.com/radareorg/cutter/issues/1766). I solved these two issues. User documentation to the decompiler was also added. 

The following image shows two decompiler widgets with different decompilers side by side.
![ghidra-vs-r2dec](/assets/images/blog/posts/improving-decompiler-widget-gsoc/ghidra-vs-r2dec.png)

### Related PRs
1. cutter [PR #2402](https://github.com/radareorg/cutter/pull/2402): Synchronized Decompiler and Enabling Multiple Decompiler Widgets
2. cutter [PR #2410](https://github.com/radareorg/cutter/pull/2410): Save the layout of the Decompiler Widgets
3. cutter [PR #2394](https://github.com/radareorg/cutter/pull/2394): User documentation for the new decompiler

## What Next?
1. The context-sensitive annotations have been implemented only for R2Ghidra as of now. I have opened issues in both R2Dec ([issue #220](https://github.com/radareorg/r2dec-js/issues/220)) R2RetDec ([issue #20](https://github.com/avast/retdec-r2plugin/issues/20)) with details on the annotations that are required by the Cutter. Once all new annotations are available from these decompilers, they will support all the actions currently available for r2ghidra-dec. I have also implemented what’s required from the Cutter’s side to support R2Dec by [PR #2407](https://github.com/radareorg/cutter/pull/2407). This can be merged as soon as R2Dec gets patched to have all annotations. 


_I haven't mentioned every single PR I have made as part of my project here._ All my PRs and issues that I solved as part of my project is available at this GitHub project in the radareorg: [Improving Decompiler Widget (GSoC)](https://github.com/orgs/radareorg/projects/1).

## Thanks

I want to thank my mentors Itay Cohen, Kārlis, and Florian Märkl for all their sincere support and guidance. I have come a long way and learned a lot of valuable things in the past three and a half months of GSoC. My GSoC project was the first significant real-world project that I worked on, and I am incredibly happy about the work that I was able to do, and it's potential. This will not have been possible without the insightful reviews and advice of my mentors. I hope we will continue to work together for Cutter.




