import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(

    )
  }

}
