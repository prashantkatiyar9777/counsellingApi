# Counselling API

The api is deployed at https://counsellingapi.herokuapp.com for usage.


## Endpoints

### Rank with percentile
Returns rank according to given percentile and category

Available at `/v1/rank-with-percentile`

Note: ***Two query items required :**

1. percentile = < 100 && > 0
2. category = [gen, gen_pwd, obc, obc_pwd, st, sc, ews, ews_pwd]

* Both are required

**Example**

`/v1/rank-with-percentile?percentile=95.00006&category=gen`

`/v1/rank-with-percentile?percentile=99.8855&category=ews_pwd`

`/v1/rank-with-percentile?percentile=98.6665&category=sc`

### Rank with percentile
Returns institutes according to given rank and category

Available at `/v1/institute-with-rank`

Note: ***Two query items required :**

1. rank
2. category = *all that were available in data feeding*

- Both are required

**Example**

`/v1/institute-with-rank?rank=65416&category=gen`

`/v1/institute-with-rank?rank=13213&category=gen_pwd`

`/v1/institute-with-rank?rank=2355&category=ews`

### JOSAA Counselling Data

Returns opening and closing ranks of various rounds

Available at `/v1/josaa-data`

Note: ***Four query items required :**
1. institute ***shortID only** given in institute data endpoint*
2. branch *branched given in institute data endpoint*
3. category = *all that were available in data feeding*
4. year = *year for which data us required*

* All are required

**Example**

`/v1/josaa-data?institute=iiitr&branch=Computer%20Science%20and%20Engineering&category=gen&year=2019`

`/v1/josaa-data?institute=iiita&branch=Computer%20Science%20and%20Engineering&category=obc&year=2018`

`/v1/josaa-data?institute=iiitmanipur&branch=Electonics%20and%20Communication%20Engineering&category=gen&year=2019`

### Ranks and Placement of Institutes

Available at `/v1/placement-data`

- Just gives JSON data

### Ranks and Placement of Institutes

Available at `/v1/institute-data`

- Just gives JSON data