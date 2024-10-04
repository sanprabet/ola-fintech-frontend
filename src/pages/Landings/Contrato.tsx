import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import axios from 'axios';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import contrato from "../../assets/contrato.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface ContratoProps {
  endpointUrl: string;
}

const Contrato: React.FC<ContratoProps> = ({ endpointUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPdfUrl = async () => {
      try {
        const response = await axios.get(endpointUrl);
        setPdfUrl(contrato);
      } catch (error) {
        console.error('Error fetching PDF URL:', error);
        setPdfUrl(contrato);
      }
    };

    fetchPdfUrl();
  }, [endpointUrl]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function changePage(offset: number): void {
    setPageNumber(prevPageNumber => 
      Math.min(Math.max(prevPageNumber + offset, 1), numPages || 1)
    );
  }

  function changeZoom(delta: number): void {
    setScale(prevScale => Math.min(Math.max(prevScale + delta, 0.5), 2.0));
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="bg-fondo p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Contrato de uso Galilea</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => changeZoom(-0.1)} 
              className="p-2 bg-principal text-white rounded hover:bg-principalToneDown transition"
            >
              <ZoomOut size={20} />
            </button>
            <button 
              onClick={() => changeZoom(0.1)} 
              className="p-2 bg-principal text-white rounded hover:bg-principalToneDown transition"
            >
              <ZoomIn size={20} />
            </button>
          </div>
        </div>
        <div className="p-4">
          {pdfUrl && (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              className="flex flex-col items-center"
            >
              <Page 
                pageNumber={pageNumber} 
                scale={scale}
                className="mb-4 shadow-md"
              />
            </Document>
          )}
        </div>
        <div className="bg-fondo p-4 flex justify-between items-center">
          <button 
            onClick={() => changePage(-1)} 
            disabled={pageNumber <= 1}
            className="p-2 bg-principal text-white rounded hover:bg-principalToneDown transition disabled:bg-gray-400"
          >
            <ChevronLeft size={20} />
          </button>
          <p className="text-center">
            Page {pageNumber} of {numPages}
          </p>
          <button 
            onClick={() => changePage(1)} 
            disabled={pageNumber >= (numPages || 1)}
            className="p-2 bg-principal text-white rounded hover:bg-principalToneDown transition disabled:bg-gray-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contrato;