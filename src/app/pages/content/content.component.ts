import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { dataFake } from 'src/app/data/dataDake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  photoCover:string = "https://tntsports.com.br/__export/1682434249205/sites/esporteinterativo/img/2023/04/25/corinthians.png_1902800913.png"
  title:string = ""
  author:string = ""
  description:string = ""

  private id:string | null = "0"

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.title = result.title
    this.description = result.description
    this.author = result.author
    this.photoCover = result.photo
  }

}
