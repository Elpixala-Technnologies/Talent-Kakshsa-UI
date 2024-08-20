import Image from "next/image";
import React from "react";

export default function EventCard({
  title,
  hostName,
  usersAvatars,
  date,
  timeFrom,
  timeTo,
  eventMedium,
}: any) {
  return (
    <div className="col-span-1 rounded-2xl bg-white p-5 text-zinc-700">
      <h1 className="font-bold">{title}</h1>
      <p className="text-xs text-zinc-400">Hosted by {hostName}</p>
      <p className="mt-3">Meeting Attending</p>
      <div className="avatarsMap mt-3">
        <ul className="flex">
          {usersAvatars.slice(0, 5).map((avatar: any, index: number) => (
            <li key={index}>
              <Image
                src={avatar}
                className="h-8 w-8 rounded-full object-cover"
                alt={`Avatar ${index}`}
              />
            </li>
          ))}
          {usersAvatars.length > 6 ? (
            <li className="flex h-9 w-9 items-center justify-center bg-slate-200 pt-1 text-center text-gray-500">
              {usersAvatars.length - 5}+
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <p className="mt-3 flex justify-between text-xs">
        <span>{date}</span> |{" "}
        <span>
          {timeFrom} - {timeTo}
        </span>{" "}
        | <span>{eventMedium}</span>
      </p>
    </div>
  );
}
