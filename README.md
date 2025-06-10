d3.forceSlope
=============

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

A force that quantizes the slopes of all links to a predetermined set of angles. For every link between two nodes, the plugin calculates the current slope, snaps it to the nearest angle (based on a specified number of discrete angles), and then applies a spring-like force to adjust the nodes accordingly. This ensures that all links align along one of the defined slopes, making the layout visually structured and often easier to interpret.

This force plugin is designed to be used with the [d3-force](https://github.com/d3/d3-force) simulation engine.

## Quick start

```js
import d3ForceSlope from 'd3-force-slope';
```
or using a *script* tag
```html
<script src="//cdn.jsdelivr.net/npm/d3-force-slope"></script>
```
then
```js
d3.forceSimulation()
  .nodes(<myNodes>)
  .force('slope-quantize', d3.forceSlope(<myLinks>));
```

## API reference

| Method                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |   Default    |
|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------:|
| <b>links</b>([<i>array</i>])                        | Sets or gets the list of links connecting nodes. Each link should follow the syntax: `{source: <node-id or node-object>, target: <node-id or node-object>}`.                                                                                                                                                                                                                                                                                                                               |      []      |
| <b>id</b>([<i>fn</i>])                              | Sets or gets the node object unique id accessor function, used by links to reference nodes.                                                                                                                                                                                                                                                                                                                                                                                                | `node.index` |
| <b>numAngles</b>([<i>num</i>]) | Sets or gets the number of possible angles into which the link slopes are quantized. Increase or decrease this to change the granularity of the slope snapping. | 4 |
| <b>strength</b>([<i>num</i>]) | Sets or gets the force strength. Defines how strongly nodes are nudged to follow the quantized slopes. A value of `0` disables the force; `1` applies full strength. | 1 |
| <b>considerAlpha</b>([<i>num</i>]) | Sets or gets whether the force intensity should decrease or not as alpha decays and the simulation cools down.                                                                                                              | `false` |


## ❤️ Support This Project

If you find this module useful and would like to support its development, you can [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url). Your contributions help keep open-source sustainable!
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)

[npm-img]: https://img.shields.io/npm/v/d3-force-slope
[npm-url]: https://npmjs.org/package/d3-force-slope
[build-size-img]: https://img.shields.io/bundlephobia/minzip/d3-force-slope
[build-size-url]: https://bundlephobia.com/result?p=d3-force-slope
[npm-downloads-img]: https://img.shields.io/npm/dt/d3-force-slope
[npm-downloads-url]: https://www.npmtrends.com/d3-force-slope
