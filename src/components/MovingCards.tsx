"use client";
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

function MovingCards() {
  const MusicSchoolTestimonials = [
    {
      quote: "The music program at this school is truly exceptional. The instructors are not only knowledgeable but also passionate about music, and they go above and beyond to support their students. I've learned so much from them, from music theory to performance techniques, and I've grown tremendously as a musician. ",
      name: "Emily Johnson",
      title: "Music Student"
    },
    {
      quote: "My experience at this music school has been nothing short of amazing. The faculty and staff are dedicated to helping their students succeed, and they create a supportive and encouraging environment for learning. I've had the opportunity to work with incredibly talented instructors who have inspired me to push myself and strive for excellence.",
      name: "John Smith",
      title: "Musician"
    },
    {
      quote: "Enrolling in this music school was one of the best decisions I've ever made. The curriculum is comprehensive and well-rounded, covering everything from music theory and history to performance and composition. The instructors are supportive and approachable, always willing to offer guidance and feedback to help students improve. ",
      name: "Sarah Lee",
      title: "Music Enthusiast"
    },
    {
      quote: "I've had the privilege of teaching at this music school for several years, and I can say with confidence that it's one of the best in the country. The faculty is comprised of experienced and accomplished musicians who are passionate about passing on their knowledge to the next generation.",
      name: "Michael Brown",
      title: "Music Educator"
    },
    {
      quote: "As a performer, I've had the opportunity to collaborate with many talented musicians from this music school, and I've been consistently impressed by the caliber of their training and education. The students are well-prepared and professional, and they bring a high level of artistry and musicianship to every performance.",
      name: "Jessica Adams",
      title: "Music Performer"
    }
  ];

  return (
    <div className='relative'>
      <div className='dark'>
        <div className='h-[45rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col justify-center items-center overflow-hidden'>
          <h2 className='text-3xl font-bold text-center mt-6 mb-10 z-10'>Hear Our Harmony: Voices Of Success</h2>
          <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-6xl'>
              <InfiniteMovingCards
                items={MusicSchoolTestimonials}
                direction="right"
                speed="normal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovingCards;
