import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/NJX2X6gQLcArrXwCGoqIcO2ZQ8PEJoH7TzqVAf3lRiDkXGU6",
  "https://utfs.io/f/NJX2X6gQLcArKtBfRJxXC0SY9x5fzRnTk6pEDAPHBldVsNmg", 
  "https://utfs.io/f/NJX2X6gQLcArwiBTIgrmJTFGWrVDPHvkXnoswQ470tcI5agN"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
        {[...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
      Hello - gallery in progress test 1
    </main>
  );
}
