# Polymer Weather Components

## Charts
[Demo](http://lib.max.pub/polymer/weather/charts)

See daily min- & max-temperature.
```HTML
<temp-range data='[{"min":10,"max":15},{"min":10,"max":15},{"min":10,"max":15}]'></temp-range>
```

```HTML
<cloud-cover data='[27,52,33,22,54,48,12]'></cloud-cover>
```


## Dots
[Demo](http://lib.max.pub/polymer/weather/dots)

Single Weather Dot, representing the moment or the current hour.
```HTML
<weather-dot data='{"temperature":27, "wind":{"speed":11,"bearing":127}, "precipitation":{"type":"rain","probability":0.54} }'></weather-dot>
```
