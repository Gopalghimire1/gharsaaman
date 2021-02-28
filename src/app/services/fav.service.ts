import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  favs:number[]=[];
  constructor() {
    var data=localStorage.getItem('fav');
    console.log(data);
    if(data !=null && data!=undefined){
      this.favs=JSON.parse(data);
    }
  }
  addFav(id:any){
    if(!this.favs.includes(id)){
      this.favs.push(id);
    }else{
      var index=this.favs.findIndex(a=>a==id);
      this.favs.splice(index,1);
    }
    console.log(this.favs);
    localStorage.setItem("fav", JSON.stringify(this.favs));
  }
}
