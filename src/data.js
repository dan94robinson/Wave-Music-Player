import {v4 as uuidv4} from 'uuid';
import EZLVR from './EZLVR.png';
import hurtsButItShouldnt from './Songs/hurtsButItShouldnt.mp3';
import Hipsters from './Songs/Hipsters.mp3';
import Sloop from './Songs/Sloop.mp3';

function chillHop() {
    return [
      {
        name: "Under the City Stars",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: true,
      },
        {
            name: "Beaver Creek",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Reflection",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#F78584", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Keep Going",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#F78584", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Daylight",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#ebc2ca", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          
          {
            name: "Nightfall",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#ebc2ca", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          
          {
        name: "Hipsters",
        artist: 'Dan Robinson, EZLVR',
        cover: EZLVR,
        id: uuidv4(),
        active: false,
        color: ['#A6CADE', '#D68CBB'],
        audio: Hipsters,
    },
         
        {
          name: "Hurts But It Shouldn't",
          artist: 'Dan Robinson, EZLVR',
          cover: EZLVR,
          id: uuidv4(),
          active: false,
          color: ['#A6CADE', '#D68CBB'],
          audio: hurtsButItShouldnt,
      },
      
    {
      name: "SlooperSonic John B",
      artist: 'Austin and Anthony',
      cover: EZLVR,
      id: uuidv4(),
      active: false,
      color: ['#A6CADE', '#D68CBB'],
      audio: Sloop,
  },
    ]
}


export default chillHop;
