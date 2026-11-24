---
title: "The blue screen: approving the %os% key"
description: "The first start with Secure Boot, or after a new key."
order: 3
source: "docs/guides/approve-the-key.md"
---

%os% signs everything that starts the computer with its own key. Secure Boot only starts what
it trusts, so the first time, you tell it once that the %os% key is yours to trust. That happens
on a blue screen called **"Perform MOK management"** (MokManager, part of shim).

## When it appears

- At the first start after installing, if Secure Boot is on.
- After you chose "Approve the %os% key" in %maintenance% → Security, or in %rescue%.

## What to do

1. %maintenance% (or the installer) shows a **code of digits**. Note it.
2. Restart. The blue screen appears for ten seconds: press a key to stay on it.
3. Choose **Enroll MOK**, then **Continue**, then **Yes**.
4. Type the code and press Enter. It's digits only, so any keyboard works.
5. Choose **Reboot**.

If you miss the screen, nothing is lost: approve the key again in %maintenance% → Security.

## If Secure Boot refuses to start %os%

The key is also kept on the boot partition. On the blue screen choose **Enroll key from disk**, then
`EFI/BOOT/asimaos.der`, and confirm. Or switch Secure Boot off in the firmware settings for one
start and approve the key from %maintenance%.
