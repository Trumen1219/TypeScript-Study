# TypeScript基础!

** 一.typeScript 是什么**  

	typescript是JavaScript的超集（js有的TS都有）；ts在js的基础上增加了类型支持
	
* 二.typeScript 的优势

	* ts是**静态类型**的编程语言，js是**动态类型**的编程语言
	
	*静态类型：编译期做类型检查   动态类型：执行期做类型检查*
	* js在代码**执行**的时候的才能发现错误，而ts在**编译**的时候就可以发现
	* js的绝大部分错误都是**类型错误**，用TS可以减少找BUG和改BUG的时间
	* TS在程序任何地方都会有**代码提示**
	* TS提高了代码的**可维护性**
	* TS支持最新的ECMAScript语法
	* TS类型推断机制，不需要在代码每个地方都标注类型
* 三.typeScript 安装
	安装：`npm i -g typescript`
	版本检查：`tsc -v`
	运行--->生成js文件
	*typescript包：将TS转化为JS，因为node/浏览器都是只识别JS的*



	TypeScript中的基本类型
	TypeScript中的基本类型：
		• 类型声明
			○ 类型声明是TS非常重要的一个特点；
			○ 通过类型声明可以指定TS中变量（参数、形参）的类型；
			○ 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错；
			○ 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值；
			○ 语法：
				§ let变量: 类型;let变量: 类型=值;functionfn(参数: 类型,参数: 类型): 类型{...
}
		• 自动类型判断
			○ TS拥有自动的类型判断机制
			○ 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
			○ 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明
		• 类型：
		类型	例子	描述
		number	1, -33, 2.5	任意数字
		string	'hi', "hi", hi	任意字符串
		boolean	true、false	布尔值true或false
		字面量	其本身	限制变量的值就是该字面量的值
		any	*	任意类型
		unknown	*	类型安全的any
		void	空值（undefined）	没有值（或undefined）
		never	没有值	不能是任何值
		object	{name:'孙悟空'}	任意的JS对象
		array	[1,2,3]	任意JS数组
		tuple	[4,5]	元素，TS新增类型，固定长度数组
		enum	enum{A, B}	枚举，TS中新增类型
		• number
			○ letdecimal: number=6;lethex: number=0xf00d;letbinary: number=0b1010;letoctal: number=0o744;letbig: bigint=100n;
		• boolean
			○ letisDone: boolean=false;
		• string
			○ letcolor: string="blue";color='red';letfullName: string=`Bob Bobbington`;letage: number=37;letsentence: string=`Hello, my name is ${fullName}.I'll be ${age+1}years old next month.`;
		• 字面量
			○ 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围
			○ letcolor: 'red'|'blue'|'black';letnum: 1|2|3|4|5;
		• any
			○ 类型是any的变量可以赋值给任意变量
			○ 
			
			○ letd: any=4;d='hello';d=true;
		• unknown
			○ 
			可以通过
			（1）
			
			（2）
			
			○ let notSure: unknown=4;notSure='hello';
		• void
			○ 
			函数内部可return null undefined
			○ letunusable: void=undefined;
		• never
			○ 
			○ functionerror(message: string): never{thrownewError(message);}
		• object（没啥用）
			○ 
			
			○ 
			○ letobj: object={};
		• array
			○ 
			○ letlist: number[]=[1,2,3];letlist: Array<number>=[1,2,3];
		• tuple
			○ 
			○ letx: [string,number];x=["hello",10];
		• enum
			○ 
			○ enumColor{Red,Green,Blue,}letc: Color=Color.Green;enumColor{Red=1,Green,Blue,}letc: Color=Color.Green;enumColor{Red=1,Green=2,Blue=4,}letc: Color=Color.Green;
			
		• & ｜ 对象同时有xx属性
		
			
		• 
	
	
		• 
		根据返回值的类型判断类型
		• 类型断言
			○ 有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：
				 第一种
					let someValue: unknown = "this is a string";
					let strLength: number = (someValue as string).length;
					
				 第二种
					let someValue: unknown = "this is a string";
					let strLength: number = (<string>someValue).length;
![image](https://user-images.githubusercontent.com/117837871/215303480-d2287052-7575-44ac-b7cc-99bd4b6f0dba.png)
