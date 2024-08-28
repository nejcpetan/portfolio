"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  // function([string1, string2], target id, [color1,color2])
  useEffect(() => {
    consoleText(
      ["Nathan Petain.", "a Front End Developer.", "a System Administrator.", "a Gamer.", "a Fitness Enthusiast.", "a Food Lover."],
      "text",
      ["tomato", "rebeccapurple", "lightblue", "tomato", "rebeccapurple", "lightblue"]
    );
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        {/* New greeting div */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Hello there, welcome to my portfolio!
          </h1>
        </div>

        {/* Static text with animated text */}
        <div className="flex items-center justify-center text-xl md:text-2xl lg:text-4xl font-semibold space-x-2">
          <span>I'm</span>
          <span id="text" className="text-primary"></span>
          <div className="console-underscore" id="console">
            &#95;
          </div>
        </div>
        <div className="mb-8">
          <h1 className="flex items-leggit a justify-center text-xl md:text-2xl lg:text-4xl font-semibold space-x-2">
          Bringing your ideas to life with stunning, unforgettable web experiences.
          </h1>
        </div>
      </div>
    </div>
  );
}

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);

  // Check if the element exists before using it
  if (target) {
    target.setAttribute("style", "color:" + colors[0]);

    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
  }

  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";
      visible = true;
    }
  }, 400);
}
