// <reference path="./a.ts"/>


// https://juejin.cn/post/6999985372440559624


// 快速理解 TypeScript 的逆变、协变、双向协变、不变 https://zhuanlan.zhihu.com/p/500762226

// 类型的全局声明和局部声明


let s: String = 'ab'

let c = s.helloword()

let d: Jye.Info = {name: ''}

// console.log(A)

class A{
  private name: string = 'joy'

  protected age: number = 12

  public salary = 100000

}

A.name


class B extends A {
  a(){
    this.age = 13
  }
}

const cc = new A();

cc.salary



interface I {
  a: number
}

interface P {
  a: number
}


class B implements I {

}  



Object.defineProperty(cc, 'name', {
  get(): string {
    return this.name
  },
  set(value: string){
    this.name = value
  }
})

const obj = {}

new Proxy(obj, {
  get(): string {

  },
  set(value: string): void {

  }
})


type R<T> = {
  [P in keyof T]-?: T[P]
}

type TestRequied = {
  a?: string
}

// type c = R<TestRequied>

type RecordTest<K extends keyof any, T> = {
  [P in K]: T
}

type r = RecordTest<string, TestRequied>


type Person = {
  name: string;
  age: string;
  location: string;
};

// type Extract<T, U> = T extends U ? T : never;
// type Exclude<T, U> = T extends U ? never : T;


interface Worker_ {
  name: string
  age: number
  email: string
  salary: number
}

interface Student_ {
  name: string
  age: number
  email: string
  grade: number
}


// type E = Extract<keyof Worker_, keyof Student_>
type E = Extract<keyof Worker_, keyof Student_>



/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
* From T, pick a set of properties whose keys are in the union K
*/
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
* Construct a type with a set of properties K of type T
*/
type Record<K extends keyof any, T> = {
  [P in K]: T;
}

type PersonWithoutLocation = Omit<Person, 'location'>;

// PersonWithoutLocation equal to QuantumPerson
type QuantumPerson = {
  name: string;
  age: string;
};


type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
