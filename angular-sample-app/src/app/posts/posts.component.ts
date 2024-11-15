import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  posts: any[] = [];
  newPost = {name: '', username: ''};

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() : void {
    this.dataService.getPosts().subscribe(
      data => this.posts = data,
      error => console.error('Hiba történt öcsém', error)
    );
  }

  addPost(): void {
    this.dataService.addPost(this.newPost).subscribe(
      data =>{
        this.posts.push(data);
        this.newPost = {name: '', username: ''};
      },
      error => console.error('Hiba történt', error)
    )
  }
}
