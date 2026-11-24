---
title: "Check a download"
description: "Before you write the ISO to a USB stick."
order: 1
source: "docs/guides/check-a-download.md"
---

Every %os% release has a `SHA256SUMS` file with the checksums of the ISO and the update file,
and `SHA256SUMS.sig`, a signature made with the %os% release key. A changed or damaged
download doesn't match.

## 1. Check that the checksums are genuine

The release key's fingerprint is published on the website and in the release notes. Compare it with
the one in `asimaos-release-key.txt`, then check the signature with OpenSSL (any system):

```bash
openssl pkeyutl -verify -pubin -inkey asimaos-release-key.pem -rawin \
    -in SHA256SUMS -sigfile SHA256SUMS.sig
```

It prints `Signature Verified Successfully`. On %os%, `aosupd verify-file --key
/usr/share/asimaos/keys/release.pub SHA256SUMS` does the same.

## 2. Check the file

```bash
sha256sum --check --ignore-missing SHA256SUMS
```

It prints `OK` after the file name.

The update files don't need this step on %os%: %updater% checks their signature itself,
and refuses any file that isn't from %os%.
