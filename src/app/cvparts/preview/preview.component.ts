import { Component, Input } from '@angular/core';
import Resume, { Work } from '../Resume';
import { MatListOption } from '@angular/material/list';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() selectedWork: Work[];
  @Input() resumeData: Resume;
  @Input() skills: any;
  @Input() education: { higherEducation: MatListOption[], otherEducation: MatListOption[] };
  @Input() languages: MatListOption[];

  constructor() {
  }

  printResume() {
    const data = document.getElementById('print-section');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const doc = new JsPDF();
      doc.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save('MYPdf.pdf');
    });
    //
    // const doc = new JsPDF();
    // doc.fromHTML(document.getElementById('print-section'), 1, 1);
    // doc.save('my.pdf');
  }
}
