import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany();

  return (
    <div className="flex flex-wrap gap-4">
      {images.length > 0 &&
        images.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <Link href={`/image/${image.id}`}>
              <img src={image.url} alt="image" />
              <p>{image.name}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign In above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
