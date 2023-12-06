# ULID parser

Convert ULID canonical to raw and vice versa

## Installation

```
npm i ulid-parser -g
```

## Examples

Lib can parse canonical ULID to HEX and vice versa. It also supports parsing of multiple values

#### Canonical to HEX:

- Single value

```
ulid-parser 01ARZ3NDEKTSV4RRFFQ69G5FAV
```

- Multiple values value

```
ulid-parser 01ARZ3NDEKTSV4RRFFQ69G5FAV 01ARZ3NDEKTSV4RRFFQ69G5FAA
```


#### HEX to Canonical:

- Single value

```
ulid-parser 01563E3AB5D3D6764C61EFB99302BD5B
```

- Multiple values value

```
ulid-parser 01563E3AB5D3D6764C61EFB99302BD5B 01563E3AB5D3D6764C61EFB99302BD4A
```
