export function getSearchedItemProps(item) {
  switch (item.media_type) {
    case "movie":
      return {
        imagePath: item["poster_path"],
        name: item["original_title"],
        type: item.media_type,
        info: (item["release_date"] || "").substr(0, 4),
        link: "/movies/"
      };
    case "person":
      return {
        imagePath: item["profile_path"],
        name: item["name"],
        type: item.media_type,
        link: "/persons/"
      };
    case "tv":
      return {
        imagePath: item["poster_path"],
        name: item["original_name"],
        type: item.media_type,
        info: (item["first_air_date"] || "").substr(0, 4),
        link: "/tv/"
      };
    default:
      return {};
  }
}
