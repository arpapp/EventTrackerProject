export class Goal {
  id: number;
  name: string;
  description: string;
  stickerUrl: string;
  achieved: boolean;
  createDate: Date;
  category: string;
  achievedPic: string;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    stickerUrl?: string,
    achieved?: boolean,
    category?: string
  ){
    this.id = id;
    this.name = name;
    this. description = description;
    this.stickerUrl = stickerUrl;
    this.achieved = achieved;
    this.category = category;
    this.achievedPic = this.achieved? "https://i.imgur.com/Z3nQM2X.png" : "https://i.imgur.com/5Rl1NPf.png" ;
  }

}
