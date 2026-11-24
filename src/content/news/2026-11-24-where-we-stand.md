---
title: "%os%: where it stands"
description: "What %os% is, what is being tested now, and what comes before the first public release."
date: 2026-11-24
---

%os% is a Linux operating system built to be installed once and keep working. The system is one
read-only image that checks itself while it runs; every update is a complete new version, and the
start menu keeps the one before it, so a version that doesn't start is replaced by the backup
automatically.

## What is being tested now

The newest test version adds, among other things:

- **Unlocking the disk with the TPM chip, automatically or with a PIN.** The chip opens the disk
  only when the PC starts %os%'s own signed start-up chain. If you prefer, it asks for a short PIN
  at every start as well; wrong PINs count towards the chip's own lockout.
- **Plain KDE Plasma.** The desktop keeps KDE's standard look, and "Reset settings" in
  %maintenance% brings it back exactly.
- **Your own Secure Boot keys**, written into the firmware from %maintenance%.
- **A full-screen game mode** with Steam, for handhelds.
- **Face sign-in redone**: a guided set-up with head turns and blinks, and a blink check when an
  ordinary webcam approves an admin task.
- **One program for installing, repairing and %rescue%**, so all three behave the same way.

It is tested in virtual machines first (installing, updating, going back, power cuts, the repair
tools), then on real PCs.

## Before the first public release

The first public release comes when the tests on real PCs say it's ready. Then the download appears
on the [download page](/download/), with its checksums and signature, and %hub% tells you about new
versions.

Follow along here, or with the [RSS feed](/news/rss.xml).
