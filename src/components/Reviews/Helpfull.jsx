import ReviewReactions from "./ReviewReactions";
import AwardList from "./AwardList";
import { useEffect, useState } from "react";
const Helpfull = ({ review }) => {
  const [help, setHelp] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://steam-clone-zf6a.onrender.com/helpfull/${review["helpfull_table_id"]}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setHelp(data);
    };
    getData();
  }, []);

  return (
    <div id='control-comp'>
      <span id='question-helpful'>Was this review helpful?</span>
      <ReviewReactions />
      {help.map((table) => {
        let possitiveView = true;
        let funnyView = true;
        let conversationsView = true;
        let awardView = true;
        if (table["positive"] == 0) {
          possitiveView = false;
        }
        if (table["funny"] == 0) {
          funnyView = false;
        }
        if (review["conversations"] == 0) {
          conversationsView = false;
        }
        if (table["award_reviews_table"] == 0) {
          awardView = false;
        }
        return (
          <>
            <div className='vote-info-cont'>
              {possitiveView && (
                <h1 className='vote-info'>
                  {table["positive"]} people found this review helpful
                </h1>
              )}

              {funnyView && (
                <h1 className='vote-info'>
                  {table["funny"]} people found this review funny
                </h1>
              )}
            </div>
            {conversationsView && (
              <>
                <div className='comment-count'>
                  <a href='https://store.akamai.steamstatic.com/public/shared/images/comment_quoteicon_blue.png'>
                    {review["conversations"]}
                  </a>
                </div>
                <br></br>
              </>
            )}
            {awardView && <AwardList helpID={table["award_reviews_table"]} />}
          </>
        );
      })}
    </div>
  );
};

export default Helpfull;
