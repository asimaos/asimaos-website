---
title: "Install %os%"
description: "Putting %os% on a computer."
order: 2
source: "docs/guides/install.md"
---

You need a USB stick of at least 8 GB and a computer with UEFI firmware, 4 GB of memory and a disk of
at least 48 GB. **%os% uses the whole disk you choose.** Other systems stay on other disks; it
never shares a disk with Windows.

1. **Check the download** ([how](/guides/check-a-download/)), then write the ISO to the USB stick, for
   example with Fedora Media Writer, balenaEtcher or `dd`.
2. **Start the computer from the USB stick.** The key for the start menu is often F12, F11, F8 or Esc.
   The live session starts; you can look around before installing.
3. **Open "Install %os%"** and follow it: language and keyboard, the disk, your account, and
   whether the disk is encrypted.
   - Encryption is on unless you switch it off. You type the disk's passphrase at every start, with
     the keyboard layout you chose here; later the TPM chip can type it for you (%maintenance% →
     Security).
   - At the end you get a **recovery key**. Write it down or save it on another device before you
     continue ([why](/guides/recovery-key/)).
4. **Restart and remove the USB stick.** With Secure Boot on, a blue screen asks once to approve the
   %os% key: see [the blue screen](/guides/approve-the-key/).

After the first start, %maintenance% → Overview shows that everything is in order.
