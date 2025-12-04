import VideoCard            from "@/components/VideoCard";
import {Song, YouTubeVideo} from "@/types";
import React                from "react";

type Props = {
  filteredSongs: Song[];
  videos: Record<string, YouTubeVideo>;
  handleGenreClick: (genre: string) => void;
  handleTextSearch: (q: string) => void;
}

/**
 * 動画一覧のSessionを表示
 * @param filteredSongs 歌一覧の検索結果
 * @param videos 動画一覧
 * @param handleTextSearch テキスト検索用ハンドル
 * @param handleGenreClick タグ検索用ハンドル
 * @constructor
 */
export const SessionVideos: React.FC<Props> = ({
  filteredSongs,
  videos, handleTextSearch, handleGenreClick
}) => {

  // ✅ 日付ごとにグループ化（videoIdごと）
  const groupedSongs: Record<string, Record<string, Song[]>> = {};
  filteredSongs.forEach((song) => {
    if (!groupedSongs[song.date]) {
      groupedSongs[song.date] = {};
    }
    if (!groupedSongs[song.date][song.videoId]) {
      groupedSongs[song.date][song.videoId] = [];
    }
    groupedSongs[song.date][song.videoId].push(song);
  });

  return (
    <div className="mt-24">
      {Object.entries(groupedSongs).length == 0
        ? <p className="text-center text-gray-500">検索結果がありません</p>
        : Object.entries(groupedSongs).map(([date, videosByDate]) => (
          <section key={date} className="mb-8">
            <h2 className="text-2xl font-semibold border-b-2 pb-2">{date}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {Object.entries(videosByDate).map(([videoId, songs]) => {
                return (
                  <VideoCard
                    key={videoId} videoData={videos[videoId]} songs={songs}
                    handleGenreClick={handleGenreClick}
                    handleTextSearch={handleTextSearch}
                  />
                );
              })}
            </div>
          </section>
        ))
      }
    </div>
  )
}