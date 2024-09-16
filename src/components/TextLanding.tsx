import React from 'react';
import { TextLandingData } from 'types';

interface TextLandingProps {
  data: TextLandingData;
}

const TextLanding: React.FC<TextLandingProps> = ({ data }) => {
  return (
    <section className="bg-fondo py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-8 py-12">
            <h1 className="text-5xl font-bold text-center text-principal mb-6">{data.title}</h1>
            {data.description && (
              <p className="text-lg text-gray-600 text-center mb-8">{data.description}</p>
            )}
            
            {data.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-semibold text-principal mb-4">{section.title}</h2>
                <p className="text-texto text-xl leading-relaxed mb-4">{section.content}</p>
                
                {section.list && section.list.length > 0 && (
                  <ul className="list-disc pl-6">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-texto text-xl leading-relaxed mb-2">
                        <span className="font-semibold">{item.name}:</span> {item.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextLanding;