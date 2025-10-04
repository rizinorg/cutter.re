---
layout: post
title: "Shortcut Manager - RSoC Project"
date: 2025-10-04
tags: ["Shortcuts", "RSoC"]
categories: ["Cutter", "Shortcuts", "RSoC"]
author: emad_sohail
post_image: "/assets/images/blog/posts/shortcut-manager-rsoc/cover.png"
description: "Introducing a centralized Shortcut Manager in Cutter for improved consistency and maintainability. Read about the improvements made possible by Emad Sohail, an RSoC student"
---

# **Shortcut Manager - RSoC Project**

Greetings! I'm Emad Sohail (aka PremadeS), a 2nd-year CS undergraduate student at Information Technology University - Lahore. You can find me on [Github](https://github.com/PremadeS) and [LinkedIn](https://www.linkedin.com/in/emad-sohail-130b3b265/).

This summer I worked on improving the user experience of Cutter. 

This was the first project. The main objective of this project was to introduce a universal **Shortcut Manager** in Cutter and to provide a flexible setup that can support custom shortcuts in the future with minimal additions.

You can find the write-up of my second project [here](https://cutter.re/integrating-the-rizin-mark-api-rsoc)

## **Why a Shortcut Manager**

Default key sequences, *also referred to here as shortcuts*, were previosuly defined in their respective classes. While this approach works if the codebase is small. However, it gets exceptionally difficult to manage as the project grows, making it hard to keep track of which shortcuts are assigned to which functions. On top of that, as the key sequences were scattered in different files there was no way to create a centralized view that allows the user to see the default shortcuts and their respective actions.  

## **Design Goals**

The **Shortcut Manager** was designed with three key goals:

1) **Consistency:** Shortcuts should behave uniformly across the application, regardless of whether they originate from a `QAction` or a `QShortcut`
2) **Maintainablity:** All of the default shortcuts must be at the same place, which allows the developers to quickly add, remove or edit key sequences without needing to look through multiple files 
3) **Extensibility:** The system should provide a solid foundation that can be expanded in the future, enabling features like custom user-defined shortcuts

## **Implementation**

Default key sequences are stored in a `Shortcut` struct, each mapped to a unique ID within `shortcuts/DefaultShortcuts` using a **hashmap**. The `Shortcut` struct holds both the key sequence and a descriptive text string, along with a context string that is particularly useful for translations.

Whenever a `QAction` or `QShortcut` inside any class wants to register a key sequence, it queries the `ShortcutManager` class through a singleton object defined by `Shortcuts()`, using the unique ID.

The `ShortcutManager` then looks up the corresponding entry in the default shortcuts map. If a matching ID exists, it returns the associated key sequence; if not, it logs a warning and returns an empty `QKeySequence` object.

![Shortcut manager process flowchart](/assets/images/blog/posts/shortcut-manager-rsoc/shortcut-registering-flowchart.png)

To make the process even simpler, the `ShortcutManager` also provides utility methods that return fully configured `QAction` or `QShortcut` objects based on the given ID. This not only streamlines shortcut creation but also hides away the underlying complexity, keeping the codebase clean and consistent.

A Default Shortcuts widget has also been introduced, allowing users to easily view all default key sequences alongside their corresponding actions. It also includes a search bar, making it simple to quickly find specific shortcuts or actions. [PR #3504](https://github.com/rizinorg/cutter/pull/3504/)

![Cutter Shortcut Filter](/assets/images/blog/posts/shortcut-manager-rsoc/shortcut-widget-filter.gif)

## **Future Improvements**

While the **Shortcut Manager** already improves consistency and maintainability, it also lays the groundwork for more advanced functionality:

**Custom Shortcuts:** In the future, users will be able to define and register their own shortcuts through Cutter’s interface.

**Profiles and Configurations:** A logical next step would be to allow different sets of shortcuts for different profiles or workflows, making it easier to switch between tailored setups.

## **Conclusion**

The introduction of the **Shortcut Manager** marks an important step in making Cutter more user-friendly and maintainable. By centralizing shortcuts, we’ve eliminated fragmentation in the codebase while also opening the door to future enhancements. While the project itself was relatively small in terms of code changes and complexity, its impact and long-term benefits are substantial.
