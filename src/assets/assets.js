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
};

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
    _id: "002",
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

export { images, weeklyPodcastData, statsData, socialLinks };
