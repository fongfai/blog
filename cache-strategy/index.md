https://developer.aliyun.com/article/1301225

## 缓存过程

1.浏览器第一次加载资源，服务器返回200，浏览器将资源文件从服务器上请求下载下来，并把response header及该请求的返回时间一并缓存；
2.下一次加载资源时，先比较当前时间和上一次返回200时的时间差，如果没有超过cache-control设置的max-age，则没有过期，命中强缓存，不发请求直接从本地缓存读取该文件（如果浏览器不支持HTTP1.1，则用expires判断是否过期）；如果时间过期，则向服务器发送header带有If-None-Match和If-Modified-Since的请求
3.服务器收到请求后，优先根据Etag的值判断被请求的文件有没有做修改，Etag值一致则没有修改，命中协商缓存，返回304；如果不一致则有改动，直接返回新的资源文件带上新的Etag值并返回200；；
4.如果服务器收到的请求没有Etag值，则将If-Modified-Since和被请求文件的最后修改时间做比对，一致则命中协商缓存，返回304；不一致则返回新的last-modified和文件并返回200；；


## Last-Modified
### Less accurate than an ETag header, it is a fallback mechanism.
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified


## 
浏览器在发送请求时，并不是所有情况都会带上 If-Modified-Since 或 If-None-Match 头部字段。这些字段通常是在浏览器之前已经有过一次请求，并且服务器返回了相应的缓存控制信息（如 ETag 或 Last-Modified）时才会包含在后续请求中。

下面是一些可能的情况和解释：

### 初次请求：

当浏览器首次请求资源时，是不会发送 If-Modified-Since 或 If-None-Match 字段的。因为这是初始请求，浏览器还没有关于这个资源的缓存信息。服务器会返回资源并在响应头中包含 Etag 或 Last-Modified 字段，浏览器会将这些字段保存到缓存中。

### 首次请求后的缓存：

下一次加载相同的资源时，浏览器会检查本地缓存中是否存在相应的缓存控制信息，如果存在，并且没有超过缓存过期时间（即 max-age），则浏览器会直接使用缓存，不会发送带有 If-Modified-Since 或 If-None-Match 字段的请求。浏览器会根据缓存信息判断资源是否过期。

### 资源过期：

如果缓存的资源已经过期，浏览器会发送带有 If-Modified-Since 或 If-None-Match 字段的条件请求，用于验证资源是否有更新。

### 不同浏览器行为：

不同的浏览器在处理缓存控制信息的方式可能有所不同。某些浏览器在资源过期后即使有缓存控制信息也会发送条件请求以验证资源是否更新，而有些浏览器可能在资源过期时直接使用缓存而不发送条件请求。

总之，浏览器在发出请求时会根据其本地的缓存信息、缓存过期时间以及先前请求时服务器返回的缓存控制信息，来决定是否发送带有条件请求头的请求。请求头中缺少 If-Modified-Since 或 If-None-Match 并不代表必定会导致请求失败或是不遵循缓存策略。
*/