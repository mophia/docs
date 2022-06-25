---
title: 装饰器 Decorator
author: mophia
---

# 装饰器

## 1. 什么是装饰器？

    器指的是工具，可以定义成函数
    装饰指的是为其他食物添加额外的东西点缀

    合到一起的解释：
        装饰器指的是定义一个函数，该函数是用来为其他函数增加功能的。

## 2. 为何要用装饰器

    开放封闭原则
        开放：对拓展功能是开放的
        封闭：对修改源代码是封闭的

    装饰器就是在不修改被装饰器对象源代码，以及调用方式的前提下，为被装饰对象添加新功能

## 无参装饰器

```py
from functools import wraps

def outer(func):
    @wraps(func)  # 将原函数的属性赋值给 wrapper，可加可不加
    def wrapper(*args, **kwargs):
        # 添加新功能
        res = func(*args, **kwargs)  # 调用原函数
        # 添加新功能
        return res
    return wrapper
```

### 无参装饰器的案例

```py
# 需求：在不修改 index 函数的源代码以及调用方式的前提下，为其添加统计运行时间的功能

import time

def timmer(func):
    # func = index
    def wrapper(*args, **kwargs):
        start = time.time()
        func(*args, **kwargs)
        stop = time.time()
        print(stop - start)
    return wrapper

@timmer
def index(x, y):
    time.sleep(3)
    print('index %s %s' % (x, y))

# f = outter(index)  # f= wrapper 函数的内存地址， index 是index 函数的内存地址
# f(x=1, y=2)
# =>

# index = outter(index)
index(x=1, y=2)
```

## 有参装饰器

```py
def decorator(x, y, z):
  def outer(func):
      # @wraps(func)  # 将原函数的属性赋值给 wrapper，可加可不加
      def wrapper(*args, **kwargs):
          # 添加新功能
          res = func(*args, **kwargs)  # 调用原函数
          # 添加新功能
          return res
      return wrapper
  return outer

@decorator(1, y=2, z=3)
def index():
  pass
```

### 有参装饰器的案例

```py
def auth(db_type):
    def deco(func):
        def wrapper(*args, **kwargs):
            name = input('your name >>>:').strip()
            pwd = input('your password>>>:').strip()
            # 从文件中取账号和密码
            if db_type == "file":
                if name == "mophia" and pwd == '123':
                    print('login successful!')
                    res = func(*args, **kwargs)
                else:
                    print('user or password error')
                return res
            elif  db_type == "MySQL":
                print("MySQL")
            elif  db_type == "ldap":
                print("ldap")
            else:
                print("不支持该类型")

        return wrapper
    return deco

@auth(db_type="file")
def index(x, y):
    print('index->>%s:%s' % (x, y))
```

### 原理

```py
deco = auth(db_type="file")
@deco  # index = deco(index) = wrapper
def index(x, y):
    print('index->>%s:%s' % (x, y))
```
