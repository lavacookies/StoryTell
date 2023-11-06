"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LibraryCard from "@/components/LibraryCard/page";

interface StoryInfo {
  _id: string;
  storyName: string;
}

export default function Library() {
  const [stories, setStories] = useState<StoryInfo[]>([]);
  useEffect(() => {
    axios
      .get("https://storytell-backend.fcuvoice.com/api/story/getAllStoryInfo")
      .then((response) => {
        setStories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
      });
  }, []);

  return (
    <>
      <div className="w-screen h-1/5 flex gap-8 snap-mandatory snap-x overflow-x-auto p-14">
        {/* {stories.map((story, index) => (
          <div className="snap-center w-3/5 h-full shrink-0">
            <LibraryCard
              key={index}
              id={story._id}
              storyName={story.storyName}
              storyImg=""
              showTag={false}
              link={"/library/" + story.storyName}
            ></LibraryCard>
          </div>
        ))} */}
      </div>
      <div>
        <div className="w-full flex flex-col align-middle justify-center gap-8 p-6">
          {stories.map((story, index) => (
            <LibraryCard
              key={index}
              id={story._id}
              storyName={story.storyName}
              storyImg=""
              showTag={true}
              link={"/library/" + story.storyName.replace(/\s/g, "")}
            ></LibraryCard>
          ))}
        </div>
      </div>
    </>
  );
}
