# TypeScript基础!

 一.TypeScript 是什么  
 

	typescript是JavaScript的超集（js有的TS都有）；ts在js的基础上增加了类型支持
	
	
二.TypeScript 的优势  


* ts是静态类型的编程语言，js是动态类型的编程语言    
*静态类型：编译期做类型检查   动态类型：执行期做类型检查*
	
* js在代码**执行**的时候的才能发现错误，而ts在**编译**的时候就可以发现
		
* js的绝大部分错误都是**类型错误**，用TS可以减少找BUG和改BUG的时间
	
* TS在程序任何地方都会有**代码提示**
	
* TS提高了代码的**可维护性**
	
* TS支持最新的ECMAScript语法
	
* TS类型推断机制，不需要在代码每个地方都标注类型

	
 三.TypeScript 安装
 
 
	安装：`npm i -g typescript`
	
	版本检查：`tsc -v`
	
	运行--->生成js文件
	tsc xxx.ts
	
*typescript包：将TS转化为JS，因为node/浏览器都是只识别JS的*


四.TypeScript中的基本类型


TypeScript中的基本类型：
* 类型声明
		
	* 类型声明是TS非常重要的一个特点；
			
	* 通过类型声明可以指定TS中变量（参数、形参）的类型；
			
	* 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错；
			
	* 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值；

	* 语法：

```typescript
let变量: 类型;
let变量: 类型=值;
functionfn(参数: 类型,参数: 类型): 类型{
...
}
```
* 自动类型判断
		
	* TS拥有自动的类型判断机制
			
	* 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
			
	* 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明


			
* 类型：
		
类型   | 例子 | 描述
---- | ----- | ------
number | 1, -33, 2.5 | 任意数字
string | 'hi', "hi", hi | 任意字符串
boolean | true、false | 布尔值true或false
字面量 | 其本身 | 限制变量的值就是该字面量的值
any | | 任意类型
unknown |  | 类型安全的any
void | 空值（undefined | 没有值（或undefined）
never | 没有值 | 不能是任何值
object | {name:'孙悟空'} | 任意的JS对象
array | [1,2,3] | 任意JS数组
tuple | [4,5] | 元素，TS新增类型，固定长度数组
enum | enum{A, B} | 枚举，TS中新增类型

* number
```typeScript
let decimal: number = 6;  
let hex: number = 0xf00d;  
let big: bigint = 100n;
```

*boolean
```typeScript
letisDone: boolean=false;
```

* string
```typeScript
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${fullName};
```
* 字面量
	* 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围
	* ```typeScript  letcolor: 'red'|'blue'|'black';letnum: 1|2|3|4|5;```

* any
	类型是any的变量可以赋值给任意变量
```typeScript
let d: any=4;d='hello';d=true;
```
* unknown
	let notSure: unknown=4;notSure='hello';
	* 实际上就是一个类型安全的any，unknown类型的变量，不能直接赋值给其他变量
	* 可以通过
	（1）
		```typeScript
		if(typeof e === 'string'){
			s = e;
		}
	（2）类型断言（用来告诉解析器变量的实际类型）
			
* void
	
	用来表示空，以函数为例就表示没有返回值的函数，函数内部可return null / undefined
```typeScript
let unusable: void=undefined;
```
* never
	表示永远不会返回结果
```typeScript
	function error(message: string): never {
  throw new Error(message);
}
```

* object
	object表示一个js对象

```typeScript
let obj: object={};
```

	{}用来指定对象中可以包含哪些属性
	
	语法：{属性名：属性值，属性名：属性值} 在属性名后面加上？表示属性是可选的
	
```typeScript
let b {name: string, age?:number};
b = {name:'张三',age:18};
```

	[propName:string]:any 表示任意类型的属性

```typeScript
let c : {name:string,[propName:string]:any};
c = {name:'李四',age: 18, gender: '女'}
```

* 函数结构的类型声明

	语法：（形参：类型，形参：类型...）=>返回值
	
```typeScript
let d :(a:number ,b:number)=>number;
```

* array
	数组的类型声明：
	
	类型[]
	
	Array<类型>
	
```typeScript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```
* tuple
	元组，元组就是固定长度的数组
	
	语法：[类型，类型，类型]

```typeScript
let x: [string, number];
x = ["hello", 10]; 
```
* enum

```typeScript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
```
* 对象同时有xx属性【&表示同时】

```typeScript
let j :{name:string} & {age:nember} 
```

* 类型的别名

```typeScript
type myType = 1 | 2 | 3 | 4 | 5;
let k: 	myType
k = 2;
```

* 类型断言

	有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

	* 第一种

```typeScript
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```
	* 第二种

```typeScript
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
```
