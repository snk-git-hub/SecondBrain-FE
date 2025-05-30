import React, { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";


enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    console.log({ title, link, type });


    const response = await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );


  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-500 opacity-60"></div>

      <div className="relative z-10 bg-white p-6 rounded-lg shadow-2xl w-[390px]">
        <div className="flex flex-col items-center space-y-6">

          <div className="flex justify-end w-full">
            <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition">
              <CrossIcon />
            </button>
          </div>

          <div className="w-full space-y-4">
            <Input reference={titleRef} label="Title" placeholder="Enter content title" />
            <Input reference={linkRef} label="Link" placeholder="Enter link" />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600 mb-2">Select Type</label>
            <div className="flex justify-center gap-4">
              <Button
                text="YouTube"
                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Youtube)}
              />
              <Button
                text="Twitter"
                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Twitter)}
              />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Button onClick={() => { addContent(); window.location.reload(); }} variant="primary" text="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}
