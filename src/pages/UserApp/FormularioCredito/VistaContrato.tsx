import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

import file from "../../../assets/contrato.pdf";

interface PdfPaginationProps {
  pageNumber: number;
  numPages: number;
  handlePageChange: (page: number) => void;
}

const PdfPagination: React.FC<PdfPaginationProps> = ({ pageNumber, numPages, handlePageChange }) => (
  <div className="inline-flex items-center justify-center rounded bg-principal py-1 text-white">
    <button
      onClick={() => handlePageChange(pageNumber - 1)}
      disabled={pageNumber <= 1}
      className="inline-flex size-8 items-center justify-center"
    >
      <span className="sr-only">Página anterior</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <span className="h-4 w-px bg-white/25" aria-hidden="true"></span>
    <div>
      <label htmlFor="PaginationPage" className="sr-only">Página</label>
      <input
        type="number"
        className="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        min="1"
        max={numPages}
        value={pageNumber}
        onChange={(e) => handlePageChange(parseInt(e.target.value, 10))}
        id="PaginationPage"
      />
    </div>
    <span className="h-4 w-px bg-white/25"></span>
    <button
      onClick={() => handlePageChange(pageNumber + 1)}
      disabled={pageNumber >= numPages}
      className="inline-flex size-8 items-center justify-center"
    >
      <span className="sr-only">Página siguiente</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
);

interface VistaContratoProps {
  handlePrev: () => void;
  handleNext: () => void;
}

const VistaContrato: React.FC<VistaContratoProps> = ({ handlePrev, handleNext }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updatePageWidth = () => {
      if (containerRef.current) {
        setPageWidth(containerRef.current.offsetWidth);
      }
    };

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);
    return () => window.removeEventListener('resize', updatePageWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (newPage: number) => {
    setPageNumber(Math.max(1, Math.min(newPage, numPages)));
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8 px-4 py-12 space-y-4">
      <div ref={containerRef} className="pdf-viewer mx-auto w-full">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className="border border-gray-500">
          <Page pageNumber={pageNumber} width={pageWidth} />
        </Document>
        <div className="mt-4 flex justify-center">
          <PdfPagination
            pageNumber={pageNumber}
            numPages={numPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      <div className="terms-and-conditions">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="h-6 w-6 text-principal border-gray-300 rounded"
          />
          <span className="text-lg text-gray-700">Acepto los términos y condiciones del contrato</span>
        </label>
      </div>
      <div className="mt-4 flex justify-between">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
          >
            Siguiente
          </button>
      </div>
    </div>
  );
};

export default VistaContrato;