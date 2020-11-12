namespace StructralTyping {
  namespace UnusedTypeParameter {
    interface Something<T> {
      name: string;
    }
    let x: Something<number>;
    let y: Something<string>;
    x = y;
    // Dont write unused type parameters
  }

  namespace StructralTyping {
    interface ScreenCoordinate {
      x: number;
      y: number;
    }
    interface PrintCoordinate {
      x: number;
      y: number;
    }
    function sendToPrinter(pt: PrintCoordinate) {
      // ...
    }
    function getCursorPos(): ScreenCoordinate {
      return { x: 0, y: 0 };
    }
    sendToPrinter(getCursorPos()); // OK
  }

  namespace PreventStructralTyping {
    interface ScreenCoordinate {
      _screenCoordBrand: any;
      x: number;
      y: number;
    }
    interface PrintCoordinate {
      _printCoordBrand: any;
      x: number;
      y: number;
    }

    function sendToPrinter(pt: PrintCoordinate) {
      // ...
    }
    function getCursorPos(): ScreenCoordinate {
      return { x: 0, y: 0 } as ScreenCoordinate;
    }
    sendToPrinter(getCursorPos()); // ERROR
  }

  namespace ClassNomial {
    class Alpha {
      x: number;
    }
    class Bravo {
      x: number;
    }
    class Charlie {
      private x: number;
    }
    class Delta {
      private x: number;
    }

    let a = new Alpha(),
      b = new Bravo(),
      c = new Charlie(),
      d = new Delta();

    // a = b // OK
    // c = d // Error
  }
}
