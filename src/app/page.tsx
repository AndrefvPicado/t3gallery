import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/NJX2X6gQLcArrXwCGoqIcO2ZQ8PEJoH7TzqVAf3lRiDkXGU6",
  "https://utfs.io/f/NJX2X6gQLcArKtBfRJxXC0SY9x5fzRnTk6pEDAPHBldVsNmg", 
  "https://utfs.io/f/NJX2X6gQLcArwiBTIgrmJTFGWrVDPHvkXnoswQ470tcI5agN"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
      Hello - gallery in  
    </main>
  );
}
