"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

function Whychooseus() {
  const musicContent = [
    {
      title: "The Evolution of Jazz Music",
      description: "Explore the rich history and diverse styles of jazz music, from its origins in New Orleans to its influence on modern music genres."
    },
    {
      title: "Mastering Guitar Techniques",
      description: "Learn essential guitar techniques such as fingerpicking, strumming patterns, and chord progressions to take your playing to the next level."
    },
    {
      title: "Exploring Classical Composers",
      description: "Discover the timeless works of classical composers like Mozart, Beethoven, and Bach, and learn about their contributions to music history."
    },
    {
      title: "The Art of Songwriting",
      description: "Unlock your creativity and learn how to craft compelling lyrics and melodies that resonate with listeners, whether you're a beginner or seasoned songwriter."
    },
    {
      title: "Electronic Music Production Basics",
      description: "Dive into the world of electronic music production and learn about synthesizers, drum machines, MIDI controllers, and digital audio workstations."
    }
  ];
  
  
  return (
    <div>
      <StickyScroll content={musicContent}/>
    </div>
  )
}

export default Whychooseus;