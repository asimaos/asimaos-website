---
title: "Testing updates yourself"
description: "Trying updates, going back and the automatic fallback with a test kit."
order: 7
source: "docs/guides/test-updates.md"
---

Each test round comes with the installer ISO and two update files, so you can try updating, going
back and the automatic fallback on a real PC. They are signed with the same build's key
as the ISO, so a PC installed from that ISO accepts them.

| File | What it is |
| --- | --- |
| `asimaos-V1-x86_64.iso` | The version to install, for example `2026.11.18.1` |
| `asimaos-V2-x86_64.aosupd` | The same system as a newer version (`…2`): a good update |
| `asimaos-V3-x86_64.aosupd` | A newer version again (`…3`) whose login screen never starts, made broken on purpose |

The automated test does the same in a virtual machine: `testbed/boot-test.py --iso --update V2 V3`.

## 1. Install

Install V1 from the USB stick. Copy both update files to a USB drive or to your home folder.

## 2. A good update

1. Open **%updater%** and choose `…V2.aosupd` (or double-click it in Dolphin). It checks the
   signature and every part first; then **Install**.
2. Restart. The start menu shows **%os% V2 (current)** and **%os% V1 (backup)**.
3. V2 starts. After about a minute (the login screen has to stay up for 15 seconds), it counts as
   good. %updater% → Versions shows it.

## 3. Going back

1. %updater% → Versions → V1 → **Start it once**. Restart: V1 starts this one time; the next
   restart is V2 again.
2. Versions → V1 → **Make it the current version**. Now V1 starts every time, and V2 is the backup.
3. Make V2 current again the same way.

In a terminal: `asimaos versions`, `asimaos use V1 --once`, `asimaos use V2`.

## 4. A broken update goes back by itself

1. Install `…V3.aosupd` like V2 and restart.
2. V3's login screen never starts. Do nothing: after a few minutes the PC restarts by itself (the
   health check fails), tries V3 three times, then starts V2 on its own.
3. V2 is current again; %maintenance% → Health lists the failed starts of V3 and why.

## 5. What else to try on real hardware

- A power cut (pull the plug) in the middle of installing an update: the old version must start,
  and installing the same file again must finish it.
- %rescue% (start menu → %rescue%): unlock the disk, reinstall the running version from
  its update file on a USB drive.
- Repair: start the USB stick, open Install %os% and choose **Repair an installed %os%**
  (in a terminal: `sudo /run/initramfs/live/asimaos/asimaos-repair`).
- Secure Boot with the blue approval screen (MokManager), TPM unlock (%maintenance% →
  Security), NVIDIA drivers with lockdown, face and fingerprint sign-in.

Write down what you see, or make a problem report in %maintenance% → Health and save it.
