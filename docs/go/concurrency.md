---
title: Go 并发
author: mophia
---

# 并发 Go concurrency

### 并发和并行的区别

并发是指同一个时间段中执行多个任务，而并行是指有一个时刻执行多个任务。

Go 在语言层面天生支持并发。Go 的并发通过 goroutine 实现。goroutine 类似于线程。

## goroutine

最简单的 goroutine:

```go
package main

import (
 "fmt"
 "time"
)

func hello() {
 fmt.Println("Hello, mophia!")
}

func main() { // 开启一个主 goroutine 去执行 main 函数
 go hello() // 开启了一个 goroutine 去执行 hello 这个函数
 fmt.Println("Hello, main!")
 time.Sleep(time.Second) // 等待一秒
 // 这句需要写 如果只写一个go语句, 后面没有可以运行程序的话就会出现一个尴尬的问题,
 // 主进程直接关闭, 对应goroutine也直接关闭,导致函数没有运行
}
```

Go 的操作系统线程和 goroutine 的关系：

- 一个操作系统线程对应用户态多个 goroutine
- go程序可以同时使用多个操作系统线程
- goroutine 和 系统线程是多对多的关系，即 m 对 n

## Channel

Go 的并发模型是CSP，通过通信共享内存.

Goroutine 是 Go 程序并发的执行体，channel 是它们之间的连接。

Channel 是让一个 goroutine 发送特定值到另一个 goroutine 的通信机制。

通道有发送（send）、接收（receive）和关闭（close）三种操作。

发送和接收都使用 <- 符号。

现在我们先使用以下语句定义一个通道：

```go
ch := make(chan int)
```

### 发送值

将一个值发送到通道中。

```go
ch <- 10 // 把10发送到ch中
```

### 接收值

从一个通道中接收值。

```go
x := <- ch // 从 ch 中接收值并赋值给变量x
<- ch      // 从 ch 中接收值，忽略结果
```

### 关闭

通过调用内置的 close 函数来关闭通道

```go
close(ch)
```

### Channel 实例

```go
package main

import "fmt"

var ch chan int // 需要指定通道中元素的类型

func main() {
	// channel 初始化
	// slice map channel 都使用 make 函数初始化才能使用
	ch = make(chan int) // 不带缓冲区的通道初始化
	// ch = make(chan int, 16) // 带缓冲区的通道初始化
	go func() {
		x := <-ch
		fmt.Println("Channel received", x)
	}()
	ch <- 10
	fmt.Println("10 sent to channel successfully")
}
```

### sync.WaitGroup

WaitGroup 对象内部有一个计数器，最初从0开始，它有三个方法：Add(), Done(), Wait() 用来控制计数器的数量。
Add(n) 把计数器设置为n ，Done() 每次把计数器-1 ，wait() 会阻塞代码的运行，直到计数器地值减为0。

```go
var wg sync.WaitGroup

wg.Add(1) // 添加计数器 +n

wg.Done() // 计数器 -1

wg.Wait() // 等待，直到计数器 =0
```
