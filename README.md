# Coding a Basic Generative Design System in P5
This is the companion code for a series of [tutorial videos](http://link). The code is written in [P5.js](https://p5js.org/), the javascript implementation of [Processing](https://processing.org/). To export SVGs (see last video), you will need to download and include [p5.svg](https://github.com/zenozeng/p5.js-svg) by [zenozeng](https://zenozeng.com/).

The goal of this tutorial is to create a system that makes its own choices about what to include in the design of a series of objects. The result is a collection of designs that are made automatically and change every time we run the software. This approach often reveals combinations we would never have thought of and can be used as a tool for exploration.

The design that inspired this tutorial was [Ruth Lin](http://ruthl.in/)'s design for the Rhode Island School of Design's 2017 graduation program (see scanned image in here in the repo). 

Instructor: [Matthew Epler](http://mepler.com)  

## Topics Covered
- Basics of Generative Design Systems  
- Object Oriented Programming
- Polymorphism
- Exporting SVG

## NOTES
What to expect (level, subjects, outcome)
What is a design system
Planning for our system
Starting simple - draw one thing
Draw more things
Refactoring


// to export as SVG, use saveSVG()...that's it. move draw() code into a function 'drawOnce'