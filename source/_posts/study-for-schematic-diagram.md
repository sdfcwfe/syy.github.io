---
title: 读原理图
date: 2025-09-16 00:11:50
cover: /img/s007.jpg
tags:
- 嵌入式
- 理论学习
---
# 硬件


>study for schematic diagram

## GPIO
<!-- 
    ![111](/syy.github.io/img/img.jpg) 
-->
输出引脚{高点平:1;低电平:0;} ,用万用表读取高低电平;

怎么用:
1.配置引脚功能;
2.输出引脚,写值到某个寄存器里面去;

GPIO:通用输出外设 
![三极管](/syy.github.io/img/st001.jpg)
上拉电阻:对于输入引脚,可以用输入电平;

## 与门,或门等门电路
非门: B != A;
与门: B = A1 & A2;
或门: B = A1 || A2;
或非门: $ B = \neg(A1 \& A2) $
与非门: $ B = \neg(A1 \lor A2) $

## 协议类
### 串口
(1)UART 串口
2440开发板与pc机通信;一条线,输出引脚;
TXD0的引脚接电平转换芯片,再出来到RST0接到串口座,串口线接到pc;
![三极管](/syy.github.io/img/st002.jpg)

