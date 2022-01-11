import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.css']
})
export class TradingviewComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {

    
    new TradingView.widget(
      {
        "width": 700,
        "height": 430,
        "symbol": "GPW:PUN",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview"
      }
    );
  }

}