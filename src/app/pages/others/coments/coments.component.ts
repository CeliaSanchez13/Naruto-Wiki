import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit{

  userLog:string | null;

  commentsList:string[] = [];
  
  constructor( private _blogService:BlogService){}


  ngOnInit(): void {
    this.userLog = localStorage.getItem('user');

    this._blogService.getAllComments().subscribe(
      (resp:any) => this.commentsList = resp
    );

  }

}
