# Polymer Weather Components

## Charts
[Demo](http://lib.max.pub/polymer/weather/charts)

```HTML
<temperature-range data='[ {"min":10,"max":15}, ..., ...]'></temperature-range>
```

```HTML
<cloud-cover data='[0.27,0.52,0.33,0.22,0.54,0.48,0.12]'></cloud-cover>
```
```HTML
<rain-bucket data='[0.27,0.52,0.33,0.22,0.54,0.48,0.12]'></rain-bucket>
```


## Dots
[Demo](http://lib.max.pub/polymer/weather/dots)

Single Weather Dot, representing the moment, a day or an hour.
```HTML
<weather-dot data='{"temperature":27, "wind":{"speed":11,"bearing":127}, "precipitation":{"type":"rain","probability":0.54} }'></weather-dot>
```
