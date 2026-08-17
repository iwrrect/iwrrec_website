const fs = require("fs");
const path = require("path");
const lucide = require("lucide-react");

const icons = new Set();
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".js")) {
      const src = fs.readFileSync(p, "utf8");
      const m = src.match(/import\s*\{([\s\S]*?)\}\s*from\s*"lucide-react"/);
      if (m)
        m[1]
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
          .forEach((i) => icons.add(i));
    }
  }
}
walk("src");
const missing = [...icons].filter((i) => !lucide[i]);
console.log("total icons:", icons.size);
console.log(missing.length ? "MISSING: " + missing.join(", ") : "ALL ICONS OK");
