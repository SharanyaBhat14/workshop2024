import React, { useState } from "react";

const CopyableText = ({ text }) => {
const [copied, setCopied] = useState(false);

const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {setCopied(false);}, 6000); // Reset copied state after 6 seconds
};

return (
    <div className="upidiv">
    <input type="text" value={text} readOnly className="inp_text" />
    <button onClick={copyToClipboard} className="CopyBtn">
        {copied ? "Copied!" : "Copy to Clipboard"}
    </button>
    </div>
);
};

export default CopyableText;
