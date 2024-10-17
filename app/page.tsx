import Link from 'next/link';
import teluguSongs from './songs_data.json';

type Song = {
  telugu_title: string;
  telugu_lyrics: string;
  english_title: string;
  english_lyrics: string;
};

type SongsData = {
  [key: string]: Song;
};

const songsData: SongsData = teluguSongs;

export default function Page() {

const indexes = Object.keys(songsData);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
        {
          indexes.map((index) => (
            <Link
              key={index}
              href={`/songs/${index}`}
              className="flex items-center gap-2 text-lg text-blue-600 hover:underline hover:underline-offset-4"
            >
              {songsData[index].telugu_title}
            </Link>
          ))
        }
      </main>
    </div>
  );
}
