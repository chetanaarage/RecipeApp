import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	// @Output() featureSelected =new EventEmitter<String>();

 //  constructor() { }

  ngOnInit() {
  }

 //  onSelect(feature:String){
 //  	this.featureSelected.emit(feature);
 //  }

}
