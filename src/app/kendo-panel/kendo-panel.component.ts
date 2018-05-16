import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-kendo-panel',
  templateUrl: './kendo-panel.component.html',
  styleUrls: ['./kendo-panel.component.css']
})
export class KendoPanelComponent implements OnInit {
  public selectedMenuOption: number = 1;
  constructor(private CommonserviceService: CommonserviceService) { }

  ngOnInit() {
  }
  private baseImageUrl: string = "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

  private imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + ".jpg";
  }

  public onChangeMenu(value: number) {    
    this.CommonserviceService.ShareData(value);
  }

}
