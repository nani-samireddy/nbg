import teluguSongs from "../../songs_data.json";

type Song = {
  telugu_title: string;
  english_title: string;
  telugu_lyrics: string;
  english_lyrics: string;
  youtubeId?: string;
};

type SongsDataType = {
  [key: string]: Song;
};

const songsData: SongsDataType = teluguSongs;

export default function Page({ params }: { params: { songSlug: string } }) {
  const song = songsData[params.songSlug];
  if (!song) {
    return <div>Not found</div>;
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start md:justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
        {
          song.youtubeId && (
            <div className="iframe-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${song.youtubeId}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
            </div>
          )
        }
        <div className="flex flex-col items-start justify-start gap-10">
        <div className="telugu">
          <h1 className="font-black text-4xl my-6">{song.telugu_title}</h1>
          <pre className=" whitespace-pre-wrap leading-10">{song.telugu_lyrics}</pre>
        </div>
        <div className="english">
          <h1 className="font-black text-4xl my-6">{song.english_title}</h1>
          <pre className="whitespace-pre-wrap leading-9">{song.english_lyrics}</pre>
        </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {

  // Sort the songs by telugu title.
  const sortedSongs = getSortedSongs();

  const paths = Object.keys(sortedSongs).map((songSlug) => ({
    songSlug,
  }));

  return paths;
}

const getSortedSongs = () => {
  return Object.entries(songsData).sort((a, b) => {
    return a[1].telugu_title.localeCompare(b[1].telugu_title);
  });
};

