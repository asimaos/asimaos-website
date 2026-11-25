---
title: "%rescue%"
description: "When %os% doesn't start, or something needs repairing."
order: 6
source: "docs/guides/rescue.md"
---

%rescue% is a small system in the start menu that runs entirely in memory. It repairs %os% without starting it.

**Start it:** the start menu shows for three seconds when the computer starts; press an arrow key
to keep it on screen and choose **%rescue%**. When the current version fails three starts in a
row, the backup starts by itself; Rescue is there for when that isn't enough.

| Tool | What it does |
| --- | --- |
| Unlock the disk | With the passphrase or the recovery key; the TPM never unlocks it here |
| Start the previous version | The backup, for the next start only |
| Check and repair the disk | The file system, both versions, the boot files, free space |
| Restore my files | Your home folder back to a snapshot; today's files are kept as a snapshot first |
| Reinstall %os% | From an update file on a USB stick. Your files, apps and settings stay. An older version is allowed after a warning |
| Secure Boot and unlock | Approve the %os% key again; turn automatic unlock off |
| Factory reset | %os% starts fresh with a new account |
| Erase the whole disk | Everything on it, %os% included |

If even %rescue% doesn't start, start the computer from the %os% USB stick, open
**Install %os%** and choose **Repair an installed %os%**. Choose the disk (and type its
passphrase or recovery key), then what the repair does:

- **Put back the start-up** (always): the boot partition is checked, and the boot loader, each
  version's boot image, %rescue% and the start menu are written again.
- **Install the USB stick's version**: use it when updates stopped working, for example after the
  project changed its release key, or when the computer is more than a year behind.
- **Bring back the settings and accounts** from the newest snapshot; the ones there now are kept
  aside on the disk, not deleted.

Your files are never touched.
