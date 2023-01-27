import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Currency_Converter';

  temp: any
  a: any
  b: any

  getA(a: any) {
    this.a = a
  }
  getB(b: any) {
    this.b = b
  }
  getValue(val: any) {


    console.log(this.a, this.b);

    if (this.a == "INR" && this.b == "USD") {
      this.temp = "$" + (val * 0.012)
      console.log("INR -> USD");

    }
    else if (this.a == "USD" && this.b == "INR") {
      this.temp = "Rs." + (val * 81.56)
      console.log("USD -> INR");
    }
    else if ((this.a == "USD" && this.b == "USD") || (this.a == "INR" && this.b == "INR")) {
      this.temp = val
    }

    else {
      console.log("please number only ");
    }
  }


}
