---

status: accepted
date: 2022-10-25
deciders: @davidwesst

---
# 11ty (Eleventy) for Static Site Generation 

## Context and Problem Statement

Static site generation (SSG) provides a robust and configurable way for generating all the necessary files for a website. With a wide variety of SSG tools available, we need to select one that best fits the needs of the project as changing it later will be a large scale change.

## Decision Drivers

* Supportability, aligns well with skills from solo project developer (@davidwesst)
* Reliability, Minimal dependencies on frameworks to prevent the need to change to the "next" framework
* Flexibility, Can handle extensions and a variety of web tools 

## Considered Options

* GatsbyJS
* Hugo
* Hexo
* 11ty

## Decision Outcome

Chosen option: "11ty", because it does not depend on any particuluar framework and is focused on building itself out of foundational web technologies.

### Consequences

* Good, because built to support baseline web technologies (HTML, CSS, JS) which the solo dev is experienced with 
* Good, because not dependent on any particular presentation framework
* Bad, because it is a relatively young framework

