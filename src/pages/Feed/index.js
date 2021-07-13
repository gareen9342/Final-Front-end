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
          const { data } = FeedService.selectFeeds(
            localStorage.getItem("email")
          );
          if (!!data) {
            setFeeds(data);
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
      <Bar
        username={
          localStorage.getItem("email") && localStorage.getItem("email")
        }
      />
      <Container>
        {console.log("feeds", feeds)}
        <Card title={"임시 타이틀 "} content={"피드 내용"} username={"가린"} />
      </Container>
    </>
  );
};
