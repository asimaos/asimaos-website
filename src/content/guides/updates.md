---
title: "Updates"
description: "Getting a new version, and going back."
order: 5
source: "docs/guides/updates.md"
---

Every %os% update is the whole system in one signed file (`.aosupd`, about 3 GB). Installing it
never touches your files, apps or settings, and the version you had stays as the backup.

## Getting a new version

1. **%hub%** tells you when a new version is out and downloads it (get it once from Asima
   Manager → Home → Get %hub%). You can also download the file from the %os% website,
   or bring it on a USB stick.
2. Open the file (double-click it, or %updater% → Choose a file). **%updater%** checks the
   signature, that it's newer and that there is room, then installs it in the background.
3. **Restart.** The start menu shows both versions; the new one starts.

## If something goes wrong

- **It doesn't start**: after three failed starts the computer starts the backup by itself and
  makes it the current version again.
- **The desktop keeps failing** after the login screen: %updater% opens by itself and offers
  going back to the backup.
- **You just prefer the old one**: %updater% → Versions → Make it the current version, or
  "Start it once" to try it first.

## Tips

- Updates need about 10 GB free. %maintenance% → Overview shows the space.
- An update file has an end date (about four months). After it, download a current one.
- Updates jump straight to the newest version from any version of the past year: no need to
  install every version in between. A computer more than a year behind updates with %rescue%
  (Reinstall %os%) or with "Repair an installed %os%" on the USB stick; both keep your
  files, apps and settings.
