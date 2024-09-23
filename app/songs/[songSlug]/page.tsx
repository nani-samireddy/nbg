import teluguSongs from "../../songs_data.json";

type Song = {
  telugu_title: string;
  english_title: string;
  telugu_lyrics: string;
  english_lyrics: string;
};

type SongsData = {
  [key: string]: Song;
};

const songsData: SongsData = teluguSongs;

export default function Page({ params }: { params: { songSlug: string } }) {
  const song = songsData[params.songSlug];
  if (!song) {
    return <div>Not found</div>;
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        <div className="audio-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/uYb15wAGo9A?autoplay=0&controls=1&showinfo=0&autohide=1&mute=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>


        <div className="telugu">
          <h1 className="font-black text-4xl my-3">{song.telugu_title}</h1>
          <pre className=" leading-10">{song.telugu_lyrics}</pre>
        </div>
        <div className="english">
          <h1 className="font-black text-4xl my-3">{song.english_title}</h1>
          <pre className="leading-9">{song.english_lyrics}</pre>
        </div>

    </div>
  );
}

export async function generateStaticParams() {
  const paths = Object.keys(songsData).map((songSlug) => ({
    songSlug,
  }));

  return paths;
}
