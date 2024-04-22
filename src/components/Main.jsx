import React, { useState } from 'react';
import Home from '../components/Home'
import About from '../components/About'
import More from '../components/More'

import vk from '../assets/vk.png'
import faf from '../assets/faf.png'
import srj from '../assets/siraj.png'
import dk from '../assets/dk.png'
import max from '../assets/max.png'

const players = [
    {
        id: 1,
        name: "Virat Kohli",
        role: "Batsman",
        batting: "Right Handed",
        bowling: "Medium Speed",
        born: "05 Nov 1988",
        jersey :18,
        description :"Virat Kohli needs no introduction. Former India captain relinquished his role as captain for the Royal Challengers Bangalore after having led the franchise for 9 years. He made his IPL debut in the first-ever match of the IPL on April 18th, 2008 against Kolkata Knight Riders at RCB’s home ground, M.Chinnaswamy Stadium. Virat Kohli is the leading run-scorer in the IPL and holds the record for the most number of centuries (4) in an IPL season.",
        url: vk,
        fb: "https://www.facebook.com/virat.kohli/",
        ig: "https://www.instagram.com/virat.kohli/",
        x: "https://twitter.com/imVkohli"
    },
    {
        id: 2,
        name:"FafDu Plessis",
        role: "Captian",
        batting: "Right Handed",
        bowling: "Spin",
        born: "13 Jul 1984",
        jersey :13,
        description:"A leading moniker of the shortest format of the sport and a man whose hands are safer than your houses, Faf du Plessis will be joining the ranks of Challengers for the first time. An experienced right-handed batter who can ace any bowler in the world, display exemplary strokeplay and control will be leading the batting-order of the Challengers in their new quest. ",
        url: faf,
        fb: "https://www.facebook.com/duPlessis.faf/",
        ig: "https://www.instagram.com/fafdup/",
        x: "https://twitter.com/faf1307"
    },
    {
        id: 3,
        name:"Mohammed Siraj",
        role: "Bowler",
        batting: "Right Handed",
        bowling: "Fast",
        born: "13 Mar 1994",
        jersey:73,
        description:"Mohammed Siraj is one of the premier fast bowlers of the Hyderabad side on the domestic circuit. He was bought by RCB in the 2018 season of the IPL for a sum of INR 2.6 Crores. Given his potential, he can well be a great bowler in all three formats of the game for the Indian side in the years to come.",
        url: srj,
        fb:"https://www.facebook.com/MohammedSirajofficials/",
        ig:"https://www.instagram.com/mohammedsirajofficial/",
        x:"https://twitter.com/mdsirajofficial"
    },
    {
        id: 4,
        name:"Dinesh Karthik",
        role: "Wicket-Keeper",
        batting: "Right Handed",
        bowling: "Medium Speed",
        born: "01 Jun 1985",
        jersey:19,
        description:"Dinesh Karthik, the man who was responsible for India’s incredible win against Bangladesh in the Nidahas Trophy final, will be donning the RCB jersey for the second time. An incredibly fine wicket-keeper and a decent striker of the ball who can brew a storm if he gets going, Karthik stirred the paddles for quite a significant number of times. Royal Challengers Bangalore wrested him from the jaws of Chennai Super Kings after an intense bidding war for Rs 5.50 crore.",
        url: dk,
        fb:"https://www.facebook.com/dineshdkkarthik/",
        ig: "https://www.instagram.com/dk00019/",
        x:"https://twitter.com/DineshKarthik",
    },
    {
        id: 5,
        name:"Glenn Maxwell",
        role: "Batsman",
        batting: "Right Handed",
        bowling: "Spin",
        born: "14 Oct 1988",
        jersey:32,
        description:"Glenn Maxwell is the fastest batsman to reach 3,000 ODI runs in terms of balls (2440) faced. He also holds the record for scoring the fastest ODI ton (51 deliveries) for an Australian. The 32-year-old has the third highest individual score (145*) in T20Is. During the 2021 IPL Auction, Maxwell was signed by the Royal Challengers Bangalore for a massive sum of INR 14.25 Crores.",
        url: max,
        fb:"https://en-gb.facebook.com/GlennMaxwellCricket/",
        ig:"https://www.instagram.com/gmaxi_32/",
        x:"https://twitter.com/Gmaxi_32"
    }
]
const Main = () => {
    const [id , setId] = useState(1);
    const [player , setPlayer] = useState(getPlayer(1));

    function getPlayer(playerId)
    {
        const p = players.find(p => p.id === playerId);
        return p ? p : null;
    }
    function changePlayer(newId) {
        const newPlayer = getPlayer(newId);
        if (newPlayer) {
            setId(newId);
            setPlayer(newPlayer);
        }
    }
    function prevPlayer(){
        const prevId = id === 1 ? players.length : id - 1;
        changePlayer(prevId);
    }
    function nextPlayer(){
        const nextId = id === players.length ? 1 : id + 1;
        changePlayer(nextId);
    }
  return (
    <div>
        <Home props = {player}/>
        <About props = {player}/>
        <More props = {player}/>
        {/* <Navbar/> */}
        <div className='fixed flex ml-10 gap-10 bottom-8'>
            <button className='h-10 w-2 text-3xl text-white font-bold' onClick={prevPlayer}>&lt;</button>
            <button className='h-10 w-2 text-3xl text-white font-bold' onClick={nextPlayer}>&gt;</button>
        </div>
    </div>
  )
}

export default Main