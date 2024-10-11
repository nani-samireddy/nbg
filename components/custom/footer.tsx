import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm py-10">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/report"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contribute"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute Lyrics
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Conditions
        </Link>
        
      </footer>
  )
}
