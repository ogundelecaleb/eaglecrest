"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


interface Review {
  id: number
  name: string
  avatar: string
  content: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "",
    avatar: "/farm2.jpg",
    content:
      "I have been using Mbrimo for a year now, and it has transformed the way I manage my shopping experience, and the ability to sell my item",
  },
  {
    id: 2,
    name: "",
    avatar: "/farm1.jpg",
    content:
      "You have been using Mbrimo for a year now, and it has transformed the way I manage my shopping experience, and the ability to sell my item",
  },
  {
    id: 3,
    name: "",
    avatar: "/farm3.jpg",
    content:
      "I have been using Mbrimo for a year now, and it has transformed the way I manage my shopping experience, and the ability to sell my item",
  },
  {
    id: 3,
    name: "",
    avatar: "/farm4.jpg",
    content:
      "I have been using Mbrimo for a year now, and it has transformed the way I manage my shopping experience, and the ability to sell my item",
  },
]

export default function FarmImages() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start with middle review

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className=" px-4 py-8 md:py-14 lg:py-18">
      <div className="">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Farm Images</h2>
        </div>

        <div className="relative ">
          <div className="flex items-center justify-center">
            <button
              onClick={prevReview}
              className="absolute left-0 z-10 w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 hidden lg:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-center w-full overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out w-full">
                {reviews.map((review, index) => {
                  const isActive = index === currentIndex
                  const isPrev = index === (currentIndex - 1 + reviews.length) % reviews.length
                  const isNext = index === (currentIndex + 1) % reviews.length

                  let cardClasses = "transition-all duration-500 flex-shrink-0 px-4"

                  if (isActive) {
                    cardClasses += " w-full lg:w-[45%] opacity-100 scale-100"
                  } else if (isPrev || isNext) {
                    cardClasses += " w-0 lg:w-[27.5%] opacity-0 lg:opacity-60 scale-90 hidden lg:block"
                  } else {
                    cardClasses += " w-0 opacity-0 scale-75 hidden"
                  }

                  return (
                    <div key={review.id} className={cardClasses}>
                      <div
                        className={`rounded-md p-2  lg:p-4 text-center  flex flex-col h-[100px] md:h-[300px] ${
                          isActive ? "bg-[#D0D7E2] shadow-lg" : "bg-gradient-to-br flex from-[#3B73ED] to-[#e5eaf0]"
                        }`}
                      >
                      <img src={review?.avatar} alt="" className="object-cover h-full w-full"/>
                    </div>
                    </div>
                  )
                })}
              </div>
            </div>

              <button
              onClick={nextReview}
              className="absolute right-0 z-10 w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 hidden lg:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center space-x-4 mt-8 lg:hidden">
           <button onClick={prevReview} className="w-10 h-10 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </button>
           <button onClick={nextReview} className="w-10 h-10 rounded-full">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-4 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
