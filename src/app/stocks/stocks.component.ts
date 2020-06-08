import {Component} from '@angular/core'

@Component({
    selector : 'stocks',
    templateUrl : './stocks.component.html'
})

export class StocksComponent {

    stocks = [
        {
        "symbol" : "ZEEL",
        "open":9584.20,
        "high" : 3584.50,
        "low" : 9351.10,
        "change" : 187.00,
        "changePercentage" : 2.03,
        "volume" : 8463.95
    },
    {
        "symbol" : "AXISBANK",
        "open": 411.00,
        "high" : 416.45,
        "low" : 399.60,
        "change" : 27.10,
        "changePercentage" : 7.01,
        "volume" : 482.06
    },
    {
        "symbol" : "ULTRACEMCO",
        "open": 3450.00,
        "high" : 3580.00,
        "low" : 3450.00,
        "change" : 214.60,
        "changePercentage" : 6.41,
        "volume" : 12.25
    },
    {
        "symbol" : "ICICIBANK",
        "open": 343.50,
        "high" : 348.40,
        "low" : 332.30,
        "change" : 16.00,
        "changePercentage" : 4.98,
        "volume" : 728.18
    },
]
}