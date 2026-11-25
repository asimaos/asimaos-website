<!-- Made by scripts/import-credits.py from the repositories' CREDITS.md; don't edit it here. -->

Asima OS is put together from the work of many free-software projects and the thousands of people
behind them. It adds its own apps, services and start-up, and the way the parts fit together; almost
everything else is theirs. Thank you.

The names and logos below belong to their owners. Asima OS is an independent project, not affiliated
with any of them.

## The base

- [Arch Linux](https://archlinux.org/): every package in the system, taken from one fixed snapshot
  of the [Arch Linux Archive](https://archive.archlinux.org/), and the packaging behind them.
- [The Linux kernel](https://kernel.org/): Arch's standard kernel, with Btrfs, EROFS, dm-verity,
  sched_ext and NTSYNC.
- [systemd](https://systemd.io/): the start-up, systemd-boot, the boot images (ukify), TPM unlock
  (pcrlock), system extensions and much more.
- [GNU](https://www.gnu.org/): the C library, Bash and the core tools.
- [Btrfs](https://btrfs.readthedocs.io/), [EROFS](https://erofs.docs.kernel.org/) and
  [cryptsetup](https://gitlab.com/cryptsetup/cryptsetup): your files and snapshots, the read-only
  system image, and the encrypted disk (LUKS2).
- [shim](https://github.com/rhboot/shim), as [Fedora](https://fedoraproject.org/) builds it and
  Microsoft signs it: Secure Boot on PCs with Microsoft's keys.
- [mkinitcpio](https://gitlab.archlinux.org/archlinux/mkinitcpio/mkinitcpio) and
  [Plymouth](https://gitlab.freedesktop.org/plymouth/plymouth): the start-up files and the start-up
  screen.
- [The TPM2 Software Stack](https://tpm2-software.github.io/), [fwupd](https://fwupd.org/),
  [AppArmor](https://apparmor.net/) and [nftables](https://netfilter.org/projects/nftables/): the
  TPM chip, firmware updates, app confinement and the firewall under Asima Shield.

## The desktop

- [KDE](https://kde.org/): Plasma, the Frameworks and the standard apps (Dolphin, Konsole, Kate,
  Okular, Gwenview, Elisa, Spectacle, KDE Connect, Discover and more), and the Breeze look and
  icons, which the Asima OS apps use too.
- [Qt](https://www.qt.io/): the toolkit of KDE and of every Asima OS app.
- [PipeWire](https://pipewire.org/) with WirePlumber, [NetworkManager](https://networkmanager.dev/),
  [BlueZ](https://www.bluez.org/) and [CUPS](https://openprinting.github.io/cups/): sound, networks,
  Bluetooth and printing.
- [Mesa](https://mesa3d.org/) and NVIDIA's
  [open kernel modules](https://github.com/NVIDIA/open-gpu-kernel-modules): the graphics drivers.
- [Fcitx 5](https://fcitx-im.org/), [Orca](https://orca.gnome.org/) and
  [eSpeak NG](https://github.com/espeak-ng/espeak-ng): typing in every language, and the screen
  reader.
- [Noto](https://fonts.google.com/noto): the fonts, for every script, in the system and in the
  Asima OS apps.

## Apps and where they come from

Asima App Center installs them; the stores and registries are run by these projects.

- [Flatpak](https://flatpak.org/) and [Flathub](https://flathub.org/): sandboxed apps.
- [Snap](https://snapcraft.io/) and the Snap Store.
- [AppImage](https://appimage.org/) and [AppImageHub](https://appimage.github.io/).
- [Waydroid](https://waydro.id/), with its [LineageOS](https://lineageos.org/)-based Android, and
  [F-Droid](https://f-droid.org/): Android apps.
- [Bottles](https://usebottles.com/) and [Wine](https://www.winehq.org/): Windows programs.
- [Podman](https://podman.io/), [Distrobox](https://distrobox.it/),
  [Toolbx](https://containertoolbx.org/) and [JuNest](https://github.com/fsquillace/junest): other
  Linux systems' programs, in containers.
- [Nix](https://nixos.org/) and Nixpkgs, [Homebrew](https://brew.sh/),
  [pipx](https://pipx.pypa.io/) and [PyPI](https://pypi.org/), [Node.js](https://nodejs.org/) and
  [npm](https://www.npmjs.com/), [Rust](https://www.rust-lang.org/) and
  [crates.io](https://crates.io/), [Go](https://go.dev/), [Miniforge](https://github.com/conda-forge/miniforge)
  and [conda-forge](https://conda-forge.org/): developer tools.

## Gaming

- [Steam](https://store.steampowered.com/) and [gamescope](https://github.com/ValveSoftware/gamescope),
  by Valve: the games, and game mode.
- [sched_ext's schedulers](https://github.com/sched-ext/scx): the gaming CPU scheduler (LAVD).
- [GameMode](https://github.com/FeralInteractive/gamemode), by Feral Interactive, and
  [MangoHud](https://github.com/flightlessmango/MangoHud): game tweaks and the overlay.
- [InputPlumber](https://github.com/ShadowBlip/InputPlumber): a handheld's own buttons and gyro.
- [xpadneo](https://github.com/atar-axis/xpadneo) and [xone](https://github.com/dlundqvist/xone)
  (the maintained fork): Xbox controllers over Bluetooth and through Microsoft's wireless adapter.
- [libratbag](https://github.com/libratbag/libratbag): gaming mice, for Piper.
- [CDEmu](https://cdemu.sourceforge.io/) with vhba, and
  [v4l2loopback](https://github.com/umlaeute/v4l2loopback): virtual disc drives and virtual cameras.

## Developers and virtual machines

- [QEMU](https://www.qemu.org/), [libvirt](https://libvirt.org/),
  [EDK II](https://github.com/tianocore/edk2) (OVMF), [swtpm](https://github.com/stefanberger/swtpm)
  and [virtiofsd](https://gitlab.com/virtio-fs/virtiofsd): virtual machines.
- [restic](https://restic.net/): the encrypted backups.
- [ddcutil](https://www.ddcutil.com/): the brightness of external monitors.
- [smartmontools](https://www.smartmontools.org/): the disks' health.
- Git, OpenSSH, GDB, strace, perf and the other everyday tools.

## Inside the Asima OS apps and services

- [Rust](https://www.rust-lang.org/) and its crates, among them [Tokio](https://tokio.rs/),
  [zbus](https://github.com/dbus2/zbus), [Serde](https://serde.rs/),
  [anyhow](https://github.com/dtolnay/anyhow), [RustCrypto](https://github.com/RustCrypto)'s
  hashes, [ed25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek),
  [image](https://github.com/image-rs/image) and [zstd](https://github.com/gyscos/zstd-rs);
  `services/Cargo.lock` lists them all.
- [tract](https://github.com/sonos/tract), by Sonos, and the YuNet (MIT) and SFace (Apache-2.0)
  models from [OpenCV Zoo](https://github.com/opencv/opencv_zoo): face sign-in, on the PC itself.
- [OpenSSL](https://www.openssl.org/): checking signatures and boot files.

## Help in making it

- [Claude](https://www.anthropic.com/claude), Anthropic's AI assistant, helps the Asima OS team
  write and review code, tests and documentation. The ideas, the design and every decision are the
  team's, and each version is tested on real PCs before it is released.

## Asima Hub

Asima Hub is built on the work of these free-software projects and the people behind them. Thank
you.

- [Qt](https://www.qt.io/): the toolkit the Hub is written with.
- [KDE](https://kde.org/): the Flatpak runtime the Hub runs on (org.kde.Platform), and the Breeze
  icons.
- [Flatpak](https://flatpak.org/): how the Hub is packaged and installed.
- [OpenSSL](https://www.openssl.org/): checking the signature of the news and downloads feed.
- [Claude](https://www.anthropic.com/claude), Anthropic's AI assistant: helps write and review the
  code and documentation; the design and the decisions are the Asima OS team's.
- Asima UI, the Asima OS apps' shared look (`ui/`), and the operating system it serves: see
  [Asima OS's credits](/credits/).

The names and logos belong to their owners; Asima Hub is not affiliated with them. Each project
keeps its own licence. Asima Hub is [GPL-3.0-or-later](https://github.com/asimaos/asimaos-hub/blob/main/LICENSE).

## This website

The Asima OS website is built on the work of these projects and services. Thank you.

- [Astro](https://astro.build/): turns the pages into a fast static site, with its RSS and sitemap
  add-ons.
- [Pagefind](https://pagefind.app/): the search, which runs in your browser.
- [sharp](https://sharp.pixelplumbing.com/): the small AVIF and WebP pictures.
- [Prism](https://prismjs.com/): the colours in code examples.
- [Noto Sans](https://fonts.google.com/noto), through [Fontsource](https://fontsource.org/): the
  font.
- [Node.js](https://nodejs.org/): runs the build.
- [Claude](https://www.anthropic.com/claude), Anthropic's AI assistant: helps write and review the
  pages and the code behind them; what the site says and how it looks are the Asima OS team's
  choices.
- [Cloudflare Pages](https://pages.cloudflare.com/) hosts the site, [GitHub](https://github.com/)
  the code and [SourceForge](https://sourceforge.net/) the downloads, free for open-source projects.

The names and logos belong to their owners; the Asima OS project is not affiliated with them. The
website is [GPL-3.0-or-later](https://github.com/asimaos/asimaos-website/blob/main/LICENSE).

## Licences and sources

Each project keeps its own licence. Every Asima OS version lists each of its packages with its
version, licences and where its source is, in `/usr/share/asimaos/licences` and next to each
release; the licence texts are in `/usr/share/licenses`. The Asima OS parts are
[GPL-3.0-or-later](https://github.com/asimaos/asimaos/blob/main/LICENSE).

Something missing or wrong here? Please say so in an
[issue](https://github.com/asimaos/asimaos/issues).
