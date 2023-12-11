"use client";

import Image from "next/image";
import { EnterIcon } from "@radix-ui/react-icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <>
      <Head>
        <title>Story Tell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden">
        {/* 最外層snap */} 
        <div
          className="snap-mandatory snap-y overflow-y-auto h-screen"
          >
          {/* snap page1 */}
          <div className="snap-center h-screen">
            <div className="flex flex-col h-screen py-20 px-10 place-items-center">
              <div className="flex flex-col">
                <h1 className="py-5 text-center text-4xl font-serif leading-relaxed">
                  歡迎使用
                  <br />
                  Story Teller
                </h1>
                <p className="font-serif place-content-center py-5">
                  這裡是我們的畢業專題
                  <br />
                  情緒分析使用text2Emotion套件計算
                  <br />
                  情緒語音合成使用Emotional VITS
                  <br />
                  語者轉換是基於RVC實現
                  <br />
                  前端使用NEXTJS 13架設於Vervel
                  <br />
                  後端使用LARAVEL及flask建立
                  <br />
                </p>
              </div>

              <Link href="/library">
                <Button variant="outline">
                  Explore
                  <EnterIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <div className="flex py-12">
                <div className="animate-bounce py-8 flex justify-center items-center">
                  <svg
                    className="w-6 h-6 text-violet-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* snap page2 */}
          <div className='snap-start h-full pt-24'>
            <div className='grid h-full'>
              <h1 className='grid place-content-center text-2xl font-serif'>Quick Start</h1>
              <div className='grid'>
                <StoryCard></StoryCard>
              </div>
            </div>
          </div>

          {/* snap page3 */}
          <div className='snap-start h-full pt-20'>
            <div className='grid h-full'>
              <h1 className='grid place-content-center text-2xl font-serif pt-5'>Simple Turtorial</h1>
              <div className='grid'>
                <StoryCard></StoryCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
