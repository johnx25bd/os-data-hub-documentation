---
id: quickstart
title: Quickstart
description: Get started with the OS Maps API
# hide_table_of_contents: true
slug: /os-maps-api/quickstart
---

This guide explains how to generate an API key to access the OS Maps API, and then how to use that API key within GIS software applications. If you are not familiar with the OS Maps API you may want to read the [overview documentation](https://osdatahub.os.uk/docs/wmts/overview) before proceeding.


### Instructions to Generate a Project API Key and URL

The following instructions describe how to obtain the API service URL and to generate an API key:

1. Click this link to open the [OS Data Hub](https://osdatahub.os.uk/) in a new tab.
2. Click "API Dashboard" in the main menu.
3. Click "APIs" in the left-hand menu.
4. Click "Add to API project" to the right of OS Vector Tile API.
5. If you already have a project you may choose to add the OS Vector Tile API into that project, or alternatively Select "Add to NEW PROJECT".
- The next screen will contain the Project API Key and the API Endpoint address (API URL).
- You can return to this screen by clicking "My projects" at any point in the future if you need to copy your API key or the API address, or if you need to regenerate your API Key.
6. Keep this page open as you'll need the URL and key when you apply the OS Maps API service in your GIS software application.

<!-- @johnx25bd - in the original docs these sections were an collapsible accordion element. Can you recreate?  -->

### QGIS

QGIS is an open GIS desktop application that allows you to display, interrogate, visualise and create geospatial information. It is also capable of interacting with geo-centric APIs (for example, a WMTS).

The instructions that follow demonstrate how to integrate the OS Maps API in order to produce a background map in QGIS.

For the purposes of this guide the version of QGIS used is 3.4.

## Integrating OS Maps API in QGIS

1. Open a blank document in QGIS.
2. Navigate to Layer → Add Layer → Add WMS/WMTS Layer...


### ArcGIS Online

### What next?

For further reading on the OS Maps API, refer to the technical specification or check out code examples.


