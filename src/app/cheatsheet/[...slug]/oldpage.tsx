"use client";

import { useEffect, useState } from "react";
import CheatSheetDetails from "@/components/cheatsheet/CheatSheetDetails";
import templateData, { Template } from "@/data/templateData";
import exportPdf from "@/utils/exportPdf";
import { useParams } from "next/navigation";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Import the necessary Prism language when needed
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript"; // If you need JS highlighting
import "prismjs/plugins/line-numbers/prism-line-numbers.css"; // Optional, if you want line numbers
import "@/app/cheatsheet/[...slug]/CheatSheet.css";

const TemplatePage: React.FC = () => {
  const { slug } = useParams();
  const template = slug[0];
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  useEffect(() => {
    Prism.highlightAll();
  }, [selectedTemplate]);

  useEffect(() => {
    if (template) {
      const selected = templateData.find((t) => t.id === template);
      setSelectedTemplate(selected || null);
    }
  }, [template]);

  if (!template || !selectedTemplate) {
    return <p className="text-center mt-8">Template not found or loading...</p>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 bg-black">
        <div className="cheat-sheet-container">
          <div className="cheat-sheet-header">
            <div className="cheat-sheet-headimg">
              <img
                src="https://user-images.githubusercontent.com/93479842/215678525-d55464c0-1fea-4471-8b05-35939aef597c.png"
                className="cheat-sheet-headimg"
                alt="Html image"
              />
            </div>
            <h1 className="cheat-sheet-SiteName">HTML CheetSheet</h1>
          </div>
        </div>
        <div className="cheat-sheet-container bg-black">
          <div className="cheat-sheet-row">
            <div className="cheat-sheet-head">
              <h2>HTML Boilerplate</h2>
              <div className="cheat-sheet-subheading">
                <pre className="language-html">
                  <code>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="cheat-sheet-head">
              <h2 className="cheat-sheet-py cheat-sheet-p-y">Heading Tag</h2>
              <p className="cheat-sheet-text">
                {" "}
                There are six headings available in HTML.
              </p>
              <div className="cheat-sheet-subheading">
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;h1&gt; Tag</pre>
                  </h2>
                  <p>This is the largest heading among all.</p>
                  <pre className="language-html">
                    <code>&lt;h1&gt;Heading1&lt;/h1&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;h2&gt; Tag</pre>
                  </h2>
                  <p>This is the second largest heading among all.</p>
                  <pre className="language-html">
                    <code>&lt;h1&gt;Heading2&lt;/h1&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;h3&gt; Tag</pre>
                  </h2>
                  <p>This is the Third largest heading among all.</p>
                  <pre className="language-html">
                    <code>&lt;h1&gt;Heading3&lt;/h1&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;h4&gt; Tag</pre>
                  </h2>
                  <p>This is the fourth largest heading among all.</p>
                  <pre className="language-html">
                    <code>&lt;h1&gt;Heading4&lt;/h1&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;h5&gt; Tag</pre>
                  </h2>
                  <p>This is the second Smallest heading among all.</p>
                  <pre className="language-html">
                    <code>&lt;h1&gt;Heading5&lt;/h1&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;h6&gt; Tag</pre>
                  </h2>
                  <p> This is the Smallest among all.</p>
                  <pre className="language-html">
                    <code>&lt;h1&gt;Heading6&lt;/h1&gt;</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="cheat-sheet-head">
              <h2 className="cheat-sheet-py cheat-sheet-p-y">Containers</h2>
              <p className="cheat-sheet-text">
                The container tags are tags that have some data such as text,
                the image between their opening and closing tags. There are
                several container tags in HTML.
              </p>
              <div className="cheat-sheet-subheading">
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;div&gt; Tag Or container</pre>
                  </h2>
                  <p>
                    The div tag is a block level container. It defines a
                    division or a section in HTML document.
                  </p>
                  <pre className="language-html">
                    <code>&lt;div&gt;This is a div container&lt;/div&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;span&gt; Tag</pre>
                  </h2>
                  <p>
                    The span tag is an inline element or container. It is used
                    to mark up a part of a text, or a part of a document.
                  </p>
                  <pre className="language-html">
                    <code>
                      &lt;span&gt;This is a span container&lt;/span&gt;
                    </code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;p&gt; Tag</pre>
                  </h2>
                  <p>
                    The p tag represents a paragraph. HTML paragraphs can be any
                    structural grouping of related content or group of
                    sentences, images etc.
                  </p>
                  <pre className="language-html">
                    <code>&lt;p&gt;This is a paragraph Tag&lt;/p&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;pre&gt; Tag</pre>
                  </h2>
                  <p>
                    The pre tag represents pre-formatted text which is to be
                    presented exactly as written in the HTML file. It preserves
                    the white spaces, line breaks, tabs, and other formatting
                    characters which are ignored by web browsers.
                  </p>
                  <pre className="language-html">
                    <code>&lt;pre&gt;This is pre tag.&lt;/pre&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;code&gt; Tag</pre>
                  </h2>
                  <p>
                    {" "}
                    The code tag is used to represent source codes. It is mainly
                    used to display the code snippet on the web page.
                  </p>
                  <pre className="language-html">
                    <code>&lt;code&gt; int i = 25; &lt;/code&gt;</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="cheat-sheet-head">
              <h2 className="cheat-sheet-py cheat-sheet-p-y">
                Text formatting
              </h2>
              <p className="cheat-sheet-text">
                {" "}
                Text formatting is used in HTML to make the document look more
                comprehensive and attractive.
              </p>
              <div className="cheat-sheet-subheading">
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;b&gt; Tag</pre>
                  </h2>
                  <p>
                    This tag is used to <b>Bold</b> the text.
                  </p>
                  <b>
                    <pre className="language-html">
                      <code>&lt;b&gt;I'm bold tag&lt;/b&gt;</code>
                    </pre>
                  </b>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;em&gt; Tag</pre>
                  </h2>
                  <p>This tag is used to Emphasized the text.</p>
                  <em>
                    <pre className="language-html">
                      <code>&lt;em&gt;This is Emphasized tag&lt;/em&gt;</code>
                    </pre>
                  </em>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;strong&gt; Tag</pre>
                  </h2>
                  <p>
                    Strong tag is used to give importance of the word or text.
                  </p>
                  <strong>
                    <pre className="language-html">
                      <code>
                        &lt;strong&gt;This is a strong tag&lt;/strong&gt;
                      </code>
                    </pre>
                  </strong>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;i&gt; Tag</pre>
                  </h2>
                  <p>
                    This tag is used to <i>italic</i> the text.
                  </p>
                  <i>
                    <pre className="language-html">
                      <code>&lt;h1&gt;I'm a Itelic tag&lt;/h1&gt;</code>
                    </pre>
                  </i>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;sub&gt; Tag</pre>
                  </h2>
                  <p>
                    This tag is used to write subscript as h<sub>2</sub>O.
                  </p>
                  <pre className="language-html">
                    <code>&lt;sub&gt;This is subscript&lt;/sub&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;sup&gt; Tag</pre>
                  </h2>
                  <p>
                    {" "}
                    This tag is used to write superscript as you<sup>2</sup>.
                  </p>
                  <pre className="language-html">
                    <code>&lt;sup&gt;This is superscript&lt;/sup&gt;</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="cheat-sheet-head">
              <h2 className="cheat-sheet-py cheat-sheet-p-y">
                Lists Tags or Containers
              </h2>
              <p className="text py">
                {" "}
                Lists can be either numerical, alphabetic, bullet, or other
                symbols.{" "}
              </p>
              <p>There are three list types in HTML</p>
              <p>
                <ul className="px">
                  <li>
                    Ordered lists: Used to group data in perticular order or
                    numerically.
                  </li>
                  <li>
                    UnOrdered lists: Used to group data no perticular order.
                  </li>
                  <li>
                    Ordered lists: Used to display name/value pairs such as
                    terms and definitions.
                  </li>
                </ul>
              </p>
              <div className="cheat-sheet-subheading">
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;ul&gt; Tag</pre>
                  </h2>
                  <p>This tag is used to build unordered list.</p>
                  <p>
                    <ul className="px">
                      <li>This is</li>
                      <li>a unordered</li>
                      <li>list</li>
                    </ul>
                  </p>
                  <pre className="language-html">
                    <code>
                      &lt;ul&gt; &lt;li&gt;This is&lt;/li&gt; &lt;li&gt;a
                      unordered&lt;/li&gt; &lt;li&gt;list&lt;/li&gt; &lt;/ul&gt;
                    </code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;ol&gt; Tag</pre>
                  </h2>
                  <p>This tag is used to build ordered list.</p>
                  <p>
                    <ol className="px">
                      <li> This is</li>
                      <li> a unordered</li>
                      <li> list</li>
                    </ol>
                  </p>
                  <pre className="language-html">
                    <code>
                      &lt;ol&gt; &lt;li&gt;This is&lt;/li&gt; &lt;li&gt;a
                      ordered&lt;/li&gt; &lt;li&gt;list&lt;/li&gt; &lt;/ol&gt;
                    </code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;li&gt; Tag</pre>
                  </h2>
                  <p>This tag represent item of list.</p>
                  <pre className="language-html">
                    <code>
                      &lt;li&gt;These are&lt;/li&gt; &lt;li&gt;list&lt;/li&gt;
                      &lt;li&gt;item&lt;/li&gt;
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="cheat-sheet-head">
              <h2 className="cheat-sheet-py cheat-sheet-p-y">Table </h2>
              <p className="cheat-sheet-text">
                {" "}
                A HTML table is used to arrange data in tabular form into rows
                and columns.
              </p>
              <div className="cheat-sheet-subheading">
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;table&gt; Tag</pre>
                  </h2>
                  <p>
                    This tag is used to define schema or structure of table{" "}
                  </p>
                  <pre className="language-html">
                    <code>&lt;table&gt;Students&lt;/table&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;thead&gt; Tag</pre>
                  </h2>
                  <p>This is tag is used to create table header.</p>
                  <pre className="language-html">
                    <code>&lt;thead&gt;Heading&lt;/thead&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;tbody&gt; Tag</pre>
                  </h2>
                  <p>This tag is used to create table body.</p>
                  <pre className="language-html">
                    <code>&lt;tbody&gt;Ram Shyam&lt;/tbody&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;tr&gt; Tag</pre>
                  </h2>
                  <p>This tag is used to create table row.</p>
                  <pre className="language-html">
                    <code>&lt;tr&gt;101 105&lt;/tr&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;th&gt; Tag</pre>
                  </h2>
                  <p>This tag is used to define table head</p>
                  <pre className="language-html">
                    <code>&lt;th&gt;Age&lt;/th&gt;</code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;td&gt; Tag</pre>
                  </h2>
                  <p> This tag is used to define table data.</p>
                  <pre className="language-html">
                    <code>&lt;td&gt;18 20&lt;/td&gt;</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="cheat-sheet-head">
              <h2 className="cheat-sheet-py cheat-sheet-p-y">
                Document Information
              </h2>
              <p className="cheat-sheet-text">
                This section involves tags which are used to describe the HTML
                document by giving an overview of what it includes.
              </p>
              <div className="cheat-sheet-subheading">
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;head&gt; Tag</pre>
                  </h2>
                  <p>
                    It contain title, meta tags, external file links, internal
                    css
                  </p>
                  <pre className="language-html">
                    <code>
                      {`
<head>
  <title>head tutorial</title>
  <meta name="viewport" content="Meta Tags, Metadata" />
  <link rel="stylesheet" type="text/css" href="style.css">
</head> `}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="cheat-sheet-head">
              <h2 className="cheat-sheet-py cheat-sheet-p-y">
                CSS & JavaScript Apply
              </h2>
              <p className="cheat-sheet-text">
                CSS and JavaScript can be applied on a page both internally and
                externally.
              </p>
              <div className="cheat-sheet-subheading">
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;style&gt; Tag</pre>
                  </h2>
                  <p>This tag is used to add internal css into page</p>
                  <pre className="language-html">
                    <code>
                      {`Inline CSS 
<h1 style="display: inline-block;"></h1>
internal CSS
<style> </style>
External CSS
<link rel="stylesheet" href="style.css" /> `}
                    </code>
                  </pre>
                </div>
                <div className="cheat-sheet-box">
                  <h2>
                    <pre>&lt;script&gt; Tag</pre>
                  </h2>
                  <p>
                    This tag is used to add internal JavaScript And external
                    JavaScript
                  </p>
                  <pre className="language-js">
                    <code>
                      {`
Internal JavaScript 
<script>
  document.getElementById('demo').innerHtml = "Hello world"; 
</script>
External JavaScript link
  <script src="script.js"></script> `}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer bg-black">
          <div className="cheat-sheet-fcontainer">
            <p>Made with love 🧡❤💚 by Rohitash Singh</p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">
          <Link href={"/cheatsheet"} passHref>
            <MdOutlineKeyboardBackspace width="10" height="10" />
          </Link>
          {selectedTemplate.title}
        </h1>
        <div className="max-w-3xl mx-auto  bg-black">
          <CheatSheetDetails data={selectedTemplate.data} />
          <button
            onClick={() => exportPdf(selectedTemplate)}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Export as PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
