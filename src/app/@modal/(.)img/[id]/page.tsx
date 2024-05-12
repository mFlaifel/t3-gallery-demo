import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoIdAsNum = Number(photoId);

  if (Number.isNaN(photoIdAsNum)) throw new Error("Invalid photo ID");

  return (
    <Modal>
      <FullPageImageView id={photoIdAsNum} />
    </Modal>
  );
}
