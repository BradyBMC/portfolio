"use client"
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

// Removes extra white space from Resume.pdf display
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={1.5} pageNumber={pageNumber} renderTextLayer={false}/>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}