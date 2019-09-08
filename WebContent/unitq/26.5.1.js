// 大量的Web API使用了ArrayBuffer和他的视图
// 传统的AJAX只能返回文本数据,即ResponseType属性默认Text
// 第二版XMLHttpRequest[XHR2]允许返回二进制数据[明确是二进制可以设置返回类型为ArrayBuffer,不明确设置blob]
