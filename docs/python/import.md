---
title: Python 文件的两种用途
author: mophia
---

## Python文件的两种用途

1. 被当作程序运行
2. 被当作模块导入

```py
# foo.py

x = 1

def get():
    print(x)

def change():
    global x
    x = 0

print(__name__)

# 1. 当 foo.py 运行时，__name__的值为 "__main__"
if __name__ == '__main__':
  print('文件被执行')
  get()
  change()

# 2. 当 foo.py 被当作模块导入时，__name__的值为 "foo"
else:
  print('文件被导入')
  pass

```
