import { useState } from "react";
import faqs from "./faqs";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    let findIndex = cpyMultiple.indexOf(getCurrentId);
    if (findIndex === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndex, 1);
    setMultiple(cpyMultiple);
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      {faqs && faqs.length ? (
        faqs.map((faqItem, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <div
              className={`p-4 cursor-pointer ${
                enableMultiSelection ? "bg-gray-200" : "bg-gray-100"
              } rounded-lg transition-colors ${
                selected === faqItem.id ? "bg-blue-50 text-blue-800" : ""
              }`}
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(faqItem.id)
                  : () => handleSingleSelection(faqItem.id)
              }
            >
              <p className="font-semibold">{faqItem.question}</p>
            </div>
            {(enableMultiSelection
              ? multiple.indexOf(faqItem.id) !== -1
              : selected === faqItem.id) && (
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <p>{faqItem.answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Data Not Found</p>
      )}
    </div>
  );
}
