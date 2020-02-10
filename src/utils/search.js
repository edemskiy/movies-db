export function getUnifiedMedia(item) {
  const unifiedItem = (function() {
    switch (item.media_type) {
      case "movie":
        return {
          imagePath: item["poster_path"],
          name: item["original_title"],
          release_date: item["release_date"] || "",
          link: "/media/movie/"
        };
      case "person":
        return {
          imagePath: item["profile_path"],
          name: item["name"],
          link: "/person/"
        };
      case "tv":
        return {
          imagePath: item["poster_path"],
          name: item["original_name"],
          release_date: item["first_air_date"] || "",
          link: "/media/tv/"
        };
      default:
        return {
          imagePath: "",
          name: "",
          release_date: "",
          link: ""
        };
    }
  })();

  return { ...item, ...unifiedItem };
}
