import { getLyrics } from "./lyrics";

const songs = [
  {
    id: 1,
    name: "Shape of You",
    singer: "Ed Sheeran",
    src: "https://instaud.io/_/2Bvz.mp3",
    //"https://vocaroo.com/media_command.php?media=s0lW9Dn3d0nt&command=download_mp3"
    lyrics: getLyrics(1),
    avatar: "https://static2.greatsong.net/artiste/96x96/ed-sheeran-201757.jpg"
  },

  {
    id: 2,
    name: "Don't be so hard on yourself",
    singer: "Jess Glynne",
    src: "https://instaud.io/_/2BvD.mp3",
    //"https://vocaroo.com/media_command.php?media=s0Wn94v7SgY6&command=download_mp3"
    lyrics: getLyrics(2),
    avatar: "https://www.bbc.co.uk/music/images/records/96x96/n52bbj"
  },
  {
    id: 3,
    name: "Hard to love",
    singer: "Lee Brice",
    src: "https://instaud.io/_/2BvG.mp3",
    //"https://vocaroo.com/media_command.php?media=s0yARL8yDCva&command=download_mp3"
    lyrics: getLyrics(3),
    avatar:
      "https://secure.gravatar.com/avatar/aea18c8f04f7382ae5030f5b5b5b84b1?s=96&d=mm&r=pg"
  },
  {
    id: 4,
    name: "I need a doctor",
    singer: "Eminem and Skyler Grey",
    src: "https://instaud.io/_/2BvJ.mp3",
    //"https://vocaroo.com/media_command.php?media=s0qe7ewBhSpX&command=download_mp3"
    lyrics: getLyrics(4),
    avatar: "https://static2.greatsong.net/artiste/96x96/eminem-218152.jpg"
  },
  {
    id: 5,
    name: "Imagine",
    singer: "John Lennon",
    src: "https://instaud.io/_/2BvK.mp3",
    //"https://vocaroo.com/media_command.php?media=s0UK3uZRrDkU&command=download_mp3"
    lyrics: getLyrics(5),
    avatar: "https://i.ebayimg.com/thumbs/images/g/8wsAAOSwJmVZyUtH/s-l96.jpg"
  },
  {
    id: 6,
    name: "The A Team",
    singer: "Ed Sheeran",
    src: "https://instaud.io/_/2BvM.mp3",
    //"https://vocaroo.com/media_command.php?media=s0O3sFgpuOi0&command=download_mp3"
    lyrics: getLyrics(6),
    avatar: "https://static2.greatsong.net/artiste/96x96/ed-sheeran-201757.jpg"
  },
  {
    id: 7,
    name: "One Step Closer",
    singer: "Linkin Park",
    src: "https://instaud.io/_/2BvN.mp3",
    //"https://vocaroo.com/media_command.php?media=s0OcD5eI5KrL&command=download_mp3"
    lyrics: getLyrics(7),
    avatar:
      "https://i0.wp.com/cdnb.c3dt.com/icon/647873-com.gawemedia.linkinparksongs.jpg"
  },
  {
    id: 8,
    name: "Perfect",
    singer: "Ed Sheeran",
    src: "https://instaud.io/_/2BvP.mp3",
    //"https://vocaroo.com/media_command.php?media=s0vxE9uiGPkL&command=download_mp3"
    lyrics: getLyrics(8),
    avatar: "https://static2.greatsong.net/artiste/96x96/ed-sheeran-201757.jpg"
  },
  {
    id: 9,
    name: "Numb (Piano)",
    singer: "Linkin Park",
    src: "https://instaud.io/_/2BvO.mp3",
    //"https://vocaroo.com/media_command.php?media=s0IYkZPo8YQP&command=download_mp3"
    lyrics: getLyrics(9),
    avatar:
      "https://i0.wp.com/cdnb.c3dt.com/icon/647873-com.gawemedia.linkinparksongs.jpg"
  },
  {
    id: 10,
    name: "New Rules",
    singer: "Dua Lipa",
    src: "https://instaud.io/_/2BvR.mp3",
    //"https://vocaroo.com/media_command.php?media=s0NNpYXvFr06&command=download_mp3"
    lyrics: getLyrics(10),
    avatar: "https://i.ebayimg.com/thumbs/images/g/jjUAAOSw2b9ZiySs/s-l96.jpg"
  },
  {
    id: 11,
    name: "Look at what you made me do (Remix)",
    singer: "Taylor Swift",
    src: "https://instaud.io/_/2BvQ.mp3",
    //"https://vocaroo.com/media_command.php?media=s09J35D2f4mO&command=download_mp3"
    lyrics: getLyrics(11),
    avatar:
      "https://static2.greatsong.net/artiste/96x96/taylor-swift-204142.jpg"
  },
  {
    id: 12,
    name: "We don't talk anymore",
    singer: "Charlie Puth",
    src: "https://instaud.io/_/2BvT.mp3",
    //"https://vocaroo.com/media_command.php?media=s0P4Arpjla89&command=download_mp3"
    lyrics: getLyrics(12),
    avatar:
      "http://sketch-cloud-storage.s3.amazonaws.com/public_images/2e44e77c-8e89-4244-963f-1eb009eadd0c"
  }
];

export default songs;

//https://www.klickaud.com/
//https://wordtohtml.net/
//https://vocaroo.com/?upload
