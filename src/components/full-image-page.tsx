import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain "
        />
      </div>
      <div className="flex w-48 shrink-0 flex-col border-l">
        <p className="text-xl font-bold">{image.name}</p>
      </div>
    </div>
  );
}
