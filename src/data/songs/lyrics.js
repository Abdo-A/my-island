import React from "react";
const getLyrics = id => {
  let neededLyrics = lyrics.filter(songLyrics => {
    return songLyrics.id === id;
  });
  return neededLyrics[0].lyrics;
};

const lyrics = [
  {
    id: 1,
    name: "Shape of You",
    singer: "Ed Sheeran",
    src:
      "https://vocaroo.com/media_command.php?media=s0lW9Dn3d0nt&command=download_mp3",
    lyrics: (
      <strong>
        <p>
          The club isn't the best place to find a lover<br />So the bar is where
          I go (mmmm)<br />Me and my friends at the table doing shots<br />Drinking
          fast and then we talk slow (mmmm)<br />And you come over and start up
          a conversation with just me<br />And trust me I'll give it a chance
          now (mmmm)<br />Take my hand, stop, put Van The Man on the jukebox<br />And
          then we start to dance<br />And now I'm singing like<br />
          <br />Girl, you know I want your love<br />Your love was handmade for
          somebody like me<br />Come on now, follow my lead<br />I may be crazy,
          don't mind me<br />Say, boy, let's not talk too much<br />Grab on my
          waist and put that body on me<br />Come on now, follow my lead<br />Come,
          come on now, follow my lead (mmmm)<br />
          <br />I'm in love with the shape of you<br />We push and pull like a
          magnet do<br />Although my heart is falling too<br />I'm in love with
          your body<br />Last night you were in my room<br />And now my
          bedsheets smell like you<br />Every day discovering something brand
          new<br />I'm in love with your body<br />
          <br />Oh I oh I oh I oh I<br />I'm in love with your body<br />Oh I oh
          I oh I oh I<br />I'm in love with your body<br />Oh I oh I oh I oh I<br />I'm
          in love with your body<br />Every day discovering something brand new<br />I'm
          in love with the shape of you<br />
          <br />One week in we let the story begin<br />We're going out on our
          first date (mmmm)<br />You and me are thrifty, so go all you can eat<br />Fill
          up your bag and I fill up a plate (mmmm)<br />We talk for hours and
          hours about the sweet and the sour<br />And how your family is doing
          okay (mmmm)<br />And leave and get in a taxi, then kiss in the
          backseat<br />Tell the driver make the radio play<br />And I'm singing
          like<br />
          <br />Girl, you know I want your love<br />Your love was handmade for
          somebody like me<br />Come on now, follow my lead<br />I may be crazy,
          don't mind me<br />Say, boy, let's not talk too much<br />Grab on my
          waist and put that body on me<br />Come on now, follow my lead<br />Come,
          come on now, follow my lead (mmmm)<br />
          <br />I'm in love with the shape of you<br />We push and pull like a
          magnet do<br />Although my heart is falling too<br />I'm in love with
          your body<br />Last night you were in my room<br />And now my
          bedsheets smell like you<br />Every day discovering something brand
          new<br />I'm in love with your body<br />
          <br />Oh I oh I oh I oh I<br />I'm in love with your body<br />Oh I oh
          I oh I oh I<br />I'm in love with your body<br />Oh I oh I oh I oh I<br />I'm
          in love with your body<br />Every day discovering something brand new<br />I'm
          in love with the shape of you<br />
          <br />Come on, be my baby, come on<br />Come on, be my baby, come on<br />Come
          on, be my baby, come on<br />Come on, be my baby, come on<br />Come
          on, be my baby, come on<br />Come on, be my baby, come on<br />Come
          on, be my baby, come on<br />Come on, be my baby, come on<br />
          <br />I'm in love with the shape of you<br />We push and pull like a
          magnet do<br />Although my heart is falling too<br />I'm in love with
          your body<br />Last night you were in my room<br />And now my
          bedsheets smell like you<br />Every day discovering something brand
          new<br />I'm in love with your body<br />
          <br />Come on, be my baby, come on<br />Come on, be my baby, come on<br />I'm
          in love with your body<br />Come on, be my baby, come on<br />Come on,
          be my baby, come on<br />I'm in love with your body<br />Come on, be
          my baby, come on<br />Come on, be my baby, come on<br />I'm in love
          with your body<br />Every day discovering something brand new<br />I'm
          in love with the shape of you
        </p>
      </strong>
    )
  },
  {
    id: 2,
    name: "Don't be so hard on yourself",
    singer: "Jess Glynne",
    lyrics: (
      <strong>
        <p>
          I came here with a broken heart that no one else could see<br />I drew
          a smile on my face to paper over me<br />But wounds heal and tears dry
          and cracks they don't show<br />So don't be so hard on yourself, no<br />
          <br />Let's go back to simplicity<br />I feel like I've been missing
          me<br />Was not who I'm supposed to be<br />I felt this darkness over
          me<br />We all get there eventually<br />I never knew where I belonged<br />But
          I was right and you were wrong<br />Been telling myself all along<br />
          <br />Don't be so hard on yourself, no<br />Learn to forgive, learn to
          let go<br />Everyone trips, everyone falls<br />So don't be so hard on
          yourself, no<br />'Cause I'm just tired of marching on my own<br />Kind
          of frail, I feel it in my bones<br />Won't let my heart, my heart turn
          into stone<br />So don't be so hard on yourself, no<br />
          <br />I'm standin' on top of the world, right where I wanna be<br />So
          how can this dark cloud be raining over me<br />But hearts break and
          hell's a place that everyone knows<br />So don't be so hard on
          yourself, no<br />
          <br />Let's go back to simplicity<br />I feel like I've been missing
          me<br />Was not who I'm supposed to be<br />I felt this darkness over
          me<br />We all get there eventually<br />I never knew where I belonged<br />But
          I was right and you were wrong<br />Been telling myself all along<br />
          <br />Don't be so hard on yourself, no<br />Learn to forgive, learn to
          let go<br />Everyone trips, everyone falls<br />So don't be so hard on
          yourself, no<br />'Cause I'm just tired of marching on my own<br />Kind
          of frail, I feel it in my bones<br />Won't let my heart, my heart turn
          into stone<br />So don't be so hard on yourself, no<br />
          <br />Oh, oh, oh, I<br />I learned to wave goodbye<br />How not to see
          my life<br />Through someone else's eyes<br />It's not an easy road<br />But
          no I'm not alone<br />So I, I won't be so hard on myself no more<br />
          <br />Don't be so hard on yourself, no<br />Learn to forgive, learn to
          let go<br />Everyone trips, everyone falls<br />So don't be so hard on
          yourself, no<br />'Cause I'm just tired of marching on my own<br />Kind
          of frail, I feel it in my bones<br />Won't let my heart, my heart turn
          into stone<br />So don't be so hard on yourself, no<br />
          <br />'Cause I'm just tired of marching on my own<br />Kind of frail,
          I feel it in my bones<br />Won't let my heart, my heart turn into
          stone<br />So don't be so hard on yourself, no
        </p>
      </strong>
    )
  },
  {
    id: 3,
    name: "Hard to love",
    singer: "Lee Brice",
    lyrics: (
      <strong>
        <div>
          I'm hard to love, hard to love,<br />No, I don't make it easy,<br />Well,
          I couldn't do it if I stood where you stood.<br />I'm hard to love,
          hard to love,<br />And you say that you need me,<br />I don't deserve
          it but I love that you love me good.<br />
          <br />I am a short fuse, I am a wrecking ball<br />Crashing into your
          heart like I do<br />You're like a Sunday morning, full of grace and
          full of Jesus<br />And I wish that I could be more like you.<br />
          <br />I'm hard to love, hard to love,<br />No, I don't make it easy,<br />Well,
          I couldn't do it if I stood where you stood,<br />I'm hard to love,
          hard to love,<br />And you say that you need me,<br />Well, I don't
          deserve it but I love that you love me good.<br />Love me good.<br />
          <br />Girl, you've given me a million second chances<br />And I don't
          ever wanna take you for granted,<br />I'm just a man, I'm just a man<br />
          <br />Hard to love, hard to love,<br />Oh, I don't make it easy<br />And
          I couldn't do it if I stood where you stood.<br />I'm hard to love,
          hard to love<br />And you say that you need me,<br />I don't deserve
          it but I love that you love me good,<br />You love me good.<br />
          <br />Hard to love, hard to love,<br />Oh, I don't make it easy<br />And
          I couldn't do it if I stood where you stood.<br />I'm hard to love,
          hard to love<br />And you say that you need me,<br />I don't deserve
          it but I love that you love me good,<br />You love me good.<br />
          <br />You love me good.
        </div>{" "}
      </strong>
    )
  },
  {
    id: 4,
    name: "I need a doctor",
    singer: "Eminem and Skyler Grey",
    lyrics: (
      <strong>
        <p>
          I'm about to lose my mind<br />You've been gone for so long<br />I'm
          running out of time<br />I need a doctor<br />Call me a doctor<br />I
          need a doctor, doctor<br />To bring me back to life<br />
          <br />[Verse 1: Eminem]<br />I told the world one day I would pay it
          back<br />Say it on tape, and lay it, record it<br />So that one day I
          could play it back<br />But I don't even know if I believe it when I'm
          saying that<br />Y'all starting to creep in, everyday it's so grey and
          black<br />Hope, I just need a ray of that<br />Cause no one see's my
          vision when I play it for 'em<br />They just say it's whack<br />They
          don't know what dope is<br />And I don't know if I was awake or asleep<br />When
          I wrote this<br />All I know is you came to me when I was at my lowest<br />You
          picked me up, breeding life in me<br />I owe my life to you<br />But
          for the life of me, I don't see why you don't see like I do<br />But
          it just dawned on me you lost a son<br />See this light in you, it's
          dark<br />Let me turn on the lights and brighten me and enlighten you<br />I
          don't think you realize what you mean to me<br />Not the slightest
          clue<br />Cause me and you were like a crew<br />I was like your
          sidekick<br />You gon' either wanna fight me when I get off this
          f*cking mic<br />Or you gon' hug me<br />But I'm not an option,
          there's nothing else I can do cause&hellip;<br />
          <br />[Chorus: Skylar Grey]<br />I'm about to lose my mind<br />You've
          been gone for so long<br />I'm running out of time<br />I need a
          doctor<br />Call me a doctor<br />I need a doctor, doctor<br />To
          bring me back to life<br />
          <br />[Verse 2: Eminem]<br />It hurts when I see you struggle<br />You
          come to me with ideas<br />You say they're just pieces so I'm puzzled<br />Cause
          the sh*t I hear is crazy<br />But you're either getting lazy or you
          don't believe in you no more<br />Seems like your own opinions, not
          one you can form<br />Can't make a decision you keep questioning
          yourself<br />Second guessing and it's almost like you're begging for
          my help<br />Like I'm your leader<br />You're supposed to f*cking be
          my mentor<br />I can endure no more<br />I demand you remember who you
          are<br />It was you, who believed in me<br />When everyone was telling
          you don't sign me<br />Everyone at the f*cking label, let's tell the
          truth<br />You risked your career for me<br />I know it as well as you<br />Nobody
          wanted to f*ck with the white boy<br />Dre, I'm crying in this booth<br />You
          saved my life, now maybe it's my turn to save yours<br />But I can
          never repay you, what you did for me is way more<br />But I ain't
          giving up faith and you ain't giving up on me<br />Get up Dre, I'm
          dying, I need you, come back for f*ck's sake<br />
          <br />[Chorus: Skylar Grey]<br />I'm about to lose my mind<br />You've
          been gone for so long<br />I'm running out of time<br />I need a
          doctor<br />Call me a doctor<br />I need a doctor, doctor<br />To
          bring me back to life<br />Bring me back to life<br />Bring me back to
          life<br />
          <br />(I need a doctor, doctor<br />To bring me back to life)<br />
          <br />[Verse 3: Dr. Dre]<br />It literally feels like a lifetime ago<br />But
          I still remember the sh*t like it was just yesterday though<br />You
          walked in, yellow jump suit<br />Whole room, cracked jokes<br />Once
          you got inside the booth, told you, like smoke<br />Went through
          friends, some of them I put on<br />But they just left, they said they
          was riding to the death<br />But where the f*ck are they now<br />Now
          that I need them, I don't see none of them<br />All I see is slim<br />F*ck
          all you fair-weather friends<br />All I need is him<br />F*cking
          backstabbers<br />When the chips were down you just laughed at us<br />Now
          you bout to feel the f*cking wrath of aftermath, fagots<br />You gon'
          see us in our lab jackets and ask us where the f*ck we been?<br />You
          can kiss my indecisive ass crack maggots and the crackers ass<br />Little
          crack a jack beat making whack math<br />Backwards producers, I'm back
          bastards<br />One more CD and then I'm packing up my bags and as I'm
          leaving<br />I'll guarantee they scream Dre don't leave us like that
          man cause&hellip;<br />
          <br />[Chorus: Skylar Grey]<br />I'm about to lose my mind<br />You've
          been gone for so long<br />I'm running out of time<br />I need a
          doctor<br />Call me a doctor<br />I need a doctor, doctor<br />To
          bring me back to life
        </p>
      </strong>
    )
  },
  {
    id: 5,
    name: "Imagine",
    singer: "John Lennon",
    src:
      "https://vocaroo.com/media_command.php?media=s0UK3uZRrDkU&command=download_mp3",
    lyrics: (
      <strong>
        <p>
          Imagine there's no heaven<br />It's easy if you try<br />No hell below
          us<br />Above us only sky<br />Imagine all the people<br />Living for
          today... Aha-ah...<br />
          <br />Imagine there's no countries<br />It isn't hard to do<br />Nothing
          to kill or die for<br />And no religion, too<br />Imagine all the
          people<br />Living life in peace... You...<br />
          <br />You may say I'm a dreamer<br />But I'm not the only one<br />I
          hope someday you'll join us<br />And the world will be as one<br />
          <br />Imagine no possessions<br />I wonder if you can<br />No need for
          greed or hunger<br />A brotherhood of man<br />Imagine all the people<br />Sharing
          all the world... You...<br />
          <br />You may say I'm a dreamer<br />But I'm not the only one<br />I
          hope someday you'll join us<br />And the world will live as one
        </p>
      </strong>
    )
  },
  {
    id: 6,
    name: "Ed Sheeran",
    singer: "The A Team",
    src:
      "https://vocaroo.com/media_command.php?media=s0O3sFgpuOi0&command=download_mp3",
    lyrics: (
      <strong>
        <p>
          White lips, pale face<br />Breathing in snowflakes<br />Burnt lungs,
          sour taste<br />Light's gone, day's end<br />Struggling to pay rent<br />Long
          nights, strange men<br />
          <br />And they say<br />She's in the Class A Team<br />Stuck in her
          daydream<br />Been this way since eighteen<br />But lately her face
          seems<br />Slowly sinking, wasting<br />Crumbling like pastries<br />And
          they scream<br />The worst things in life come free to us<br />'Cause
          we're just under the upper hand<br />And go mad for a couple grams<br />And
          she don't want to go outside tonight<br />And in a pipe she flies to
          the Motherland<br />Or sells love to another man<br />It's too cold
          outside<br />For angels to fly<br />Angels to fly<br />
          <br />Ripped gloves, raincoat<br />Tried to swim and stay afloat<br />Dry
          house, wet clothes<br />Loose change, bank notes<br />Weary-eyed, dry
          throat<br />Call girl, no phone<br />
          <br />And they say<br />She's in the Class A Team<br />Stuck in her
          daydream<br />Been this way since eighteen<br />But lately her face
          seems<br />Slowly sinking, wasting<br />Crumbling like pastries<br />And
          they scream<br />The worst things in life come free to us<br />'Cause
          we're just under the upper hand<br />And go mad for a couple grams<br />And
          she don't want to go outside tonight<br />And in a pipe she flies to
          the Motherland<br />Or sells love to another man<br />It's too cold
          outside<br />For angels to fly<br />An angel will die<br />Covered in
          white<br />Closed eye<br />And hoping for a better life<br />This
          time, we'll fade out tonight<br />Straight down the line<br />
          <br />And they say<br />She's in the Class A Team<br />Stuck in her
          daydream<br />Been this way since eighteen<br />But lately her face
          seems<br />Slowly sinking, wasting<br />Crumbling like pastries<br />They
          scream<br />The worst things in life come free to us<br />And we're
          all under the upper hand<br />Go mad for a couple grams<br />And we
          don't want to go outside tonight<br />And in a pipe we fly to the
          Motherland<br />Or sell love to another man<br />It's too cold outside<br />For
          angels to fly<br />Angels to fly<br />To fly, fly<br />For angels to
          fly, to fly, to fly<br />For angels to die
        </p>
      </strong>
    )
  },
  {
    id: 7,
    name: "One Step Closer",
    singer: "Linkin Park",
    src:
      "https://vocaroo.com/media_command.php?media=s0OcD5eI5KrL&command=download_mp3",
    lyrics: (
      <strong>
        <p>
          I cannot take this anymore<br />Saying everything I've said before<br />All
          these words: they make no sense<br />I find bliss in ignorance<br />Less
          I hear the less you'll say<br />You'll find that out anyway<br />
          <br />Just like before...<br />
          <br />Everything you say to me<br />Takes me one step closer to the
          edge<br />And I'm about to break<br />I need a little room to breathe<br />'Cause
          I'm one step closer to the edge<br />I'm about to break<br />
          <br />I find the answers aren't so clear<br />Wish I could find a way
          to disappear<br />All these thoughts: they make no sense<br />I find
          bliss in ignorance<br />Nothing seems to go away<br />Over and over
          again<br />
          <br />Just like before...<br />
          <br />Everything you say to me<br />Takes me one step closer to the
          edge<br />And I'm about to break<br />I need a little room to breathe<br />'Cause
          I'm one step closer to the edge<br />I'm about to break<br />
          <br />Everything you say to me<br />Takes me one step closer to the
          edge<br />And I'm about to break<br />I need a little room to breathe<br />'Cause
          I'm one step closer to the edge<br />And I'm about to... break!<br />
          <br />Shut up when I'm talking to you<br />Shut up, shut up, shut up<br />Shut
          up when I'm talking to you<br />Shut up, shut up, shut up, shut up<br />I'm
          about to break!<br />
          <br />Everything you say to me<br />Takes me one step closer to the
          edge<br />And I'm about to break<br />I need a little room to breathe<br />'Cause
          I'm one step closer to the edge<br />I'm about to break<br />
          <br />Everything you say to me<br />Takes me one step closer to the
          edge<br />And I'm about to break<br />I need a little room to breathe<br />'Cause
          I'm one step closer to the edge<br />And I'm about to...<br />Break!
        </p>
      </strong>
    )
  },
  {
    id: 8,
    name: "Perfect",
    singer: "Ed Sheeran",
    src:
      "https://vocaroo.com/media_command.php?media=s0vxE9uiGPkL&command=download_mp3",
    lyrics: (
      <strong>
        <p>
          I found a love for me<br />Darling, just dive right in and follow my
          lead<br />Well, I found a girl, beautiful and sweet<br />Oh, I never
          knew you were the someone waiting for me<br />
          <br />'Cause we were just kids when we fell in love<br />Not knowing
          what it was<br />I will not give you up this time<br />But darling,
          just kiss me slow<br />Your heart is all I own<br />And in your eyes
          you're holding mine<br />
          <br />Baby, I'm dancing in the dark<br />With you between my arms<br />Barefoot
          on the grass<br />Listening to our favourite song<br />When you said
          you looked a mess<br />I whispered underneath my breath<br />But you
          heard it,<br />Darling, you look perfect tonight<br />
          <br />Well, I found a woman, stronger than anyone I know<br />She
          shares my dreams, I hope that someday I'll share her home<br />I found
          a love to carry more than just my secrets<br />To carry love, to carry
          children of our own<br />
          <br />We are still kids but we're so in love<br />Fighting against all
          odds<br />I know we'll be alright this time<br />Darling, just hold my
          hand<br />Be my girl, I'll be your man<br />I see my future in your
          eyes<br />
          <br />Baby, I'm dancing in the dark<br />With you between my arms<br />Barefoot
          on the grass<br />Listening to our favourite song<br />When I saw you
          in that dress<br />Looking so beautiful<br />I don't deserve this<br />Darling,
          you look perfect tonight<br />
          <br />Baby, I'm dancing in the dark<br />With you between my arms<br />Barefoot
          on the grass<br />Listening to our favourite song<br />I have faith in
          what I see<br />Now I know I have met an angel in person<br />And she
          looks perfect<br />I don't deserve this<br />You look perfect tonight
        </p>
      </strong>
    )
  },
  {
    id: 9,
    name: "Numb (Piano)",
    singer: "Linkin Park",
    src:
      "https://vocaroo.com/media_command.php?media=s0IYkZPo8YQP&command=download_mp3",
    lyrics: (
      <strong>
        <div>
          I'm tired of being what you want me to be<br />Feeling so faithless,
          lost under the surface<br />Don't know what you're expecting of me<br />Put
          under the pressure of walking in your shoes<br />(Caught in the
          undertow, just caught in the undertow)<br />Every step that I take is
          another mistake to you<br />(Caught in the undertow, just caught in
          the undertow)<br />
          <br />I've become so numb, I can't feel you there<br />Become so
          tired, so much more aware<br />I'm becoming this, all I want to do<br />Is
          be more like me and be less like you<br />
          <br />Can't you see that you're smothering me,<br />Holding too
          tightly, afraid to lose control?<br />'Cause everything that you
          thought I would be<br />Has fallen apart right in front of you.<br />(Caught
          in the undertow, just caught in the undertow)<br />Every step that I
          take is another mistake to you.<br />(Caught in the undertow, just
          caught in the undertow)<br />And every second I waste is more than I
          can take.<br />
          <br />I've become so numb, I can't feel you there,<br />Become so
          tired, so much more aware<br />I'm becoming this, all I want to do<br />Is
          be more like me and be less like you.<br />
          <br />And I know<br />I may end up failing too.<br />But I know<br />You
          were just like me with someone disappointed in you.<br />
          <br />I've become so numb, I can't feel you there,<br />Become so
          tired, so much more aware.<br />I'm becoming this, all I want to do<br />Is
          be more like me and be less like you.<br />
          <br />I've become so numb, I can't feel you there.<br />(I'm tired of
          being what you want me to be)<br />I've become so numb, I can't feel
          you there.<br />(I'm tired of being what you want me to be)
        </div>
      </strong>
    )
  },
  {
    id: 10,
    name: "New Rules",
    singer: "Dua Lipa",
    src:
      "https://vocaroo.com/media_command.php?media=s0NNpYXvFr06&command=download_mp3",
    lyrics: (
      <strong>
        <p>
          Talkin' in my sleep at night<br />Makin' myself crazy<br />(Out of my
          mind, out of my mind)<br />Wrote it down and read it out<br />Hopin'
          it would save me<br />(Too many times, too many times)<br />My love,
          he makes me feel like nobody else<br />Nobody else<br />But my love,
          he doesn't love me, so I tell myself<br />I tell myself<br />
          <br />One, don't pick up the phone<br />You know he's only calling
          'cause he's drunk and alone<br />Two, don't let him in<br />You'll
          have to kick him out again<br />Three, don't be his friend<br />You
          know you're gonna wake up in his bed in the morning<br />And if you're
          under him, you ain't gettin' over him<br />
          <br />I got new rules, I count 'em<br />I got new rules, I count 'em<br />I
          gotta tell them to myself<br />I got new rules, I count 'em<br />I
          gotta tell them to myself<br />
          <br />I keep pushin' forwards, but he keeps pullin' me backwards<br />(Nowhere
          to turn) no way<br />(Nowhere to turn) no<br />Now I'm standing back
          from it, I finally see the pattern<br />(I never learn, I never learn)<br />But
          my love, he doesn't love me, so I tell myself<br />I tell myself<br />I
          do, I do, I do<br />
          <br />One, don't pick up the phone<br />You know he's only calling
          'cause he's drunk and alone<br />Two, don't let him in<br />You'll
          have to kick him out again<br />Three, don't be his friend<br />You
          know you're gonna wake up in his bed in the morning<br />And if you're
          under him, you ain't gettin' over him<br />
          <br />I got new rules, I count 'em<br />I got new rules, I count 'em<br />I
          gotta tell them to myself<br />I got new rules, I count 'em<br />I
          gotta tell them to myself<br />
          <br />Practice makes perfect<br />I'm still tryna learn it by heart<br />(I
          got new rules, I count 'em)<br />Eat, sleep, and breathe it<br />Rehearse
          and repeat it, 'cause I<br />(I got new, I got new, I...)<br />
          <br />One, don't pick up the phone<br />You know he's only calling
          'cause he's drunk and alone<br />Two, don't let him in<br />You'll
          have to kick him out again<br />Three, don't be his friend<br />You
          know you're gonna wake up in his bed in the morning<br />And if you're
          under him, you ain't gettin' over him<br />
          <br />I got new rules, I count 'em<br />I got new rules, I count 'em<br />(Oh,
          whoa-oh)<br />I gotta tell them to myself<br />I got new rules, I
          count 'em<br />(Baby, you know I count 'em)<br />I gotta tell them to
          myself<br />
          <br />Don't let him in, don't let him in<br />Don't, don't, don't,
          don't<br />Don't be his friend, don't be his friend<br />Don't, don't,
          don't, don't<br />Don't let him in, don't let him in<br />Don't,
          don't, don't, don't<br />Don't be his friend, don't be his friend<br />Don't,
          don't, don't, don't<br />You gettin' over him
        </p>
      </strong>
    )
  },
  {
    id: 11,
    name: "Look at what you made me do",
    singer: "Taylor Swift",
    src:
      "https://vocaroo.com/media_command.php?media=s09J35D2f4mO&command=download_mp3",
    lyrics: (
      <strong>
        <p>
          I don't like your little games<br />Don't like your tilted stage<br />The
          role you made me play<br />Of the fool, no, I don't like you<br />I
          don't like your perfect crime<br />How you laugh when you lie<br />You
          said the gun was mine<br />Isn't cool, no, I don't like you (Oh!)<br />
          <br />But I got smarter, I got harder in the nick of time<br />Honey,
          I rose up from the dead, I do it all the time<br />I've got a list of
          names and yours is in red, underlined<br />I check it once, then I
          check it twice, oh!<br />
          <br />Ooh, look what you made me do<br />Look what you made me do<br />Look
          what you just made me do<br />Look what you just made me<br />Ooh,
          look what you made me do<br />Look what you made me do<br />Look what
          you just made me do<br />Look what you just made me do<br />
          <br />I don't like your kingdom keys<br />They once belonged to me<br />You
          asked me for a place to sleep<br />Locked me out and threw a feast
          (What?)<br />The world moves on, another day, another drama, drama<br />But
          not for me, not for me, all I think about is karma<br />And then the
          world moves on, but one thing's for sure<br />Maybe I got mine, but
          you'll all get yours<br />
          <br />But I got smarter, I got harder in the nick of time<br />Honey,
          I rose up from the dead, I do it all the time<br />I've got a list of
          names and yours is in red, underlined<br />I check it once, then I
          check it twice, oh!<br />
          <br />Ooh, look what you made me do<br />Look what you made me do<br />Look
          what you just made me do<br />Look what you just made me<br />Ooh,
          look what you made me do<br />Look what you made me do<br />Look what
          you just made me do<br />Look what you just made me do<br />
          <br />I don't trust nobody and nobody trusts me<br />I'll be the
          actress starring in your bad dreams<br />I don't trust nobody and
          nobody trusts me<br />I'll be the actress starring in your bad dreams<br />I
          don't trust nobody and nobody trusts me<br />I'll be the actress
          starring in your bad dreams<br />I don't trust nobody and nobody
          trusts me<br />I'll be the actress starring in your bad dreams<br />
          <br />(Ooh, look what you made me do)<br />(Look what you made me do)<br />(Look
          what you just made me do)<br />"I'm sorry, the old Taylor can't come
          to the phone right now."<br />(Look what you just made me do)<br />(Look
          what you made me do)<br />(Look what you made me do)<br />"Why?"<br />(Look
          what you just made me do)<br />"Oh, 'cause she's dead!" (Oh!)<br />
          <br />Ooh, look what you made me do<br />Look what you made me do<br />Look
          what you just made me do<br />Look what you just made me<br />Ooh,
          look what you made me do<br />Look what you made me do<br />Look what
          you just made me do<br />Look what you just made me do<br />
          <br />Ooh, look what you made me do<br />Look what you made me do<br />Look
          what you just made me do<br />Look what you just made me<br />Ooh,
          look what you made me do<br />Look what you made me do<br />Look what
          you just made me do<br />Look what you just made me do
        </p>
      </strong>
    )
  },
  {
    id: 12,
    name: "We don't talk anymore",
    singer: "Charlie Puth",
    src:
      "https://vocaroo.com/media_command.php?media=s0P4Arpjla89&command=download_mp3",
    lyrics: (
      <strong>
        <p>
          We don't talk anymore<br />We don't talk anymore<br />We don't talk
          anymore<br />Like we used to do<br />We don't laugh anymore<br />What
          was all of it for?<br />Oh, we don't talk anymore<br />Like we used to
          do.<br />
          <br />I just heard you found the one you've been looking&mdash;<br />You've
          been looking for<br />I wish I would have known that wasn't me<br />'Cause
          even after all this time I still wonder<br />Why I can't move on<br />Just
          the way you did so easily<br />
          <br />Don't wanna know<br />Kind of dress you're wearing tonight<br />If
          he's holdin' onto you so tight<br />The way I did before<br />I
          overdosed<br />Should've known your love was a game<br />Now I can't
          get you out of my brain<br />Oh, it's such a shame<br />
          <br />That we don't talk anymore<br />We don't talk anymore<br />We
          don't talk anymore<br />Like we used to do<br />We don't laugh anymore<br />What
          was all of it for?<br />Oh, we don't talk anymore<br />Like we used to
          do<br />
          <br />
          <em>[Selena Gomez:]</em>
          <br />I just hope you're lying next to somebody<br />Who knows how to
          love you like me<br />There must be a good reason that you're gone<br />Every
          now and then I think you might want me to<br />Come show up at your
          door<br />But I'm just too afraid that I'll be wrong<br />
          <br />Don't wanna know<br />If you're looking into her eyes<br />If
          she's holdin' onto you so tight<br />The way I did before<br />I
          overdosed<br />Should've known your love was a game<br />Now I can't
          get you out of my brain<br />Oh, it's such a shame<br />
          <br />
          <em>[Charlie Puth &amp; Selena Gomez:]</em>
          <br />That we don't talk anymore<br />(we don't, we don't)<br />We
          don't talk anymore<br />(we don't, we don't)<br />We don't talk
          anymore<br />Like we used to do<br />We don't laugh anymore<br />(we
          don't, we don't)<br />What was all of it for?<br />(we don't, we
          don't)<br />Oh, we don't talk anymore<br />Like we used to do<br />
          <br />Like we used to do<br />
          <br />Don't wanna know<br />Kind of dress you're wearing tonight<br />If
          he's giving it to you just right<br />The way I did before<br />I
          overdosed<br />Should've known your love was a game<br />Now I can't
          get you out of my brain<br />Oh, it's such a shame<br />
          <br />That we don't talk anymore<br />(we don't, we don't)<br />We
          don't talk anymore<br />(we don't, we don't)<br />We don't talk
          anymore<br />Like we used to do<br />We don't laugh anymore<br />(we
          don't, we don't)<br />What was all of it for?<br />(we don't, we
          don't)<br />Oh, we don't talk anymore<br />Like we used to do<br />
          <br />We don't talk anymore<br />
          <br />Don't wanna know<br />Kind of dress you're wearing tonight, oh<br />If
          he's holding onto you so tight, oh<br />The way I did before<br />
          <br />We don't talk anymore<br />
          <br />I overdosed<br />Should've known your love was a game, oh<br />Now
          I can't get you out of my brain, whoa<br />Oh, it's such a shame<br />
          <br />That we don't talk anymore
        </p>
      </strong>
    )
  }
];

export { getLyrics };
