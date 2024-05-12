import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoIdAsNum = Number(photoId);

  if (Number.isNaN(photoIdAsNum)) throw new Error("Invalid photo ID");

  return <FullPageImageView id={photoIdAsNum} />;
}
