jQuery Plugin Boilerplate
================

just a boilerplate for quick starting jquery plugin development.

## Features
* Support for Private Properties & Methods
* Support for public Properties & Methods
* Only one entry in jQuery namespace
* Plugin data stored in data object (in memory)
* Flexible
* Legible

## Initialization

To initialize plugin just call following:
```
$('#myElement').pluginName();
```

To pass custom configurations use following:
```
$('#myElement').pluginName({
  "strProperty": "value",
  "boolProperty: true
});
```

## Public API Access

This structure allows easy access to public methods and properties. To access properties like `settings` object use:
```
 var settings = $('#myElement').pluginName('settings');
```

For methods use following structures:
```
 $('#myElement').pluginName('publicMethod');
```
To pass parameters
```
 $('#myElement').pluginName('publicMethod', arg1, arg2, ...);
```
