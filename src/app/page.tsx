import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = 'force-dynamic';
import { getImages } from "~/server/queries";

async function Images(){
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
            <div>{image.name}</div>
          </div>
        ))}
    </div>
)}

export default async function HomePage() {

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
