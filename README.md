# Spectre Browser

![Version](https://img.shields.io/badge/version-v2.0.0-cyan.svg?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Windows-0078D6.svg?style=for-the-badge&logo=windows)
![Foundation](https://img.shields.io/badge/base-LibreWolf-FF0055.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-Open--Source-emerald.svg?style=for-the-badge)

[![Download](https://img.shields.io/badge/download-Spectre--Browser-00D2FF.svg?style=for-the-badge&logo=windows&logoColor=black)](https://github.com/WavierPigeon261/spectre-browser/releases)


> **Private. Fast. Uncompromising.**  
> Browse the web without leaving a footprint.

---

## Overview

**Spectre Browser** is a lightweight desktop browser engineered for total digital privacy. Built on top of the privacy-hardened foundations of **LibreWolf**, Spectre layered on a custom control plane: hardened default profiles, custom search omnibox routing, a streamlined desktop experience, and a native C#/WPF updater engine.

It eliminates telemetry, reduces fingerprinting exposure, and restricts background analytics out of the box—giving you full control over your online footprint without requiring terminal scripts or manual maintenance.

---
*Thank you for supporting Spectre Browser! If you encounter any bugs or have feature requests, please open an issue in the repository.*

## Key Features

* **Zero Telemetry Stack:** No phone-home signals, background analytics, or hidden metric collection. All data remains local to your disk.
* **Standalone GUI Updater:** Powered by a dedicated WPF (C#) engine. It checks release manifests and applies GitHub releases seamlessly through a clean graphical user interface.
* **Custom Omnibox Routing:** Integrated private search engine configuration, customizable shortcuts, and private provider routing built into the address bar.
* **Tabliss Start Page:** Native dark-themed, minimalist new tab page designed for zero clutter and quick productivity access.
* **Pre-Hardened Profiles:** Strict privacy configurations pre-applied over the LibreWolf engine to mitigate canvas fingerprinting and tracker scripts.

---

## Architecture & How It Works

Spectre Browser combines a high-performance rendering engine with a custom management layer.


| Component | Layer / Description |
| :--- | :--- |
| **Custom Control Plane** | Omnibox, UI, Tabliss, Specs |
| **Standalone GUI Updater** | C# / WPF |
| **LibreWolf Engine Base** | Hardened Gecko, Anti-Telemetry, uBlock |

---

1. **Privacy Base Layer:** Leverages LibreWolf for core web rendering, keeping upstream security patches synchronized while maintaining strict anti-telemetry defaults.
2. **Control & Customization Layer:** Replaces standard browser default settings with Spectre's custom omnibox engine routing, specialized start page, and refined navigation parameters.
3. **Native Maintenance Pipeline:** A detached update agent handles binary verification, installer retrieval, and updates.

---

## How the Standalone Updater Works

Instead of relying on command-line prompts or manual archive extraction, Spectre features a dedicated WPF updater pipeline:

1. **Manifest Check:** The app queries the official GitHub Release API for version state matching.
2. **Comparison:** The local build version is compared against the newest release manifest payload.
3. **Silent Fetch:** When a new release is detected, the WPF engine fetches the signed `SpectreBrowser_v2.0.0_Setup.exe` package.
4. **GUI Installation:** The updater smoothly applies the binary patch in the background with zero terminal intervention.

---

## Download

### Windows

1. Download Spectre Browser from the [releases page](https://github.com/WavierPigeon261/spectre-browser/releases)
---

*Thank you for supporting Spectre Browser! If you encounter any bugs or have feature requests, please open an issue in the repository.*
