import { Component } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  title: string;
  content: string;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.postCol = this.afs.collection('posts');
    this.posts = this.postCol.valueChanges();
  }

  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }
}
