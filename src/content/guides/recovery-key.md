---
title: "The recovery key"
description: "Keeping it, and using it when the passphrase doesn't work."
order: 4
source: "docs/guides/recovery-key.md"
---

When the disk is encrypted, the installer makes a recovery key: eight groups of eight letters.
It unlocks the disk when the passphrase doesn't: you forgot it, the keyboard layout is wrong, or
the TPM chip refuses (after a Secure Boot database update, when the chip was cleared, or, with
unlock by PIN, after too many wrong PINs or a forgotten PIN).

- **Keep it away from the computer**: on paper, in a password manager on your phone, or in a safe
  place you will remember. Anyone with it and the computer can read the disk.
- **Use it** wherever the passphrase is asked: at the start (the passphrase prompt on the start-up
  screen accepts it too), in %rescue%, or in %maintenance% → Security.
- **Make a new one** in %maintenance% → Security → Recovery key. The old one stops working.

Without the passphrase and the recovery key, nobody can read the disk, %os% included. A
backup to another drive (%maintenance% → Backups) keeps your files safe from that too.

## If the disk's encryption header is damaged

The header at the start of the encrypted partition holds the key slots; when it is damaged, neither
the passphrase nor the recovery key can open the disk. Every backup (%maintenance% → Backups)
keeps a copy of it (the newest four). To put one back:

1. Start the %os% USB stick and open Konsole in the live session.
2. Fetch the copy from the backup (it asks for the backup's password):

   ```bash
   restic -r ADDRESS-OF-YOUR-BACKUP restore --tag asimaos-disk-header latest --target /tmp/header
   ```

3. Write it back onto the encrypted partition:

   ```bash
   sudo cryptsetup luksHeaderRestore "$(blkid -t PARTLABEL=crypt_pool -o device)" \
       --header-backup-file /tmp/header/var/lib/asimaos/backup/disk-header.img
   ```

4. Restart. The passphrase or recovery key that was valid when that backup ran opens the disk
   again; set up TPM unlock again in %maintenance% → Security.

The copy only opens the disk with a secret that was valid when it was made, so keep the backup's
password as safe as the recovery key.
