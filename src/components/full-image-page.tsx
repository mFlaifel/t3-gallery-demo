import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 ">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain "
        />
      </div>
      <div className="flex w-48 shrink-0 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-lg font-bold">
          {image.name}
        </div>
        <div className="flex flex-col p-2 ">
          <span> Uploaded By</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2 ">
          <span>Created On</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col p-2 ">
          <form
            action={async () => {
              "use server";
              await deleteImage(+image.id);
            }}
          >
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
