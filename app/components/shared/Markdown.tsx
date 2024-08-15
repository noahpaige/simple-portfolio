import React from "react";
import { marked } from "marked";

interface MarkdownProps {
  content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const html = marked.parse(content);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;
