class StopInfo {
  constructor(
    id,
    title,
    stopLetter,
    direction,
    longitude,
    latitude,
    imageUrl,
    sawp,
    sawpTitle,
  ) {
    this.id = id;
    this.title = title;
    this.stopLetter = stopLetter;
    this.direction = direction;
    this.longitude = longitude;
    this.latitude = latitude;
    this.imageUrl = imageUrl;
    this.sawp = sawp;
    this.sawpTitle = sawpTitle;
  }
}

export default StopInfo;
