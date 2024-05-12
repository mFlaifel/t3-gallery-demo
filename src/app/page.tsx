import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/b9fac56c-6fe9-4052-9a97-4258effd0d55-ryjsaz.jpg",
  "https://utfs.io/f/65de21e0-1ac9-412f-a3eb-36bb73695a42-ea72m8.jpg",
  "https://utfs.io/f/a996be3f-91eb-43ae-a9c4-06dfe693fddc-4h6zxc.jpg",
  "https://utfs.io/f/2b1dfd8a-0ab6-40bd-9474-701f3f5a7dde-h2f60z.jpg",
  "https://utfs.io/f/ec9d56d3-acb8-4e70-84d6-1841fa9420d0-xxcl8b.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.length > 0 &&
          posts.map((post, index) => (
            <div key={post.id + "-" + index} className="w-48 p-4">
              <p>{post.name}</p>
            </div>
          ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 p-4">
            <Link href={`/image/${image.id}`}>
              <img src={image.url} alt="image" />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
