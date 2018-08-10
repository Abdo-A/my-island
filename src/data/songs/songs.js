import { getLyrics } from "./lyrics";

const songs = [
  {
    id: 1,
    name: "I need a doctor",
    singer: "Eminem and Skyler Grey",
    src:
      "https://vocaroo.com/media_command.php?media=s0qe7ewBhSpX&command=download_mp3",
    lyrics: getLyrics(1)
  },
  {
    id: 2,
    name: "Don't be so hard on yourself",
    singer: "Jess Glynne",
    src:
      "https://vocaroo.com/media_command.php?media=s0Wn94v7SgY6&command=download_mp3",
    lyrics: getLyrics(2)
  },
  {
    id: 3,
    name: "Hard to love",
    singer: "Lee Brice",
    src:
      "https://vocaroo.com/media_command.php?media=s0yARL8yDCva&command=download_mp3",
    lyrics: getLyrics(3)
  },
  {
    id: 4,
    name: "Shape of You (NOTD Remix)",
    singer: "Ed Sheeran",
    src:
      "https://vocaroo.com/media_command.php?media=s0lW9Dn3d0nt&command=download_mp3",
    lyrics: getLyrics(4)
  },
  {
    id: 5,
    name: "Imagine",
    singer: "John Lennon",
    src:
      "https://vocaroo.com/media_command.php?media=s0UK3uZRrDkU&command=download_mp3",
    lyrics: getLyrics(5)
  },
  {
    id: 6,
    name: "The A Team",
    singer: "Ed Sheeran",
    src:
      "https://vocaroo.com/media_command.php?media=s0O3sFgpuOi0&command=download_mp3",
    lyrics: getLyrics(6)
  },
  {
    id: 7,
    name: "One Step Closer",
    singer: "Linkin Park",
    src:
      "https://vocaroo.com/media_command.php?media=s0OcD5eI5KrL&command=download_mp3",
    lyrics: getLyrics(7)
  },
  {
    id: 8,
    name: "Perfect",
    singer: "Ed Sheeran",
    src:
      "https://vocaroo.com/media_command.php?media=s0vxE9uiGPkL&command=download_mp3",
    lyrics: getLyrics(8)
  },
  {
    id: 9,
    name: "Numb (Piano)",
    singer: "Linkin Park",
    src:
      "https://vocaroo.com/media_command.php?media=s0IYkZPo8YQP&command=download_mp3",
    lyrics: getLyrics(9)
  },
  {
    id: 10,
    name: "Dua Lipa",
    singer: "New Rules",
    src:
      "https://vocaroo.com/media_command.php?media=s0NNpYXvFr06&command=download_mp3",
    lyrics: getLyrics(10)
  },
  {
    id: 11,
    name: "Look at what you made me do (Remix)",
    singer: "Taylor Swift",
    src:
      "https://vocaroo.com/media_command.php?media=s09J35D2f4mO&command=download_mp3",
    lyrics: getLyrics(11)
  },
  {
    id: 12,
    name: "We don't talk anymore",
    singer: "Charlie Puth",
    src:
      "https://vocaroo.com/media_command.php?media=s0P4Arpjla89&command=download_mp3",
    lyrics: getLyrics(12)
  }
];

export default songs;

//https://www.klickaud.com/
//https://wordtohtml.net/
//https://vocaroo.com/?upload
