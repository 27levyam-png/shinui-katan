// Copies the Heebo font (Hebrew + Latin) into www/fonts so the app looks the same offline.
const fs = require('fs'), path = require('path');
const src = path.join('node_modules', '@fontsource', 'heebo');
const dst = path.join('www', 'fonts');
try {
  fs.mkdirSync(path.join(dst, 'files'), { recursive: true });
  for (const f of fs.readdirSync(path.join(src, 'files'))) {
    if (/-(hebrew|latin|latin-ext)-(400|500|700)-normal\.woff2?$/.test(f))
      fs.copyFileSync(path.join(src, 'files', f), path.join(dst, 'files', f));
  }
  for (const w of [400, 500, 700]) fs.copyFileSync(path.join(src, w + '.css'), path.join(dst, w + '.css'));
  console.log('Fonts ready');
} catch (e) { console.warn('Font copy skipped:', e.message); }
