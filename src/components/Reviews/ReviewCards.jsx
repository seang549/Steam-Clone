import { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard.jsx';
const ReviewCards = () => {

  const [reviews, setReviews] = useState([]) //[{"review_id":1,"owned":"steam","user_icon":"https://avatars.cloudflare.steamstatic.com/11d7b0dba7687a0568945b41ae500aa815858cf0.jpg","recommendation":true,"helpfull_table_id":1,"developer_response":true,"developer_date":"2023-06-27T00:00:00.000Z","developer_time":"06:01:00","conversations":3,"total_time":"29.6","at_review_time":"13.3","xp":100,"steam_level":13,"rank":"Tier 10","user_name":"Tigerclone","user_product":48,"times_reviewed":10,"date_posted":"2023-06-26T00:00:00.000Z","review_body":"WHY DOESNT THE JUMP BUTTON WORK SOMETIMES!!!!!!! I HAVE SPEND SEVERAL HOURS ON JUST THE FIRST LEVEL!!!!! (i like this game) ","game_id":1},{"review_id":2,"owned":"steam","user_icon":"https://avatars.cloudflare.steamstatic.com/e14afa34b7b288659a90a8bc82037a974c6cdd66_medium.jpg","recommendation":true,"helpfull_table_id":2,"developer_response":false,"developer_date":null,"developer_time":null,"conversations":0,"total_time":"0.9","at_review_time":null,"xp":100,"steam_level":29,"rank":"Sarge","user_name":"gaming4","user_product":599,"times_reviewed":7,"date_posted":"2023-07-03T00:00:00.000Z","review_body":"this game is pain ","game_id":1},{"review_id":3,"owned":"steam","user_icon":"https://avatars.cloudflare.steamstatic.com/2131b88f9be3ee20b5280fd3a84a28e006b58975.jpg","recommendation":true,"helpfull_table_id":3,"developer_response":false,"developer_date":null,"developer_time":null,"conversations":0,"total_time":"18.1","at_review_time":"17.2","xp":0,"steam_level":9,"rank":null,"user_name":"Chonny Jash","user_product":0,"times_reviewed":2,"date_posted":"2023-07-19T00:00:00.000Z","review_body":"ive been speedrunning this in my freetime and its actually grown on me quite a bit. after playing for 17 hours and beating the game in under 10 minutes i give it a full thumbs up ","game_id":1},{"review_id":4,"owned":"steam","user_icon":"https://avatars.cloudflare.steamstatic.com/c60c15313cbc9187174a705a764023b581288189.jpg","recommendation":true,"helpfull_table_id":4,"developer_response":true,"developer_date":"2023-06-23T00:00:00.000Z","developer_time":"10:43:00","conversations":0,"total_time":"47.9","at_review_time":"18.8","xp":200,"steam_level":12,"rank":"Community Ambasador","user_name":"heyhater","user_product":0,"times_reviewed":2,"date_posted":"2023-06-22T00:00:00.000Z","review_body":"this is the best game I have ever played in my entire life  ","game_id":1},{"review_id":5,"owned":"Product Key","user_icon":"https://avatars.cloudflare.steamstatic.com/735a7287e95f85f337f8c547903e3021038bc354_medium.jpg","recommendation":true,"helpfull_table_id":5,"developer_response":false,"developer_date":null,"developer_time":null,"conversations":0,"total_time":"6.4","at_review_time":"0.6","xp":450,"steam_level":21,"rank":"Years of Service","user_name":"MaSH","user_product":251,"times_reviewed":23,"date_posted":"2023-06-13T00:00:00.000Z","review_body":"this is the worst game i have ever played in my entire life  ","game_id":1},{"review_id":6,"owned":"Product Key","user_icon":"https://avatars.cloudflare.steamstatic.com/71fd03d3a5b0d834c0b5174876835b2ad25af374.jpg","recommendation":true,"helpfull_table_id":5,"developer_response":true,"developer_date":"2023-06-19T00:00:00.000Z","developer_time":"12:01:00","conversations":0,"total_time":"1.1","at_review_time":null,"xp":null,"steam_level":4,"rank":null,"user_name":"hentai","user_product":3,"times_reviewed":1,"date_posted":"2023-06-18T00:00:00.000Z","review_body":"上一次玩到这么动人的游戏还是传说之下，特别是关卡猎鹰的剧情。期待作者未来的作品  ","game_id":1},{"review_id":7,"owned":"Product Key","user_icon":"https://avatars.cloudflare.steamstatic.com/76398a0751088d8f725154f6275fc958e53ae89b.jpg","recommendation":true,"helpfull_table_id":5,"developer_response":true,"developer_date":"2023-06-14T00:00:00.000Z","developer_time":"01:00:00","conversations":0,"total_time":"0.4","at_review_time":null,"xp":500,"steam_level":35,"rank":"Community Leader","user_name":"一般社员凉风青叶","user_product":102,"times_reviewed":5,"date_posted":"2023-06-13T00:00:00.000Z","review_body":"好难啊，第四关真的能把钥匙从瓶子里拿出来吗？  ","game_id":1},{"review_id":8,"owned":"Product Key","user_icon":"https://avatars.cloudflare.steamstatic.com/2d625a11a09b1829e63036a7e02c8d873974187c.jpg","recommendation":true,"helpfull_table_id":6,"developer_response":false,"developer_date":null,"developer_time":null,"conversations":0,"total_time":"0.1","at_review_time":null,"xp":100,"steam_level":274,"rank":"Forever","user_name":"冷笑黑妖","user_product":6546,"times_reviewed":2985,"date_posted":"2023-07-23T00:00:00.000Z","review_body":"画面依然极其粗糙，画风不统一，但是比上一部《躲猫猫》强了超多 ，希望作者能找个美术组队。或者多利用商用素材。\n玩起来像是掘地求升，有物理引擎弹射手感。\n空格键的跳跃形同虚设，大部分时间在失灵，误导性极强，像是有内部CD，并且时间超长。\n另外蛛丝收线也是空格，键位冲突，怪上加怪，总感觉是自己操作失误，但是更大直觉告诉我这是BUG。\n爬墙的时候键位也特别奇怪，按教程的操作都经常失灵，反向跑回去发现键位根本不听使唤，各种设定特别随性，特别欠测试。\n关注我们 甄游组 第一印象 免费游戏","game_id":1},{"review_id":9,"owned":"Steam","user_icon":"https://avatars.cloudflare.steamstatic.com/5df8c292dabf417ae93951e4c14de291cc55f453.jpg","recommendation":true,"helpfull_table_id":6,"developer_response":true,"developer_date":"2023-06-26T00:00:00.000Z","developer_time":"07:52:00","conversations":0,"total_time":"0.6","at_review_time":null,"xp":140,"steam_level":3,"rank":"Select Colector","user_name":"ほろよい","user_product":8,"times_reviewed":6,"date_posted":"2023-06-26T00:00:00.000Z","review_body":"楽しいゲームだな、よくできましたｗｗｗ","game_id":1}]
  useEffect(() => {
    const getData = async () => {
        const response = await fetch('https://steam-clone-zf6a.onrender.com/reviews', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json();
        setReviews(data)
    }
    getData()
}, [])
if(reviews !== undefined)
{

    return (
      reviews.map((review) => {
        return (
      <div id='jumpToReviews' className='TopDown'>
        <ReviewCard review={review}/>
      </div>
        )
      })
    );
  };
}
  export default ReviewCards;
  