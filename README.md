# Spectre Browser

![Version](https://img.shields.io/badge/version-v2.0.0-cyan.svg?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Windows-0078D6.svg?style=for-the-badge&logo=windows)
![Foundation](https://img.shields.io/badge/base-LibreWolf-FF0055.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-Open--Source-emerald.svg?style=for-the-badge)

> **Private. Fast. Uncompromising.**  
> Browse the web without leaving a footprint.

---

## Overview

**Spectre Browser** is a lightweight desktop browser engineered for total digital privacy. Built on top of the privacy-hardened foundations of **LibreWolf**, Spectre layered on a custom control plane: hardened default profiles, custom search omnibox routing, a streamlined desktop experience, and a native C#/WPF updater engine.

It eliminates telemetry, reduces fingerprinting exposure, and restricts background analytics out of the box—giving you full control over your online footprint without requiring terminal scripts or manual maintenance.

---

## Key Features

* **Zero Telemetry Stack:** No phone-home signals, background analytics, or hidden metric collection. All data remains local to your disk.
* **Standalone GUI Updater:** Powered by a dedicated WPF (C#) engine. It checks release manifests and applies GitHub releases seamlessly through a clean graphical user interface.
* **Custom Omnibox Routing:** Integrated private search engine configuration, customizable shortcuts, and private provider routing built into the address bar.
* **Tabliss Start Page:** Native dark-themed, minimalist new tab page designed for zero clutter and quick productivity access.
* **Pre-Hardened Profiles:** Strict privacy configurations pre-applied over the LibreWolf engine to mitigate canvas fingerprinting and tracker scripts.

---

## Architecture & How It Works

Spectre Browser combines a high-performance rendering engine with a custom management layer.
