import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-jto-ex',
  templateUrl: './jto-ex.component.html',
  styleUrls: ['./jto-ex.component.css']
})
export class JtoExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reset() {
    // Access the textarea element and reset its value
    const textarea = document.querySelector('textarea[name="jsonData"]') as HTMLTextAreaElement;
    if (textarea) {
      textarea.value = '';
    }
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      debugger
      const jsonData = form.value.jsonData;
      try{
        const parsedData = JSON.parse(jsonData);
        if (typeof parsedData === 'object' && parsedData !== null) {
          // If parsedData is an object, convert it to array and proceed
          const dataArray = Array.isArray(parsedData) ? parsedData : [parsedData];
          const worksheet = XLSX.utils.json_to_sheet(dataArray);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
          XLSX.writeFile(workbook, 'data.xlsx');
        } else {
          // If parsedData is not an object, alert the user
          alert('Invalid JSON format. Please provide valid JSON data.');
        }
      }
      catch(error){
        // If parsing fails, alert the user
        alert('Invalid JSON format. Please provide valid JSON data.');
      }
    }
  }

}
