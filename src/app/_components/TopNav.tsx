"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { UploadButton } from "~/utils/uploadthing";
import { SimpleUploadBtn } from "./SimpleUploadBtn";

export default function TopNav() {
  const router = useRouter(); //import it from next/navigation only
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4 items-centers">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <UploadButton
            endpoint={"imageUploader"}
            onClientUploadComplete={() => {
              router.refresh();
            }}
          /> */}
          <SimpleUploadBtn />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
