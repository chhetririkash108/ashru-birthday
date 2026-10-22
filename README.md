# Ashru's Birthday Website

A simple static birthday website with a password entrance, countdown to 30 December 2026 (IST), and a birthday letter. It uses plain HTML, CSS, and JavaScript so there are no package installs or build steps.

## Preview locally
Open `index.html` in a browser.

## Personalize it
Open `script.js` and edit the `settings` object:
- `herName` and `myName`
- `birthday` (ISO date/time with timezone)
- `password`
- `birthdayMessage`
- `letter`

The starter password is `change-this`. Change it before sharing.

## Add photos later
Put your photo files in `assets/`. Then update `index.html` to display them. Optional files should not be imported unless they exist.

## Free hosting
You can publish this static site with GitHub Pages:
1. Create a new public GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` (and any assets you add).
3. Open the repository's **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to provide the website URL.

## Privacy note
The password check is client-side, so it is only a playful entrance and does not protect private content. Anyone who can inspect the source can discover the password and messages. Do not put sensitive content in this site.
