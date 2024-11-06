import { SignedIn, SignedOut } from "@clerk/nextjs";
export const dynamic = 'force-dynamic';
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

async function Images(){
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48 h-48">
            <Link href={`/img/${image.id}`}>
            <Image src={image.url} alt={image.name} height={480} width={480}  style={{objectFit: "contain"}}/>
            </Link>
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
