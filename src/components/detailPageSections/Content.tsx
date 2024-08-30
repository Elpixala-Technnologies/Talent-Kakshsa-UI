import { content } from "@/data/wrapperData";
import React, { useState } from "react";
import Accordion from "../Accordion";

export default function Content() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <>
      {content &&
        content?.length > 0 &&
        content?.map((section, index) => {
          return (
            <div className="space-y-5" key={index}>
              {/* subtitle  */}
              <h2>{section?.subtitle}</h2>
              {/* title */}
              <p>{section?.title}</p>
              {/* text editor */}
              {section?.textEditor && (
                <div
                  className={`my-2 mb-5 text-wrap border-l-4 border-orange-500 py-2 pl-5 text-justify text-lg font-medium italic text-black ${
                    isExpanded ? "" : "line-clamp-4"
                  }`}
                  dangerouslySetInnerHTML={{ __html: section?.textEditor }}
                />
              )}
              {/* syllabus  */}
              {section?.syllabus && (
                <Accordion data={section?.syllabus?.lessons} />
              )}
            </div>
          );
        })}
    </>
  );
}

function SyllabusAccordion({ data }: any) {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="faq-items">
      {data.map((item: any, i: number) => (
        <Accordion
          data={item}
          key={i}
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
}

// https://codesandbox.io/p/sandbox/framer-motion-accordion-qx958?file=%2Fsrc%2FExample.tsx%3A45%2C5-45%2C70
