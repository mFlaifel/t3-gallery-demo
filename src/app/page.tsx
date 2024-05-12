import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();
  console.log(images);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.length > 0 &&
          [...images, ...images, ...images].map((image, index) => (
            <div key={image.id + "-" + index} className="w-48 p-4">
              <Link href={`/image/${image.id}`}>
                <img src={image.url} alt="image" />
                <p>{image.name}</p>
              </Link>
            </div>
          ))}
      </div>
    </main>
  );
}
