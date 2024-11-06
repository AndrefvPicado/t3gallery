import { SignedIn, SignedOut } from "@clerk/nextjs";
export const dynamic = 'force-dynamic';
import { getMyImages } from "~/server/queries";
import Image from "next/image";

async function Images(){
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48 h-48">
            <Image src={image.url} alt={image.name} height={480} width={480}  style={{objectFit: "contain"}}/>
            <div>{image.name}</div>
          </div>
        ))}
    </div>
)}

export default function HomePage() {
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
