export interface Thumbnail {
  trending?: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
}

export enum Category {
  Movie = "Movie",
  Series = "TV Series",
}

export interface Entity {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: Category;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
