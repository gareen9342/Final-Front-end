import React, { useEffect, useState } from "react";
import { Container, Card, Bar } from "./UI";
import FeedService from "../../services/feedService";
export default () => {
  const [loading, setLoading] = useState(false);
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    if (!loading) {
      (async () => {
        try {
          setLoading(true);
          const { data } = await FeedService.selectFeeds(
            localStorage.getItem("email")
          );

          if (!!data) {
            setFeeds(data.list);
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      })();
    }

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      {" "}
      {console.log("feeds", feeds)}
      <Bar username={localStorage.getItem("email")} />
      <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
        <div class="relative w-full max-w-lg">
          <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div class="m-8 relative space-y-4">
            {feeds.map((feed) => (
              <Card
                key={feed.feedid}
                content={feed.feedcontent}
                // username={feed.memberemail.substring(0, 8)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
