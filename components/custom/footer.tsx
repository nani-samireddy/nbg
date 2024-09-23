export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm py-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/report"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contribute"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute Lyrics
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Conditions
        </a>
        
      </footer>
  )
}
