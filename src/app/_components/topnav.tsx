"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "./upload-button";

export function Topnav() {

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
