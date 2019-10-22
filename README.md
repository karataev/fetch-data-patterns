### Fetch data patterns in javascript with promises

1. All - start all requests at the same time  
2. Series - process request one by one  
3. Chunks - process requests in chunks

Results for 2000 requests:  
`all`: ❌ Fetch error (too many requests)  
`series`: ✅ 11 min 35 s  
`chunks`: ✅ 1 min 12 s
