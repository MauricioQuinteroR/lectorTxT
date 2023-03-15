import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayedColumns: string[] = [];
  dataSource: any[][] = [];
  displayedColumns2: string[] = [];
  dataSource2: any[][] = [];

  constructor() {}

  onFileChange(event: any, tableIndex: number) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const content = e.target.result;
        this.generateTable(content, tableIndex);
      };
      reader.readAsText(file);
    }
  }

  generateTable(content: string, tableIndex: number) {
    const lines = content.trim().split('\n');
    const headers = Array(lines[0].split(',').length)
      .fill(0)
      .map((_, i) => `Campo ${i + 1}`);

    const data = lines.map((line) => line.split(','));

    if (tableIndex === 1) {
      this.displayedColumns = headers;
      this.dataSource = data;
    } else {
      this.displayedColumns2 = headers;
      this.dataSource2 = data;
    }
  }

  applyClass(value: any): string {
    return typeof value !== 'string' || value.length < 3 ? 'red' : '';
  }
}
