import { Component, OnInit } from '@angular/core';
import { BlogPost, ContentLoaderService } from '../../service/content-loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contentpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contentpage.component.html',
  styleUrl: './contentpage.component.css'
})
export class ContentPageComponent implements OnInit {
  posts: BlogPost[] = []; // Array to hold the posts

  constructor(private contentLoaderService: ContentLoaderService) {}

  ngOnInit(): void {
    // Load blog posts when the component is initialized
    this.contentLoaderService.getBlogPosts().subscribe((data) => {
      this.posts = data.posts; // Assign fetched posts to the posts array
    });
  }
}
