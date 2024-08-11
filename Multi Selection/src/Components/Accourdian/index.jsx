import { useState } from "react";
import faqs from "./data";

export default function Accourdian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [Multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...Multiple];
    const findIndex = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndex);
    if (findIndex === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndex, 1);
    setMultiple(cpyMultiple);
  }
  return (
    <>
      <div className="wrap">
        <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>
          Enable Muliti Selection
        </button>
        <div className="accourdian">
          {faqs && faqs.length
            ? faqs.map((faqItem, index) => (
                <div key={index} className="">
                  <div
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(faqItem.id)
                        : () => handleSingleSelection(faqItem.id)
                    }
                    className="title"
                  >
                    <h3>{faqItem.question}</h3>
                    <span>+</span>
                  </div>
                  {enableMultiSelection
                    ? Multiple.indexOf(faqItem.id) !== -1 && (
                        <div className="">
                          <p>{faqItem.answer}</p>
                        </div>
                      )
                    : selected === faqItem.id && (
                        <div className="">
                          <p>{faqItem.answer}</p>
                        </div>
                      )}
                  {/* {selected === faqItem.id && <div className=""></div>} */}
                </div>
              ))
            : "No Data Found"}
        </div>
      </div>
    </>
  );
}
