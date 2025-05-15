import { ShareIcon } from "../icons/Shareicon"
import { TwitterTweetEmbed } from "react-twitter-embed"

interface CardProps {
  title: string
  link: string
  type: "twitter" | "youtube"
}

function getYouTubeEmbedLink(url: string): string {
  const videoIdMatch = url.match(/(?:youtu\.be\/|v=)([\w-]+)/)
  return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : ""
}

function getTweetIdFromUrl(url: string): string | null {
  const match = url.match(/status\/(\d+)/)
  return match ? match[1] : null
}

export function Card({ title, link, type }: CardProps) {
  const youtubeEmbed = getYouTubeEmbedLink(link)
  const tweetId = getTweetIdFromUrl(link)

  return (
    <div className="p-4 bg-white rounded-md max-w-72 border-2 border-gray-200">
      <div className="flex justify-between">
        {/* Left Side */}
        <div className="flex items-center text-md">
          <div className="pr-2 text-gray-500">
            <ShareIcon />
          </div>
          {title}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </a>
        </div>
      </div>

      <div className="pt-4">
        {type === "youtube" && youtubeEmbed && (
          <iframe
            className="w-full aspect-video"
            src={youtubeEmbed}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && tweetId && (
          <TwitterTweetEmbed tweetId={tweetId} />
        )}
      </div>
    </div>
  )
}
