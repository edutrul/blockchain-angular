import { Component, ViewChild, ElementRef} from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-printcertificate',
  templateUrl: './printcertificate.component.html',
  styleUrls: ['./printcertificate.component.css']
})
export class PrintcertificateComponent  {
  @ViewChild('content') content: ElementRef;
  public donwloadPDF() {
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('test.pdf');
  }
}
