import avatar_01 from "./images/avatar_01.png";
import avatar_02 from "./images/avatar_02.png";
import avatar_03 from "./images/avatar_03.png";
import banner_01 from "./images/banner_01.png";
import banner_02 from "./images/banner_02.png";
import week_01 from "./images/week_01.png";
import week_02 from "./images/week_02.png";
import week_03 from "./images/week_03.png";
import week_04 from "./images/week_04.png";
import hero_01 from "./images/hero_01.png";
import hero_02 from "./images/hero_02.png";
import hero_03 from "./images/hero_03.png";
import hero_img from "./images/hero_img.png";
import unique from "./images/unique.png";
import play_button from "./images/play_button.svg";
import logo from "./images/logo.svg";
import menu from "./images/menu.svg";
import verify from "./images/verify.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";
import decor from "./images/decor.png";
import d_1 from "./images/d_1.png";
import d_2 from "./images/d_2.png";
import d_3 from "./images/d_3.png";
import d_4 from "./images/d_4.png";

const images = {
  logo,
  hero_img,
  hero_01,
  hero_03,
  hero_02,
  banner_01,
  banner_02,
  avatar_01,
  avatar_02,
  avatar_03,
  unique,
  play_button,
  menu,
  week_01,
  week_02,
  week_03,
  week_04,
  decor,
  verify,
  facebook,
  twitter,
  instagram,
  d_1,
  d_2,
  d_3,
  d_4,
};

const topPodCasterData = [
  {
    _id: "001",
    name: "Mr.Smith",
    view: "5.5 million streams",
    image: images.week_01,
    imagePosition:
      "scale-130 h-[80%] md:h-full md:w-full md:scale-100 bottom-0 -right-3 md:-right-14 z-15",
    bgColor: "#FF854B",
    decor: images.d_1,
    decorPosition: "md:w-[70%] bottom-2 left-15 lg:left-12 lg:bottom-8",
  },
  {
    _id: "002",
    name: "Nadia Lestary",
    view: "3.5 million streams",
    bgColor: "#532822",
    image: images.week_02,
    imagePosition:
      "bottom-0 -right-10 top-10 md:top-15 scale-130 h-[80%] md:h-full md:w-full md:scale-100  md:-right-18 lg:top-20 lg:-right-24  z-10",
    decor: images.d_2,
    decorPosition: "md:w-[70%] bottom-4 left-2 -rotate-45  lg:bottom-28 top-20",
  },
  {
    _id: "003",
    name: "Evan Caster Lee",
    view: "2.5 million streams",
    image: images.week_03,
    imagePosition:
      "scale-130 h-[80%] md:h-full md:w-full md:scale-100 bottom-0 -right-15 top-22 md:-right-14",
    bgColor: "#43A574",
    decor: images.d_3,
    decorPosition: "md:w-[70%] bottom-4 left-2 lg:left-12 lg:bottom-8",
  },
  {
    _id: "004",
    name: "Stefy Catlyna",
    view: "1.5 million streams",
    image: images.week_04,
    imagePosition:
      "scale-130 h-[80%] md:h-full md:w-full md:scale-100 bottom-0 -right-25 z-15 md:top-20 ",
    bgColor: "#FFD25A",
    decor: images.d_4,
    decorPosition: "md:w-[50%] bottom-15 left-15 lg:left-17 lg:bottom-18",
  },
];

const weeklyPodcastData = [
  {
    _id: "001",
    title: "Quater-life crisis",
    author: "Allen John",
    time: "23:30",
    bgColor: "#43A574",
    image: images.avatar_01,
  },
  {
    _id: "002",
    title: "Finance Gen X",
    author: "James Brock",
    time: "16:45",
    bgColor: "#ff939a",
    image: images.avatar_03,
  },
  {
    _id: "003",
    title: "Love & Family",
    author: "Aidan & Friends",
    time: "21:30",
    bgColor: "#ffd25a",
    image: images.avatar_01,
  },
  {
    _id: "004",
    title: "Sports Games",
    author: "Jane Rober",
    time: "19:45",
    bgColor: "#abcdef",
    image: images.avatar_03,
  },
];

const statsData = [
  {
    _id: "001",
    name: "Awards Gained",
    figure: "5+",
  },
  {
    _id: "002",
    name: "Years of Experience",
    figure: "12+",
  },
  {
    _id: "003",
    name: "Podcasters",
    figure: "238",
  },
];

const socialLinks = [
  {
    _id: "001",
    name: "Twitter",
    icon: images.twitter,
  },
  {
    _id: "002",
    name: "Instagram",
    icon: images.instagram,
  },
  {
    _id: "003",
    name: "Facebook",
    icon: images.facebook,
  },
];

export { images, topPodCasterData, weeklyPodcastData, statsData, socialLinks };
