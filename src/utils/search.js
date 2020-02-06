export function getUnifiedSearchedItem(item) {
  let unifiedItem;
  switch (item.media_type) {
    case "movie":
      unifiedItem = {
        imagePath: item["poster_path"],
        name: item["original_title"],
        info: (item["release_date"] || "").substr(0, 4),
        link: "/movies/"
      };
      break;
    case "person":
      unifiedItem = {
        imagePath: item["profile_path"],
        name: item["name"],
        link: "/persons/"
      };
      break;
    case "tv":
      unifiedItem = {
        imagePath: item["poster_path"],
        name: item["original_name"],
        info: (item["first_air_date"] || "").substr(0, 4),
        link: "/tv/"
      };
      break;
    default:
      unifiedItem = {};
  }
  return { ...unifiedItem, type: item.media_type, id: item.id };
}
