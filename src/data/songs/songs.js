import { getLyrics } from "./lyrics";
import shapeOfYou from "../mp3/1-Ed Sheeran - Shape of You [Official Video].mp3";
import dontBeSoHardOnYourself from "../mp3/2-Jess Glynne - Don't Be So Hard On Yourself [Official Video].mp3";
import hardToLove from "../mp3/3-Lee Brice - Hard to Love (w lyrics).mp3";
import iNeedaDoctor from "../mp3/4-I Need A Doctor - Dr. Dre ft. Eminem & Skylar Grey Lyrics.mp3";
import imagine from "../mp3/5-John Lennon - Imagine.mp3";
import theATeam from "../mp3/6-The A Team- Ed Sheeran lyrics.mp3";
import oneStepCloser from "../mp3/7-One Step Closer (Official Video) - Linkin Park.mp3";
import perfect from "../mp3/8-Perfect - Ed Sheeran (Lyrics).mp3";
import numb from "../mp3/9-Linkin Park - Numb Lyrics [HQ] [HD].mp3";
import newRules from "../mp3/10-Dua Lipa - NEW RULES (Lyrics).mp3";
import lookWhatYouMadeMeDo from "../mp3/11-Taylor Swift - Look What You Made Me Do.mp3";
import weDontTalkAnymore from "../mp3/12-We Don't Talk Anymore - Charlie Puth (Ft. Selena Gomez) (Lyrics).mp3";

const songs = [
  {
    id: 1,
    name: "Shape of You",
    singer: "Ed Sheeran",
    src: shapeOfYou,
    lyrics: getLyrics(1),
    avatar: "https://static2.greatsong.net/artiste/96x96/ed-sheeran-201757.jpg"
  },

  {
    id: 2,
    name: "Don't be so hard on yourself",
    singer: "Jess Glynne",
    src: dontBeSoHardOnYourself,
    lyrics: getLyrics(2),
    avatar: "https://www.bbc.co.uk/music/images/records/96x96/n52bbj"
  },
  {
    id: 3,
    name: "Hard to love",
    singer: "Lee Brice",
    src: hardToLove,
    lyrics: getLyrics(3),
    avatar:
      "https://secure.gravatar.com/avatar/aea18c8f04f7382ae5030f5b5b5b84b1?s=96&d=mm&r=pg"
  },
  {
    id: 4,
    name: "I need a doctor",
    singer: "Eminem and Skyler Grey",
    src: iNeedaDoctor,
    lyrics: getLyrics(4),
    avatar: "https://static2.greatsong.net/artiste/96x96/eminem-218152.jpg"
  },
  {
    id: 5,
    name: "Imagine",
    singer: "John Lennon",
    src: imagine,
    lyrics: getLyrics(5),
    avatar: "https://i.ebayimg.com/thumbs/images/g/8wsAAOSwJmVZyUtH/s-l96.jpg"
  },
  {
    id: 6,
    name: "The A Team",
    singer: "Ed Sheeran",
    src: theATeam,
    lyrics: getLyrics(6),
    avatar: "https://static2.greatsong.net/artiste/96x96/ed-sheeran-201757.jpg"
  },
  {
    id: 7,
    name: "One Step Closer",
    singer: "Linkin Park",
    src: oneStepCloser,
    lyrics: getLyrics(7),
    avatar:
      "https://i0.wp.com/cdnb.c3dt.com/icon/647873-com.gawemedia.linkinparksongs.jpg"
  },
  {
    id: 8,
    name: "Perfect",
    singer: "Ed Sheeran",
    src: perfect,
    lyrics: getLyrics(8),
    avatar: "https://static2.greatsong.net/artiste/96x96/ed-sheeran-201757.jpg"
  },
  {
    id: 9,
    name: "Numb (Piano)",
    singer: "Linkin Park",
    src: numb,
    lyrics: getLyrics(9),
    avatar:
      "https://i0.wp.com/cdnb.c3dt.com/icon/647873-com.gawemedia.linkinparksongs.jpg"
  },
  {
    id: 10,
    name: "New Rules",
    singer: "Dua Lipa",
    src: newRules,
    lyrics: getLyrics(10),
    avatar: "https://i.ebayimg.com/thumbs/images/g/jjUAAOSw2b9ZiySs/s-l96.jpg"
  },
  {
    id: 11,
    name: "Look at what you made me do (Remix)",
    singer: "Taylor Swift",
    src: lookWhatYouMadeMeDo,
    lyrics: getLyrics(11),
    avatar:
      "https://static2.greatsong.net/artiste/96x96/taylor-swift-204142.jpg"
  },
  {
    id: 12,
    name: "We don't talk anymore",
    singer: "Charlie Puth",
    src: weDontTalkAnymore,
    lyrics: getLyrics(12),
    avatar:
      "http://sketch-cloud-storage.s3.amazonaws.com/public_images/2e44e77c-8e89-4244-963f-1eb009eadd0c"
  }
];

export default songs;

//https://www.klickaud.com/
//https://wordtohtml.net/
//https://vocaroo.com/?upload
