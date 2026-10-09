import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import ts from "typescript";

const output = fileURLToPath(new URL("../dist-selfhost/index.html", import.meta.url));
const page = fileURLToPath(new URL("../app/page.tsx", import.meta.url));
const transpiledPage = fileURLToPath(new URL("../dist-selfhost/.prerender-page.mjs", import.meta.url));

try {
  const source = await readFile(page, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext },
  });
  await writeFile(transpiledPage, compiled.outputText);
  const { default: Home } = await import(new URL("../dist-selfhost/.prerender-page.mjs", import.meta.url));
  const html = await readFile(output, "utf8");
  if (!html.includes("<!--APP_HTML-->")) {
    throw new Error("Static HTML insertion point is missing");
  }
  await writeFile(output, html.replace("<!--APP_HTML-->", renderToString(createElement(Home))));
} finally {
  await rm(transpiledPage, { force: true });
}
