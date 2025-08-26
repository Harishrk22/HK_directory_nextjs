import React from "react";
import Ping from "../components/Ping";
import { client } from "@/sanity/lib/client";
import { FETCH_STARTUP_VIEWS_BY_ID } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";
const View = async ({ id }) => {
  const views = await client
    .withConfig({ useCdn: false })
    .fetch(FETCH_STARTUP_VIEWS_BY_ID, { id });

  after(async () => await writeClient.patch(id).inc({ views: 1 }).commit());
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">
          {views.views > 1 ? `${views.views} views` : `${views.views} view`}
        </span>
      </p>
    </div>
  );
};

export default View;
