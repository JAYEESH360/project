import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { BiPulse } from "react-icons/bi";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    link : "https://open.spotify.com/",
    
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Discover",
    link : "https://open.spotify.com/",
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
    link : "https://open.spotify.com/",
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
    link : "https://open.spotify.com/",
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
    link : "https://open.spotify.com/",
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcasts",
    link : "https://open.spotify.com/",
  },
];

export { MenuList };
