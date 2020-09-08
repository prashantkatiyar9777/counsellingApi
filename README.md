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

* Both are required

**Example**

`/v1/institute-with-rank?rank=65416&category=gen`

`/v1/institute-with-rank?rank=13213&category=gen_pwd`

`/v1/institute-with-rank?rank=2355&category=ews`