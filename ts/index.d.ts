// ./types/test.d.ts
declare global {
  export interface String {
    helloword(): string;
  }
    // // ./types/test.d.ts
  namespace Jye {
    export interface Info {
      name: string;
    }

    function getAge(): number;
  }
}


export {}


