export class Article {

  id!: number;
  href: string;
  date: string;
  author: string;
  category: string;
  categoryLink: string;
  summary: string;
  title: string;
  subtitle: string;

  constructor(
    href: string,
    date: string,
    author: string,
    category: string,
    categoryLink: string,
    summary: string,
    title: string,
    subtitle: string
  ) {
    
    this.href = href || "";
    this.date = date || "";
    this.author = author || "";
    this.category = category || "";
    this.categoryLink = categoryLink || "";
    this.summary = summary || "";
    this.title = title || "";
    this.subtitle = subtitle || "";
  }
}
