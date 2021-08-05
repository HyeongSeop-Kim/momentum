const quotes = [
    {
        quote: "모두를 사랑하되, 몇 사람만 믿으라. 누구에게도 잘못을 저지르지 말라.",
        author: "윌리엄 셰익스피어"
    },
    {
        quote: "사람들이 원하는 모든 것은 자신의 얘기를 들어줄 사람이다.",
        author: "휴 엘리어트"
    },
    {
        quote: "등 뒤로 불어오는 바람, 눈 앞에 빛나는 태양, 옆에서 함께 가는 친구보다 더 좋은 것은 없으리.",
        author: "에런 더글러스 트림블"
    },
    {
        quote: "벗이 먼 곳에서 찾아오면 또한 즐겁지 아니한가.",
        author: "공자"
    },
    {
        quote: "순간들을 소중히 여기다 보면, 긴 세월은 저절로 흘러간다.",
        author: "마리아 에지워스"
    },
    {
        quote: "나는 미래에 대해 생각하는 법이 없다. 어차피 곧 닥치니까.",
        author: "알버트 아인슈타인"
    },
    {
        quote: "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다.",
        author: "공자"
    },
    {
        quote: "성실함의 잣대로 스스로를 평가하라, 그리고 관대함의 잣대로 남들을 평가하라.",
        author: "존 미첼 메이슨"
    },
    {
        quote: "능력이 부족할 수록 자만심이 더 강하다.",
        author: "아하드 하암"
    },
    {
        quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "벤자민 프랭클린"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;