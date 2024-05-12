import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.length > 0 &&
        images.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <Link href={`/img/${image.id}`} passHref>
              <Image
                src={image.url}
                alt={image.name}
                style={{ objectFit: "contain" }}
                width={480}
                height={480}
              />
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
