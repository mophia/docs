---
title: 元组 Tuple
author: mophia
---

# 元组 Tuple

**元组是一个内存地址不可变的列表.**

## 1. 作用

**按照索引位置存放多个值，只用于读，不能用于改.**

## 2. 定义

** `()` 内用逗号分隔开多个任意类型的元素**

```py
t = (1, 1.2, 'a')  # t = (0->值1的内存地址, 1->值1.2的内存地址，2->值1.2的内存地址)
print(t, type(t))  # (1, 1.2, 'a') <class 'tuple'>
```

**如果元组中只有一个元素，则必须加逗号.**

```py
t = (1)
print(t, type(t))  # 1 <class 'int'>

t = (1, )
print(t, type(t))  # (1,) <class 'tuple'>
```

**元组中的元素的内存地址不能修改，但是内存地址对应的值（如数组）是可以修改的**

```py
t = (1, [11, 22])  # t=(0 -> 值1的内存地址, 1 -> 值[1, 2]的内存地址)

# t[0] = 111 # 不能改
t[1][0] = 111 # 可以改，因为元素的内存地址没有变化
```

## 3. 类型转换

- 字符串转元组
  
```py
print(tuple('Hello'))  # ('H', 'e', 'l', 'l', 'o')
```

- 数组转元组

```py
print(tuple([1, 2, 3]))  # (1, 2, 3)
```

- 字典转元组
  
```py
print(tuple({'a1': 'v1', 'a2': 'v2'}))  # ('a1', 'a2')
```

## 4. 内置方法

> 优先掌握的操作：

### 4.1 按照索引取值：只能取

```py
t = ('a', 'b', 'c')
print(t[1], t[-1])
```

### 4.2 切片

```py
print(t[0:1])
print(t[::-1])
```

### 3. 长度 len()

```py
print(len(t))
```

### 4. 判断成员是否存在 in 和 not in

```py
print('a' in t)
```

### 5. 循环

```py
for val in t:
    print(val)
```

### 6. 内置方法

```py
t = (1, 2, 3, 1)
print(t.index(1))  # 0
print(t.count(1))  # 2
```