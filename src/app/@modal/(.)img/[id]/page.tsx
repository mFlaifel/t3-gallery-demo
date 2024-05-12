import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoIdAsNum = Number(photoId);

  if (Number.isNaN(photoIdAsNum)) throw new Error("Invalid photo ID");

  const image = await getImage(photoIdAsNum);

  return (
    <div>
      Modal
      <img src={image.url} alt={image.name} className="w-96 " />
      {photoId}
    </div>
  );
}
