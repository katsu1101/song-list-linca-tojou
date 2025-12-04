import {Song, YouTubeVideo} from "@/types";

/**
 * X投稿用定数
 */
const context = {
  currentUrl: "https://katsu1101.github.io/song-list-linca-tojou",
  xlinkUrl: "https://www.addtoany.com/add_to/x?linkurl=",
  linkNote: `#戸定梨香ちゃんの歌リスト の検索結果
キーワード: `,
  linkNote2: `#戸定梨香ちゃんの歌リスト
#戸定梨香 #とじょりん \n　\n　`,
  linkNote3: `\n#戸定梨香 #とじょりん \n　\n　`
}

/**
 * 提供された検索クエリとコンテキスト値に基づいて完全なURLを生成します。
 *
 * この関数は、検索クエリと関連するコンテキスト情報をエンコードして URL を構築する、
 * ベースURLに追加します。検索クエリが提供されているかどうかによって、出力は異なる。
 *
 * param {string} searchQuery - 生成されるURLに含める検索クエリ。空の場合はデフォルトのURLが返されます。
 * returns {string} - searchQueryとコンテキストデータに基づいて完全に構築され、エンコードされたURL。
 */
export const linkUrl = (
  searchQuery: string,
) => {

  const linkUrl = `${context.currentUrl}/?s=${encodeURIComponent(searchQuery)}
    ${context.linkNote3}`
  const linkNote = encodeURIComponent(`${context.linkNote}${searchQuery}
    ${context.linkNote3}`);
  const linkNote2 = encodeURIComponent(`${context.linkNote2}`);

  return searchQuery
    ? `${context.xlinkUrl}${encodeURIComponent(linkUrl)}&linkname=${linkNote}`
    : `${context.xlinkUrl}${encodeURIComponent(context.currentUrl)}&linkname=${linkNote2}`
}

/**
 * 完全一致と部分一致をサポートする検索クエリに基づいて曲のリストをフィルタリングします。
 *
 * @param {Song[]} songs - フィルタリングする `Song` オブジェクトの配列。
 * @param {Record<string, YouTubeVideo>} videos - 動画 ID と `YouTubeVideo` オブジェクトのマッピング。
 * オブジェクトへのマッピング。
 * @param {string} searchQuery - 検索クエリー文字列。クエリが `#` で始まる場合、フィルタはジャンルまたは
 * はジャンルまたは `opEd` に対して完全一致を行います。それ以外の場合は
 * に対して部分一致を行います。
 *
 * @returns {Song[]} 検索条件を満たす曲の配列。
 */
export const filterSongs = (
  songs: Song[], videos: Record<string, YouTubeVideo>,
  searchQuery: string): Song[] => {

  return songs.filter((song) => {
    const videoData = videos[song.videoId];

    // 🔹「#」で始まる場合はジャンル & opEd の完全一致検索
    if (searchQuery.startsWith("#")) {
      const query = searchQuery.slice(1).toLowerCase(); // 先頭の「#」を削除
      return (
        (song.info?.genre?.toLowerCase() === query) || // ✅ ジャンル完全一致
        (song.info?.opEd?.toLowerCase() === query)     // ✅ opEd完全一致
      );
    }

    // 🔹それ以外の場合は通常の部分一致検索
    return (
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||  // 曲名検索
      song.date.includes(searchQuery) ||  // 日付検索
      song.info?.work?.toLowerCase().includes(searchQuery.toLowerCase()) ||  // 作品名
      song.artist?.toLowerCase().includes(searchQuery.toLowerCase()) ||  // アーティスト
      song.info?.lyricist?.toLowerCase().includes(searchQuery.toLowerCase()) ||  // 注釈
      song.info?.composer?.toLowerCase().includes(searchQuery.toLowerCase()) ||  // 作曲
      song.info?.arranger?.toLowerCase().includes(searchQuery.toLowerCase()) ||  // 編曲
      song.note.toLowerCase().includes(searchQuery.toLowerCase()) ||  // 注釈
      (videoData?.snippet?.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) // 動画タイトル検索
    );
  });

}