import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the interface for BlogPost data
export interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  date: string;
  metadata: {
    author: string;
    views: number;
    likes: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ContentLoaderService {

  private jsonUrl = 'assets/content.json';  // Path to the JSON file in the assets folder

  constructor(private http: HttpClient) {}

  // Method to fetch the blog posts from the JSON file
  getBlogPosts(): Observable<{ posts: BlogPost[] }> {
    return this.http.get<{ posts: BlogPost[] }>(this.jsonUrl);
  }
}
