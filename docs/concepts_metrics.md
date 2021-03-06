---
title: Metrics
---
When querying the `STATS` API, you will notice the resolution of the data changes over time.  This is due to the downsampling that occurs.  Downsampling is performed to reduce the amount of data persisted to disk, ultimately purging the data from the system after a period of time.

The system samples data every 5 seconds.  The sampling interval is configurable under `authority > router > system > metrics > sample-period <value>`.
:::note
It is not recommended to change the sample-period.  Increasing the value reduces the resolution of the information collected.  Decreasing the value will create a greater computational load on the system. The software has been tuned to operate optimally at a sampling interval of 5 seconds.
:::
The full resolution of 5 second sampled data is kept for 1 hour.<br/>
Every five minutes, the sampled data is aggregated.  The 5 minute values are kept for a day.<br/>
Every hour the 5 minute values are aggregated.  The 1 hour values are kept for 6 months.<br/>
After 6 months, the data is purged from disk.<br/>