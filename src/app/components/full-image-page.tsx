import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: {id: number}){
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
    return (
      <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="object-contain"/>
        </div>
        <div className="flex w-48 flex-col flex-shrink-0 border-l gap-2">
          <div className="text-xl font-bold border-b p-2">{image.name}</div>
          <div className="flex flex-col p-2">
            <span>Uploaded by: {uploaderInfo.firstName} {uploaderInfo.lastName}</span>
          </div>
          <div className="flex flex-col p-2">
            <span>Created on: {new Date(image.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      )
  }