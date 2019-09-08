// js是单线程的,Web Worker引入了多线程.主线程和用户互动,worker线程用来计算.
// 使用postMessage发送消息,onmessage监听消息
// 线程间数据交互可以是各种格式的,采用的是复制机制[将要通信的数据复制一份再交给另一个线程]
// es2017提出了SharedArrayBuffer,允许worker线程和主线程共享同一块内存.