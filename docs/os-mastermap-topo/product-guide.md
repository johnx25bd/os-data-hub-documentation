---
id: product-guide
title: Product Guide
description: OS MasterMap Topo Product Guide, converted from pdf
# hide_table_of_contents: true
slug: /os-mastermap-topo/product-guide
---


[ exactly as converted from the [pdf](https://ipfs.io/ipfs/Qmd3y7GS7GQDpkxEciypo3wAXJahH6m6SWA7sqeGYqWKtn) by [https://pdf2md.morethan.io/](https://pdf2md.morethan.io/). ]

```
OS MasterMap Topography Layer
Vn.n © OS 2017
Page 1 of 45
```
P R O D U C T G R O U P/ D E P A R T M E N T

# OS MasterMap

# Topography Layer

### Product guide


#### Responsibility for this document

The Product Strategy and Management team is responsible for the content of this document.

#### Change history

**Version Date Summary of change**
2. 0 08/2017 First issue
2.1 05/2018 Reintroduced information table on page 29
2.2 07/2018 Clarification on capture rules for private property on page 20

The impacts of the project, described in this document have been assessed and where appropriate,
changed, in accordance with the requirements set out in Ordnance Survey's Equality scheme.

As a requirement of Ordnance Survey’s Equality scheme all of our processes and activities, including all
policies, projects and proposals, must be screened to assess any impact with regard to race, disability
and gender equality.

Please ensure that this document has been equality screened and include the above statement, only
when this has been completed, with the brackets removed. You must notify your Equality Advocate who
will ensure that all necessary records are updated. Your Equality Advocate can also help you with the
screening process, if required.

#### Trademarks

Ordnance Survey is a registered trademark and OS logos are a trademark of OS, Britain’s mapping
agency.

All other trademarks are acknowledged.


## Contents

Section Page no


- OS MasterMap Topography Layer Contents
- Preface
   - Contact details
   - Use of the product
   - Purpose and disclaimer
   - Copyright in this guide
   - Data copyright and other intellectual property rights
   - Trademarks
   - Back-up provision of the product
   - Using this guide
- Chapter 1 Introduction to OS MasterMap Topography Layer
   - Introduction
   - System requirements
   - The data model
   - Themes
   - Features
   - Attributes
- Chapter 2 Introduction to OS MasterMap Topography Layer
   - Purpose and Application
   - Applications
- Chapter 3 OS MasterMap Topography Layer themes
   - Administrative boundaries
      - Parliamentary Boundaries
      - Local Government Boundaries
      - Application of Precedence
   - Buildings
   - Heritage and Antiquities..................................................................................................................
   - Land
   - Rail
   - Roads, Tracks, and Paths
      - Roads
      - Tracks
      - Paths
      - Made paths
      - Unmade paths
   - Structures
   - Terrain and height
      - Triangulation stations
      - Spot height
   - Water
   - Theme rules
- Chapter 4 OS MasterMap supply
   - Initial and COU supply
   - Updating data holdings
      - Managed Great Britain (GB) Sets
   - Supply options
      - Chunk files
      - Feature validation dataset (FVDS)
      - GML summary file
- Chapter 5 Change management and data association
   - Change management
      - Archiving the OS MasterMap data holding
- Annexe A Administrative boundary alignments
- Annexe B Associating data to OS MasterMap features
- Annexe C Metadata
- Annexe D Descriptive Terms...........................................................................................................
- Annexe E BAU change value descriptions
- Annexe F Product and service performance report form


## Preface

This user guide (hereafter referred to as the guide) is designed to provide an overview of OS MasterMap
Topography Layer (hereafter referred to as the product) and it gives guidelines and advice on how a user might
derive the maximum benefit from the products. It assumes a general knowledge of geographic information.

If you find an error or omission in this guide, or otherwise wish to make a comment or suggestion as to how
we can improve the guide, please contact us at the address shown below under contact details or complete
the product and service performance report form at annexe F and return it to us.

### Contact details

Our Customer Service Centre will be pleased to deal with your enquiries:

```
Customer Service Centre
Ordnance Survey
Adanac Drive
SOUTHAMPTON
United Kingdom
SO16 0AS
General enquiries (calls charged at local rate): +44 (0)8456 0505 05
Dedicated Welsh Language HelpLine: 08456 0505 04
Textphone (deaf and hard of hearing users only please): +44 (0)23 8005 6146
customerservices@os.uk
```
```
http://www.os.uk
```
This document has been screened in accordance with the requirements set out in Ordnance Survey's
Equality Scheme. If you have difficulty reading this information in its current format and would like to find
out how to access it in a different format (Braille, large print, computer disk or in another language), please
contact us on: +44 (0)8456 05 05 05.

### Use of the product

The terms and conditions upon which the product, including this guide, is made available to you and your
organisation are contained in the customer contract made between you and Ordnance Survey. If there is
an inconsistency between the terms of your customer contract and this guide, then the terms of your
customer contract prevail. If you or your organisation has not signed a valid current customer contract
then you are not entitled to use the product.

### Purpose and disclaimer

This guide is provided for guidance only and does not constitute any warranty, representation,
undertaking, commitment or obligation (express or implied) about the product or its suitability for any
particular or intended purpose. Any warranties, representations, undertakings, commitments, and
obligations given by Ordnance Survey about the product and/or its suitability for any particular or
intended purpose are set out in your customer contract. It is your responsibility to ensure that this product
is suitable for your intended purpose.


Ordnance Survey does not accept any liability (whether for breach of contract, negligence or otherwise)
for any loss or liability you or any third party may suffer in relying on this guide and any guidance,
suggestion, advice, or explanation provided in it. Any liability that Ordnance Survey has to you in relation
to the product, its supply, use, accuracy, data supplied, functionality or any other liability arising out of or
in connection with the product is limited as set out in your customer contract.

We may change the information in this guide at any time without notice.

We do not accept responsibility for the content of any third-party websites referenced or accessed in or
through this guide, any contractual documentation, and/or the Ordnance Survey website.

### Copyright in this guide

This guide (including for the avoidance of doubt any mapping images reproduced herein), is
© Crown copyright 201 7. All rights reserved.

Any part of this guide may be copied for use internally in your organisation or business so that you can use
the product for the purpose for which it is licensed to your organisation or business (but not otherwise).

No part of this guide may be reproduced or transmitted in any form or by any means (including
electronically) for commercial exploitation without the prior written consent of Ordnance Survey.

No part of this guide may be copied or incorporated in products, services, or publications that you
generate for onward sale, or as free promotional or support materials, without the prior written consent
of Ordnance Survey.

### Data copyright and other intellectual property rights

The Crown (or, where applicable, Ordnance Survey’s suppliers) owns the intellectual property rights in
Ordnance Survey digital map data.

Full details of the terms and conditions under which Ordnance Survey digital map data may be processed
and/or manipulated or copied by a user – whether or not for use on PCs or workstations or for making hard
copies – are available from the Customer Service Centre, please see contact details. You should check the
terms and conditions with us before using the data. It is also the responsibility of the holder of the digital
map data to ensure that any plotted or printed output contains the required copyright and database
acknowledgements in a conspicuous position.

### Trademarks

Ordnance Survey, the OS Symbol, OSGB36, OS MasterMap, TOID and OS Net are registered trademarks and
Integrated Transport Network is a trademark of Ordnance Survey, the national mapping agency of Great
Britain.

Acrobat Reader and Adobe are registered trademarks of Adobe Systems Incorporated.
Arial is a registered trademark of The Monotype Corporation.
English Heritage is a registered trademark of the Historic Buildings And Monuments Commission For
England


OGC is a registered trademark of the Open Geospatial Consortium.
Royal Mail is a registered trademark of Royal Mail Group plc.
UNIX is a registered trademark of X/Open Company Ltd.
Verdana is a registered trademark of Microsoft Corporation.
W3C is a registered trademark of Massachusetts Institute of Technology.

### Back-up provision of the product

You are advised to copy the supplied data to a back-up medium.

### Using this guide

The documentation is supplied in portable document format (PDF) only. Free Adobe® Reader® software,
which displays the guide, incorporates search and zoom facilities and allows you to navigate within.
Hyperlinks are used to navigate between associated parts of the guide and to relevant Internet resources
by clicking on the blue hyperlinks and the table of contents.


## Chapter 1 Introduction to OS MasterMap Topography Layer

### Introduction

OS MasterMap is a consistent and maintained framework for the referencing of geographic information
(GI) in Great Britain. It comprises four separate but complementary layers that provide detailed
topographic, cartographic, administrative, photographic and network features positioned on the National
Grid. This guide specifically covers the OS MasterMap Topography Layer.

The key characteristics and benefits of the Topography Layer are;

- Individual real-world topographic features represented by points, lines, and polygons, each with
    their own unique reference, called a TOID®.
- Employing a scale of data capture appropriate to the density of features – the higher the number
    of features within an area, the larger the scale used to survey them – ensuring the detail of
    individual features can be shown and with coordinates delivered in British National Grid.
- Developed, managed, and maintained by Ordnance Survey within one of the world’s largest
    spatial databases.
- The data is delivered as a seamless, geographically contiguous area. This means that the user
    receives only the area they order without additional, unwanted data, as may happen with
    tile-based products.
- Each feature is uniquely referenced and has attributes that record the feature’s life cycle. The
    feature’s life cycle is linked to the life cycle of the real-world object it represents. The life cycle
    records certain types of changes to the feature that occur over time.

Figure 1 (below) shows the OS MasterMap Topography layer.

**Figure 1:** the OS MasterMap Topography layer


These characteristics mean that user may use the Topography Layer in a wide variety of ways, including:

- improving the accuracy of a user’s own derived data
- improving a user’s data capture processes
- creating consistency and achieving maintainable standards within geographic data holdings
- establishing a common reference between a user’s own datasets and data they may wish to
    share with other organisations
- improving the visual clarity of data and aiding the visual interpretation of data
- using the products in an integrated manner to derive additional information
- identifying and managing change in their area of interest
- creating historical views of their area of interest
- enhancing the queries that can be run on their data and so providing better information for
    decision making

### System requirements

The OS MasterMap Topography Layer data is designed for use as a digital map within geographical
information systems (GIS) and database systems.

For details of Ordnance Survey’s Licensed Partners who can incorporate OS MasterMap in their systems
please see the technical support page on the Ordnance Survey website.

Ordnance Survey does not recommend either suppliers or software products. The most appropriate
system will depend on many factors, such as the amount of data being taken, resources available within
the organisation, and the existing and planned information technology infrastructure or last but by no
means least, the applications in which OS MasterMap is to be used.

However, as a minimum, the following elements will be required in any system:

- a means of reading the data in its native format, or by translating into a file format, or for storage
    in a database.
- a means of storing and distributing the data, perhaps in a database or through a web-based
    service.
- a way of visualising and querying the data, typically a GIS.

Ordnance Survey has produced a list of questions for system suppliers that may help users in choosing
their system. There is also more information on handling OS MasterMap in chapter 4 on the supply of
OS MasterMap.

Currently, national cover is available for the Topography. The format for most of the data is Geography
Mark-up Language (GML).

**Table 1:** OS MasterMap Topography data volume

```
Layer Size
Topography 43.5 Gb
```
Additional space should be allowed for metadata and registration files. Gaelic or Welsh names are also
supported.


### The data model

The Topography Layers Is grouped into feature themes. Within each theme there will be features deemed
to belong to that theme. A feature can belong to more than one theme.

Each feature will have one or more versions of itself which can be tracked as a means of demonstrating
change over time. New versions of features will replace existing features through change only updates
(COU) and features that no longer exist can be deleted as a result.

The rest of this chapter introduces the concepts of themes, features, and attributes.

### Themes

A theme is a set of features that have been grouped together for the convenience of users and to provide
a high-level means of dividing the data on the layer in a logical and user-friendly fashion. A feature can be
a member of any number of themes but must belong to at least one theme as a minimum requirement.

A theme is created by applying rules based on the attributes of features. A theme rule can depend on the
common values contained in the feature attributes. A feature is considered a member of each theme to
which it passes a theme rule.

Themes are not part of the classification system of features for OS MasterMap. Because of this, a new
theme can be created, for the convenience of our users, without in any way affecting either the existing
themes, or the classification of OS MasterMap features. The themes for OS MasterMap Topography are
discussed in more detail later in this document in Chapter 3.

### Features

In this user guide the term real-world object is used to describe a geographic entity that can be captured
and represented in the data. A real-world object is represented by a feature in OS MasterMap data. A
complete list of the real-world objects and their feature representations is given in the OS MasterMap
Real-world Object Catalogue.

Each feature has one of three geometrical structures – a point, a line, or a polygon. A line feature will have
a start and end node that reflects the start and end of the real-world object it represents. Where the start
and end node is coincident, the feature created is structured as a polygon. Lines and polygons represent
both the location and the geometry of the real-world object. Points do not necessarily represent the exact
geometry of the real-world object, just the centroid of its location. Text features are used to provide
additional information and context about real-world objects represented by point, line, or polygon
features. They are represented as a point, which indicates the location where the text should be displayed.

Polygon features, fit with each other topologically within structuring layers. This means that polygons sit
adjacent to each other like pieces of a jigsaw puzzle, rather than on top of each other. In figure 2 below it
can be seen that a building, if ‘removed’, leaves its footprint in the land feature; the land feature does not
exist below the building.


**Figure 2:** OS MasterMap Topography Polygons

### Attributes

Each feature comes with an extensive set of attributes that provide information about the feature, for
example, its identity, its relationship to other features, geometry, and the kind of real-world object it
purports to represent. Each type of feature has a different set of attributes.

There are two types of attribute information; attributes that provide data about the real-world object the
feature represents, such as its area or its nature. Or attributes that provide additional information about
the feature, such as its life cycle and quality. Three of the most important pieces of additional information
for the vector layers – the TOID, version and version date – are discussed in more detail in chapter 5.

OS MasterMap Topography provides attribution that can be searched for and queried within a GIS.
Attribution makes it possible to select parcels of land with common features, for example, a polygon
attributed as having coniferous tree cover.

This chapter has outlined the main features of the OS MasterMap product and the data models that
underpin the layers. It has explained the role OS MasterMap Topography Layer plays and within the wider
vision Ordnance Survey has of providing a framework for users to create and derive additional value from
their GI. The following chapter looks at OS MasterMap Topography Layer in more detail.


## Chapter 2 Introduction to OS MasterMap Topography Layer

The OS MasterMap Topography Layer contains features that represent objects in the physical environment
such as buildings, fields, fences, and letter boxes. It also includes intangible objects such as county
boundaries and the lines of mean high or low waters. There are over 45 0 million features in the current
product. It is available for all of Great Britain (England, Scotland, and Wales). Figure 3 , below, shows an
extract of OS MasterMap Topography Layer. Geographic features are modelled in such a way as to make it
easy to identify buildings, roads, water, and land at a glance. The data has been collected by
Ordnance Survey and is based on the British National Grid.

The basic unit of OS MasterMap Topography Layer data is a point, line or polygon that represents a real-
world feature. A feature may also have text or a symbol that accompanies it. Both are considered a feature
within the OS MasterMap products. Each feature comes with a set of attribution that provides information,
about the real-world object it represents and metadata that helps track changes to the feature. The
structure of OS MasterMap Topography Layer, combined with its rich attribution, provides the scope to
undertake quite complex geographic analyses, and to enhance users’ data-capture processes. Attribution
provides the opportunity to use the data as far more than a map. Using the product within a GIS,
attribution can be used to analyse, sort, query and visualise the data in many different ways.

Each feature in OS MasterMap Topography Layer has a unique reference called a TOID. The clear majority
of database systems used within organisations rely on the use of unique referencing for the efficient
management of the data stored within them. Each feature also has a version number and a version date.
As the real-world feature that it represents changes during its life, so the feature within the OS MasterMap
Topography Layer will also change in terms of its shape or its attribution. Whilst it remains the same
feature – essentially occupying the same space and having the same function – the TOID will not change,
but the version number will increment and the version date will change. This allows an instance of a
feature to be identified in both space and time.

**Figure 3:** extract of OS MasterMap Topography Layer


OS MasterMap Topography Layer is supplied in and open, tabular GML. An online ordering system has been
developed for users to place and manage their orders. The data can be delivered electronically or on digital
media.

When ordering OS MasterMap Topography Layer, there are no artificial divisions in the data caused by a
tile-based unit of supply. OS MasterMap Topography Layer is supplied as a seamless dataset.

In the following chapters of this user guide, these new concepts are explained in more detail. The reasons
behind the concepts, where appropriate, are given along with indications of the benefits they may bring
and the possible considerations for a user’s use of the product. Firstly, the purpose for introducing this
type of product and some typical applications for the product are outlined in the rest of this chapter. We
have a number of live user cases detailing a variety of live applications.

### Purpose and Application

OS MasterMap Topography Layer was developed in response to the need for a national topographic
dataset that offers users a more sophisticated type of data that represented the world in a more realistic
way and was more aligned to the increasing use and functionality of GIS and spatial database technology
within organisations.

Its primary purpose is to provide the most detailed topographic data available of the physical environment
of Great Britain. It is regularly updated by ground and aerial survey to a regular schedule, and captured
and published to a consistently high standard.

Many users apply geographic products as a starting point to derive their own data, which can be time
consuming and inefficient. This is particularly true where features in the data are amalgamations of more
than one real-world feature, or even individual parts of a real-world feature. Where the feature represents
a real-world feature that has an ‘area’, such as a building or a parcel of land, the feature is represented in
the data as a polygon. This should provide opportunities for users to derive their data with greater
efficiency and ease as features can be selected either singularly or in groups. The way, and, largely, the
extent of a user’s ability to take advantage of the polygonised structure will depend, on the systems in use.
However, most GIS’ have the necessary ‘data capture’ tools to analyse and interrogate the topography
features.

OS MasterMap Topography Layer provides detailed attribution, through its descriptive terms, relating to
the real-world object and the group of features it represents. This means certain types of analysis can be
performed, without the user having to manually add their own attribution to the data. The themed
attribution also means the user can apply their own criteria to refine the data into groups of features that
meet their own specific requirements. An example of this would be finding buildings of a certain size, using
the calculated area provided as one of the attributes.


It is important for many applications of GI, to be able to identify where changes have taken place and the
history of a features changes. This is important because users may need to learn how the landscape has
altered, and reflect those changes in their own data. Ordnance Survey updates OS MasterMap Topography
Layer on a regular basis, and these changes are passed on to the users through a dataset called change-
only update (COU). This supplies just the features that have changed since the last update or customer
user order. This should normally result in much less data needing to be processed and uploaded to the
user’s holdings upon the arrival of each update. This is, however, dependent on how frequently the COU
data is applied. Furthermore, OS MasterMap Topography Layer is the first product from Ordnance Survey
to introduce the concept of feature life cycles and unique referencing. This makes it possible to relate
change in the real world to features in the digital environment, and to identify and manage that change to
OS MasterMap so that users can, if they wish, keep their own data holdings up to date. This will also enable
the user to assess the consequences of feature changes. It may even be possible, depending on the
systems used, for users to roll back their holdings of OS MasterMap Topography Layer to a specific point
in time. However, Ordnance Survey does not supply previous versions of any feature or dataset.

One of the most common uses for GI is to produce maps that are coloured to highlight a particular value
or property that a real-world feature may have. These are often called thematic maps. An example is given
below in figure 4. The figure was created by grouping the calculated area value attribute of each unit on
an industrial park into one of five categories. Each category is ‘themed’ with its own colour. The ranges
and colours are shown in the legend. Most computer systems offer the ability for features to be assigned a
colour or style based on the value of an attribute; OS MasterMap Topography Layer has both the structure
and attribution to make it relatively quick to produce such maps. The result is data that is easier to
customise, easier to interpret and more eye-catching.

**Figure 4:** thematic mapping with OS MasterMap Topography Layer

```
980 – 1 590 m^2
```
```
780 – 980 m^2
```
```
770 – 780 m^2
```
```
530 – 770 m^2
```

One of the barriers to users is linking datasets together and sharing this data with other Ordnance Survey
users, making greater use of both their own data. To be able to link or ‘associate’ datasets together
normally requires each dataset to have a common reference – one piece of information that is in all
datasets. OS MasterMap Topography Layer can help to create links between users’ own datasets and
OS MasterMap features by using the TOID as a common reference. In this way, OS MasterMap Topography
Layer provides a foundation dataset for a Digital National Framework that aims to help users of spatial
data to derive more value by associating datasets together. Using a common reference can also provide
such benefits to an organisation as removing ambiguity over a feature’s identity and allowing the faster
retrieval of data when querying or analysing the data.

### Applications

OS MasterMap Topography Layer is used extensively by businesses and organisations that need to relate
their activities and/or their assets to the physical environment.

One of the most common uses for the product is by organisations, who have their own GI, and wish to
examine it in relation to the real world around them. An example would be utility companies that have
assets both at surface and below surface level. They frequently need to visit these assets, either for repair,
maintenance or to add new assets. By viewing their infrastructure against the features in OS MasterMap
Topography Layer, it will help their crews locate the assets, become familiar with the area before they
leave their depot and allows them to provide a better user service by identifying those nearby premises
that need to be notified about the works.

Taking this a stage further, many organisations need to derive their own GI from the OS MasterMap
Topography Layer. They use the individual features that Ordnance Survey provide, to form the building
blocks for their own sets of GIs’. Many local- and central-government organisations use the data in this
way. A local authority, for example, may use it to maintain a register of land and buildings in their
ownership. Once they have the physical feature or group of features they are interested in, they can attach
their own attribution to that already provided with the product. When this kind of data association takes
place, it can lead to efficiencies in storing and using data. It can also enable data to be shared more easily
between and within organisations.

As more GI is created, it is possible to analyse the spread and distribution of features or activities and learn
from their relationship to other physical features. For example, a police force might plot the locations of
certain types of street crimes, and by analysing the pattern and the timing of the incidents against the local
topography, they may be able to target their resources more efficiently.

The OS MasterMap Topography Layer can also be used as part of a data modelling or a predictive
modelling tool. In addition, OS MasterMap Topography Layer is also used by organisations looking for
areas where specific physical conditions exist. A retailer, for example, may use OS MasterMap Topography
Layer to help it find a site for a new store by using the attribution to find land parcels of a certain size and
distance from a settlement or main road and cross referencing the information contained within OS
AddressBase to identify an ideal catchment area. Emergency planners may use OS MasterMap Topography
Layer to assist in planning and preparing for emergencies, by identifying the area’s most likely to be
affected. It can also be used to model the sequence of events in any given type of emergency, so that their
own resources and command centres are unlikely to be cut off or taken out of action by the emergency
itself.


It is possible to customise OS MasterMap Topography Layer styling as a way of clearly communicating GI
in reports and presentations. GI can be conveyed more meaningfully in a map, than by text or tables,
making it easier to get points across too many different types of audience, whether they are key decision-
makers, people inside the organisation, or members of the public. OS maintains a GitHub page with
predesigned, schema specific styling guides.

It should be noted that the ability of an organisation to develop any or all the applications listed above
will depend in part on the systems they use. Most GIS are capable of performing, to a greater or lesser
degree, the applications listed above. Table 2 below gives examples of other applications that frequently
use OS MasterMap Topography Layer.

**Table 2**

```
Land management and property development Environmental monitoring
Site planning Tourism and promotional material
Citizen services Risk assessment
Location-based services on mobile devices User service centres
```
This chapter has provided a detailed introduction to OS MasterMap Topography Layer, including its main
features, the reasons behind its development and some of the many applications in which it may be used.
The next chapter looks at the concept of the layer themes and how this feature can be used to improve
your analysis processes.


## Chapter 3 OS MasterMap Topography Layer themes

This chapter describes in more detail the content of each theme. This will aid users’ understanding of
which features they can find in the data and the most likely theme or themes that the feature will be found
in. OS MasterMap Topography Layer comprises nine themes. These are:

- Administrative boundaries
- Buildings
- Heritage and antiquities
- Land
- Rail
- Roads, tracks, and paths
- Structures
- Terrain and height
- Water

The main features of each theme are described below. As stated earlier in chapter 2 , there are rules that
govern which theme or themes are assigned to a feature. These are discussed later in this chapter.

Wherever possible, real-world objects are represented in their true surveyed position. However, for the
sake of clarity of display or plotting, real-world objects may be generalised. For example; small juts in
house fronts may not be shown. The normal methods of generalisation that can be applied to features are:

- emphasis
- selection for inclusion
- simplification
- omission

Real-world objects may also be simplified in the OS MasterMap Topography Layer, for example, a small
group of trees may be recorded as a single point or polygon feature. The following is a breakdown, by
feature type, of the themes in greater detail, including regional and cultural special designations.

### Administrative boundaries

These are defined as showing the limits of responsibility and representation for electoral and
administrative purposes. Boundary alignments are shown within the administrative boundaries theme.
As well as the boundary’s relationship to real-world objects, its mereing and boundary descriptions,
where needed for clarification, are also supplied.

The following types of boundary are shown within the administrative boundary theme:


#### Parliamentary Boundaries

**GB Wide:**

- European Electoral Region
- County Constituency
- Borough Constituency (England and Wales)
- Burgh Constituency (Scotland)
- Assembly Electoral Region and Assembly Constituency (Wales)
- Parliamentary Electoral Region and Parliamentary Constituency (Scotland)

#### Local Government Boundaries

**In England:**

- County
- City and County of London, District, London borough, Unitary Authority, and Metropolitan
    District
- Civil Parish and the Inner and Middle Temples
- Electoral Division
- Ward

**In Wales:**

- Unitary Authority
- Community
- Electoral Division

**In Scotland:**

- Unitary Authority
- Ward

**Physical features shown in the administrative boundaries theme:**

- Boundary Posts
- Boundary Stones
- Boundary Markers

**Non-physical features shown in the administrative boundaries theme:**

- Alignments of Boundaries
- Textual Descriptions of Boundaries, Mereings and Posts and Stones.

#### Application of Precedence

Where two or more boundaries are coincidental, a single alignment is shown by the most important
boundary in the following order;


**In England and Wales:**

- County, City and County of London, Unitary Authority, District, London Borough and
    Metropolitan District, Civil Parish, Community, Inner and Middle Temples
- European Electoral Regions, County/Borough Constituencies
- Welsh Assembly Electoral Region
- Electoral Division and/or Ward

**In Scotland:**

- Unitary Authority
- European Electoral Regions, County/Burgh Constituencies
- Scottish Parliamentary Electoral Region
- Ward

A textual description often accompanies this occurrence and is used for clarification. If the alignment of
an administrative boundary coincides with any other feature (other than another boundary) then both will
be shown in their respective themes. More information on administrative boundary alignments can be
found in annexe A.

### Buildings

Buildings are defined as permanent roofed constructions, usually with walls. This includes permanent
roofed-constructions that exceed 8.0 m² in area (12.0 m² in private gardens). Exceptions are made to this
area rule for smaller buildings that, due to their detached position, form relatively important topographic
features. These are shown at minimum size as stated above. With a few exceptions, for example, by
describing government offices or hypermarkets, no distinction is currently made between residential,
private, public, commercial, or industrial buildings.

Physical features shown in the buildings theme:

- Roofed Buildings (identified as of sufficient size or importance to be shown)
- Mobile or Park Homes that are permanent, residential and have a postal address
- Archways and Covered Passageways, where the alignment can be determined from outside the
    building
- Horticultural Glasshouses over 50 m²
- Covered Tanks

Features such as cooling towers, uncovered tanks, bridges, and monuments are shown within the
structures theme.

Only glasshouses over 50 m² that serve a horticultural purpose will continue to be captured as glass
structures. Other glass structures, such as office buildings and conservatories, exist within OS MasterMap
and will be recorded as buildings. There are some non-physical features shown in the buildings theme,
represented as the following text features:

- House Numbers
- Descriptive Building Names
- Distinctive Building Names


Detail in private gardens attached to residential buildings such as sheds, pathways and ornamental
ponds are not captured as part of the specification. Where possible, all gardens of this type are
generalised and represented by a single garden polygon.

### Heritage and Antiquities..................................................................................................................

For Ordnance Survey purposes, Antiquities are defined as existing artificial features of a date not later than
AD 1714 (the date of the accession of George I). These are captured along with very important battlefield
sites and natural features connected with important historic events. Features and sites of a date later than
AD 1714 may be treated as Antiquities as an exception if they are of national importance.

The investigation, recording and surveying of archaeology is the responsibility of English Heritage® and
Royal Commissions on Ancient and Historical Monuments (RCAHMs) for Scotland and Wales. Antiquity
find sites are not shown in OS MasterMap. Ordnance Survey has no responsibility for defining the
authenticity of distinctive or descriptive names of antiquities.

Due to the variety of physical features in the heritage and antiquities theme, an exhaustive list is not
provided, but they do include:

- Standing Stones
- Earthworks
- Hill Figures
- Ruined Buildings
- Tombs
- Stone Circles

Some non-physical features are shown in the heritage and antiquity theme. These include:

- Textual Descriptions for the real-world objects
- Battle Sites, as either text or symbol.

There are some limitations on what can be shown, imposed by survey principles. Many earthworks are of
low relief and do not meet Ordnance Survey’s minimum criteria. To depict the feature clearly, it may be
necessary to exaggerate antiquity detail. In mountain and moorland areas, some antiquity features may
be generalised, without losing the essential characteristics of the depiction.

### Land

The Land theme is defined as either a man-made or a natural polygon feature that describes the surface
cover and area to which it is applied. This includes both natural and man-made slopes and cliffs. All general
features are also placed in the land theme. There are some exceptions to this such as routes of
communication and buildings.

Landform features, such as slopes and cliffs, behave slightly differently from other features, in the
instances that they are represented as line features, they can cross other line features without being
broken at the intersection of the line. Additionally, when they are polygon features, they can overlap other
polygon features instead of sitting adjacent to them.


The land theme encompasses those areas that do not form part of another theme, for example, a grass
verge next to a road would appear in the roads, tracks, and paths theme, whereas a grass area within a
park would be in the land theme.

The limits of geographic features such as hills and valleys are not recorded, although the distinctive names
of these geographic features are shown when applicable.

Physical features shown in the land theme include:

- Recreation areas such as Parks, Playing Fields, Football Pitches, and Golf Courses
- Slopes and Cliffs
- Car Parks
- Gardens
- Woodlands
- Areas of Vegetation (including scrub, heath, rough grass, and marshland)

In figure 5 below, two different types of tree cover have been identified on the edges of a settlement.
Each type has been labelled using the attribution within the OS MasterMap Topography Layer.

**Figure 5:** vegetation in the land theme

The theme also contains text features that describe these physical features.


### Rail

These are defined as features related to travel by railway or tramway. The exception to this are railway
tunnels, which are currently in the structure theme. The OS MasterMap Topography Layer contains
information relating to permanent railways that form the network between two points, for example, from
railway station to railway station or from an industrial building to a private quarry.

Standard-gauge railways are shown to scale by a pair of rails and represent tracks 1.435 m apart. Railways
narrower than 1.435 m are deemed to be narrow gauge, and are shown by a single line representing the
central alignment. Tramways, metros, and light-rapid-transit systems are treated as railways.

Underground portions of the Metropolitan and District lines in London that are close to surface level are
shown. Where a deep-level tube railway comes to the surface and continues as a normal railway, it is
shown as a standard-gauge railway. In other cities, only the sections of underground railways that are
open to the sky are currently shown.

The physical features shown in the rail theme include:

- Level Crossings
- Lighting Towers
- Loading Gauges
- Turntables
- Mile or Kilometre Posts and Stones
- Sand Drags
- Signal Posts, Bridges, and Gantries
- Switches and Slips
- Retarders
- Bridges and Viaducts
- Mail pick-ups
- Rails
- Permanent Ways
- Station Buildings and Platforms

Some physical features are not shown in the rail theme. These include:

- Telephones associated with Level Crossings
- Conductor Rails and Overhead wires for electrified trains
- Detail beneath the roofs of Railway Stations
- Water Troughs
- Repetitive Features, such as signal lights within marshalling yards

Some non-physical features are shown in the rail theme. These are text descriptions of railway and
associated railway features.


### Roads, Tracks, and Paths

#### Roads

For Ordnance Survey purposes, a road is defined as a metalled way for vehicles. Roads that form part of
the public network and driveways to private properties that are over 100 metres in length are normally
included within the OS MasterMap Topography Layer.

#### Tracks

A track, for Ordnance Survey purposes, is defined as an unmetalled way that is clearly marked, permanent
and used by vehicles. Tracks are only normally recorded in private gardens if they are 100 metres or more
in length. They need not be ‘all weather’. All tracks are described as ‘Track’, or ‘Tk’ if required to be
abbreviated. Distinctively-named tracks have their name recorded, for example, HICKS LANE (Track).

#### Paths

For Ordnance Survey purposes, a path is defined as any established way other than a road or track. They
can be considered as either ‘made’ or ‘unmade’.

#### Made paths

Made paths are those whose surface is paved or metalled. Only major paths are shown in parks, public
gardens, cemeteries and so on. Made paths are described by the annotation ‘Path’, except in built-up
areas, where the description will not normally be recorded. Distinctive names, such as ‘Simmons Walk’, are
also included as part of the OS MasterMap Topography Layer.

#### Unmade paths

Unmade paths are those that are neither paved nor metalled. An unmade path is included in the
Topography Layer when its entire length is evident on the ground and it starts at a road, track or path and
finishes at a similar feature or a specific place of interest. Unmade paths are described by the annotation
Path (um) in urban and rural areas.

The physical features shown in the roads, tracks and path theme are listed below:

- Kerb lines or the limits of metalling:
    o Carriageway Limits, including any hard shoulder or shallow drainage gullies forming
       the side of the road on dual carriageways or motorways
    o Kerbed Roundabouts
    o Traffic Islands in roads (usually 8 m² or more)
    o Traffic-calming measures forming a physical obstruction, including pinch points
    o Dedicated Cycle Lanes
    o Fords
    o Car Parks
    o Edges or centre alignments of tracks and paths
    o Step treads


- Road furniture:
    o Mile Posts
    o Guideposts (traditional fingerposts only)
    o Kerb Barriers
    o Gates across roads
    o Posts preventing vehicular access
    o Weighbridges
    o Cattle Grids
- Road-bounding features:
    o Hedges, Walls, Fences, and Banks
    o Crash Barriers (where they form the sole bounding feature of a carriageway)

Non-physical features shown in this theme are represented as distinctive and descriptive text and inferred
links.

There are two situations where constraints on how the features are depicted are normally imposed by
survey tolerances:

- Where the central alignment of an unmade path is less than 1 m (urban areas) or 2 m (rural and
    moorland) from an adjacent building, fence, hedge or wall, the central alignment is shown at that
    minimum distance away from the feature.
- Where one edge of a track is parallel and close to the bank of a water feature, the track edge
    nearest to the river is omitted.

It is important to note that rights of way are not identified in the Topography Layer. The representation of
a road, track or path cannot be used as evidence of a right of way.

### Structures

These are defined as features that are man-made constructions but do not qualify as buildings. These may
or may not obstruct passage at ground level. The Topography Layer contains information relating to all
permanent structures that are considered large enough to be included. Figure 6, below, gives some
examples, highlighted in black, of structures.


**Figure 6:** examples of real-world objects in the structure theme

The physical features in the structure theme include:

- Stand-Alone Monuments • Pontoons
- Fountains • Uncovered Tanks
- Covered Reservoirs • Conveyors
- Pylons • Cooling Towers
- Weirs and Sluices • Upper Levels of Communication
- Gas Holders • Bridges, Viaducts, Aqueducts, and Piers
- Double Walls

Non-physical features, are represented by text.


### Terrain and height

These are features that denote the ground level at any given point. OS MasterMap Topography Layer does
not contain height contours, instead it contains height information point features of known height.

#### Triangulation stations

These are physical marks that represent points in the national triangulation scheme. The best-known form
is the triangulation pillar, often found on hill or mountain tops. Other forms include triangulation points
placed on church towers and flagpoles. The coordinates of a triangulation station in the data are not
usually the very accurate coordinates for the control point. The accurate coordinates of the control point
can be obtained from Ordnance Survey (see below). All triangulation stations are shown, except for buried
and surface blocks.

#### Spot height

These are non-physical points, the altitude of which (relative to Ordnance Datum) has been determined
by levelling. All current spot heights, are shown by a point feature or symbol. The altitude to one decimal
place of a metre is shown by a textual description. The latest information on Ordnance Survey’s GPS,
triangulation and control points can be found at [http://www.ordnancesurvey.co.uk/oswebsite/gps/.](http://www.ordnancesurvey.co.uk/oswebsite/gps/.)

Bench marks are represented in the Topography Layer as a symbol to mark their position. The values for
these bench marks are available from [http://benchmarks.ordnancesurvey.co.uk/](http://benchmarks.ordnancesurvey.co.uk/) It should be noted that
the bench mark information is historic, and Ordnance Survey cannot guarantee its accuracy.

### Water

Water features are defined as features that contain, delimit, or relate to real-world objects containing
water. The physical water features shown in the OS MasterMap Topography Layer include:

- Mean High Water (springs) and Mean Low Water (springs)
- Swimming Pools, Ponds, Lakes, and Lochs
- Moats, Bridges, and Footbridges
- Reservoirs, Rivers, Canals, and Streams
- Drains and Ditches
- Foreshore Features
- Floating Objects (they are only shown when they are fixed and attached to permanent detail)
- Shake Holes and Swallow Holes (in mountain and moorland areas; limits of numerous shake
    holes are shown and the area described as ‘area of shake holes’)
- Sluices (except those found in sewage works) and Culverts
- Stepping Stones
- Taps (which take the form of drinking fountains or that form the communal water supply)
    Drinking Fountains and Water Troughs (public)
- Tidal Gauges
- Waterfalls (only if formed by natural features) and Weirs
- Bollards, Capstans, and Mooring Posts


- Breakwaters and Groynes
- Perches, Pilot Beacons, and Navigational Beacons
- Pumps, Wells, Spouts, Springs, and Fountains

Taps, water troughs and drinking fountains are no longer captured under the current specification.

Figure 7 shows a sample of real-world objects in the water theme, including a pond, a river, flow arrows,
sluices, and drains.

**Figure 7:** examples of features within the water theme

The non-physical features shown in the water theme are:

- the highest point in a river to which normal tides flow is described as Normal Tidal Limit (NTL).
    The point is shown and annotated with text
- Low Water Level (LWL) is the point to which mean tides (or mean spring tides in Scotland) flow at
    low water. The point is shown and annotated with text
- Textual descriptions of all water features
- Flow arrows, which are symbols used to indicate the direction of flow of non-tidal moving water

As water is a dynamic element within the landscape, certain survey principles and constraints are imposed
on the representation of water within the OS MasterMap Topography Layer.

Rivers, streams, and drains are shown at their true scale width. A single line is normally used where their
width is less than:

- 1.0 m in urban areas; and
- 2.0 m in rural, mountain and moorland areas.


OS MasterMap Topography Layer does not contain polygons of the open sea. Where inland water bodies
meet the sea, the following principles are applied:

- Ordnance Survey shows high and low water marks of a mean average tide, that is, an average
    tide halfway between spring and neap tides in England and Wales, and of average spring tides in
    Scotland.
- In tidal rivers, the point to which mean tides (or spring tides in Scotland) flow at high or low water
    is included.

Lakes and ponds are surveyed at normal winter level; reservoirs are shown at top water level, that is,
spillover level. All water features are described. Continuous topographical water features that extend into
private gardens are shown. Where a river flows under another object, typically a bridge, the part of the
river beneath the object is not supplied. This is why there are gaps in rivers when the theme is viewed on
its own. This is shown in figures 8 and 9 below.

**Figure 8:** the depiction of water and bridges (all themes)

### Theme rules

There are several rules that govern what theme or themes are assigned to a feature. These rules give the
data consistency so that the same kind of real-world objects is assigned to the same themes as far as
possible.

There is one attribute – called the descriptive group attribute – that has a major bearing on the theme
rules. The value in the descriptive group is the key determinant of which theme(s) the feature is assigned.
Table 3, below, relates the value of descriptive group (of which there are 21) to the theme. If the feature
has the value listed in the first column, it will be assigned into the theme listed in the third column.


**Table 3**

```
Descriptive Group Theme Real World Examples Description
Buildings Building Factories, Houses, Public
Conveniance, Tank
```
```
Features representing buildings (not
including glasshouses).
Built Environment Land Residential land and car parks Geographic areas and extents of man-
made environments, terrain and
communication links.
General Feature Land Cattle Grid, Conduit, Conveyor,
Line of Posts, Lock Gate,
Slipway, Sloping Masonry
```
```
General topographic features and minor
detail.
```
```
General Surface Land Agricultural Land, Slag Heap,
Slipway, Sloping Masonry, Spoil
Heap, Tank
```
```
Features that denote surfaces that are
man-made, though not specifically in
man-made environments.
Glasshouse Buildings Greenhouses Features representing glasshouses
Height Control Terrain and
height
```
```
Bench marks Features with height information
```
```
Historic Interest Heritage and
antiquities
```
```
Site Of Heritage such as a
Battlefield
```
```
Features of heritage value often depicted
as text indicating the site of a historic
event or an actual physical historical
structure such as Hadrian’s Wall
Inland Water Water Canals, Collects, Drain, Fords,
Issues, Lakes, Leats, Reservoirs,
Rivers, Sinks, Spreads, Springs,
Static Water, Streams,
Watercourses and Waterfalls
```
```
Features representing, describing or
limiting areas of water that are not tidal
```
```
Landform Land Caves, Mineral Workings, Slopes,
Cliffs and Quarries
```
```
Features representing, describing or
limiting areas of landform, for example,
slopes or cliffs
Natural Environment Land Marsh, Mud, Saltmarsh, Sand,
Shingle, Scrub, Woodland
```
```
Features representing geographic areas
and extents of natural environments and
terrain
Network or Polygon
Closing Geometry
```
```
Land and road,
tracks and
paths
```
```
Road junctions and gardens Features used to close network polygons
at their termination
```
```
Path Roads, Tracks
and Paths
```
```
Paths and cycle paths Features representing and limiting the
extent of pathways
Political or
Administrative
```
```
Administrative
Boundary
```
```
County, district, ward and civil
parish boundaries and markers
```
```
Features representing political or
electoral boundaries
Rail Roads, Tracks
and Paths
```
```
Railway Land, Tracks and
Signals
```
```
Features representing, describing or
limiting the extents of railways
Road or Track Roads, Tracks
and Paths
```
```
Road sections of varying
surfaces, roundabouts and
central reservations
```
```
Features representing, describing or
limiting the extents of roadways and
tracks
Roadside Roads, Tracks
and Paths
```
```
Verges and Pavements Features representing, describing or
limiting the extents of roadside detail
```

```
Terrain and Height Terrain and
Height
```
```
Spot height marks Features giving information about the
altitude at a location or changes of level
of the ground surface
Structure Structures Bridges, Chimneys, Groynes,
Lighting Gantries, Lock Gates,
Sluices, Telecommunications
Masts, Weirs and Wind Turbines
```
```
Features representing, describing or
limiting areas of water that are tidal
```
```
Tidal Water Water Tidelines including MHW/MLW,
MHWS/MLWS, NTL/MST
```
```
Features representing, describing or
limiting areas of water that are tidal
Unclassified Land Areas under temporary
development
```
```
Features representing developing or
undesignated attributes in the process of
being captured.
```
There are some additional rules for assigning lines to themes. Lines serve two purposes in OS MasterMap
Topography Layer. There are lines that are coincident with the boundaries of polygon features, these are
called bounding lines and they are the most common type of line. However, some lines, do not form
boundaries to features, but are a feature in their own right. These are called non-bounding line features.

In addition to being a member of each theme rule, a line feature that is part of the boundary of one or more
polygon features is also considered a member of the theme of those polygon features which is bounds. For
example, any line feature that bounds a polygon feature that is a member of the roads, tracks and paths
theme is also a member of the roads, tracks, and paths theme, in addition to any other themes to which it
belongs. Figure 1 0, below, gives examples of the application of theme rules.

**Figure 10:** application of theme rules

This chapter has discussed the themes of OS MasterMap Topography Layer and outlined the contents of
each theme. It explained how Ordnance Survey allocates a feature to one, or more themes. This helps the
user to understand which theme a feature is likely to be found in, and why some features may appear in a
theme that may not seem logical on first appearance.

```
Line belongs to land
theme only.
```
```
Polygons belong to
building theme only.
```
```
Polygon belongs to the
land theme only.
```
```
Polygon belongs to the
road, tracks, and paths
theme only.
```
```
Line belongs to the
building theme only.
```
```
Line belongs to building
theme only.
```
```
Line belongs to building
and land themes.
```
```
Line belongs to the land
and road, tracks, and
path themes.
```

## Chapter 4 OS MasterMap supply

There is an online ordering system available from which you can select and download a range of OS
products. All OS MasterMap Topography Layer orders are supplied from a master copy held in a database
by Ordnance Survey. The information the user submits through the online service to define the area and
supply options form the criteria for a database query. This query is run on the database to extract the data
the user requires. The main features of the supply system are outlined in this section. The OS MasterMap
Topography Layer themes cannot be purchased separately. Users may opt to have a theme excluded from
the supply.

### Initial and COU supply

Initial supply refers to the first order of OS MasterMap that a user makes and will contain all features for
all the layers selected for the area covered by the order. Updates, which contain the latest changes to the
features, are not automatically sent out. A user must either place an order for Change Only Updates (COU)
or download it from our online portal. COU data contains new and updated versions of features, and
information about departed features. Any feature within the area covered by the order that has not
undergone any of the change will not be supplied.

The advantages of supplying COU rather than a complete resupply is that, if applied regularly, the amount
of data that has to be processed and loaded is much smaller. Users may request updates of the latest
changes in their area of interest, at any time, using the online service. It is also possible to set up a schedule
for a supply of regular updates either through physical media, or by data downloads from our online
portal.

Updates can either be for specified areas of interest, or for GB wide. It is advisable to apply COU updates
for all the OS MasterMap layers to which you have subscribed at the same time to ensure you are getting
the correct data for your needs, please contact our customer service team.

### Updating data holdings

The OS MasterMap database is live and undergoes continuous revision. Period licence users have
unlimited access to COU and can order updates or resupplies at any time. When a user orders COU, a
‘change-since’ date is specified, and all features that have changed since midnight on the date specified
are supplied. This will normally be the date the data was last extracted from the Ordnance Survey main
holding, but could be a previous date. The last extraction date can be found on the Ordnance Survey
website along with the update history and release notes for your OS MasterMap product.

To be able to resolve changes to the data holding, the system used to translate or load the data must check
the TOID and version of every feature in the update against the current data holding, to determine whether
it should be loaded, and if so, what existing feature(s) it replaces. This makes it possible to request and
load COU with a date preceding the last data supply date without damaging the data holding. This process
can be used to correct a data holding if inconsistencies have occurred due to partially loaded or
non-sequential COU, by ordering a single COU with a change-since date that precedes the problem
updates.

More information on ordering COU is available from Ordnance Survey’s website.


#### Managed Great Britain (GB) Sets

For those users with full Great Britain coverage contracts of OS MasterMap there is a Managed GB Sets
service. The Managed GB Set is available for all vector layers of OS MasterMap.

The Managed GB Sets service is a means of processing identical orders faster, thus improving delivery
times, with benefits for Great Britain users and partners. Subscribers to this service will automatically
receive their updates (full supply or COUs) on DVD or hard drive, either quarterly or every six weeks.

With this option, users and Ordnance Survey Licensed Partners that take Great Britain coverage can
benefit from:

```
o data arriving faster and in a more predictable and timely manner
o seeing the same version of features as other organisations
o easier data management
o Feature Validation Data Set (FVDS)with all COU orders or with Full Supplies on request.
```
Further information on the Managed GB Sets service, including the release dates, are available on the
Ordnance Survey website.

### Supply options

There are several options available to users when ordering data that provide additional metadata or aid
data management.

#### Chunk files

To make the management of large areas easier, data is split into chunks, each of which covers a nominal
square area. It can also be supplied as part of a squared area to complete a predefined area as part of a
nominated file size. Two types of chunks are available: geographic and non-geographic chunks. Chunk
boundaries are imposed purely for the purpose of dividing large supply areas into pieces of a manageable
size in a geographically meaningful way. Both full supply and updates (whether COU or full resupply) are
chunked.

**Geographic chunking option**

As OS MasterMap data is seamless, GML files containing large areas could be very data intensive. In order
to provide files of a manageable size, data supplies are divided into chunks of user-specified size, each of
which is supplied in a separate GML file. Figure 11 below illustrates how geographic chunks work.


**Figure 11:** chunking

The process of Chunking has several steps. These are;

1 The user submits an area or area of interest and specifies a size for the chunks – 2 km by 2 km, 5 km by
5 km or 10 km by 10 km.

2 The online ordering system creates a grid covering the entire area based on the specified size.

3 Each square within the grid forms a chunk file.

4 Each feature that intersects that square goes into the chunk file.

5 National cover of OS MasterMap Topography Layer is supplied in 5 km by 5 km chunks.

In the case shown in figure 11, ten chunks are created. The central chunk is a complete grid square; the
others are partly bounded by the data selection polygon. The upper-left square shows the effect when the
data selection polygon crosses a grid square twice – two or more separate chunks are created.

System suppliers can advise the best chunk rates for their systems.

A consequence of chunking is that some features are supplied in more than one chunk. Systems reading
OS MasterMap data must identify and provide the option to remove these duplicated features.

If a chunk contains no information relating to a user’s selected themes then it is not supplied.

Chunks cannot be treated as persistent data management units; as it is a floating grid, the origin of the
chunking grid may differ between orders, particularly if the contract area changes or if they order a
different chunk size.

**Supply of OS MasterMap Topography Layer features in chunk files**

The packaging of a seamless dataset into chunks means that where a feature lies across, or touches the
boundary of several chunks, it is supplied in all the related chunks. This is because and individual feature
is the smallest unit within the OS MasterMap Topography Layer and it cannot be physically split into two
or more parts.

When a polygon falls across a chunk edge but its bounding line or lines lie outside it may not be included
in that chunk. It will be included in the adjacent chunk, unless the polygon is at the edge of the contract
area, in which case the line will not be supplied at all.


When a polygon changes so that it no longer falls in the same chunk, for instance, when a Topography
Layer feature used to lie partly inside a chunk and instead is now reduced in size so it is wholly within an
adjacent chunk, it is reported as a departed feature in one chunk and as a modified feature (new version)
in the adjacent chunk. This is shown in figure 12 below. For more on departed features see the section
below.

**Figure 12:** feature types and chunk boundaries

It is possible for OS MasterMap features with point geometry to be included in multiple adjacent chunk
files. This is because the query used to populate a chunk file includes all features that touch its boundary,
and this boundary is shared with adjacent chunks. Therefore, loading software must be able to identify
and remove duplicate point features across multiple files in the same way as features represented by lines
and polygon geometries.

**Non-geographic chunking option**

This supply format delivers OS MasterMap vector layer data for the Topography, ITN, and Address 2 Layers.
The files can have a fixed nominal size, as opposed to a given geographic area depending on user
preference.

Unlike in Geographic chunking, each feature in non-Geographic chunking appears in only one chunk file.
It is possible for features from various geographic locations to appear in a single file, and for adjacent
features to appear in different files. Non-geographic chunk files are designed for use as a set to load spatial
databases, but can be used in a file format as long as all chunks are translated or imported into the system
at the same time. It is not possible to tell in which file a particular feature will be found before reading the
files. With non-geographic chunks, there are no duplicate features lying across chunk edges; this speeds
up the translation process.

The features shown in red in figure 13 can end up in the same non-geographic chunk even though they are
not adjacent to each other.


**Figure 13** : non-geographic chunking

#### Feature validation dataset (FVDS)

The FVDS is a new set of files that can optionally be supplied with either a full supply, or a COU, OS MasterMap
order. The FVDS can be ordered with the Topography, Address and ITN Layers and must be supplied together
with an OS MasterMap data order as it cannot be produced on its own. FVDS allows a user to validate that
the data holding contains the correct set of features after loading. It does this by reporting on all the data it
expects to find in the holding after the application of the supply, **not just what is contained in the supply**.
It is intended to be used for periodic checks on data holdings maintained by a COU regime. It is not necessary
for users to order it with every supply, as processing it will slow you’re your translating process. It can also
be used to check that an initial supply of OS MasterMap data has been correctly loaded. FVDS can be used
with both geographic and non-geographic chunk file options. FVDS is itself, divided into files on a
non-geographic basis, using a 10 Mb nominal file size.

The FVDS is a comma-separated value (.csv) text file format that gives the TOID, version number and
version date of every feature that should exist in the current data holding, based on the polygon extent,
themes, polygon format and extraction date of the current order. Each .csv file is compressed to a .gz file
using the same compression algorithm as for OS MasterMap GML files.

#### GML summary file

An order summary file in GML format will be supplied with all OS MasterMap vector data orders, containing
the order information specified by the user. This information includes:

- the order number
- query extent polygon(s) of the order
- the order type: ‘Full supply’ or ‘COU’ (for COU orders; the change-since date)
- the themes requested
- the chunk type: ‘Non-geographic’ or ‘Geographic’
- the chunk size (in Mb for non-geographic chunks, in km² for geographic chunks)


## Chapter 5 Change management and data association

This chapter introduces two aspects of deriving additional value from the OS MasterMap Topography
Layer. The first is utilising the referencing and change-tracking attributes to identify and manage the
impact of change on a user’s data. It discusses the process of applying change and the implications for
archiving data. The second aspect, is associating user data and OS MasterMap Topography Layer using the
TOID as a common reference. This creates the potential to share data between departments and
organisations. It explains what data association is and it gives examples of how data association can bring
benefits to organisations. As both these subjects have quite complex issues surrounding them in terms of
the systems needed to support them, they are discussed in finer detail in a number of topic-specific
documents that are available from this link.

### Change management

The feature-reference and change-tracking attributes provide the opportunity for users to put in place a
change-management regime. The system that the user uses to translate and load OS MasterMap
Topography Layer should use the TOID and version information to update their local holding when a COU
is taken onboard.

The software used to manage the holding needs to handle three types of situation; features that have been
departed, features that are new and features that have changed. The software should resolve departed
features as a priority.

**Departed features**

```
o In the COU there is a list of features that have been departed since the last time the user
took data. There are some additional considerations with departed features, but in
essence, the software should find all the TOIDs and versions on the departed features
list in the COU, and locate them in the main holding and remove those features.
o In the case of superseded and departed features, these could be removed totally from
the user’s holding but it may better suit the requirements of the user to archive them
for future reference.
```
**New features**

```
o With a new feature, the software compares each TOID in the COU against the TOIDs in
the existing holding. If the TOID exists in the COU but not in the main holdings, it is
considered a new feature and the software should insert it into the holding.
```
**Changed features**

```
o If the TOID already exists in the holding, the software needs to compare the version
number in the existing holding against the version number in the COU. If the version
number in the COU is higher than in the existing holding, the software needs to take out
the existing version of the feature and replace it with the version contained in the COU.
If, on the other hand, the COU version is lower than the COU version, the feature should
be ignored.
```

#### Archiving the OS MasterMap data holding

As OS MasterMap features progress through their life cycles, it is possible to develop snapshots of the
features by holding superseded versions in a local data archive. By holding and maintaining a local data
archive, users will be able to interrogate previous views of the world straight from their local data holding.

It is important to consider carefully how to archive OS MasterMap features, and what requirements the
applications and users will have to access the older information. Archiving may be done by simply writing
older versions of the data to hard media, or by a more sophisticated system of keeping historical data live.
It is important for users to recognise their own unique requirements (be they user, statutory or regulatory
requirements) as archiving can become a significant overhead in terms of storage.

Before designing or implementing an archive of the OS MasterMap Topography Layer, it is advisable for a
user to discuss requirements with their system supplier.


## Annexe A Administrative boundary alignments

Administrative boundaries may or may not have a predefined relationship with the topographic features
in their locality. This relationship is known as a boundary mereing. This relationship is recorded within
OS MasterMap as a textual description. A list of the most common abbreviations is given below.

```
Object or mereing Abbreviation Object or mereing Abbreviation
```
```
Baulk, bank, base of, basin,
bridge, broad
```
```
B Mean high water MHW
```
```
Cam, canal, causeway, centre of,
channel, cliff, conduit, cop,
course of, covered, culvert, cut
```
```
C Mean high water springs
(Scotland only)
```
##### MHWS

```
Dam, ditch, dock, double, down,
drain
```
```
D Mean low water MLW
```
```
Double ditch or drain DD Mean low water springs
(Scotland only)
```
##### MLWS

```
Double fence DF Metres M
```
```
Defaced Def Old O
```
```
Edge of, eyot E Passage, path, pond, post P
```
```
Face of, fence, fleet, freeboard F Race, railway, ride, river, road, root
of
```
##### R

```
Feet ft Root of hedge RH
```
```
Harbour, hedge H Scar, sewer, side of, slope, sluice,
stone, stream
```
##### S

```
Inches Ins Top of T
```
```
Kerb K Track Tk
```
```
Lade, lake, lead, loch, lockspit,
lynchet
```
```
L Undefined Und
```
```
Marsh, mere, moat M Wall, weir W
```
The following are examples of combined abbreviations:

**Object or mereing Abbreviation**

Centre of bank, basin, baulk, broad and so on CB


Centre of railway, river, road and so on CR

Centre of old course of stream COCS

1.22 metres root of hedge 1.22 m RH

NOTE: special rules apply to boundary mereings and only the more common ones are listed.

Where the mereing relationship of any boundary alignment changes or where a boundary changes from
one side of a real-world object to another, the point of change is shown by a boundary half-mereing change
symbol, usually in opposing pairs. The location of the boundary half-mereing symbol is coincident with
the boundary alignment and not the feature to which it is mered.


## Annexe B Associating data to OS MasterMap features

As stated previously, one of the key reasons behind providing this level of reference attribution is to
provide a mechanism for users to link their data to other Ordnance Survey data and share it with other
organisations. Data association can be a complex undertaking, as the extent to which an organisation can
implement it depends on many factors, including the systems they have in place, the number of different
sets of data within the organisation and the manner in which they have created that data in the first place.

This chapter concentrates on the key concepts of data association and serves as an introduction to the
subject from the OS MasterMap Topography Layer point of view.

To start this topic off, here is a relatively simple example of how data association might work. In figure 14
below, there is a car park owned and operated by the local authority. Within the local authority, there are
several different datasets that contain information about that car park. The finance department holds
information on the number of spaces it has, the opening times, and the parking rates. The maintenance
department has details on when it was last resurfaced, how much it cost, and who undertook it. The
tourism department has it on a list of car parks that it makes available to visitors. Each department has a
different way of referencing the car park and none of them hold the same piece of information as any other
department. It is not easy to match the data to the real-world object, as no single piece of information
clearly and uniquely identifies the physical location of the car park. If the TOID is introduced as a unique
reference and the data is stored within a GIS and/or spatial database system, the data can be queried using
the TOID as the search criteria. Each department would be able to find all the available information on the
car park in any record that had the same TOID as an attribute.

**Figure 14:** data association

```
osgb1000000157011914
```
```
Tourism data:
```
```
Ref: Grosvenor Car Park
```
```
Open: All year
```
```
Times: 07.00–23.00
```
```
Nearest attractions: Theatre, Art gallery
```
```
Finance data:
```
```
Ref no: CPSS3456
```
```
Spaces: 200
```
```
Rate: £1.00 P/H
```
```
Average annual revenue: £500 000
```
```
Maintenance data:
```
```
Ref: SURFACEGROS
```
```
Resurface interval: Five years
```
```
Last resurface: April 2005
```
```
Contractor: J.E. Smith & Sons
```
```
Cost: £25 000
```

This demonstrates a more efficient way of storing and accessing data, as it requires only one attribute to
be known, and, given the correct database structure, may only require the TOID to be stored once. It also
means that any update to the information by one department will be immediately cascaded and be made
accessible to all other departments. In the above example, for instance, if the parking rates were raised by
finance, the tourism department would be able to access and provide the correct rate to visitors as soon
as this increase was implemented. This reduces the likelihood of out-of-date information being passed
onto users. It also reduces the need to duplicate data across departments, enabling data to be stored once
but reused many times.

To be able to associate datasets together, a user needs to understand what the relationship is between
the datasets; relationships can be categorised as spatial or a-spatial.

An example of a spatial relationship is when the user uses the individual features to construct, or derive,
their own geometry data. An example would be a planning department wishing to record the exact extent
of the area submitted in a planning application.

An example of an a-spatial relationship is where the geometry is either always going to be the same as a
single feature or, at the opposite end of the spectrum, the geometry is unimportant to the application
within which the features are used. An example of this would be the recording of buildings that have
received improvement grants for energy efficiency. It does not matter what shape the house is, just that it
has received funding for its improvements. It is important to note that relationships are principally created
polygon-to-polygon, however, it is possible that users may wish to include point and line data to
OS MasterMap polygons as well. Tabular or text-based data, that has no geometry currently, and can also
be associated by introducing the relevant TOID as one of the attributes.

In addition to the documents mentioned at the beginning of this chapter on data association, further
assistance on change management and data association is available from Ordnance Survey’s user service
team that can be contacted via the numbers given in the preface to this document.

This chapter has provided an introduction to managing change and utilising the unique reference to gain
more value from the data by associating datasets together. Both these subjects are covered in more depth
in the documents referred to in this chapter, and users are encouraged to explore these issues more fully
through these resources and to liaise with system suppliers about how they might adopt some of these
practices.


## Annexe C Metadata

ISO 19115 compliant UK GEMINI discovery level metadata is provided for the data and can be found on the
GIgateway® (www.gigateway.org.uk)

**The following is a detailed description of the metadata elements that are provided on the
GIgateway:**

**Title:** The title of the product.

**Abstract:** The abstract gives a brief description of the product.

**Currency:** The currency takes the form of date of last update for the feature.

**Lineage:** The lineage metadata takes the form of product specification name and date of product
specification.

**Spatial extent:** The spatial extent is supplied in the form of geographic identifiers (for example, England,
Scotland, and Wales) and in the form of geographic coordinates.

**Spatial reference system** : The spatial reference system for all products takes the form of a British
National Grid system, namely OSGB36®.

**Data format:** Data format takes the form of the name of the format or formats the product is supplied in.

**Frequency of updates:** Frequency of update takes the form of a stated period of time.

**Distributor contact details:** Distributor contact details include with postal address, phone number, fax
number, email address and website.

**Data originator:** Given as the company having primary responsibility for the intellectual content of the
data source; in all cases this will be Ordnance Survey.

Other metadata available includes keywords, start date of data capture, access constraints, use
constraints, level of spatial data, supply media and presentation details.


## Annexe D Descriptive Terms...........................................................................................................

Following a change to the MasterMap schema in Early 2017, we are in the process of rolling out enhanced
Descriptive Terms attribution. This is due to complete in Spring 2018.

Once complete this enhancement will add an additional 76 descriptive terms to improve the attribution of
tidal, inland water, land use and structure features. It will also improve existing terms by separating
previously amalgamated surfaces and by providing distinctive groups for previously homogenous
features. This will greatly increase the analytical capabilities of the OS MasterMap Topography data by
adding in additional descriptive groups as well as the 76 terms. An example of this is the Descriptive Term
‘footbridge’. Previously a footbridge would have had the descriptive term ‘Structure’, with the
cartographic text ‘FB’ next to it. Now it will have the descriptive term ‘Footbridge’ within the descriptive
group of 'Structure'.

The full list of additional Descriptive Terms are;

- Agricultural Land
- Aqueduct
- Bridge
- Canal
- Canal Feeder
- Capstan
- Cattle Grid
- Cave
- Chimney
- Collects
- Conduit
- Conveyor
- Crane
- Cross
- Distance Marker
- Drain
- Electricity Sub Station
- Emergency Telephone
- Flagstaff
- Footbridge
- Ford
- Fountain
- Gantry
- Gas Governor
- Groyne
- Guide Post
- Issues
    - Landfill
    - Landfill (Inactive)
    - Letter Box
    - Level Crossing
    - Lighting Gantry
    - Line Of Mooring Posts
    - Line Of Posts
    - Lock
    - Lock Gate
    - Marsh
    - Mast
    - Mill Leat
    - Mine Leat
    - Mineral Workings
    - Mineral Workings
       (Inactive)
    - Mooring Post
    - Mud
    - Normal Tidal Limit
    - Pole
    - Post
    - Public Convenience
    - Public Telephone
    - Rail Signal Gantry
    - Reeds
    - Reservoir
    - Saltmarsh
       - Sand
       - Shingle
       - Signal
       - Sinks
       - Slag Heap
       - Slag Heap (Inactive)
       - Slipway
       - Sloping Masonry
       - Sluice
       - Spoil Heap
       - Spoil Heap (Inactive)
       - Spreads
       - Spring
       - Static Water
       - Swimming Pool
       - Tank
       - Telecommunications
          Mast
       - Watercourse
       - Waterfall
       - Waterfall (Vertical)
       - Weir
       - Well
       - Wind Turbine


Protective marking

## Annexe E BAU change value descriptions

OS MasterMap COU updates contain a change history attribution

```
Value Description
```
```
New This is a new feature in the database.
```
```
Position
```
```
(Note: this is no longer used in current
revision process.)
```
```
Feature has changed geometry and/or position due to an improvement in
its absolute accuracy; that is, its relationship to the National Grid (relevant
for the positional accuracy improvement programme which is now
complete). This type of feature change is not associated with real-world
change.
```
```
Modified
```
```
The feature has been edited by an operator. Used in the following cases:
```
1. The geometry of a topographic feature is changed following real-
    world change.
2. The geometry of a non-topographic feature, for example,
    inferred link or BoundaryLine feature is changed.
3. A cartographic symbol feature is repositioned.
4. A CartographicText feature is repositioned.

```
Software
```
```
Feature has been adjusted by an automatic software process. Includes
geometric adjustment, cleaning, squaring, paralleling (text and lines) and
reversing direction of digitising.
```
```
Reclassified The descriptive attributes of a feature have changed. The featmay have changed. ure code
```
```
TextChange
```
```
Text string of text feature has changed. Applied to text features where the
text string has been:
```
1. Modified for a minor change in spelling, due to original error or
    name change, where text string is a distinctive name.
2. Modified for changes to a descriptive name due to original error
    or change of specification.
3. Modified by the addition or removal of an accent

```
Restructured
```
```
New line feature(s) have been created from parts of existing feature(s).
Applied to line features where:
```
1. The feature is split into two or more features.
2. Two or more features are joined together.

```
Attributes Applied to features that have had only attributes changed, except those covered by TextChange and Reclassified values.
```
```
Incomplete
```
```
(Note: this is no longer used in current
revision process.)
```
```
The feature is incomplete. Identifies an incomplete line feature or an area
that relates to the incomplete feature returning from a revision process.
Incomplete line features are not used to construct polygons.
```

Protective marking

## Annexe F Product and service performance report form

Ordnance Survey welcomes feedback from its users about OS MasterMap Topography Layer.

If you would like to share your thoughts with us, please print and post or email a copy of this form to one of
the address’ below.

Your name: ................................................................................................................................................................

Organisation: ............................................................................................................................................................

Address: ....................................................................................................................................................................

...................................................................................................................................................................................

...................................................................................................................................................................................

Postcode: ..................................................................................................................................................................

Phone: .......................................................................................................................................................................

Fax: ............................................................................................................................................................................

Email: ........................................................................................................................................................................

Quotation or order reference: ..................................................................................................................................

Please record your comments or feedback in the space below. We will acknowledge receipt of your form
within three (3) working days and provide you with a full reply or a status report within 21 working days.

If you are posting this form, please send it to:

OS MasterMap Topography Layer Product Manager, Ordnance Survey, Adanac Drive, SOUTHAMPTON,
SO16 0AS.

If you wish to return it by fax, please dial +44 (0)8450 990494.

Any personal information that you supply with this report form will be used by Ordnance Survey only in the
improvement of its products and services. It will not be made available to third parties.


