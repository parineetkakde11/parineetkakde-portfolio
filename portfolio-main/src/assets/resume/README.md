# Resume PDF

Drop your resume PDF into this folder (for example `Parineet_Kakde_Resume.pdf`).

The site detects it automatically at build time (`src/data/socialLinks.js`):

- **PDF present** → the header **RESUME** button opens the PDF in a new tab.
- **No PDF** → the RESUME button opens a pre-filled "Resume request" email instead,
  so it never leads to a broken link.

Only one PDF is used; if several exist, the first one alphabetically wins.
