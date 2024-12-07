import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic';
  number: string = '';
 
  list:any[]=[1,2,3,4,5,65.55, 12,22,1233.2,12, 123455.45445]


  convertToGermanNumber(englishNumber:number) {
    // Convert the number to a string to handle formatting
    const [integerPart, decimalPart] = englishNumber.toString().split('.');
  
    // Add German thousands separator (.) to the integer part
    const germanIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Replace the decimal separator (if any) with a comma
    if (decimalPart) {
      return `${germanIntegerPart},${decimalPart}`;
    } else {
      return germanIntegerPart;
    }
  }
  convertIntoGerman(){
    this.list = this.list.map((item)=>{
      item = this.convertToGermanNumber(item)
      console.log(item)
      return item
    })
  }
   isGermanNumber(input:string) {
    // German number pattern: Optional thousands (with dots), optional decimal part (with comma)
    const germanNumberPattern = /^\d{1,3}(\.\d{3})*(,\d+)?$/;
  
    let result= germanNumberPattern.test(input);
    if(result){
      console.log("number is german number", input)
      console.log("converted number", this.convertToEnglishNumber(input))
    }else{
      console.log("number is not german number", input)
    }
  }

  convertToEnglishNumber(germanNumber:string) {
    // Replace German thousands separator (.) with nothing
    const withoutThousandsSeparator = germanNumber.replace(/\./g, '');
  
    // Replace German decimal separator (,) with a dot
    const englishNumber = withoutThousandsSeparator.replace(',', '.');
  
    return englishNumber;
  }

}
