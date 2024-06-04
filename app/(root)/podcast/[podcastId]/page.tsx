"use client";
import PodcastDetailPlayer from "@/components/PodcastDetailPlayer";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";
import React from "react";

const PodcastDetails = ({
  params,
}: {
  params: { podcastId: Id<"podcasts"> };
}) => {
  const podcast = useQuery(api.podcasts.getPodcastById, {
    podcastId: params.podcastId,
  });

  return (
    <section className=" flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currently Playing</h1>
        <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            alt="headphone"
            width={24}
            height={24}
          />
          <h2 className="text-16 font-bold text-white-1">
            {/* {podcast?.views} */}
          </h2>
        </figure>
      </header>
      <PodcastDetailPlayer />
      <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center">
        {podcast?.podcastDescription}
      </p>
    </section>
  );
};

export default PodcastDetails;
